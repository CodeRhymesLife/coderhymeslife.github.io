/**
 * Defines graph functionality
 * 
 * Adapted from: http://stackoverflow.com/questions/11400241/updating-links-on-a-force-directed-graph-from-dynamic-json-data
 */

function Graph() {
	var graph = this;
	
	// Add a node to the graph
	this.addNode = function (nodeData) {
		if(!nodeData)
			throw "Invalid node data";

		nodes.push(nodeData);
	};
	
	// Add a link to the graph
	this.addLink = function (linkData) {
		if(!linkData)
			throw "Invalid link data";
		
		links.push(linkData);
	};

	/** 
	 * Updates the graph
	 */
	var path;
	var node;
	this.update = function () {
		// Add the links
		path = vis.append("g").selectAll("path")
			.data(links, function(d) { return d.source.id + "-" + d.target.id; });
		
		path.enter().append("svg:path")
			.attr("id",function(d){return d.source.id + "-" + d.target.id;})
			.attr("class", function(d) { return "link " + d.type; });
	    
		path.exit().remove();
		
		// Build the nodes
	    node = vis.selectAll("g.node")
	        .data(nodes, function(d) { return d.id; });

		var nodeRoot = node.enter().append("g");
		
		nodeRoot.attr("class", function (d) { return "node " + d.className; })
			.call(this.force.drag)
			.style("fill", function (d) { return d.color; })
			.on("click", function (d) { d.click(d); })
			.append("svg:circle")
				.attr("id",  function (d) { return d.id; })
				.attr("r",  function (d) { return d.r(); });

		nodeRoot.each(function (d) {
			var rootElement = d3.select(this);
			
			// If this node has an image add it
			if(d.img) {
				
				// Computes the maximum side length for the image so that the image perfectly fits within the bounds of the circle
				var getSideLength = function (d) {
					return Math.sqrt(Math.pow(2*d.r(), 2) / 2);
				};
				
				rootElement.append("svg:image")
					.attr("xlink:href", function () { return d.img.src; })
					.attr("width", function (d) { return getSideLength(d) + "px"; })
					.attr("height", function (d) { return getSideLength(d) + "px"; })
					.attr("x", function (d) { return "-" + getSideLength(d) / 2 + "px"; })
					.attr("y", function (d) { return "-" + getSideLength(d) / 2 + "px"; });
			}

			// If this node has a title add it
			if(d.title) {
				rootElement.append("svg:text")
					.attr("class", "text")
					.text(function (d) { return d.title; })
					.attr("x", 0)
					.attr("y", "6px")
					.attr("text-anchor", "middle");
			}
		});
	    node.exit().remove();
	    
	    // Define the tick function
	    this.force.on("tick", this.tick);
	    
	    // Restart the force layout.
	    this.force
	    	.charge(function (d) { return d.charge(); })
	    	.linkDistance(function (d) {
				return d.source.r() <= 60 ?
					30 : // Mobile
					200 // Other
			})
		    .size([this.w, this.h])
		    .start();
	};
	
	this.tick = function () {
	 
    	// Execute the tick handler for each node
    	node.attr("transform",  function (d) {
			d.x = Math.max(d.r(), Math.min(graph.w - d.r(), d.x));
			d.y = Math.max(d.r(), Math.min(graph.h - d.r(), d.y));
	
			return "translate(" + d.x + "," + d.y + ")";
		});
	};

	// Get the stage and style it
	var svg = d3.select("#aboutMeSvg")
	    .append("svg:svg")
	    .attr("id", "svg")
	    .attr("pointer-events", "all")
	    .attr("perserveAspectRatio", "xMinYMid");
	
	var vis = svg.append('svg:g');
	
	// Set the graph's width and height
	this.updateHeightAndWidth = function () {
		this.w = $(window).width();
		this.h = $(window).height();
		svg.attr("width", this.w)
	    	.attr("height", this.h)
	    	.attr("viewBox","0 0 "+ this.w +" "+ this.h)
	}
	this.updateHeightAndWidth();

	this.force = d3.layout.force();
	var nodes = this.force.nodes(),
		links = this.force.links();

	// Run it
	this.update();
	
	window.onresize = function () {
		graph.updateHeightAndWidth();
		graph.update();
	};
}
