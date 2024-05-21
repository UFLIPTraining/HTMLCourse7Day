# HTML Course

## Overview

Welcome to the HTML course! This course will introduce you to the basics of HTML and guide you through more advanced topics, ensuring a comprehensive understanding of web development using HTML. Each section focuses on different aspects of HTML, from the fundamentals to embedding multimedia and optimizing for SEO and accessibility.

## Sections

### Section 1: Learning the HTML Basics and Document Structure

- Introduction to HTML
- HTML Editors and Tools
- Understanding HTML Attributes
- Commonly Used HTML Tags
- Inline vs Block Elements
- Basic Styling with CSS
- Self-Closing Tags
- Example of Using Semantic Elements
- Adding Comments to HTML
- Linking CSS and JavaScript
- Using HTML Entities
- **Exercise**: Create a "Hello World" Web Page

### Section 2: Semantic HTML and Advanced Layout Techniques

- Importance of Semantic HTML
- Common Semantic HTML Elements
- **Exercise**: Create a Structured Web Page Using Semantic HTML

### Section 3: Text Formatting, Lists, and Tables

- Text Formatting Examples
- Creating Lists (Unordered and Ordered)
- Creating Tables
- Accessibility Tips for Lists and Tables
- **Exercise**: Create a Formatted Web Page with Text Formatting, Lists, and Tables

### Section 4: HTML Forms and User Input

- Example Form with Basic Validation
- JavaScript Interactions for Form Validation
- **Exercise**: Create a Web Page with a Form

### Section 5: Embedding Multimedia

- Embedding Images
- Embedding Videos
- Embedding Audio
- Embedding Maps
- **Exercise**: Create a Web Page with Embedded Multimedia

### Section 6: SEO and ARIA Roles

- Search Engine Optimization (SEO) and Metadata
  - Title Tag
  - Meta Description
  - Meta Keywords
  - Viewport
  - Example of Metadata in HTML
- ARIA Roles
  - Common ARIA Roles
  - Example of ARIA Roles in HTML
- **Exercise**: Create a Comprehensive Web Page Incorporating All Sections

## Example Code for Comprehensive Web Page

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Comprehensive Web Page</title>
    <meta
      name="description"
      content="This is a description of my comprehensive web page."
    />
    <meta name="keywords" content="HTML, CSS, web development, SEO, ARIA" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <header role="banner">
      <h1>Welcome to My Comprehensive Web Page</h1>
      <nav role="navigation">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </header>
    <section>
      <h2 role="main">Main Content</h2>
      <article>
        <h3>Article Title</h3>
        <p>This is a paragraph in the main content of the article.</p>
      </article>
    </section>
    <aside>
      <h3>Related Content</h3>
      <p>This is some related content.</p>
    </aside>
    <section>
      <h2>Form Example</h2>
      <form action="submit.php" method="post" id="myForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required /><br /><br />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required /><br /><br />
        <label for="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          min="16"
          max="100"
          required
        /><br /><br />
        <label for="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          title="Please add your area code."
          required
        /><br /><br />
        <label for="comment">Comment:</label>
        <textarea id="comment" name="comment" rows="4" required></textarea
        ><br /><br />
        <input type="submit" value="Submit" />
      </form>
    </section>
    <section>
      <h2>Multimedia Example</h2>
      <figure>
        <img
          src="src/img/MMWDEX.jpg"
          alt="Multimedia Example"
          width="300"
          height="175"
        />
        <figcaption>
          Figure 1: This is an example of an embedded image.
        </figcaption>
      </figure>
      <figure>
        <video controls width="300">
          <source src="src/img/MMWDEX2.mp4" type="video/mp4" />
        </video>
        <figcaption>
          Figure 2: This is an example of an embedded video.
        </figcaption>
      </figure>
      <figure>
        <audio controls>
          <source src="src/img/MMWDEX3.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <figcaption>Figure 3: This is an example of embedded audio.</figcaption>
      </figure>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.005951724286!2d-97.49673232362908!3d35.38030837268583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21459b179460d%3A0xe119c6f62c01f5d3!2s8600%20S%20I-35%20Service%20Rd%20%23300%2C%20Oklahoma%20City%2C%20OK%2073149!5e0!3m2!1sen!2sus!4v1715884413658!5m2!1sen!2sus"
        width="450"
        height="262.5"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </section>
    <footer role="contentinfo">
      <p>© 2024 My Web Page</p>
    </footer>
  </body>
</html>
```
