var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Solvespace', 'text': '', 'tags': '', 'url': 'Solvespace.html'}, {'title': '編譯', 'text': '', 'tags': '', 'url': '編譯.html'}, {'title': '繪圖示範', 'text': 'solvespace操作 \n Solvespace Tutorial 6: Christmas Tree (BONUS) \n \n', 'tags': '', 'url': '繪圖示範.html'}, {'title': 'V-Rep', 'text': '', 'tags': '', 'url': 'V-Rep.html'}, {'title': '雙輪車控制模擬', 'text': 'Python remote API 雙輪車控制模擬 \n 目前為近端操控，未來的目標是希望在遠端裝置上執行 \n \n', 'tags': '', 'url': '雙輪車控制模擬.html'}, {'title': 'Aesgisub', 'text': 'video----->New vidio\xa0 匯入新片 \n 指令: \n ctel+3 : 在影片該處設為字幕出現片段頭部 \n \n ctel+4 : 在影片該處設為字幕出現片段尾部 \n \n 匯出時依照下面指令轉成srt檔(export) \n \n \n Y: \n cd tmp \n ffmpeg -i input.mp4 -vf subtitles=input.srt output.mp4 \n 該指令為把原檔(\xa0input.mp4)加入字幕(input.srt) ，輸出成output的檔案名 \n \n 記得把影片檔和字幕檔都放在Y的tmp下 \n', 'tags': '', 'url': 'Aesgisub.html'}]};