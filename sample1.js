let index = 0
const ticker = () => {
  const images = document.querySelectorAll('.slideshow-container img')
  for (image of images) {
    image.style.display = 'none'
  }

  images[index].style.display = 'block'

  index++
  if (index >= images.length) {
    index = 0
  }

  setTimeout(ticker, 2000)
}

document.addEventListener('DOMContentLoaded', () => {
  ticker()
})
