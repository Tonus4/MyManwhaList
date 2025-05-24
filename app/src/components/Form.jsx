import '../stylesheets/global.scss'
import { useState } from 'react'

function Form() {

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    poster: ''
  })

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:1337/api/manwha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (!res.ok) throw new Error('Erreur lors de la soumission')
      alert('Formulaire envoyé avec succès')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <form id="form" onSubmit={handleSubmit}>
        <h1>Manwha Form</h1>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} required />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>
        <label htmlFor="poster">Poster URL:</label>
        <input type="url" id="poster" name="poster" value={formData.poster} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
