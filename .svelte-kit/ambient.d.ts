
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const COLORTERM: string;
	export const TERM: string;
	export const LSCOLORS: string;
	export const PATH: string;
	export const HOME: string;
	export const SHELL: string;
	export const HISTFILE: string;
	export const TMPDIR: string;
	export const CHROME_BIN: string;
	export const PWD: string;
	export const JSH_DOTENV: string;
	export const NEXT_TELEMETRY_DISABLED: string;
	export const ASTRO_TELEMETRY_DISABLED: string;
	export const __NEXT_DISABLE_MEMORY_WATCHER: string;
	export const NG_CLI_ANALYTICS: string;
	export const EDITOR: string;
	export const npm_package_name: string;
	export const npm_package_version: string;
	export const npm_package_private: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_scripts_build: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_scripts_test: string;
	export const npm_package_scripts_check: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_scripts_format: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies__types_eslint: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies_postcss_load_config: string;
	export const npm_package_devDependencies_postcss_nesting: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const npm_package_devDependencies_eslint_plugin_svelte3: string;
	export const npm_package_devDependencies_node_sass: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_package_type: string;
	export const npm_package_dependencies__fontsource_fira_mono: string;
	export const npm_package_dependencies__lukeed_uuid: string;
	export const npm_package_dependencies_cookie: string;
	export const npm_config_registry: string;
	export const npm_config_update_notifier: string;
	export const npm_config_ignore_dep_scripts: string;
	export const npm_config_prefer_symlinked_executables: string;
	export const npm_config_verify_store_integrity: string;
	export const npm_config_global_pnpmfile: string;
	export const npm_config_user_agent: string;
	export const npm_config_frozen_lockfile: string;
	export const npm_lifecycle_event: string;
	export const NODE: string;
	export const npm_node_execpath: string;
	export const npm_execpath: string;
	export const INIT_CWD: string;
	export const npm_config_node_gyp: string;
	export const NODE_PATH: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_lifecycle_script: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		COLORTERM: string;
		TERM: string;
		LSCOLORS: string;
		PATH: string;
		HOME: string;
		SHELL: string;
		HISTFILE: string;
		TMPDIR: string;
		CHROME_BIN: string;
		PWD: string;
		JSH_DOTENV: string;
		NEXT_TELEMETRY_DISABLED: string;
		ASTRO_TELEMETRY_DISABLED: string;
		__NEXT_DISABLE_MEMORY_WATCHER: string;
		NG_CLI_ANALYTICS: string;
		EDITOR: string;
		npm_package_name: string;
		npm_package_version: string;
		npm_package_private: string;
		npm_package_scripts_dev: string;
		npm_package_scripts_build: string;
		npm_package_scripts_preview: string;
		npm_package_scripts_test: string;
		npm_package_scripts_check: string;
		npm_package_scripts_check_watch: string;
		npm_package_scripts_lint: string;
		npm_package_scripts_format: string;
		npm_package_devDependencies__playwright_test: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies__types_eslint: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_devDependencies_eslint: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies_postcss_load_config: string;
		npm_package_devDependencies_postcss_nesting: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_vite: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		npm_package_devDependencies_eslint_plugin_svelte3: string;
		npm_package_devDependencies_node_sass: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_package_type: string;
		npm_package_dependencies__fontsource_fira_mono: string;
		npm_package_dependencies__lukeed_uuid: string;
		npm_package_dependencies_cookie: string;
		npm_config_registry: string;
		npm_config_update_notifier: string;
		npm_config_ignore_dep_scripts: string;
		npm_config_prefer_symlinked_executables: string;
		npm_config_verify_store_integrity: string;
		npm_config_global_pnpmfile: string;
		npm_config_user_agent: string;
		npm_config_frozen_lockfile: string;
		npm_lifecycle_event: string;
		NODE: string;
		npm_node_execpath: string;
		npm_execpath: string;
		INIT_CWD: string;
		npm_config_node_gyp: string;
		NODE_PATH: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_lifecycle_script: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
