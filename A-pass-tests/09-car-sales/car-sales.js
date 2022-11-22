function sales(carsSold) {
    let totals = {
        Ford: 0,
        Honda:0,
        "Land Rover": 0,
        Toyota: 0,
    };
    carsSold.forEach(car => {
        if(car.make === "Honda"){
            totals.Honda = totals.Honda + car.price ;
        }
        if(car.make ==="Ford"){
            totals.Ford = totals.Ford + car.price;
        } 
        if(car.make ==="Land Rover"){
            totals["Land Rover"]= totals["Land Rover"] + car.price;
        }
        if(car.make ==="Toyota"){
            totals.Toyota = totals.Toyota + car.price;
        } 
    });
    return totals;
}







module.exports = sales;
