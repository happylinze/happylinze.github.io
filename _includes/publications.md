<h2 id="publications" style="margin: 2px 0px -15px;">Publications</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% endif %}
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

<!--
<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    <img src="assets/img/conference-and-journal/TENet.png" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    <abbr class="badge">arXiv</abbr>
  </div>
  
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="https://arxiv.org/abs/2405.05004">TENet: Targetness Entanglement Incorporating with Multi-Scale Pooling and Mutually-Guided Fusion for RGB-E Object Tracking</a></div>
      <div class="author">Pengcheng Shao, Tianyang Xu, Zhangyong Tang, <strong>Linze Li</strong>, Xiao-Jun Wu, Josef Kittler</div>
      <div class="periodical"><em>arXiv, 2024</em>
      </div>
    <div class="links">
      <a href="https://arxiv.org/pdf/2405.05004" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      <a href="https://github.com/SSSpc333/TENet" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
    </div>
  </div>
</div>
</li>



<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    <img src="assets/img/workshop/DrivingTAL.png" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    <abbr class="badge">CVPRW</abbr>
  </div>
  
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="https://openaccess.thecvf.com/content/CVPR2023W/AICity/html/Li_Action_Probability_Calibration_for_Efficient_Naturalistic_Driving_Action_Localization_CVPRW_2023_paper.html">Action Probability Calibration for Efficient Naturalistic Driving Action Localization</a></div>
      <div class="author">Rongchang Li, Cong Wu, <strong>Linze Li</strong>, Zhongwei Shen, Tianyang Xu, Xiao-jun Wu, Xi Li, Jiwen Lu, Josef Kittler</div>
      <div class="periodical"><em>IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, 2023</em>
      </div>
    <div class="links">
      <a href="https://openaccess.thecvf.com/content/CVPR2023W/AICity/papers/Li_Action_Probability_Calibration_for_Efficient_Naturalistic_Driving_Action_Localization_CVPRW_2023_paper.pdf" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      <a href="https://github.com/RongchangLi/AICity2023_DrivingAction" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
    </div>
  </div>
</div>
</li>
-->
<br>

{% endfor %}

</ol>
</div>

