import Subscription from '../Subscription';
import { createTransport, EMAIL_BASE } from '../../../email/Email';

let MUTEX = 0;

const sendSingleEmail = (subscriptionInstance, transporter) => {
  const recipient = subscriptionInstance.email;
  const subject = 'IACP Update Letter #2, March 30, 2017';
  const html = `
  <html>

  <head></head>

  <body>
    <div style="font-family:Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:16px">
      <div>
        <br>
        <span style="font-size: 14.6667px; white-space: pre-wrap; font-family: Calibri;">Dear Friends,</span>
        <br>
      </div>
      <div>
        <div style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif;">
          <div style="font-family: HelveticaNeue, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif;">
            <div>
              <div>
                <div>
                  <div style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif;">
                    <div>
                      <div>
                        <div>
                          <br>
                          <div style="font-size: 16px;"><font face="Calibri"><span style="font-size:14.6667px;white-space:pre-wrap;">Our last update to you was  on 3/2/2017. Please see the following for our latest update. </span></font>
                          </div>
                          <br>
                          <ol style="font-size: 16px; margin-top: 0pt; margin-bottom: 0pt;">
                            <li style="list-style-type:decimal;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
                              <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Our Facebook Page has been live since January. </span>
                              </div>
                            </li>
                            <ol style="margin-top:0pt;margin-bottom:0pt;">
                              <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
                                <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Please visit our page and spread the word by sharing our posts: </span>
                                </div>
                              </li>
                            </ol>
                          </ol>
                          <div style="font-size: 16px; line-height: 1.295; margin-top: 0pt; margin-bottom: 0pt; margin-left: 72pt;"><a rel="nofollow" target="_blank" href="https://www.facebook.com/IranianAmericansContributionsProject/" style="text-decoration:none;"><span style="font-size:10pt;font-family:'Quattrocento Sans';color:#196ad4;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;">https://www.facebook.com/IranianAmericansContributionsProject/</span></a>
                          </div>
                          <br>
                          <ol style="font-size: 16px; margin-top: 0pt; margin-bottom: 0pt;" start="2">
                            <li style="list-style-type:decimal;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
                              <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">We will  give a presentation about IACP at </span><span style="font-size:11pt;font-family:Calibri;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">UC Berkeley</span><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> - </span><span style="font-size:11pt;font-family:Calibri;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">April 5, 2017 at 7:00pm</span>
                              </div>
                            </li>
                          </ol>
                          <ol style="font-size: 16px; margin-top: 0pt; margin-bottom: 0pt;" start="2">
                            <ol style="margin-top:0pt;margin-bottom:0pt;" start="2">
                              <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
                                <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Sponsored by Dr. Dariush Zahedi – UC Berkeley Haas School of Business</span>
                                </div>
                              </li>
                              <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
                                <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Facebook event page: &nbsp;</span><a rel="nofollow" target="_blank" href="https://www.facebook.com/events/1244761595630937/" style="text-decoration:none;"><span style="font-size:11pt;font-family:Calibri;color:#1155cc;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;">https://www.facebook.com/events/1244761595630937/</span></a>
                                </div>
                              </li>
                            </ol>
                          </ol>
                          <br>
                          </div>
                          <ol style="font-size: 16px; margin-top: 0pt; margin-bottom: 0pt;" start="3">
                            <li style="list-style-type:decimal;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
                              <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">We will give</span><span style=";font-size:11pt;">&nbsp;a presentation about IACP&nbsp;</span><span style=";font-size:11pt;vertical-align:baseline;white-space:pre-wrap;">at </span><span style=";font-size:11pt;font-weight:700;vertical-align:baseline;white-space:pre-wrap;">Stanford University</span><span style=";font-size:11pt;vertical-align:baseline;white-space:pre-wrap;"> - </span><span style=";font-size:11pt;font-weight:700;vertical-align:baseline;white-space:pre-wrap;">April 11, 2017 at 6:30pm</span>
                              </div>
                            </li>
                          </ol>
                          <ol style="font-size: 16px; margin-top: 0pt; margin-bottom: 0pt;">
                            <li style="list-style-type:decimal;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;margin-left:36pt;">
                              <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Sponsored by Dr. Abbas Milani – Stanford Program in Iranian Studies</span>
                              </div>
                            </li>
                            <li style="list-style-type:decimal;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;margin-left:36pt;">
                              <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Facebook event page: &nbsp;</span><a rel="nofollow" target="_blank" href="https://www.facebook.com/events/1291078767646832/" style="text-decoration:none;"><span style="font-size:11pt;font-family:Calibri;color:#1155cc;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;">https://www.facebook.com/events/1291078767646832/</span></a>
                              </div>
                            </li>
                            <li style="list-style-type:decimal;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;margin-left:36pt;">
                              <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Stanford Website: </span><a rel="nofollow" target="_blank" href="https://iranian-studies.stanford.edu/events/documenting-contributions-iranian-americans" style="text-decoration:none;"><span style="font-size:11pt;font-family:Calibri;color:#1155cc;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;">https://iranian-studies.stanford.edu/events/documenting-contributions-iranian-americans</span></a>
                              </div>
                            </li>
                          </ol>
                          <br>
                          <ol style="font-size: 16px; margin-top: 0pt; margin-bottom: 0pt;" start="4">
                            <li style="list-style-type:decimal;font-size:11pt;font-family:Calibri;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
                              <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">IACP coverage in the press:</span>
                              </div>
                            </li>
                            <ol style="margin-top:0pt;margin-bottom:0pt;">
                              <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
                                <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Kayhan London: </span><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><br></span><a rel="nofollow" target="_blank" href="http://kayhan.london/fa/1395/12/20/documenting-contributions-of-iranian-americans/"><span style="font-size:10pt;font-family:'Quattrocento Sans';color:#196ad4;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;">http://kayhan.london/fa/1395/12/20/documenting-contributions-of-iranian-americans/</span></a>
                                </div>
                              </li>
                            </ol>
                          </ol>
                          <br>
                          <ol style="font-size: 16px; margin-top: 0pt; margin-bottom: 0pt;" start="5">
                            <li style="list-style-type:decimal;font-size:11pt;font-family:Calibri;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
                              <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Data Mining and Visualization:</span>
                              </div>
                            </li>
                            <ol style="margin-top:0pt;margin-bottom:0pt;">
                              <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
                                <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">We completed 6 new data visualizations: </span>
                                </div>
                              </li>
                              <ol style="margin-top:0pt;margin-bottom:0pt;">
                                <li style="list-style-type:lower-roman;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;margin-left:9pt;">
                                  <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Physicians:</span><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><span style="white-space:pre-wrap;"></span></span><a rel="nofollow" target="_blank" href="https://ia-cp.org/explore/healthcare/physicians" style="text-decoration:none;"><span style="font-size:11pt;font-family:Calibri;color:#1155cc;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;">https://ia-cp.org/explore/healthcare/physicians</span></a>
                                  </div>
                                </li>
                                <li style="list-style-type:lower-roman;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;margin-left:9pt;">
                                  <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Dentists:</span><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><span style="white-space:pre-wrap;"></span></span><a rel="nofollow" target="_blank" href="https://ia-cp.org/explore/healthcare/dentists" style="text-decoration:none;"><span style="font-size:11pt;font-family:Calibri;color:#1155cc;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;">https://ia-cp.org/explore/healthcare/dentists</span></a>
                                  </div>
                                </li>
                                <li style="list-style-type:lower-roman;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;margin-left:9pt;">
                                  <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Pharmacists:</span><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><span style="white-space:pre-wrap;"></span></span><a rel="nofollow" target="_blank" href="https://ia-cp.org/explore/healthcare/pharmacists" style="text-decoration:none;"><span style="font-size:11pt;font-family:Calibri;color:#1155cc;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;">https://ia-cp.org/explore/healthcare/pharmacists</span></a>
                                  </div>
                                </li>
                                <li style="list-style-type:lower-roman;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;margin-left:9pt;">
                                  <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Nurses:</span><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><span style="white-space:pre-wrap;"></span></span><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><span style="white-space:pre-wrap;"></span></span><a rel="nofollow" target="_blank" href="https://ia-cp.org/explore/healthcare/nurses" style="text-decoration:none;"><span style="font-size:11pt;font-family:Calibri;color:#1155cc;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;">https://ia-cp.org/explore/healthcare/nurses</span></a>
                                  </div>
                                </li>
                                <li style="list-style-type:lower-roman;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;margin-left:9pt;">
                                  <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Therapists:</span><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><span style="white-space:pre-wrap;"></span></span><a rel="nofollow" target="_blank" href="https://ia-cp.org/explore/healthcare/therapists" style="text-decoration:none;"><span style="font-size:11pt;font-family:Calibri;color:#1155cc;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;">https://ia-cp.org/explore/healthcare/therapists</span></a>
                                  </div>
                                </li>
                                <li style="list-style-type:lower-roman;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;margin-left:9pt;">
                                  <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Chiropractors:</span><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><span style="white-space:pre-wrap;"></span></span><a rel="nofollow" target="_blank" href="https://ia-cp.org/explore/healthcare/chiropractors" style="text-decoration:none;"><span style="font-size:11pt;font-family:Calibri;color:#1155cc;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;">https://ia-cp.org/explore/healthcare/chiropractors</span></a>
                                  </div>
                                </li>
                              </ol>
                              <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
                                <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">You can see an overview of all of the data-mining we have done to date here:</span>
                                </div>
                              </li>
                              <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
                                <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><a rel="nofollow" shape="rect" target="_blank" href="https://ia-cp.org/static/Data_High_Level_Summary_2017-03-29.pdf" style="text-align: start; color: rgb(25, 106, 212); font-family: &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif; font-size: 13px;">https://ia-cp.org/static/Data_High_Level_Summary_2017-03-29.pdf</a>
                                </div>
                              </li>
                            </ol>
                          </ol>
                          <br>
                          <ol style="font-size: 16px; margin-top: 0pt; margin-bottom: 0pt;" start="6">
                            <li style="list-style-type:decimal;font-size:11pt;font-family:Calibri;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
                              <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Huffington Post Interviews: </span>
                              </div>
                            </li>
                            <ol style="margin-top:0pt;margin-bottom:0pt;">
                              <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
                                <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">See all of the articles here: </span><a rel="nofollow" target="_blank" href="https://ia-cp.org/stories" style="text-decoration:none;"><span style="font-size:11pt;font-family:Calibri;color:#0563c1;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;">https://ia-cp.org/stories</span></a>
                                </div>
                              </li>
                              <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
                                <div style="line-height:1.295;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">37 articles have been posted. See here for a high level summary: </span><a rel="nofollow" shape="rect" target="_blank" href="https://ia-cp.org/static/Huffington_Post_Series_Summary_2017-03-29.pdf" style="text-align: start; color: rgb(25, 106, 212); font-family: &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif; font-size: 13px;">https://ia-cp.org/static/Huffington_Post_Series_Summary_2017-03-29.pdf</a>
                                </div>
                              </li>
                              <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
                                <div style="line-height:1.295;margin-top:0pt;margin-bottom:8pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">2 new articles have been added since our last update on 3/2/2017:</span>
                                </div>
                              </li>
                            </ol>
                          </ol>
                          <div style="font-size: 16px;"></div>
                          <div style="margin-left: 0px;">
                            <table style="font-size: 16px; border: none; border-collapse: collapse;">
                              <colgroup>
                                <col width="89">
                                  <col width="121">
                                    <col width="204">
                                      <col width="210">
                              </colgroup>
                              <tbody>
                                <tr style="min-height:0pt;">
                                  <td style="border-left:solid #000000 0.5pt;border-right:solid #000000 0.5pt;border-bottom:solid #000000 0.5pt;border-top:solid #000000 0.5pt;vertical-align:top;background-color:#bdd7ee;padding:0pt 5.75pt 0pt 5.75pt;">
                                    <div style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Date</span>
                                    </div>
                                  </td>
                                  <td style="border-left:solid #000000 0.5pt;border-right:solid #000000 0.5pt;border-bottom:solid #000000 0.5pt;border-top:solid #000000 0.5pt;vertical-align:top;background-color:#bdd7ee;padding:0pt 5.75pt 0pt 5.75pt;">
                                    <div style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Interviewee</span>
                                    </div>
                                  </td>
                                  <td style="border-left:solid #000000 0.5pt;border-right:solid #000000 0.5pt;border-bottom:solid #000000 0.5pt;border-top:solid #000000 0.5pt;vertical-align:top;background-color:#bdd7ee;padding:0pt 5.75pt 0pt 5.75pt;">
                                    <div style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Title of Article</span>
                                    </div>
                                  </td>
                                  <td style="border-left:solid #000000 0.5pt;border-right:solid #000000 0.5pt;border-bottom:solid #000000 0.5pt;border-top:solid #000000 0.5pt;vertical-align:top;background-color:#bdd7ee;padding:0pt 5.75pt 0pt 5.75pt;">
                                    <div style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Link</span>
                                    </div>
                                  </td>
                                </tr>
                                <tr style="min-height:0pt;">
                                  <td style="border-left:solid #000000 0.5pt;border-right:solid #000000 0.5pt;border-bottom:solid #000000 0.5pt;border-top:solid #000000 0.5pt;vertical-align:top;padding:0pt 5.75pt 0pt 5.75pt;">
                                    <div style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">3/24/2017</span>
                                    </div>
                                  </td>
                                  <td style="border-left:solid #000000 0.5pt;border-right:solid #000000 0.5pt;border-bottom:solid #000000 0.5pt;border-top:solid #000000 0.5pt;vertical-align:top;padding:0pt 5.75pt 0pt 5.75pt;">
                                    <div style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Persis Karim</span>
                                    </div>
                                  </td>
                                  <td style="border-left:solid #000000 0.5pt;border-right:solid #000000 0.5pt;border-bottom:solid #000000 0.5pt;border-top:solid #000000 0.5pt;vertical-align:top;padding:0pt 5.75pt 0pt 5.75pt;">
                                    <div style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Looking for Herself in Literature</span>
                                    </div>
                                  </td>
                                  <td style="border-left:solid #000000 0.5pt;border-right:solid #000000 0.5pt;border-bottom:solid #000000 0.5pt;border-top:solid #000000 0.5pt;vertical-align:top;padding:0pt 5.75pt 0pt 5.75pt;">
                                    <div style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><a rel="nofollow" target="_blank" href="http://www.huffingtonpost.com/entry/persis-karim-looking-for-herself-in-literature_us_58d53cbde4b06c3d3d3e6ce7" style="text-decoration:none;"><span style="font-size:8pt;font-family:Calibri;color:#0563c1;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;">http://www.huffingtonpost.com/entry/persis-karim-looking-for-herself-in-literature_us_58d53cbde4b06c3d3d3e6ce7</span></a>
                                    </div>
                                  </td>
                                </tr>
                                <tr style="min-height:0pt;">
                                  <td style="border-left:solid #000000 0.5pt;border-right:solid #000000 0.5pt;border-bottom:solid #000000 0.5pt;border-top:solid #000000 0.5pt;vertical-align:top;padding:0pt 5.75pt 0pt 5.75pt;">
                                    <div style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">3/8/2017</span>
                                    </div>
                                  </td>
                                  <td style="border-left:solid #000000 0.5pt;border-right:solid #000000 0.5pt;border-bottom:solid #000000 0.5pt;border-top:solid #000000 0.5pt;vertical-align:top;padding:0pt 5.75pt 0pt 5.75pt;">
                                    <div style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Ali Hajimiri</span>
                                    </div>
                                  </td>
                                  <td style="border-left:solid #000000 0.5pt;border-right:solid #000000 0.5pt;border-bottom:solid #000000 0.5pt;border-top:solid #000000 0.5pt;vertical-align:top;padding:0pt 5.75pt 0pt 5.75pt;">
                                    <div style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Calibri;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Pioneering Technology in the Service of Humanity</span>
                                    </div>
                                  </td>
                                  <td style="border-left:solid #000000 0.5pt;border-right:solid #000000 0.5pt;border-bottom:solid #000000 0.5pt;border-top:solid #000000 0.5pt;vertical-align:top;padding:0pt 5.75pt 0pt 5.75pt;">
                                    <div style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><font size="1"><a rel="nofollow" target="_blank" href="http://www.huffingtonpost.com/entry/ali-hajimiri-pioneering-technology-in-the-service_us_58c0a7f2e4b0a797c1d398eb" style="text-decoration: none;"><span style="font-family: Calibri; color: rgb(5, 99, 193); background-color: transparent; font-weight: 400; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; text-decoration: underline; vertical-align: baseline; white-space: pre-wrap;"></span></a><a rel="nofollow" target="_blank" href="http://www.huffingtonpost.com/entry/ali-hajimiri-pioneering-technology-in-the-service_us_58c0a7f2e4b0a797c1d398eb">http://www.huffingtonpost.com/entry/ali-hajimiri-pioneering-technology-in-the-service_us_58c0a7f2e4b0a797c1d398eb</a></font>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <br>
                          </div>
                          <div style="font-size: 16px;"><font face="Calibri"><span style="font-size:14.6667px;white-space:pre-wrap;">Best Regards,</span></font></div>
                          <br>
                          <div style="font-size: 16px;"><font face="Calibri"><span style="font-size:14.6667px;white-space:pre-wrap;">IACP Team</span></font></div>
                          <br>
                          <div style="font-size: 16px;"><font face="Calibri"><span style="font-size:14.6667px;white-space:pre-wrap;">If you wish to unsubscribe at any time please use this <a href="${subscriptionInstance.unsubLink}">unsubscribe</a> link.</span></font></div>
                          <div style="font-size: 16px;"><font face="Calibri"><span style="font-size:14.6667px;white-space:pre-wrap;">IACP - PO Box 520, Los Altos, Ca., 94023</span></font></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>

  </html>
`;

  /* const attachments = [{
    filename: 'norooz.jpg',
    path: `${__dirname}/norooz.jpg`,
    cid: 'norooz_poster',
  }];*/

  transporter.sendMail({
    ...EMAIL_BASE,
    to: recipient,
    bcc: null,
    subject,
    html,
    //attachments,
  }, (error, response) => {
    if (error) {
      console.error('AWS SES failed', { error });
    } else {
      subscriptionInstance.update({ update2: true });
      console.info('AWS SES message sent.', { recipient, message: response.message });
    }
    MUTEX -= 1;
  });
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendEmails() {
  const transporter = createTransport();
  const subscriptions = await Subscription.findAll({ where: {
    active: true,
    update2: false,
    // email: 'hamed.ty@gmail.com',
    // email: 'pirooz_parvarandeh@yahoo.com',
  } });
  for (let subscription of subscriptions) {
    MUTEX += 1;
    sendSingleEmail(subscription, transporter);
    while (MUTEX) { await sleep(2000); }
  }
}

sendEmails().then(() => {
  console.log('Done!');
});
