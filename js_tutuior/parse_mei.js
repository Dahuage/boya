const jsdom = require("jsdom")


let mei_doc_text = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<?xml-model href="http://music-encoding.org/schema/4.0.0/mei-all.rng" type="application/xml" schematypens="http://relaxng.org/ns/structure/1.0"?>
<?xml-model href="http://music-encoding.org/schema/4.0.0/mei-all.rng" type="application/xml" schematypens="http://purl.oclc.org/dsdl/schematron"?>
<mei xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.music-encoding.org/ns/mei"
  meiversion="4.0.0">
  <meiHead>
    <fileDesc>
      <titleStmt>
        <title>Walzer G-Dur <titlePart type="subordinate">an electronic transcription</titlePart> </title>
        <composer>
          <persName role="creator" codedval="133912027" auth.uri="http://d-nb.info/gnd/" auth="GND"
            >Dionisio Aguado y García</persName>
        </composer>
        <respStmt>
          <persName role="encoder">Maja Hartwig</persName>
          <persName role="encoder">Kristina Richts</persName>
        </respStmt>
      </titleStmt>
      <pubStmt>
        <publisher>
          <corpName role="publisher" codedval="5115204-6" auth.uri="http://d-nb.info/gnd/"
            auth="GND">Musikwissenschaftliches Seminar, Detmold</corpName>
        </publisher>
        <address>
          <addrLine>Gartenstrasse 20</addrLine>
          <addrLine>32756 <geogName codedval="7004442" auth.uri="http://vocab.getty.edu/page/tgn/"
            auth="TGN">Detmold</geogName> </addrLine>
          <addrLine>
            <geogName codedval="7000084" auth.uri="http://vocab.getty.edu/page/tgn/" auth="TGN"
              >Germany</geogName>
          </addrLine>
        </address>
        <date>2011</date>
        <availability>
          <useRestrict>This encoding is in the public domain. However, the sources used to create it
            may be under copyright. We believe their use by the MEI project for educational and
            research purposes is covered by the Fair Use doctrine. However, we will remove any
            material from the project archive when requested to do so by the copyright
            owner.</useRestrict>
        </availability>
      </pubStmt>
      <seriesStmt>
        <title>MEI Sample Collection</title>
        <funder>
          <corpName role="funder" codedval="2007744-0" auth.uri="http://d-nb.info/gnd/" auth="GND"
            >German Research Foundation<address> <addrLine>Kennedyallee 40</addrLine> <addrLine>
            <geogName codedval="7005090" auth.uri="http://vocab.getty.edu/page/tgn/" auth="TGN"
            >Bonn</geogName> </addrLine> <addrLine> <geogName codedval="7000084"
            auth.uri="http://vocab.getty.edu/page/tgn/" auth="TGN">Germany</geogName> </addrLine>
            </address> </corpName>
        </funder>
        <funder>
          <corpName role="funder" codedval="18183-3" auth.uri="http://d-nb.info/gnd/" auth="GND"
            >National Endowment for the Humanities<address> <addrLine>1100 Pennsylvania Avenue
            N.W.</addrLine> <addrLine> <geogName codedval="7013962"
            auth.uri="http://vocab.getty.edu/page/tgn/" auth="TGN">Washington, DC</geogName>
            20004</addrLine> <addrLine> <geogName codedval="7012149"
            auth.uri="http://vocab.getty.edu/page/tgn/" auth="TGN">United States</geogName>
            </addrLine> </address> </corpName>
        </funder>
        <respStmt>
          <corpName role="publisher">MEI Project</corpName>
        </respStmt>
        <identifier>
          <ref target="http://music-encoding.org/Support/MEI_Sample_Collection"/>
        </identifier>
      </seriesStmt>
      <sourceDesc>
        <source>
          <bibl>
            <identifier type="URI"
              >http://www.hausmusik.ch/notenisodateal/a/aguado_dionisio(1788-1847)/walzer_g-dur/walzer_g-dur.xml</identifier>
            <title>Walzer G-Dur</title>
            <composer>
              <persName role="composer" codedval="133912027" auth.uri="http://d-nb.info/gnd/"
                auth="GND">Dionisio Aguado y García</persName>
            </composer>
            <imprint>
              <respStmt>
                <corpName role="publisher">Verein zur Förderung der Hausmusik</corpName>
              </respStmt>
              <address>
                <addrLine>CH-4143 Dornach</addrLine>
                <addrLine>Postfach 68</addrLine>
              </address>
              <annot>(C) Jürgen W. Knuth</annot>
            </imprint>
          </bibl>
        </source>
        <source>
          <bibl>
            <identifier type="URI"
              >http://www.hausmusik.ch/notenregal/a/aguado_dionisio(1788-1847)/walzer_g-dur/walzer_g-dur.pdf</identifier>
            <title>Walzer G-Dur</title>
          </bibl>
        </source>
      </sourceDesc>
    </fileDesc>
    <encodingDesc>
      <appInfo>
        <application xml:id="xsl_mxl2mei_2.2.3" version="2.2.3">
          <name>MusicXML2MEI</name>
        </application>
        <application version="v1.0_beta" xml:id="app_20193104015181">
          <name>mei30To40.xsl</name>
        </application>
      </appInfo>
      <classDecls>
        <taxonomy>
          <bibl xml:id="OCLC_DDC"
            target="http://www.oclc.org/dewey/resources/summaries/default.htm#700">OCLC_DDC</bibl>
          <category xml:id="_787">
            <altId>787</altId>
            <label>Stringed instruments</label>
          </category>
        </taxonomy>
        <taxonomy>
          <bibl xml:id="OSWD" target="http://www.bsz-bw.de/cgi-bin/oswd-suche.pl">OSWD</bibl>
          <category xml:id="_4021100-9">
            <altId>4021100-9</altId>
            <label>Gitarrenmusik</label>
          </category>
          <category xml:id="_4129951-6">
            <altId>4129951-6</altId>
            <label>Instrumentalmusik</label>
          </category>
          <category xml:id="_4302724-6">
            <altId>4302724-6</altId>
            <label>Zupfmusik</label>
          </category>
        </taxonomy>
      </classDecls>
    </encodingDesc>
    <workList>
      <work>
        <title>Walzer G-Dur</title>
        <composer>
          <persName role="composer" codedval="133912027" auth.uri="http://d-nb.info/gnd/" auth="GND"
            >Dionisio Aguado y García</persName>
        </composer>
        <key pname="g" mode="major">G major</key>
        <meter count="3" unit="8"/>
        <incip>
          <incipCode form="notAvailable">Incipit is not available</incipCode>
        </incip>
        <creation>
          <date notbefore="1784" notafter="1849"/>
        </creation>
        <perfMedium>
          <perfResList>
            <perfRes n="1" codedval="tb">Guitar</perfRes>
          </perfResList>
        </perfMedium>
        <classification>
          <termList>
            <term class="#_4021100-9">Gitarrenmusik</term>
            <term class="#_4129951-6">Instrumentalmusik</term>
            <term class="#_4302724-6">Zupfmusik</term>
            <term class="#_787">Stringed instruments</term>
          </termList>
        </classification>
      </work>
    </workList>
    <revisionDesc>
      <change n="1">
        <changeDesc>
          <p>The original MusicXML file was generated using CapToMusic.py CapXML to MusicXML
            converter version 1.11.</p>
        </changeDesc>
        <date isodate="2010-04-04"/>
      </change>
      <change n="2">
        <respStmt>
          <persName xml:id="MH"> Maja Hartwig </persName>
        </respStmt>
        <changeDesc>
          <p>Transcoded from a MusicXML version 1.1 file on 2011-05-12 using the <ref
            target="#xsl_mxl2mei_2.2.3">musicxml2mei</ref> stylesheet. </p>
        </changeDesc>
        <date isodate="2011-05-12"/>
      </change>
      <change n="3">
        <respStmt>
          <persName xml:id="KR"> Kristina Richts </persName>
        </respStmt>
        <changeDesc>
          <p> Cleaned up MEI file automatically using <ref target="#xsl_ppq">ppq.xsl</ref>. </p>
        </changeDesc>
        <date isodate="2011-10-21"/>
      </change>
      <change n="4" resp="#KR">
        <changeDesc>
          <p> Cleaned up MEI file automatically using <ref target="#xsl_header">Header.xsl</ref>.
          </p>
        </changeDesc>
        <date isodate="2011-12-01"/>
      </change>
      <change n="5">
        <respStmt>
          <persName>Kristina Richts</persName>
        </respStmt>
        <changeDesc>
          <p>Revised the header.</p>
        </changeDesc>
        <date isodate="2013-01-28"/>
      </change>
      <change n="6">
        <changeDesc>
          <p>Converted to MEI 2013 using mei2012To2013.xsl, version 1.0 beta</p>
        </changeDesc>
        <date isodate="2014-05-30"/>
      </change>
      <change n="7">
        <changeDesc>
          <p>Converted to version 3.0.0 using mei21To30.xsl, version 1.0 beta</p>
        </changeDesc>
        <date isodate="2015-10-15"/>
      </change>
      <change n="8" resp="#app_20193104015181">
        <changeDesc>
          <p>Converted to MEI version 4.0.0 using mei30To40.xsl, version 1.0 beta</p>
        </changeDesc>
        <date isodate="2019-01-03"/>
      </change>
    </revisionDesc>
  </meiHead>
  <music>
    <body>
      <mdiv>
        <score>
          <scoreDef meter.count="3" meter.unit="8" key.sig="1s" key.mode="major">
            <pgHead>
              <title>
                <rend>WALZER G-DUR</rend>
              </title>
              <persName role="composer">
                <rend halign="right" valign="top">Dionisio Aguado<lb/>1784-1849</rend>
              </persName>
            </pgHead>
            <pgFoot>
              <p>
                <rend halign="center" valign="bottom">© Jürgen Knuth</rend>
              </p>
            </pgFoot>
            <staffGrp>
              <staffDef n="1" clef.line="2" clef.shape="G" clef.dis="8" clef.dis.place="below"
                lines="5"/>
            </staffGrp>
          </scoreDef>
          <section>
            <measure n="1" xml:id="d30278e50">
              <staff n="1">
                <layer n="1">
                  <rest xml:id="d30278e84" dur="8"/>
                  <beam>
                    <note xml:id="d30278e96" pname="b" oct="5" dur="16" stem.dir="up"/>
                    <note xml:id="d30278e118" pname="c" oct="6" dur="16" stem.dir="up"/>
                    <note xml:id="d30278e140" pname="d" oct="6" dur="8" stem.dir="up"/>
                  </beam>
                </layer>
                <layer n="2">
                  <chord xml:id="d30281e1" dur="4" dots="1" stem.dir="down">
                    <note xml:id="d30278e178" pname="g" oct="4"/>
                    <note xml:id="d30278e193" pname="b" oct="4"/>
                  </chord>
                </layer>
              </staff>
              <dir tstamp="1" place="within" staff="1">0</dir>
              <dir tstamp="1" place="within" staff="1">0</dir>
              <tempo tstamp="1" place="above" staff="1" mm="92"/>
              <dir tstamp="2" place="above" staff="1">1</dir>
              <dir tstamp="2.5" place="above" staff="1">2</dir>
              <dir tstamp="3" place="above" staff="1">4</dir>
            </measure>
            <sb/>
          </section>
        </score>
      </mdiv>
    </body>
  </music>
</mei>
`

const {JSDOM} = jsdom
const dom = new JSDOM(mei_doc_text)
console.log(dom.window.document.querySelector('mdiv'))