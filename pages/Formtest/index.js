import style from "./index.module.css";
import Title from "./titleform";
import Background from "./background";
import { Navbar } from "../Navigation/Navbar";

export default function PageWithJSbasedForm() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      product: event.target.product.value,
      price: event.target.price.value,
      vat: event.target.vat.value,
      type: event.target.type.value,
      file: event.target.file.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form/form";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`your data is send succesfully: ${result.data}`);
  };

  return (
    <div className="bodyform">
      <Navbar />
      <div className="form h-20">
        <div class="flex justify-center items-center h-screen w-full bg-blue-400">
          <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
            <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
              Invoeren
            </h1>
            <form action="/" method="post">
              <div class="flex flex-col mb-4">
                <label
                  class="mb-2 font-bold text-lg text-gray-900"
                  for="product"
                >
                  Product
                </label>
                <input
                  class="border py-2 px-3 text-grey-800"
                  type="text"
                  name="product"
                  id="product"
                  placeholder="Krantenknipsel"
                  required
                />
              </div>
              <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="price">
                  Price
                </label>
                <input
                  class="border py-2 px-3 text-grey-800"
                  type="number"
                  name="price"
                  id="price"
                  placeholder="30,00"
                  min="0.00"
                  max="10000.00"
                  step="0.05"
                />
              </div>
              <label class="mb-2 font-bold text-lg text-gray-900" for="price">
                BTW
              </label>
              <fieldset>
                <legend class="sr-only">vat</legend>

                <div class="flex items-center mb-4">
                  <input
                    id="vat-option-1"
                    type="radio"
                    name="vat"
                    value="0%"
                    class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    checked
                  />
                  <label
                    for="vat-option-1"
                    class="block ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    0%
                  </label>
                </div>

                <div class="flex items-center mb-4">
                  <input
                    id="vat-option-2"
                    type="radio"
                    name="vat"
                    value="9%"
                    class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="vat-option-2"
                    class="block ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    9%
                  </label>
                </div>
                <div class="flex items-center mb-4">
                  <input
                    id="vat-option-3"
                    type="radio"
                    name="vat"
                    value="21%"
                    class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="vat-option-3"
                    class="block ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    21%
                  </label>
                </div>
              </fieldset>

              <label class="mb-2 font-bold text-lg text-gray-900" for="price">
                Wie?
              </label>
              <select
                id="wie"
                class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Max</option>
                <option>Evander</option>
              </select>

              <label class="mb-2 font-bold text-lg text-gray-900" for="price">
                Type
              </label>
              <select
                id="type"
                class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Inkomsten</option>
                <option>Uitgave</option>
              </select>

              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                for="user_avatar"
              >
                
              </label>
              <input
                class="block w-full p-2.5 text-sm border border-gray-300 rounded-lg cursor-pointer focus:outline-none  dark:border-gray-600"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />
              <div class="mt-1 text-sm" id="user_avatar_help"></div>

             
              <button type="button" class="text-black hover:text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>

              

               
              
            </form>
          </div>
        </div>
      </div>
    </div>

    // We pass the event to the handleSubmit() function on submit.
  );
}
