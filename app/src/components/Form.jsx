import '../stylesheets/global.scss'

function Form() {

  return (
    <div>
        <Form id="form">
            <h1>Manwha Form</h1>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" required />
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required></textarea>
            <label htmlFor="poster">Poster URL:</label>
            <input type="url" id="poster" name="poster" required />
            <button type="submit">Submit</button>
        </Form>
    </div>
  )
}

export default Form
