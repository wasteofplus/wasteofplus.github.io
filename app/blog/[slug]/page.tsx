"use client";

import Image from "next/image";
import NavBar from "../../components/NavBar";
import { Button } from 'flowbite-react';

export default function Home() {
  return (
    <>
        <NavBar />

    <main className="pt-8 lg:pt-16 bg-white dark:bg-gray-900">

      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <Image
                  className="mr-4 w-16 h-16 rounded-full"
                  src="/profile-picture-2.jpg"
                  alt="Jese Leos"
                  width={16}
                  height={16}
                />
                <div>
                  <a
                    href="#"
                    rel="author"
                    className="text-xl font-bold text-gray-900 dark:text-white"
                  >
                    Jese Leos
                  </a>
                  <p className="text-base font-light text-gray-500 dark:text-gray-400">
                    Graphic Designer, educator & CEO Flowbite
                  </p>
                  <p className="text-base font-light text-gray-500 dark:text-gray-400">
                    <time dateTime="2022-02-08" title="February 8th, 2022">
                      Feb. 8, 2022
                    </time>
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              Best practices for successful prototypes
            </h1>
          </header>
          <p className="lead">
            Flowbite is an open-source library of UI components built with the
            utility-first classes from Tailwind CSS. It also includes
            interactive elements such as dropdowns, modals, datepickers.
          </p>
          <p>
            Before going digital, you might benefit from scribbling down some
            ideas in a sketchbook. This way, you can think things through before
            committing to an actual design project.
          </p>
          <p>
            But then I found a{" "}
            <a href="https://flowbite.com">
              component library based on Tailwind CSS called Flowbite
            </a>
            . It comes with the most commonly used UI components, such as
            buttons, navigation bars, cards, form elements, and more which are
            conveniently built with the utility classes from Tailwind CSS.
          </p>
          <figure>
            <Image
              src="/typography-image-1.png"
              alt=""
              width={640}
              height={360}
            />
            <figcaption>Digital art by Anonymous</figcaption>
          </figure>
          <h2>Getting started with Flowbite</h2>
          <p>
            First of all, you need to understand how Flowbite works. This
            library is not another framework. Rather, it is a set of components
            based on Tailwind CSS that you can just copy-paste from the
            documentation.
          </p>
          <p>
            It also includes a JavaScript file that enables interactive
            components, such as modals, dropdowns, and datepickers which you can
            optionally include into your project via CDN or NPM.
          </p>
          <p>
            You can check out the{" "}
            <a href="https://flowbite.com/docs/getting-started/quickstart/">
              quickstart guide
            </a>
            to explore the elements by including the CDN files into your
            project. But if you want to build a project with Flowbite I
            recommend you to follow the build tools steps so that you can purge
            and minify the generated CSS.
          </p>
          <p>
            Youll also receive a lot of useful application UI, marketing UI, and
            e-commerce pages that can help you get started with your projects
            even faster. You can check out this{" "}
            <a href="https://flowbite.com/docs/components/tables/">
              comparison table
            </a>{" "}
            to better understand the differences between the open-source and pro
            version of Flowbite.
          </p>
          <h2>When does design come in handy?</h2>
          <p>
            While it might seem like extra work at a first glance, here are some
            key moments in which prototyping will come in handy:
          </p>
          <ol>
            <li>
              <strong>Usability testing</strong>. Does your user know how to
              exit out of screens? Can they follow your intended user journey
              and buy something from the site you’ve designed? By running a
              usability test, you’ll be able to see how users will interact with
              your design once it’s live;
            </li>
            <li>
              <strong>Involving stakeholders</strong>. Need to check if your
              GDPR consent boxes are displaying properly? Pass your prototype to
              your data protection team and they can test it for real;
            </li>
            <li>
              <strong>Impressing a client</strong>. Prototypes can help explain
              or even sell your idea by providing your client with a hands-on
              experience;
            </li>
            <li>
              <strong>Communicating your vision</strong>. By using an
              interactive medium to preview and test design elements, designers
              and developers can understand each other — and the project —
              better.
            </li>
          </ol>
          <h3>Laying the groundwork for best design</h3>
          <p>
            Before going digital, you might benefit from scribbling down some
            ideas in a sketchbook. This way, you can think things through before
            committing to an actual design project.
          </p>
          <p>
            Lets start by including the CSS file inside the <code>head</code>{" "}
            tag of your HTML.
          </p>
          <h3>Understanding typography</h3>
      <h4>Type properties</h4>
      <p>
        A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
        letters. A typeface represents shared patterns across a collection of letters.
      </p>
      <h4>Baseline</h4>
      <p>
        A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
        letters. A typeface represents shared patterns across a collection of letters.
      </p>
      <h4>Measurement from the baseline</h4>
      <p>
        A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
        letters. A typeface represents shared patterns across a collection of letters.
      </p>
      <h3>Type classification</h3>
      <h4>Serif</h4>
      <p>
        A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
        Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the following:
      </p>
      <h4>Old-Style serifs</h4>
      <ul>
        <li>Low contrast between thick and thin strokes</li>
        <li>Diagonal stress in the strokes</li>
        <li>Slanted serifs on lower-case ascenders</li>
      </ul>
      <Image                                   height={360}
                                  width={640} src="/typography-image-1.png" alt="" />
      <ol>
        <li>Low contrast between thick and thin strokes</li>
        <li>Diagonal stress in the strokes</li>
        <li>Slanted serifs on lower-case ascenders</li>
      </ol>
      <h3>Laying the best for successful prototyping</h3>
      <p>A serif is a small shape or projection that appears at the beginning:</p>
      <blockquote>
        <p>
          Flowbite is just awesome. It contains tons of predesigned components and pages starting from login
          screen to complex dashboard. Perfect choice for your next SaaS application.
        </p>
      </blockquote>
      <h4>Code example</h4>
      <p>
        A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
        Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the following:
      </p>
      <pre>
        <code className="language-html">
          <dl className="grid grid-cols-2 gap-8 max-w-screen-md text-gray-900 sm:grid-cols-3 dark:text-white">
          <div className="flex flex-col justify-center items-center">
            <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
            <dd className="text-lg font-normal text-gray-500 dark:text-gray-400">developers</dd>
          </div>
          <div className="flex flex-col justify-center items-center">
            <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
            <dd className="text-lg font-normal text-gray-500 dark:text-gray-400">contributors</dd>
          </div>
          <div className="flex flex-col justify-center items-center">
            <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
            <dd className="text-lg font-normal text-gray-500 dark:text-gray-400">organizations</dd>
          </div>
          </dl>
        </code>
      </pre>
      <h4>Table example</h4>
      <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.</p>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Date & Time</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>United States</td>
            <td>April 21, 2021</td>
            <td><strong>$2,300</strong></td>
          </tr>
          <tr>
            <td>Canada</td>
            <td>May 31, 2021</td>
            <td><strong>$300</strong></td>
          </tr>
          <tr>
            <td>United Kingdom</td>
            <td>June 3, 2021</td>
            <td><strong>$2,500</strong></td>
          </tr>
          <tr>
            <td>Australia</td>
            <td>June 23, 2021</td>
            <td><strong>$3,543</strong></td>
          </tr>
          <tr>
            <td>Germany</td>
            <td>July 6, 2021</td>
            <td><strong>$99</strong></td>
          </tr>
          <tr>
            <td>France</td>
            <td>August 23, 2021</td>
            <td><strong>$2,540</strong></td>
          </tr>
        </tbody>
      </table>
      <h3>Best practices for setting up your prototype</h3>
      <p>
        <strong>Low fidelity or high fidelity?</strong> Fidelity refers to how close a prototype will be to
        the real deal. If you’re simply preparing a quick visual aid for a presentation, a low-fidelity
        prototype — like a wireframe with placeholder images and some basic text — would be more than
        enough. But if you’re going for more intricate usability testing, a high-fidelity prototype — with
        on-brand colors, fonts and imagery — could help get more pointed results.
      </p>
      <p>
        <strong>Consider your user</strong>. To create an intuitive user flow, try to think as your user
        would when interacting with your product. While you can fine-tune this during beta testing,
        considering your user’s needs and habits early on will save you time by setting you on the right
        path.
      </p>
      <p>
        <strong>Start from the inside out</strong>. A nice way to both organize your tasks and create more
        user-friendly prototypes is by building your prototypes ‘inside out’. Start by focusing on what will
        be important to your user, like a Buy now button or an image gallery, and list each element by order
        of priority. This way, you’ll be able to create a prototype that puts your users’ needs at the heart
        of your design.
      </p>
      <p>
        And there you have it! Everything you need to design and share prototypes — right in Flowbite Figma.
      </p>
      <section className="not-format">
              <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion (20)</h2>
              </div>
              <form className="mb-6">
                  <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                      <label className="sr-only">Your comment</label>
                      <textarea id="comment" 
                          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                          placeholder="Write a comment..." required></textarea>
                  </div>
                  <button type="submit"
                      className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                      Post comment
                  </button>
              </form>
              <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                  <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><Image
                                   height={6}
                                  width={6}
                                  className="mr-2 w-6 h-6 rounded-full"
                                  src="/profile-picture-2.jpg"
                                  alt="Michael Gough" />Michael Gough</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400"><time dateTime="2022-02-08"
                                  title="February 8th, 2022">Feb. 8, 2022</time></p>
                      </div>
                      <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          type="button">
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                              </path>
                          </svg>
                          <span className="sr-only">Comment settings</span>
                      </button>
                      <div id="dropdownComment1"
                          className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownMenuIconHorizontalButton">
                              <li>
                                  <a href="#"
                                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                              </li>
                              <li>
                                  <a href="#"
                                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                              </li>
                              <li>
                                  <a href="#"
                                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                              </li>
                          </ul>
                      </div>
                  </footer>
                  <p>Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                      instruments for the UX designers. The knowledge of the design tools are as important as the
                      creation of the design strategy.</p>
                  <div className="flex items-center mt-4 space-x-4">
                      <button type="button"
                          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                          <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                          Reply
                      </button>
                  </div>
              </article>
              <article className="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
                  <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><Image
                                  height={6}
                                  width={6}
                                  className="mr-2 w-6 h-6 rounded-full"
                                  src="/profile-picture-2.jpg"
                                  alt="Jese Leos" />Jese Leos</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400"><time dateTime="2022-02-12"
                                  title="February 12th, 2022">Feb. 12, 2022</time></p>
                      </div>
                      <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2"
                          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          type="button">
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                              </path>
                          </svg>
                          <span className="sr-only">Comment settings</span>
                      </button>
                      <div id="dropdownComment2"
                          className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownMenuIconHorizontalButton">
                              <li>
                                  <a href="#"
                                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                              </li>
                              <li>
                                  <a href="#"
                                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                              </li>
                              <li>
                                  <a href="#"
                                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                              </li>
                          </ul>
                      </div>
                  </footer>
                  <p>Much appreciated! Glad you liked it ☺️</p>
                  <div className="flex items-center mt-4 space-x-4">
                      <button type="button"
                          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                          <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                          Reply
                      </button>
                  </div>
              </article>
              <article className="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                          <p className="inine-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><Image
                                                            height={6}
                                                            width={6}
                                  className="mr-2 w-6 h-6 rounded-full"
                                  src="/profile-picture-2.jpg"
                                  alt="Bonnie Green"/>Bonnie Green</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400"><time dateTime="2022-03-12"
                                  title="March 12th, 2022">Mar. 12, 2022</time></p>
                      </div>
                      <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3"
                          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          type="button">
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                              </path>
                          </svg>
                          <span className="sr-only">Comment settings</span>
                      </button>
                      <div id="dropdownComment3"
                          className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownMenuIconHorizontalButton">
                              <li>
                                  <a href="#"
                                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                              </li>
                              <li>
                                  <a href="#"
                                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                              </li>
                              <li>
                                  <a href="#"
                                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                              </li>
                          </ul>
                      </div>
                  </footer>
                  <p>The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
                  <div className="flex items-center mt-4 space-x-4">
                      <button type="button"
                          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                          <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                          Reply
                      </button>
                  </div>
              </article>
              <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><Image
                                                            height={6}
                                                            width={6}
                                  className="mr-2 w-6 h-6 rounded-full"
                                  src="/profile-picture-2.jpg"
                                  alt="Helene Engels"/>Helene Engels</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400"><time dateTime="2022-06-23"
                                  title="June 23rd, 2022">Jun. 23, 2022</time></p>
                      </div>
                      <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4"
                          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          type="button">
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                              </path>
                          </svg>
                      </button>
                      <div id="dropdownComment4"
                          className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownMenuIconHorizontalButton">
                              <li>
                                  <a href="#"
                                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                              </li>
                              <li>
                                  <a href="#"
                                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                              </li>
                              <li>
                                  <a href="#"
                                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                              </li>
                          </ul>
                      </div>
                  </footer>
                  <p>Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
                  <div className="flex items-center mt-4 space-x-4">
                      <button type="button"
                          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                          <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                          Reply
                      </button>
                  </div>
              </article>
          </section>
        </article>
      </div>
      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
    <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com" className="flex items-center">
                    <Image src="/wasteofplus.svg" width="20" height="20" className="logo mr-3 h-12" alt="Wasteof.plus Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="https://flowbite.com" className="hover:underline">Flowbite</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" className="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
                </a>
            </div>
        </div>
    </div>
</footer>
    </main>
    </>
  );
}
