const plopConfig = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    plop.setGenerator('model', {
      description: 'Create a model prisma',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your app name?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: '../apps/{{name}}/prisma/schema.prisma',
          templateFile: 'templates/schemaPrisma.tsx.hbs',
        },
        {
          type: 'add',
          path: '../apps/{{name}}/src/main.ts',
          templateFile: 'templates/main.tsx.hbs',
        },
        {
          type: 'add',
          path: '../apps/{{name}}/src/{{name}}.controller.ts',
          templateFile: 'templates/controller.tsx.hbs',
        },
        {
          type: 'add',
          path: '../apps/{{name}}/src/{{name}}.service.ts',
          templateFile: 'templates/service.tsx.hbs',
        },
        {
          type: 'add',
          path: '../apps/{{name}}/src/{{name}}.module.ts',
          templateFile: 'templates/module.tsx.hbs',
        },
        {
          type: 'add',
          path: '../apps/{{name}}/.env',
          templateFile: 'templates/env.tsx.hbs',
        },
        {
          type: 'add',
          path: '../apps/{{name}}/.gitignore',
          templateFile: 'templates/.gitignore.tsx.hbs',
        },
        {
          type: 'add',
          path: '../apps/{{name}}/tsconfig.app.json',
          templateFile: 'templates/tsconfig.tsx.hbs',
        },
      ],
    });
  };
  
  export default plopConfig;
  