google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(diagramaSectores);
google.charts.setOnLoadCallback(diagramaBarras);

function diagramaSectores() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['PSOE', 120],
    ['PP', 88],
    ['VOX', 52],
    ['Unidas Podemos', 35],
    ['ERC', 13],
    ['Plural', 12],
    ['Mixto', 10],
    ['Cs', 9],
    ['EAJ-PNV', 6],
    ['EH Bildu', 5]
  ]);

  var options = {
        'title':'Representación en el Congreso de los Diputados por partidos',
        'width':600,
        'height':600,
        'colors':['red','blue', 'green', 'purple', 'yellow', 'grey', 'black', 'orange', 'darkgreen', 'lightgreen'],
        //'pieHole':0.4
    };

  var chart = new google.visualization.PieChart(document.getElementById('sectores'));
  chart.draw(data, options);
}

function diagramaBarras() {
    var data = google.visualization.arrayToDataTable(
        ['Partido', 'Número de escaños', { role: 'style' }],
        [['PSOE', 120, 'red'],
        ['PP', 88, 'blue'],
        ['VOX', 52, 'green'],
        ['Unidas Podemos', 35, 'purple'],
        ['ERC', 13, 'yellow'],
        ['Plural', 12, 'grey'],
        ['Mixto', 10, 'black'],
        ['Cs', 9, 'orange'],
        ['EAJ-PNV', 6, 'darkgreen'],
        ['EH Bildu', 5, 'lightgreen']]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title:'Representación en el Congreso de los Diputados por partidos',
        width:600,
        height :600,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("barras"));
      chart.draw(view, options);
}

