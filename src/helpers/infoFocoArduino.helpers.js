let data = 0;

module.exports = {
  getData: function() {
    return data;
  },
  setData: function(newData) {
    data = newData;
  }
};
