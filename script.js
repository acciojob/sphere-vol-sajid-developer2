function volume_sphere() {
    //Write your code here
	const radius = parseFloat(document.getElementById("radius").value);
    const volume = document.getElementById("volume");

    if (isNaN(radius) || radius < 0) {
        volume.value = "NaN";
        return false;
    }

    const result = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume.value = result.toFixed(4);

    return false;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
