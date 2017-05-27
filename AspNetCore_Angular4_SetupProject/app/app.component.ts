import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Default component</h1>
        ASP.NET CORE 1.1 WebApi, Angular {{ angularVersion }}, Typescript {{ tsVersion }} setup project.
        `
})
export class AppComponent { 
    angularVersion = "~4.0.0";
    tsVersion = "2.3.3";
}
