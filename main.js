const darkButton = document.querySelector('.btn')
const configUser = window.matchMedia('(prefers-color-scheme: light)')
const localConfig = localStorage.getItem('theme')

if(localConfig === 'light'){
    document.body.classList.toggle('light-theme')
}else if(localConfig === 'dark'){
    document.body.classList.toggle('dark-theme')
}

darkButton.addEventListener('click', () =>{
    console.log(configUser.matches)
    let colorTheme;

    if(configUser.matches){
        document.body.classList.toggle('dark-theme')
        
        colorTheme= document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    
    }else{
        document.body.classList.toggle('light-theme')
    }

    localStorage.setItem('theme', colorTheme)
})