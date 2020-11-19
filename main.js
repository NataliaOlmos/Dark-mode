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

(function(){
    let updateHour = function(){
        let fecha = new Date();
            hora = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();
        
        let pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana')
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes')
            pYear = document.getElementById('year');


        let semana = ['Domingo','Lunes', 'Martes', 'Miércoles','Jueves','Viernes','Sábado'];
        pDiaSemana.textContent = semana[diaSemana];

        pDia.textContent = dia;

        let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
        pMes.textContent = meses[mes];
        pYear.textContent = year;


        if(hora >= 12){
            hora = hora - 12;
            ampm = 'PM';
        }else{
            ampm = 'AM';
        }
        if(hora == 0){
            hora = 12;
        };

        pHoras.textContent = hora;
        pAMPM.textContent = ampm;

        if(minutos < 10){minutos="0" + minutos};
        if(segundos < 10){segundos ="0" +segundos};

        pMinutos.textContent = minutos;
        pSegundos.textContent= segundos;


    
    }



    updateHour();
    let intervalo = setInterval(updateHour, 1000);
}())