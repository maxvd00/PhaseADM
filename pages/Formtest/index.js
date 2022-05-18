import style from "./index.module.css"  
import Title from "./titleform"
import Background from "./background"

export default function PageWithJSbasedForm() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      // Get data from the form.
      const data = {
        product: event.target.product.value,
        price: event.target.price.value,
        vat: event.target.vat.value,
        type: event.target.type.value,
        file: event.target.file.value,
      }
  
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const endpoint = '/api/form/form'
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
  
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
  
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      alert(`your data is send succesfully: ${result.data}`)
    }

    return (

      
  
 
     
      // We pass the event to the handleSubmit() function on submit.  
    
      <form className={style.form} onSubmit={handleSubmit}>
        
      
        <label htmlFor="product">Product</label>
        <input className={style.product} type="text" id="product" name="product" placeholder="krantenknipsel" required  />
        <br />
        <label htmlFor="price">Price:</label>
        <input className={style.price} type="text" id="price" name="price" placeholder="0.30" required />
        <br />

        <label htmlFor="vat">BTW:</label>
          <select id="vat" className={style.vat} name="vat" required>
            <option value="">Select your option</option>
            <option value="0">0%</option>
            <option value="9">9%</option>
            <option value="21">21%</option>
          </select>
        <br />

        <label htmlFor="vat">Type:</label>
          <select id="type" className={style.type} name="type" required>
            <option value="">Select your option</option>
            <option value="Inkomsten">Inkomsten</option>
            <option value="Uitgave">Uitgave</option>
          </select>
        <br />

        <label htmlFor="file">Select a file or image:</label>
        <input type="file" id="file" name="file" className={style.file}></input>
        <br />

        <label htmlFor="who">Who:</label>
        <br />
            <input className={style.who} type="radio" id="evander" name="who" value="Evander Hobbs" required />
            <label htmlFor="evander">evander</label>
         
            <input className={style.who} type="radio" id="max" name="who" value="Max van Dorst" required />
            <label htmlFor="max">max</label>
    
        <br />
        <button type="submit">Submit</button>
     </form>
    )
     
  }
  