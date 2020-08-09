// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  EndPoints: {
    Movimentos: 'HTTP://LOCALHOST:4444',
    Agrupamentos: 'HTTP://LOCALHOST:4444',
    Carteiras: 'HTTP://LOCALHOST:4444',
    Movimentacoes: 'HTTP://LOCALHOST:4444'
  },
  RequestOptions: {
    TimeOut: 3000,
    Retry: 2
  },
  LoginOptions: {
    FacebookID: '912546562568332'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
