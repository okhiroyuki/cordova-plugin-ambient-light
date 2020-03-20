var LightSensor = function(intensity, timestamp) {
    this.intensity = intensity;
    this.timestamp = timestamp || (new Date()).getTime();
};

module.exports = LightSensor;