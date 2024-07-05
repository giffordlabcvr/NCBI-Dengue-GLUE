# NCBI-Dengue-GLUE

## Overview

An extension to **[Dengue-GLUE](https://github.com/giffordlabcvr/Dengue-GLUE)** adding all published DENV data from NCBI.

## Installation

If you have not done so already, install the GLUE software framework by following the [installation instructions](http://glue-tools.cvr.gla.ac.uk/#/installation) on the GLUE web site: 

Then build the Dengue-GLUE base project: download the **[Dengue-GLUE](https://github.com/giffordlabcvr/Dengue-GLUE)** repository and build it according to the instructions.

Once you have done this, you may build the NCBI-Dengue-GLUE project via the GLUE command prompt as follows:

```
GLUE Version 1.1.107
Copyright (C) 2015-2020 The University of Glasgow
This program comes with ABSOLUTELY NO WARRANTY. This is free software, and you
are welcome to redistribute it under certain conditions. For details see
GNU Affero General Public License v3: http://www.gnu.org/licenses/

Mode path: /
GLUE> run file ncbiDengueProjectBuild.glue
```
## Downloading NCBI Sequences

Please note that in the interests of maintaining a lightweight repository, NCBI GenBank sequences are not contained within this repository.

To download sequences >= 5Kb in length run:

```
Mode path: /
GLUE> module dengueNcbiImporterGenBankLong import
```
To download sequences < 5Kb in length run:

```
Mode path: /
GLUE> module dengueNcbiImporterGenBankShort import
```

Running these files will download the sequences to a source named `ncbi-nuccore` (longer sequences) or `ncbi-nuccore-short` (shorter sequences), which will be exported as a subdirectory in your current working directory. Please move the exported source folder containing the GenBank XML sequences to the location on your hard drive that you prefer to keep them. Then update the 'import sources' files of the corresponding GLUE project build so that they point to this location:

i.e. `import source /path/to/directory/ncbi-nuccore-short`

For the longer sequences update [this file](https://github.com/giffordlabcvr/NCBI-Dengue-GLUE/blob/main/glue/dengueImportSources.glue).

For the shorter sequences update [this file](https://github.com/giffordlabcvr/NCBI-Dengue-GLUE/blob/main/glue/dengueImportSourcesShort.glue).


## Usage

GLUE contains an interactive command line environment focused on the development and use of GLUE projects by bioinformaticians. This provides a range of productivity-oriented features such as automatic command completion, command history and interactive paging through tabular data. 

For detailed instructions on how to use Dengue-GLUE for your comparative genomic analysis, refer to the GLUE software environment's [reference documentation](http://glue-tools.cvr.gla.ac.uk/).

## Contributing

We welcome contributions from the community! If you're interested in contributing to Dengue-GLUE, please review our [Contribution Guidelines](https://github.com/giffordlabcvr/Dengue-GLUE/blob/master/md/CONTRIBUTING.md).

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://github.com/giffordlabcvr/Dengue-GLUE/blob/master/md/code_of_conduct.md) 

## License

The project is licensed under the [GNU Affero General Public License v. 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)

## Contact

For questions, issues, or feedback, please contact us at [gluetools@gmail.com](mailto:gluetools@gmail.com) or open an issue on the [GitHub repository](https://github.com/giffordlabcvr/Dengue-GLUE/issues).
