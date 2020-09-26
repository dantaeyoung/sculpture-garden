import glob
import frontmatter
import os
import json

mdfiles = glob.glob("./*.md")

alldata = {}

for mdfile in mdfiles:
    basename = os.path.basename(mdfile)
    filename = os.path.splitext(basename)[0]


    mdfile = frontmatter.load(mdfile);

    alldata[filename] = mdfile.metadata;
    alldata[filename]["Content"] = mdfile.content;


with open('everything.json', 'w') as json_file:
  json.dump(alldata, json_file)

print("Wrote everything.json from " + str(len(mdfiles)) + " files!")
