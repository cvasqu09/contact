<template>
  <div id="contact-viz" />
</template>

<script lang="ts">
import * as d3 from "d3";
export default {
  name: "ContactTree",
  mounted() {
    var margin = { top: 10, right: 30, bottom: 30, left: 40 };
    // append the svg object to the body of the page
    var svg = d3
      .select("#contact-viz")
      .append("svg")
      .attr("width", 1000)
      .attr("height", 1000)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const data = {
      nodes: [
        {
          id: 1,
          name: "A",
        },
        {
          id: 2,
          name: "B",
        },
        {
          id: 3,
          name: "C",
        },
        {
          id: 4,
          name: "D",
        },
        {
          id: 5,
          name: "E",
        },
        {
          id: 6,
          name: "F",
        },
        {
          id: 7,
          name: "G",
        },
        {
          id: 8,
          name: "H",
        },
        {
          id: 9,
          name: "I",
        },
        {
          id: 10,
          name: "J",
        },
      ],
      links: [
        {
          source: 1,
          target: 2,
        },
        {
          source: 1,
          target: 5,
        },
        {
          source: 1,
          target: 6,
        },

        {
          source: 1,
          target: 7,
        },
        {
          source: 1,
          target: 4,
        },
      ],
    };

    // Initialize the links
    var link = svg
      .selectAll("line")
      .data(data.links)
      .enter()
      .append("line")
      .style("stroke", "#ff0000");

    // Initialize the nodes
    var node = svg.selectAll("g").data(data.nodes).enter();

    const circleText = node.append("g");

    const circles = circleText
      .append("circle")
      .attr("r", 50)
      .style("fill", "#69b3a2");

    circleText.append("text").text((d) => d.id);

    var simulation = d3
      .forceSimulation(data.nodes) // Force algorithm is applied to data.nodes
      .force(
        "link",
        d3
          .forceLink() // This force provides links between nodes
          .id(function (d) {
            return d.id;
          }) // This provide  the id of a node
          .links(data.links)
          .distance((d) => {
            console.log("d", d.index);
            return d.index * 5;
          })
      )
      .force(
        "collision",
        d3.forceCollide().radius(() => 50)
      )
      .force("charge", d3.forceManyBody().strength(200)) // This adds repulsion between nodes. Play with the -400 for the repulsion strength
      .force("center", d3.forceCenter(1000 / 2, 1000 / 2)) // This force attracts nodes to the center of the svg area
      .on("end", ticked);

    // This function is run at each iteration of the force algorithm, updating the nodes position.
    function ticked() {
      link
        .attr("x1", function (d) {
          return d.source.x;
        })
        .attr("y1", function (d) {
          return d.source.y;
        })
        .attr("x2", function (d) {
          return d.target.x;
        })
        .attr("y2", function (d) {
          return d.target.y;
        });

      circleText.attr("transform", (d) => {
        console.log(d);
        return "translate(" + d.x + "," + d.y + ")";
      });
    }
  },
};
</script>

<style scoped></style>
