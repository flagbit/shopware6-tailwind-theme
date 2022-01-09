<?php

declare(strict_types=1);

namespace Tailwind\Storefront\Theme;

use Shopware\Storefront\Theme\ThemeCompilerInterface;
use Tailwind\Helper\Constant;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Core\Framework\Plugin\PluginEntity;
use Shopware\Storefront\Theme\StorefrontPluginConfiguration\StorefrontPluginConfiguration;
use Shopware\Storefront\Theme\StorefrontPluginConfiguration\StorefrontPluginConfigurationCollection;
use Symfony\Component\Console\Input\ArgvInput;
use Symfony\Component\Console\Output\ConsoleOutput;
use Symfony\Component\Process\Process;
use Symfony\Component\Console\Style\SymfonyStyle;

class ThemeCompiler implements ThemeCompilerInterface
{
    private \Shopware\Storefront\Theme\ThemeCompiler $parent;

    private EntityRepository $pluginRepository;

    private EntityRepository $themeRepository;

    private SymfonyStyle $io;

    private string $pluginPath;

    private string $rootDir;

    public function __construct(
        \Shopware\Storefront\Theme\ThemeCompiler $parent,
        EntityRepository $pluginRepository,
        EntityRepository $themeRepository,
        string $rootDir
    ) {
        $this->parent = $parent;

        $input = new ArgvInput();
        $output = new ConsoleOutput();

        $this->io = new SymfonyStyle($input, $output);

        $this->pluginRepository = $pluginRepository;

        $this->rootDir = $rootDir;
        $this->themeRepository = $themeRepository;
    }

    public function compileTheme(
        string $salesChannelId,
        string $themeId,
        StorefrontPluginConfiguration $themeConfig,
        StorefrontPluginConfigurationCollection $configurationCollection,
        bool $withAssets = true
    ): void {
        $this->parent->compileTheme($salesChannelId, $themeId, $themeConfig, $configurationCollection, $withAssets);

        $tailwindThemeId = $this->getTailwindThemeId();

        /* Only compile tailwind assets if the 'Tailwind' theme is compiled */
        if ($themeId !== $tailwindThemeId)
        {
            return;
        }

        $this->setPluginPath();

        $this->installNodeModules();
        $this->buildAssets();
        $this->copyAssets();
    }

    private function getTailwindThemeId() :string
    {
        return $this->themeRepository->searchIds((new Criteria())->addFilter(new EqualsFilter('name', Constant::TECHNICAL_NAME)), Context::createDefaultContext())->firstId();
    }

    /**
     * 'theme:compile' copies the assets however, the assets are already copied from the parent function.
     * Therefore, we manually copy the newly compiled to the public directory
     */
    private function copyAssets(): void
    {
        $this->runCommand(['npm', 'run', 'copy:assets'], 'Copy Assets');
    }

    private function runCommand(array $command, string $processName): void
    {
        $this->io->note($processName);
        $start = microtime(true);

        $process = new Process($command, $this->pluginPath);
        $process->enableOutput();
        $process->run();

        $this->io->note(sprintf('"%s" process took %f seconds', $processName, microtime(true) - $start));
    }

    private function buildAssets(): void
    {
        $this->runCommand(['npm', 'run', 'build:prod'], 'Building assets');
    }

    private function installNodeModules(): void
    {
        $this->runCommand(['npm', 'install'], 'Installing node modules');
    }

    /**
     * We need the current plugin path to run plugin related npm commands
     */
    private function setPluginPath(): void
    {
        /** @var PluginEntity $plugin */
        $plugin = $this->pluginRepository->search((new Criteria())->addFilter(new EqualsFilter('name', Constant::TECHNICAL_NAME)), Context::createDefaultContext())->first();

        $this->pluginPath = $this->rootDir . \DIRECTORY_SEPARATOR . $plugin->getPath();
    }
}
