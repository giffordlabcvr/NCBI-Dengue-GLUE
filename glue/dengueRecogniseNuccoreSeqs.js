var sequenceMap = {};

var whereClause = "source.name = 'ncbi-nuccore' and serotype = null";

//Do serotype recognition for all ncbi nuccore sequences
var recognitionResults;
var genotypeResults;

// run BLAST recogniser to determine serotype
glue.inMode("/module/denvSerotypeRecogniser", function() {

	recognitionResults = glue.tableToObjects(glue.command(["recognise", "sequence", "-w", whereClause]));
		
});

//glue.log("INFO", "RESULT WAS ", recognitionResults);

_.each(recognitionResults, function(recognitionResult) {

	var sequenceEntry = recognitionResult.querySequenceId;
	var serotype = recognitionResult.categoryId;
	var direction = recognitionResult.direction;
	var idElements = sequenceEntry.split('/');
	var sourceName = idElements[0];
	var sequenceID = idElements[1];

	// insert the serotype result into the sequence table
	if (serotype) {

		glue.inMode("sequence/"+sourceName+"/"+sequenceID, function() {

			glue.command(["set", "field", "serotype", serotype]);

		});

	}
	
});	
