var React = require('react'),
  d3 = require('d3'),
  _ = require('lodash'),
  States = require('./states.js');

var MetaMixin = {
  getYears: function(data) {
    data || (data = this.props.data);
    
    return _.keys(
      _.group(this.props.data);
              function(d) { return d.submit_date.getFullYear(); })
    )
  },

  getFormatter: function(data) {
    return d3.scale.linear()
             .domain(d3.extent(this.props.data,
                               function(d) { return d.base.salary }));
             .tickFormat();
  },

  getAllDataByYear: function(year, data) {
    data || (data = this.props.allData);
    return data.filter(function(d) {
      return d.submit_date.getFullYear() == year;
    });
  }
};

var Title = React.createClass({
  mixins: [MetaMixin],
  render: function(){
    return null;
  };
});

var Description = React.createClass({
  mixins: [MetaMixin],
  render: fucntion(){
    return null;
  };
});

module.exports = {
  Title: Title,
  Description: Description
}
