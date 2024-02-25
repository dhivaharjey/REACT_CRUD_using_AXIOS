# CRUD

---

## REACT + VITE

- Step 1: Create a new Vite project
  To create a new Vite project, open your terminal and run the following command:

- `npm create vite@latest  your-project-name `
- Replace your-project-name with the name you want for your project. Vite supports many frameworks, but in this case, we specify the react template with the `--template` option `React`.

- Step 2: Navigate to the project directory
  Once the Vite project is created, navigate to the project directory:

- `cd your-project-name`
- Don’t forget to replace your-project-name with the actual name you chose for your project (unless of course, you want to keep this name for your project).

- Step 3: Install dependencies and run the development server
  Next, install the necessary dependencies and start the development server:

- `npm run devi`

- `cd your-project-name`
- `npm i`
- `npm run dev`
- After running these commands, you should see a message in your terminal indicating that your React website is running on a specific port, it’s usually a ‘random’ port number like `http://localhost:5173.`

Now, open your browser and visit the provided URL to see your React website in action.

---

## CRUD OPERATION

- In here you can see the list of user details which is created using _mockapi.com_.
- The user details are fetched Using react third party package called `AXIOS`.
- Using AXIOS we can do these

  - GET
  - PUT
  - DELETE
  - POST

- In the Navbar right side `Add+` button is there you can _create New User details_ using this button.It will add the _New_ user details into the table of data.
- If you click the `Read` button it will show the particular user details in seperate using third party package called `react-router-dom` ,we have to install using this commond `npm i react-router-dom`.
- In the read page `Edit` , `delete` and `Back` buttons are there.
- Using `Edit` button you can Update the current user details then it will retun back to the **READ** page, there you can check the **Updated** user details.
- Using `Delete` button you can delete the user.
- All these `Edit`,`Add+` and `Delete` operations are done using axios .
- To **get** user details `axios.get()` .
- To **update** user details `axios.put()`.
- To **Delete** user details `axios.delete()`.
- To **create** user details `axios.post()`.

> Thanks for visiting....😊
