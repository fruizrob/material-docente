# Material docente público

Repositorio público y sitio de descargas de material docente de Felipe Ruiz.

## Alcance

Este repositorio contiene únicamente:

- páginas estáticas del sitio;
- metadatos públicos de materiales publicados;
- PDFs aprobados explícitamente;
- versiones estudiantiles de Algoritmos, sin pautas ni criterios internos de evaluación;
- pautas históricas autorizadas de Fundamentos, con respuestas en rojo y sin criterios internos de evaluación.

No contiene fuentes LaTeX, rúbricas o criterios privados, borradores, presentaciones,
evaluaciones activas, datos personales ni rutas internas del repositorio de autoría.

## Estado

El catálogo contiene material de Algoritmos 2026-1 y Fundamentos de la Computación 2026-1. Ningún
material adicional se publica por existir en el repositorio privado.

## Publicar un material

1. Aprobar el artefacto concreto en el repositorio privado.
2. Copiar solo la versión pública aprobada a su ruta estable.
3. Añadir sus metadatos públicos a `data/materials.json` con estado `published`.
4. Confirmar ausencia de criterios internos, datos personales y metadatos privados.
5. Probar el enlace localmente.
6. Crear un commit pequeño que incluya el archivo y su entrada de catálogo.

Formato mínimo de una entrada:

```json
{
  "id": "algoritmos-2025-2-set-problemas-04-cadenas-grafos",
  "title": "Set de problemas 04: cadenas y grafos",
  "course": "ECIN-608",
  "course_slug": "algoritmos",
  "term": "2025-2",
  "category": "guias",
  "type": "set-problemas",
  "topics": ["cadenas", "grafos"],
  "format": "pdf",
  "path": "algoritmos/2025-2/guias/algoritmos-2025-2-set-problemas-04-cadenas-grafos.pdf",
  "publication_status": "published"
}
```

## Activar GitHub Pages

Después de crear el repositorio remoto y subir `main`:

1. Abrir `Settings` → `Pages`.
2. En `Build and deployment`, elegir `Deploy from a branch`.
3. Seleccionar `main` y `/(root)`.
4. Guardar.

No se necesita GitHub Actions ni un proceso de compilación. `.nojekyll` indica que los archivos se
sirven como sitio estático.

## Dominio propio

No crear `CNAME` hasta comprar y elegir el dominio. Después se configura el dominio en GitHub Pages
y en el proveedor DNS; el archivo `CNAME` debe contener solamente el dominio definitivo.

## Licencia

No se ha elegido una licencia de reutilización. No añadir una por inferencia.

## Referencias

- [Configurar el origen de publicación](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Administrar un dominio personalizado](https://docs.github.com/es/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
