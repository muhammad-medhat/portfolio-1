document.querySelectorAll('.port-item').forEach(item => {
    item.addEventListener('click', ()=>{
        console.log(item)
        const projectFile = `port-items/${item.dataset.project}.htm`
        const projContent = fetch(projectFile)        
            .then(b=>b.text())
            .then(r=>{  loadProjectWindow(r)})
            
    })
})

const loadProjectWindow = (projectContent)=>{
    const modal = document.createElement('div')
    modal.classList.add('modal', 'fade')
    console.log(projectContent);
    // modal.appendChild(projectContent)
    document.append(modal)
}