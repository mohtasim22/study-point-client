
### :writing_hand: Main Requirements

<!-- 1. Make sure your design and website idea is unique. First, finalize your idea (what type of website you want to build). Then google the site design or visit `themeforest` to get your website idea. [You can visit this blog to collect free resources for your website](https://bootcamp.uxdesign.cc/free-images-and-resources-collection-for-website-c77f2fc46ce5). However, your website :x: `can not be related to your previous assignments or any demo project displayed in the course or in our conceptual sessions` :x:. -->

<!-- 2. Home page will have a navbar, banner, footer and at least 6 types of brand names having the following information: `brand image`and `brand name`. -->

<!-- 3. The navbar will have website name with logo, Home, Add Product, My Cart, and Login. -->

<!-- 4. Add two extra sections in the home page in addition to the 4 sections mentioned above. -->

5. Create an `Add Product` page where there will be a form for the user to add a product. The form will have:

   - Image
   - Name
   - Brand Name
   - Type (If you choose the `Technology and Electronics` category ,then the types of products will be phone, computer, headphone, etc)
   - Price
   - Short description
   - Rating
   - Add button

   This will be a private/protected route.

6. On clicking a brand will redirect the user to the page having products based on that brand. On that page, there will be a slider having at least 3 advertisement images and at least 4 products. Each product will have:

   - Image
   - Name
   - Band Name
   - Type (If you choose `Technology and Electronics` category ,then the types of products will be phone, computer, headphone, etc)
   - Price
   - Rating
   - Details button
   - Update button

   > **Note:** Among these six brand types, one of them will not have any available products. You will have to show a relevant message on brand page to inform the users.

7. Clicking on the Details button will take the user to the product detail route. Each route should display detailed information of the product. What you will include in the detailed information is entirely upto you but make sure it is relevant. Make sure to implement the `Add to Cart` button.

8. The product detail route will be a private/protected route. Please make sure that if the user is not logged in, the private route redirects to the login page.

9. Clicking the `Add to Cart` button will store your product information in to the database. Inform the user with a success message using a toast/alert. `Do not use the browser alert.`

10. Create a `My Cart` page where a user will see all his/her added products. If the user wants, he/she can delete a product. The design is up to you. This will be a private/protected route.

11. Clicking on the `Update button` will redirect the user to a form page where the form will have:

    - Image
    - Name
    - Brand Name
    - Type (If you choose the `Technology and Electronics` category ,then the types of products will be phone, computer, headphone, etc)
    - Price
    - Rating
    - Submit button

    This will be a private/protected route.

<!-- 12. You Must implement Email and password based Authentication. This means, you will have to implement the Registration and the login page. Users should be able to toggle between Login and Registration view . -->


<!-- On the Registration page, display errors when:

     The password

     - is less than 6 characters
     - don't have a capital letter
     - don't have a special character

On the Login page, display errors when:

    - password doesn't match
    - email doesn't match
    You can take the error message from firebase. You can show the error below the input fields or via alert/toast. If you use alert/toast, do not implement the browser alert. -->

<!-- 13. Also, implement at least `one extra login` which could be (facebook, github, google, etc). -->

<!-- 14. Once logged in, the user name, profile picture and the logout button should appear on the navbar. If the user clicks on the logout button, make sure to log him/her out. -->

<!-- 15. Add a 404 page (not found page) -->

### :gift: Bonus Requirements:

1. **Commits & readme:**

   - Minimum 10 meaningful git commits on the client-side repository.
   - Minimum 5 meaningful commits on the server-side repository.
   - Create a readme for client-side and write about your project (at least 5 bullet points). ** Remember to add your client-side live link to your website here.**

2. After reloading the page of a private route, the user should not be redirected to the login page.

3. Make the website responsive. Make sure the site looks different on desktop and mobile responsive. Tablet responsive is optional

4. Implementing a dark/light theme toggle for the home page. It's optional to implement the theme toggle for the entire website.

### :scroll: Additional information:

1. You cannot load the data from a .json file. The data must be stored in the database and you must all the data from the database.
2. You can use a local or host image anywhere or use pictures from the internet. And it's ok if you have the image url, but the image link doesn't work.
3. You can use vanilla CSS or any CSS library.
4. Try to host your site on Firebase (Netlify hosting will need some extra configurations)
5. Host your server-side application on Vercel. If needed, you can host somewhere else as well.
6. Make Sure you deploy server-side and client-side on the first day. If you have any issues with hosting or GitHub push, please join the "Github and deploy" related support session.

### :pushpin: What to submit

1. Your github client-side repository
2. Your github server-side repository
3. Your live website link
