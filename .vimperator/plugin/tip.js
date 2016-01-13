// INFO {{{
let INFO = xml`
<VimperatorPlugin>
  <name>Auto focus frame</name>
  <description>Automatically focus to largest frame.</description>
  <description lang="ja">最も大きなフレームに自動的にフォーカスする。</description>
  <version>1.0.10</version>
  <author mail="anekos@snca.net" homepage="http://d.hatena.ne.jp/nokturnalmortum/">anekos</author>
  <license>new BSD License (Please read the source code comments of this plugin)</license>
  <license lang="ja">修正BSDライセンス (ソースコードのコメントを参照してください)</license>
  <updateURL>https://github.com/vimpr/vimperator-plugins/raw/master/auto-focus-frame.js</updateURL>
  <minVersion>2.3pre</minVersion>
  <maxVersion>2.3pre</maxVersion>
  <detail><![CDATA[
    == Usage ==
      Only install.
  ]]></detail>
  <detail lang="ja"><![CDATA[
    == Usage ==
      インストールするだけ
      一番面積の大きいフレームをフォーカスします
  ]]></detail>
</VimperatorPlugin>`;
// }}}

// Mappings {{{
mappings.addUserMap(
    [modes.NORMAL],
    ['s'],
    '搜索',
    function () {
      try {
        FireGestures._buildPopup("FireGestures:WebSearchPopup", false);
      } catch (ex) {
          alert("确认是否安装了 FireGestures！");
      }
    }
);

mappings.addUserMap(
    [modes.NORMAL],
    ['hs'],
    '转https',
    function () {
      ~ function(l) {
        if (l.protocol == 'http:') {
          l.href = 'https:' + l.host + l.pathname + l.hash + l.search + l.port;
        };        
      }(content.window.location);
    }
);

mappings.addUserMap(
    [modes.NORMAL],
    ['hh'],
    '关闭标签',
    function () {
      try {
        FireGestures._buildPopup("FireGestures:ClosedTabsPopup", false);
      } catch (ex) {
          alert("确认是否安装了 FireGestures！");
      }
    }
);
// }}}
// vim:sw=2 ts=2 et si fdm=marker:
