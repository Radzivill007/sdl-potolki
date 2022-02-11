areaInput = document.getElementById("calcArea");
svetInput = document.getElementById("calcLight");
facturaSelect = document.getElementById("calcFactura");
matSelect = document.getElementById("calcMat");

areaInput.addEventListener('change',function()  {calculate()});
svetInput.addEventListener('change',function()  {calculate()});
facturaSelect.addEventListener('change',function()  {calculate()});
matSelect.addEventListener('change',function()  {calculate()});

function calculate() {
    var area, svet, factura, mat;
    area = areaInput.value;
    svet = svetInput.value;
    factura = facturaSelect.value;
    mat = matSelect.value;

    if(area == null) {        
        return false;
    }

    var price = 0;
    if(mat=='1')
    {
        price = 1313; 
    }
    if(mat=='2')
    {
        price = 1954; 
    }
    if(mat=='3') { 
        price = 2135; 
        facturaSelect.value = '2';
    }

    if(area<5) {
        area = 5;
        areaInput.value = '5';
    }

    if(10>area && area>=5) { price = price*0.44; }
    if(50>area && area>=10) { price = price*0.36; }
    if(area>=50) { price = price*0.315; }

    stoimost = area*price + svet*290;
    stoimost = stoimost!=0 ? stoimost : '-'
    document.getElementById("calcResult").innerHTML = Math.round(stoimost);
}