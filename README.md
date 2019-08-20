Source Of Learning: JavaBrains Tutorial

Learning how to use and build applications in the Angular framework.
This is a 'from the basics' introduction to Angular that covers various features of the framework, as well as how to create run and 
deploy a web application with Angular




1. Understanding the component model approach to building Angular applications :
  * In Angular 2+ we think everything in terms of component. We will not write everything (Html,CSS,JS) inside single file, instead we create a 
     component. 
  * Components define areas of responsibility in your UI that let you reuse these sets of UI functionality. You've already built one with the product list component.
     A component is comprised of three things:
      1. A component class, which handles data and functionality. 
      2. An HTML template, which determines what is presented to the user.
      3. Component-specific styles that define the look and feel.
2. Creating components and building component trees :
  =>  ng generate component <name-of-component>
              or
  =>  ng g c <name-of-component>
  
  * An angular application is tree of component.
  * The top level component is application itself, which is render by the browser the application when bootstraping the application.
  * Therefore, components are composable, reusable and hierarichal.
  
  
* Implementing interactivity by responding to user events :


Building an application using services
Breaking the Angular application into modules
Making REST API calls using in-built services
Implement routing to build multi-view applications
