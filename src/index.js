import DOM from './view-function'
import config from './config'

const listLoop = (id, array) => {
  array.forEach((word) => {
    const element = DOM.create('li')
    element.textContent = word
    DOM.id(id).appendChild(element)
  })
}

listLoop('langs', config.langs)
listLoop('libs', config.libs)
listLoop('tools', config.tools)

const projectsLoop = (projectArray) => {

  projectArray.forEach(({title, imgLink, projectLink, langs}) => {
    const projectEl = DOM.create('div')
    projectEl.classList.add('col-sm-6', 'col-md-4', 'col-lg-3')

    const linkEl = DOM.create('a')
    linkEl.setAttribute('href', projectLink)
    linkEl.setAttribute('target', '_blank')
    projectEl.appendChild(linkEl)
    
    const thumbEl = DOM.create('div')
    thumbEl.classList.add('thumbnail')
    linkEl.appendChild(thumbEl)

    const imgEl = DOM.create('img')
    imgEl.setAttribute('src', `public/img/${imgLink}`)
    imgEl.setAttribute('alt', `picture of ${title} project`)

    const captionEl = DOM.create('div')
    captionEl.classList.add('caption')

    const titleEl = DOM.create('h3')
    titleEl.classList.add('text-center')
    titleEl.textContent = title
    const langsEl = DOM.create('p')
    langsEl.classList.add('text-center')
    langsEl.textContent = langs

    captionEl.appendChild(titleEl)
    captionEl.appendChild(langsEl)
    thumbEl.appendChild(imgEl)
    thumbEl.appendChild(captionEl)
    
    
    DOM.id('projects').appendChild(projectEl)
  })
}

projectsLoop(config.projects)