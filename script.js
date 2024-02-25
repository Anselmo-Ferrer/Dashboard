// dark mode

const checkDark = document.getElementById('dark')

checkDark.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode-variables')
})

// aside off

document.getElementById('asideoff').addEventListener('click', function(event) {
  event.preventDefault();

  document.getElementById('aside-off').style.display = 'none';
  document.getElementById('aside-on').style.display = 'flex';

  document.getElementById('aside').style.width = '6%';
  document.getElementById('header-content').style.width = '90%';
  document.getElementById('main-content').style.width = '90%';

  document.getElementById('profilename').style.display = 'none';
  document.getElementById('listname1').style.display = 'none';
  document.getElementById('listname2').style.display = 'none';
  document.getElementById('listname3').style.display = 'none';

  document.getElementById('profile-img').style.width = '2.5rem';
  document.getElementById('profile-img').style.height = '2.5rem';

  document.getElementById('button1').style.justifyContent = 'center';
  document.getElementById('button1').style.paddingLeft = '0rem';
  document.getElementById('button2').style.justifyContent = 'center';
  document.getElementById('button2').style.paddingLeft = '0rem';
  document.getElementById('button3').style.justifyContent = 'center';
  document.getElementById('button3').style.paddingLeft = '0rem';

  document.getElementById('aside-bottom-button').style.justifyContent = 'center';
  document.getElementById('aside-bottom-button').style.paddingLeft = '0rem';

  document.getElementById('aside-list-title').style.display = 'none'

  document.getElementById('aside-transition').style.transform = '0rem'

});

document.getElementById('asideon').addEventListener('click', function(event) {
  event.preventDefault();

  document.getElementById('aside-off').style.display = 'flex'
  document.getElementById('aside-on').style.display = 'none'

  document.getElementById('aside').style.width = '17%'
  document.getElementById('header-content').style.width = '80%'
  document.getElementById('main-content').style.width = '80%'

  document.getElementById('profilename').style.display = 'flex'
  document.getElementById('listname1').style.display = 'flex'
  document.getElementById('listname2').style.display = 'flex'
  document.getElementById('listname3').style.display = 'flex'

  document.getElementById('profile-img').style.width = '4rem'
  document.getElementById('profile-img').style.height = '4rem'

  document.getElementById('button1').style.justifyContent = 'flex-start'
  document.getElementById('button1').style.paddingLeft = '0.6rem'
  document.getElementById('button2').style.justifyContent = 'flex-start'
  document.getElementById('button2').style.paddingLeft = '0.6rem'
  document.getElementById('button3').style.justifyContent = 'flex-start'
  document.getElementById('button3').style.paddingLeft = '0.6rem'

  document.getElementById('aside-bottom-button').style.justifyContent = 'flex-start'
  document.getElementById('aside-bottom-button').style.paddingLeft = '0.6rem'

  document.getElementById('aside-list-title').style.display = 'flex'
})

const btn1 = document.getElementById('button1')
const btn2 = document.getElementById('button2')
const btn3 = document.getElementById('button3')
const logout = document.getElementById('aside-bottom-button')

btn1.addEventListener('click', function(event) {
  event.preventDefault();
})
btn2.addEventListener('click', function(event) {
  event.preventDefault();
})
btn3.addEventListener('click', function(event) {
  event.preventDefault();
})
logout.addEventListener('click', function(event) {
  event.preventDefault();
})



// CHART

const ctx = document.getElementById("chart");

Chart.defaults.color = "#FFF";
Chart.defaults.font.family = "Poppins";

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Income",
        data: [2235, 3250, 1890, 5400, 20240, 6254,  12325, 4856, 10325, 2254, 22356, 8486],
        backgroundColor: "white",
        borderColor: "#3DA06E",
        borderRadius: 6,
        cubicInterpolationMode: 'monotone',
        fill: false,
        borderSkipped: false,
      },
    ],
  },
  options: {
    interaction: {
      intersect: false,
      mode: 'index'
    },
    elements: {
      point:{
          radius: 0
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Your Income",
        padding: {
          bottom: 16,
        },
        font: {
          size: 16,
          weight: "normal",
        },
      },
      tooltip: {
        backgroundColor: "#FDCA49",
        bodyColor: "#0E0A03",
        yAlign: "bottom",
        cornerRadius: 4,
        titleColor: "#0E0A03",
        usePointStyle: true,
        callbacks: {
          label: function(context) {
              if (context.parsed.y !== null) {
                const label = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                return label;
              }
              return null;
          }
        }
      },
    },
    scales: {
      x: {
        border: {
          dash: [2, 4],
        },
        title: {
          text: "2023",
        },
      },
      y: {
        grid: {
          color: "#27292D",
        },
        border: {
          dash: [2, 4],
        },
    
        title: {
          display: true,
          text: "Income [$]",
        },
      },
    },
  },
});

// pizza

const ctx2 = document.getElementById("myChart");

Chart.defaults.color = "#FFF";
Chart.defaults.font.family = "Poppins";

new Chart(ctx2, {
  type: "pie",
  data: {
    labels: [
      "Sim",
      "Nao",
      "Talvez",
    ],
    datasets: [
      {
        label: "Taxa Aceitacao",
        data: [2235, 3250, 5000],
        backgroundColor: ["#21BF85", "#25A6D9", "#5662A6"], // Modificado para incluir uma cor para o segundo setor
        borderWidth: 0, // Configuração para remover as linhas que conectam os dados
        borderColor: "black",
        cubicInterpolationMode: 'monotone',
        fill: false,
        borderSkipped: false,
      },
    ],
  },
  options: {
    interaction: {
      intersect: false,
      mode: 'index'
    },
    elements: {
      point: {
        radius: 0
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Satisfation",
        padding: {
          bottom: 16,
        },
        font: {
          size: 16,
          weight: "normal",
        },
      },
      tooltip: {
        backgroundColor: "#FDCA49",
        bodyColor: "#0E0A03",
        yAlign: "bottom",
        cornerRadius: 4,
        titleColor: "#0E0A03",
        usePointStyle: true,
        callbacks: {
          label: function(context) {
            if (context.parsed.y !== null) {
              const label = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
              return label;
            }
            return null;
          }
        }
      },
    },
    scales: {
      x: {
        display: false, // Configuração para remover o eixo x
      },
      y: {
        display: false, // Configuração para remover o eixo y
      },
    },
  },
});
