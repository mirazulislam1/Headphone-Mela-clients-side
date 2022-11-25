import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className='mt-10'>
                <h1 className='text-3xl text-accent mb-2'>Q1 .  What are the different ways to manage a state in a React application?</h1>
                <p>Ans: When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps:
                    <br />
                    Local (UI) state – Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.
                    <br />
                    Global (UI) state – Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                    <br />
                    Server state – Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                    <br />
                    URL state – Data that exists on our URLs, including the pathname and query parameters.
                </p>
            </section>
            <section>
                <h1 className='text-3xl text-accent mb-2 mt-4'>Q2 . How does prototypical inheritance work?</h1>
                <p>Ans: Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
            </section>
            <section>
                <h1 className='text-3xl text-accent mb-2 mt-4'>Q3 . What is a unit test? Why should we write unit tests?</h1>
                <p>Ans: A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."</p>
                <p className='mt-2'>They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>
            </section>
            <section>
                <h1 className='text-3xl text-accent mb-2 mt-4'>Q4 . React vs. Angular vs. Vue?</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                       
                        <thead>
                            <tr>
                                <th>Catagories</th>
                                <th>React</th>
                                <th>Angular</th>
                                <th>Vue</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <th>Type</th>
                                <td>Rich Library to Build UI</td>
                                <td>A Framework</td>
                                <td>A library</td>
                            </tr>
                           
                            <tr>
                                <th>Development approach</th>
                                <td>Everything is on JavaScript</td>
                                <td>Based on TypeScript</td>
                                <td>Based on JavaScript and HTML</td>
                            </tr>
                           
                            <tr>
                                <th>Maintained and Supported By</th>
                                <td>Facebook</td>
                                <td>Google</td>
                                <td>Former Google Employee</td>
                            </tr>
                            <tr>
                                <th>Initial Release</th>
                                <td>March 2013</td>
                                <td>September 2016</td>
                                <td>February 2014</td>
                            </tr>
                            <tr>
                                <th>Modal</th>
                                <td>Based on Virtual DOM</td>
                                <td>Based on MVC</td>
                                <td>Based on Virtual DOM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Blog;