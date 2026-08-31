<!-- .slide: class="cover" -->

<p class="eyebrow">DESK DEVICE / 2026</p>

# 操作を、ひとつに。

FlexiSpot・音響・タッチ操作をまとめる<br>デスクシェルフ専用デバイス

<div class="cover-meta"><span>HARDWARE</span><span>PCB</span><span>ENCLOSURE</span></div>

Note:
この資料はレイアウト確認用の仮原稿です。

---

<p class="eyebrow">OVERVIEW</p>

## デスクの操作を一か所に集約する

<div class="split">
<div>

毎日触る機能を、手の届く場所にまとめる。市販品の組み合わせではなく、デスク環境に合わせて回路と筐体を設計した。

<p class="big-number">01</p><p class="caption">デスク上の統合操作盤</p>

</div>
<div class="feature-list">
<div><b>昇降</b><span>FlexiSpotを手元から操作</span></div>
<div><b>音響</b><span>スピーカーへの出力を制御</span></div>
<div><b>画面</b><span>タッチUIで状態を確認</span></div>
</div>
</div>

---

<p class="eyebrow">PROBLEM</p>

## 操作が分散すると、机は使いにくくなる

<div class="before-after">
<div class="muted-panel"><p class="panel-label">BEFORE</p><h3>機能ごとに別の操作</h3><p>コントローラー、音量調整、画面操作が離れ、配線も増える。</p></div>
<div class="arrow">→</div>
<div class="accent-panel"><p class="panel-label">AFTER</p><h3>一つの面で完結</h3><p>触る場所を固定し、操作と見た目のノイズを減らす。</p></div>
</div>

---

<p class="eyebrow">ARCHITECTURE</p>

## 入力から機器制御までを一枚の基板でつなぐ

<div class="flow">
<div><span>01</span><b>Touch</b><small>ユーザー入力</small></div><i>→</i>
<div><span>02</span><b>Control</b><small>状態と信号を処理</small></div><i>→</i>
<div><span>03</span><b>Output</b><small>昇降・音響を制御</small></div>
</div>

<p class="support">部品点数と配線経路を抑えながら、機能追加にも対応できる構成を目指した。</p>

---

<p class="eyebrow">INTERFACE</p>

## 迷わず押せるタッチUI

<div class="ui-layout">
<div class="screen-mock">
<div class="screen-top"><span>DESK</span><span>72.4 cm</span></div>
<div class="screen-main"><button>↑</button><div><b>72</b><small>HEIGHT</small></div><button>↓</button></div>
<div class="screen-bottom"><span>1</span><span>2</span><span>3</span><span>SET</span></div>
</div>
<div class="annotations">
<p><b>視認性</b><br><span>現在値を大きく表示</span></p>
<p><b>即時性</b><br><span>主要操作を1タップに限定</span></p>
<p><b>一貫性</b><br><span>同じ位置に同じ役割を配置</span></p>
</div>
</div>

---

<p class="eyebrow">PCB DESIGN</p>

## 専用基板で配線と組み立てを単純化

<div class="stat-row">
<div><strong>1</strong><span>main board</span></div>
<div><strong>3</strong><span>core functions</span></div>
<div><strong>∞</strong><span>iterations</span></div>
</div>

<div class="rule-list">
<p><span>01</span>コネクターの向きと配置を組み立て順に合わせる</p>
<p><span>02</span>信号系と出力系の経路を整理する</p>
<p><span>03</span>デバッグしやすい測定点を確保する</p>
</div>

---

<p class="eyebrow">ENCLOSURE</p>

## 中身ではなく、置かれる場所から形を決める

<div class="ratio-layout">
<div class="device-shape"><span>TOUCH DISPLAY</span><i></i><i></i><i></i></div>
<div><p class="quote">“デスクシェルフの一部に見えること”</p><p>視線と手の動き、ケーブルの出口、基板の固定方法を同時に検討。試作しながら角度と寸法を調整した。</p></div>
</div>

---

<!-- .slide: class="photo-slide" -->

<div class="photo-stage">
<img src="/deskshelf.png" alt="デスクシェルフの設置イメージ">
<span class="photo-index">07</span>
</div>

<div class="photo-copy">
<p class="eyebrow">IN CONTEXT</p>

## 置いたときに、はじめて完成する

<p class="photo-lead">単体の形だけでなく、デスク上の道具との距離、視線、手の届き方まで含めて設計する。</p>

<div class="photo-points">
<p><b>FIT</b><span>シェルフの寸法に収める</span></p>
<p><b>REACH</b><span>自然に手が届く位置へ置く</span></p>
<p><b>ORDER</b><span>配線と道具の散らかりを抑える</span></p>
</div>
</div>

---

<p class="eyebrow">PROCESS</p>

## 試作の往復が完成度を上げる

<div class="timeline">
<div><span>01</span><b>要件整理</b><small>置き場所と操作を決める</small></div>
<div><span>02</span><b>回路・基板</b><small>信号と電源を設計する</small></div>
<div><span>03</span><b>筐体試作</b><small>寸法と角度を検証する</small></div>
<div><span>04</span><b>統合・調整</b><small>実環境で使い勝手を詰める</small></div>
</div>

---

<!-- .slide: class="closing" -->

<p class="eyebrow">CONCLUSION</p>

## 回路から体験まで、ひとつの設計としてつくる。

<p class="closing-copy">操作・基板・筐体を個別に考えず、<br>デスクで使う体験から逆算した。</p>

<div class="cover-meta"><span>TOUCH</span><span>CONTROL</span><span>CRAFT</span></div>
