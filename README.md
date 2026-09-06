# ivan.gal

Sitio persoal estático feito con [Astro](https://docs.astro.build) e despregado en
[Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/).

## Comandos

Todos os comandos se executan desde a raíz do proxecto:

| Comando               | Acción                                          |
| :-------------------- | :---------------------------------------------- |
| `pnpm install`        | Instala as dependencias                         |
| `pnpm dev`            | Servidor de desenvolvemento en `localhost:4321` |
| `pnpm dev:host`       | Igual, exposto na rede local                    |
| `pnpm build`          | Compila o sitio de produción en `./dist/`       |
| `pnpm preview`        | Previsualiza a build co servidor de Astro       |
| `pnpm preview:worker` | Previsualiza a build no runtime real de Workers |
| `pnpm lint`           | `astro check` (tipos e diagnósticos)            |
| `pnpm run deploy`     | Compila e desprega en Cloudflare Workers        |

> `pnpm deploy` é un comando reservado de pnpm: usa sempre `pnpm run deploy`.

## Despregue

A primeira vez cómpre autenticarse:

```bash
pnpm dlx wrangler login
```

Despois, `pnpm run deploy`. O dominio propio configúrase no panel de Cloudflare:
Workers & Pages → `ivan-gal` → Settings → Domains & Routes.
