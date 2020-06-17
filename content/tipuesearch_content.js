var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '小組直播每周影片', 'text': '', 'tags': '', 'url': '小組直播每周影片.html'}, {'title': 'W2', 'text': '\n \n 第一次利用直播進行線上組別討論，雖然這次大家都是第一次用，所以大家都不是很熟，但從經驗中磨練嘛，相信以後大家都會越來越上手 \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '\n 利用直播，我們每週多了更多的時間進行小組討論，我們也利用這段時間向組長進行回報進度，及提問，再進行大家的討論。 \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W5', 'text': '\n 利用了連假時間將之前還沒完成的進度補上，而這周組長利用直播時間，分配新的進度給大家，並進行討論。 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '\n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '\n', 'tags': '', 'url': 'W7.html'}, {'title': 'W9', 'text': '\n \n', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '\n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '\n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '\n', 'tags': '', 'url': 'W12.html'}, {'title': 'W14', 'text': '\n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '\n', 'tags': '', 'url': 'W15.html'}, {'title': '小組進度', 'text': 'CD2020AG1車子組立加上模擬 \n \n', 'tags': '', 'url': '小組進度.html'}, {'title': '瞭解四輪機器人', 'text': '', 'tags': '', 'url': '瞭解四輪機器人.html'}, {'title': '翻譯Coppelia Sim', 'text': '首先翻譯我們覺得比較有實用的內容 \n 可碰撞物體 (Collidable objects) \n 可碰撞對像是可以測試互相碰撞的對象，即將記錄碰撞狀態的對象。這並不意味著它們將對碰撞做出響應（即可響應），這有所不同。可碰撞的對象包括： \n \xa0 假人 \n 形狀 \n 超頻樹 \n 點雲 \n 由於基於點，因此虛擬對象和點雲只能與 OC 樹（基於體積）碰撞。 \n 集合也是可碰撞的，因為它們可能包含可碰撞的對象。 \n 可碰撞對象可以分別啟用或禁用其可碰撞屬性（默認情況下，對於非純形狀， OC 樹和點雲啟用）。可以在對象的公共屬性中或通過 sim.setObjectSpecialProperty API 函數進行設置。 \n 此外，可碰撞對象可以根據其相關的模型屬性（如果它們是模型的一部分）被覆蓋其可碰撞屬性。 \n \xa0 \n 可測對象 (Measurable objects) \n 可測量對像是可用於與其他可測量對象進行最小距離計算的對象。它們包括： \n \xa0 假人 \n 形狀 \n 超頻樹 \n 點雲 \n 集合也是可測量的，因為它們可能包含可測量的對象。 \n 可測量對象可以分別啟用或禁用其可測量屬性（默認情況下，對於非純形狀， OC 樹和點雲啟用）。可以在對象的公共屬性中或通過 sim.setObjectSpecialProperty API 函數進行設置。 \n 此外，可測量對象可以根據其相關的模型屬性（如果它們是模型的一部分）而覆蓋其可測量屬性。 \n \xa0 \n 可檢測物體 (Detectable objects) \n 可檢測物體是可以被接近傳感器檢測到的物體。它們包括： \n 假人 \n 形狀 \n 超頻樹 \n 點雲 \n 由於是基於點的虛擬和點雲，因此射線類型或隨機類型的接近傳感器無法檢測到。 \n 可以通過所有接近傳感器，或僅通過特定類型的接近傳感器或接近傳感器的子類別來檢測可檢測到的物體，如下所示： \n 超聲波接近傳感器 \n 紅外接近傳感器 \n 激光接近傳感器 \n 電感式接近傳感器 \n 電容式接近傳感器 \n 集合也是可檢測的，因為它們可能包含可檢測的對象。 \n 可檢測的對象可以分別啟用或禁用其可檢測屬性，並且對於所有類型的接近傳感器（默認情況下對非純形狀啟用）都啟用此屬性。可以在對象的公共屬性中或通過 sim.setObjectSpecialProperty API 函數進行設置。 \n 此外，可檢測對象可以根據其相關的模型屬性（如果它們是模型的一部分）被覆蓋其可檢測屬性。 \n \xa0 \n 可渲染對象 (Renderable objects) \n 可渲染對像是視覺傳感器可以看到或檢測到的對象。它們包括： \n 形狀 \n 路徑（但是必須啟用路徑整形功能） \n 圖形（僅呈現非靜態 3D 曲線） \n 超頻樹 \n 點雲 \n 集合也是可渲染的，因為它們可能包含可渲染的對象。 \n 您可以使可渲染對象僅由特定的視覺傳感器看到可渲染對像還可以分別啟用或禁用其 renderable 屬性（默認情況下啟用，純圖形除外）。可以在對象的公共屬性中或通過 sim.setObjectSpecialProperty API 函數進行設置。 \n 此外，可渲染對象可以根據其相關的模型屬性（如果它們是模型的一部分）而使其可渲染屬性被覆蓋。 \n \xa0 \n 可視對象 (Viewable objects) \n 可見對像是可以瀏覽，查看或可以顯示某些圖像內容的對象。它們包括： \n 攝影機 \n 視覺傳感器 \n 可視對象可以與將顯示其圖像內容的視圖關聯。 \n \xa0 \n 虛擬功能 (Dummy functions) \n 假人是多用途的對象。它們可以具有非常特定的功能，也可以僅用作輔助對象。以下偽函數是常見的： \n 用作點或參考系統：當您要跟蹤場景中特定點的位置和 / 或方向時，就是這種情況。虛擬位置可以與形狀頂點的位置匹配，例如，可以精確定位形狀：在頂點編輯模式下，從頂點創建虛擬對象，然後將形狀附加到虛擬對象（使虛擬對象成為父對象））。並且可以通過虛擬對象來操縱 / 定位形狀，該虛擬對象的位置與所選頂點相同。 \n 用作模型的代理或支持對象：通過將對象標記為模型基礎標誌來定義模型。任何對像都可以作為模型的基礎，但是虛擬對像是該模型的首選對象。 \n 用作標記點：例如，在評估機器人的工作空間時，可以在不同的時間間隔將假人放置在與機器人末端執行器相同的坐標上，最後可以提取所有添加的假人的凸包並顯示。有關更多詳細信息，請參閱凸包計算部分。 \n 用於指定逆運動學計算中的末端執行器和末端執行器目標位置 / 方向：逆運動學計算模塊處理運動鏈。每個鏈都有一個基礎對象和一個提示對象。尖端對象必須是假人，並且用戶經常將尖端假人定位和定向為與機器人的末端執行器重合。同時，為了以逆運動學模式移動運動鏈，需要機器人末端執行器的目標位置 / 方向。同樣，將虛擬對像用作目標對象。 \n 用於為動態模擬的機制創建循環閉合約束：有關更多詳細信息，請參考設計動態模擬的部分。 \n 用作路徑跟隨對象：虛擬對像是唯一可以分配留在路徑上（在路徑上自由，自由滑動）或跟隨路徑位置（固定在路徑上，沿著路徑在其當前固有位置固定）的對象。 \n \n \n 虛擬屬性 (Dummy properties) \n 虛擬屬性是場景對象屬性對話框的一部分，該對話框位於 [ 菜單欄 -> 工具 -> 場景對象屬性 ] 。還可以通過雙按場景層次結構中的對像圖標或單按其工具欄按鈕來打開對話框： \n \n 在場景對象屬性對話框中，單按“虛擬”按鈕以顯示虛擬對話框（“虛擬”按鈕僅在最後選擇的是虛擬對象時出現）。該對話框顯示最後選擇的虛擬對象的設置和參數。如果選擇了多個假人，則可以將某些參數從最後選擇的假人復製到其他選定的假人（適用於選擇按鈕）： \n \n 鏈接的虛擬對象：鏈接到此對象的虛擬對象。鏈接的虛擬對象（在場景和場景層次中，通過鏈接它們的彩色段很容易識別）具有特殊的屬性和行為，有關更多詳細信息，請參閱下一項。 \n 鏈接類型：鏈接類型將指定仿真期間鏈接的虛擬對象的行為。如果指定了“動力學，重疊約束”，則這兩個虛擬實體將嘗試重疊各自的位置 / 方向以創建動力學迴路閉合約束。如果指定了 IK ，則指定了刀尖目標，則兩個鏈接的虛擬對象形成了用於反向運動學計算的刀尖目標對。 \n 遵循主路徑的方向（唯一副路徑）：如果選中，則以路徑作為主（唯一副路徑）的虛擬對象將遵循該路徑的最接近貝塞爾曲線點的方向（而不是位置）。 另請參閱 sim.followPath API 函數（使用 sim.followPath 函數，不需要將虛擬對象與路徑作為主從關係）。 \n 遵循主路徑 ( 唯一主路徑 ) ：如果選中該選項，並且假人的主路徑是路徑對象，則假人的位置和方向將由該路徑自動計算（即將從路徑的 Bezier 點進行插值）。 \n 有兩種選擇：路徑自由或路徑固定。另請參閱 sim.followPath API 函數（使用 sim.followPath 函數，不需要將虛擬對象與路徑作為對象）。 \n 路徑上自由：選中該對像後，會將具有路徑對像作為對象的虛擬對象分配為留在路徑上（保持與路徑的 Bezier 點相同的位置和方向），但可以沿路徑自由移動。它可以通過對像操縱模式沿路徑移動，也可以由逆運動學模塊自動沿路徑引導。 \n 固定在路徑上：選中此選項後，會將具有路徑對像作為對象的虛擬對象分配為留在路徑上（與路徑的 Bezier 點保持相同的位置和方向），位於路徑的固有位置。一個比喻是在過山車的履帶部分上的貨車（將貨車拉起的初始部分）。在這種情況下，可以指定從路徑位置偏移的距離。 \n 偏移量：將假人分配到路徑上的固定位置時，與路徑位置的距離偏移量。如果要創建履帶，則履帶的第一個墊板（剛性元件）將位於偏移量 0 處，第二個墊板將位於偏移量 x 處，第二個墊板將位於偏移量 2x 處，依此類推。 \n 複製增量：添加到復制的虛擬對象的偏移量上的值（請參見上文）（例如，在創建毛毛蟲時，您可能需要幾十個墊板，每個墊板都可以自動計算出不同的偏移量）。 \n 對像大小：假人的大小。該參數僅具有視覺效果，沒有功能意義。 \n 調整虛擬顏色：允許調整虛擬顏色 \n', 'tags': '', 'url': '翻譯Coppelia Sim.html'}, {'title': '心得-1', 'text': '\n \n \n \n \n \n \n \n \n 在讀這本電子書之前我完全不了解CoppeliaSim，甚至我也沒聽過.....，不過經過我們一起翻譯，一起討論過後，讓我學到了很多不曾瞭解的知識，也讓我知道我還有很多事我要去努力學習的。 \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '心得-1.html'}, {'title': 'Assignment2', 'text': '', 'tags': '', 'url': 'Assignment2.html'}, {'title': 'webots tutorial', 'text': '', 'tags': '', 'url': 'webots tutorial.html'}, {'title': '編成基礎(使用數值優化方法,控制器插件)', 'text': '使用數值優化方法 \n 指數 \n \n 選擇正確的主管方法 \n \n 使用單個控制器 \n 使用兩種不同類型的控制器 \n \n \n 重置機器人 \n \n 使用wb_supervisor_field_set_ * 和wb_supervisor_simulation_reset_physics 函數 \n 使用wb_supervisor_world_reload 函數 \n 使用wb_supervisor_world_reset 函數 \n 通過啟動和退出Webots \n \n \n \n \xa0 \n 選擇正確的主管方法 \n 在 Webot 中有幾種使用優化算法的方法。大多數方法都依賴於 Supervisor 控制器。 \n 數值優化通常可以分解為兩個單獨的任務： \n \n 運行優化算法：系統搜索，隨機搜索，遺傳算法（ GA ），粒子群優化（ PSO ），模擬退火等。 \n 使用優化算法指定的一組參數運行機器人行為。 \n \n 需要決定的重要事情之一是，這兩個不同任務的實現應該進入同一個控制器還是在兩個單獨的控制器中。讓我們討論兩種方法： \n \n 使用單個控制器 \n 如果您的仿真一次只需要評估一個機器人，例如，您正在優化人形機器人的運動步態或單個機器人的行為，則可以在同一控制器中實現這兩個任務；這樣會導致代碼更簡單。這是僅使用一個控制器對兩個參數 a 和 b 進行系統優化的偽代碼示例： \n \n 在此示例中，機器人運行了 30 個模擬秒，然後評估了適應度，然後將機器人移回到其初始位置。請注意，此控制器需要在其字段設置為的 機器人 節點中執行，以訪問讀取和重置機器人位置所需的功能。supervisorTRUEwb_supervisor_field_* \n 使用兩種不同類型的控制器 \n 相反，如果您的仿真需要同時執行多個機器人，例如群體機器人，則建議使用兩種不同類型的控制器：一種用於優化算法，另一種用於機器人的行為。優化算法應該放在 Supervisor 控制器中，而機器人的行為可以放在常規（非 Supervisor ）控制器中。 \n 由於這些控制器將在單獨的系統進程中運行，因此它們將無法訪問彼此的變量。但是，為了指定需要評估的參數集，他們將不得不通過其他某種方式進行通信。可能並且建議使用 Webots\xa0 發射器 和 接收器 在 Supervisor 控制器和其他控制器之間交換信息。例如，在典型情況下， Supervisor 控制器會將評估參數（例如，基因型）發送給機器人控制器。機器人控制器聆聽其 接收器 ，等待一組新參數。收到後，機器人控制器開始執行由參數集指定的行為。在這種情況下， Supervisor 控制器需要一個 Emitter ， 而每個機器人都需要一個 Receiver 。 \n 根據算法需求，可以在 Supervisor 控制器或單個機器人控制器中評估適應性。如果在機器人控制器中進行評估，則需要將適應性結果發送回 Supervisor 控制器。這種雙向通信類型需要使用其他 發射器 和 接收器 。 \n 重置機器人 \n 使用優化算法時，您可能需要在每次適應性評估之後或之前重置機器人。有幾種重置機器人的方法： \n 使用 wb_supervisor_field_set_ * 和 wb_supervisor_simulation_reset_physics 函數 \n 您可以使用wb_supervisor_field_set...和wb_supervisor_simulation_reset_physics功能輕鬆重置機器人的位置，方向和物理狀態，下面是一個示例： \n \n 上述方法的缺點在於，它僅會重置機器人的主要位置和方向。這對於某些類型的優化可能很好，但對於其他類型則不夠。儘管可以向要重置的數據集添加更多參數，但是有時很難重置所有內容。這樣既不會重置電動機位置，也不會重置機器人控制器。應當使用該wb_motor_set_position功能重置電動機位置，並且應該通過從主管進程向機器人控制器進程發送消息（使用 Webots\xa0 發射 器 \xa0/\xa0 接收器 通信系統）來重置機器人控制器。機械手控制器程序應該能夠處理此類消息並相應地重置其狀態。 \n 使用 wb_supervisor_world_reload 函數 \n 此功能從一開始就重新啟動物理模擬和所有控制器。使用此方法，所有設置都將重置，包括物理特性，電機位置和控制器。但是此功能還會重新啟動稱為該wb_supervisor_world_reload功能的控制器，這通常是運行優化算法的控制器，結果是失去了優化狀態。因此，對於使用這種技術，有必要開發可以保存和恢復優化算法完整狀態的功能。優化狀態應在調用wb_supervisor_world_reload函數之前保存，並在 Supervisor 控制器重新啟動時重新加載。這是一個偽代碼示例： \n \n \n 例如，如果將此技術與遺傳算法一起使用，則該optimizer_save_state功能應至少保存當前 GA 群體的所有基因型和適應性結果。如果將此技術與 “ 粒子群優化 ” 一起使用，則該optimizer_save_state功能至少應保存當前群中所有粒子的位置，速度和適應性。 \n 使用 wb_supervisor_world_reset 函數 \n 與該 wb_supervisor_world_reload 功能類似，此功能可重置物理模擬。但是，它不會重新啟動控制器。該功能的優點是可以使用該 wb_supervisor_node_restart_controller 功能僅重新啟動所需的控制器。通常情況下，你將重新啟動 機器人 控制器，而不是 主管 之一。因此， Supervisor 控制器無需保存和恢復優化算法的完整狀態。 \n 通過啟動和退出 Webots \n 最後，最後一種方法是啟動和退出 Webots 程序以進行每個參數評估。這聽起來似乎有些開銷，但實際上，與評估控制器所需的時間相比， Webots 的啟動時間通常很短，因此這種方法非常合理。 \n 例如，可以從 Shell 腳本或適合於運行優化算法的任何類型的程序中調用 Webot 。每次啟動 Webot 顯然都會完全重載世界，因此每個機器人都將從相同的初始狀態啟動。這種方法的缺點是優化算法必須在 Webots 之外進行編程。可以使用任何編程語言（例如 Shell 腳本， C ， PHP ， perl 等）編寫此外部程序，前提是可以像 C 標準system函數那樣調用 Webots 並等待其終止。相反，必須在 Webots 控制器中實現參數評估。 \n 通過這種方法，優化算法和機器人控制器在單獨的系統過程中運行，但是它們必須相互通信才能交換參數集和適用性結果。一種簡單的方法是使它們通過使用文本文件進行通信。例如，優化算法可以將基因型值寫入文本文件，然後調用 Webots 。當 Webots 啟動時，機器人控制器讀取基因型文件並執行參數評估。機械手控制器完成評估後，會將適應性結果寫入另一個文本文件，然後調用該wb_supervisor_simulation_quit函數終止 Webot 。然後，控制流程返回到優化程序，該程序可以讀取結果適應度，將適應度與當前基因型相關聯並繼續進行下一個基因型。 \n 這是機器人評估控制器可能的（偽代碼）實現： \n \n 您將在 Webots 發行中找到使用優化技術進行模擬的完整示例：在 “\xa0 WEBOTS_HOME / projects / samples / curriculum / worlds \xa0”目錄中查找名為 “ advanced_pa rticle_swarm_optimization.wbt”和 “ advanced_genetic_algorithm.wbt” 的 世界 。這些例子在 Cyber botics 機器人課程 的 高級編程練習 中進行了描述。 \n \n \xa0 \n 控制器插件 \n 控制器功能可以通過用戶實現的插件進行擴展。控制器插件的目的是簡化機器人特定的機器人窗口和遠程控制包裝程序的編程。 \n 對控制器插件進行編程而不是直接在控制器中進行編程更加方便，因為它大大提高了代碼的模塊化和可伸縮性。例如，一個機器人窗口可以用於多個機器人。 \n 指數 \n \n 基本原理 \n 機器人窗口 \n 遠程控制插件 \n \n 基本原理 \n 無論使用哪種語言，控制器可執行文件在啟動時都與 Webots 控制器庫（ libController ）鏈接。控制器插件是一個共享庫，由 libController 在特定事件後根據其類型動態加載（在運行時）。 \n 下 圖 顯示了控制器插件系統的概述。在此圖中，虛線箭頭顯示瞭如何加載共享庫，大虛線表示進程間通信（ IPC ）。 libController 和 Webots 之間的 IPC 是一個管道（在 Windows 中，這是一個命名管道，否則是一個本地域套接字）。 libRemoteControl 和真實機械手之間的 IPC 由用戶定義（ TCP / IP ，串行等）。 \n 該系統的設計如下。所有實體（控制器，遠程控制庫和機械手窗口庫）應僅調用 libController 接口（ Webots API ）功能。出於模塊化原因，控制器不應知道其機器人窗口和實際機器人。唯一的例外是有關機械手窗口庫的信息，該窗口庫可以知道遠程控制庫以進行初始化和監視。這可以通過通過了 libController API 來完成wb_robot_get_mode，wb_robot_set_mode和wb_remote_control_custom_function功能。當然，這些規則很容易被打破，因為每個實體都運行在同一個流程中。但是，我們建議您尊重他們以獲得良好的設計。 \n 控制器插件被設計為用 C / C ++ 編寫，因為結果應該是一個動態庫。但是，當然可以使用它們之間的 C / C ++ 包裝器以其他語言編寫它們。 \n 加載後， libController 會調用一些控制器插件功能（入口點）。必須定義一組入口點，以使控制器插件順利運行。這些入口點中的一些是必需的，而某些是可選的。 \n 所述 機器人 節點通過其定義了控制器的插件的位置 窗口 及其 REMOTECONTROL 字段。 \n 控制器插件在進程的主線程（也稱為 GUI 線程）中運行：與控制器可執行文件相同。這意味著，如果插件的入口點被阻止，則控制器也將被阻止。並且如果插件崩潰，則控制器也崩潰。 \n 《 參考手冊》中 介紹了將 窗口 和 遙控器 轉換為現有路徑的搜索算法。 \n 借助主 Makefile （與用於構建控制器的文件相同）來構建每個分佈式共享庫： \n WEBOTS_HOME/resources/Makefile.include \n \n 機器人窗口 \n 機器人窗口使程序員可以有效地為其機器人創建自定義用戶界面。可以通過雙擊虛擬機器人或使用 上下文菜單 來打開機器人窗口。 機械手 節點的 窗口 字段指定機械手窗口。 \n 機器人窗口以 HTML 格式實現，並提供以下功能： \n \n 他們依靠 HTML 佈局和 JavaScript 編程。 \n 它們使用兩個 JavaScript 函數直接與機器人控制器通信：window("<robot window name>").receive和webots.window("<robot window name>").send。等效的控制器功能是wb_robot_wwi_receive_text和wb_robot_wwi_send_text。 \n 它們已經可以在網絡上使用，可以用來在網頁上顯示機器人窗口。 \n \n robots/thymio/thymio2.wbt示例仿真中提供了一個 HTML 機械手窗口的簡單示例，並演示了： \n \n 如何在機器人窗口中顯示傳感器信息。 \n 如何從機器人窗口向控制器程序發送用戶界面事件（例如鼠標單擊）。 \n 如何從控制器程序更改機器人窗口的標題。 \n \n HTML機械手窗口可以與使用任何受支持的編程語言（即 C ， C ++ ， Python ， Java ， MATLAB 和 ROS ）編寫的控制器程序進行通信。如果在模擬運行過程中更改或重新啟動了 機器人 的控制器，則與同一 機器人 節點關聯的機器人窗口也將重新啟動。 \n 遠程控制插件 \n 遠程控制插件允許使用 Webots API 輕鬆有效地創建接口，以與真實的機器人進行通信。遠程控制庫的主要目的是使用與真實機器人通信的協議來包裝機器人使用的所有 Webots API 函數。通常，程序（客戶端）在真實機器人上運行，並對通信協議進行解碼以與真實機器人設備進行對話。 \n 當實體調用wb_robot_set_modelibController函數時，將初始化遠程控制庫。該實體通常是 libRobotWindow ，因為使用 GUI 初始化通信（即輸入機器人的 IP 地址等）非常方便。 \n 遠程控制庫有兩個入口點： \n \n bool wbr_init(WbrInterface *ri) \n \n libController調用此函數以初始化遠程控制庫。在第一個wb_robot_set_mode函數調用之後調用它。該功能的目標是將給定的WbrInterface功能與遠程控制庫中的功能映射到結構中。 \n \n void wbr_cleanup() \n \n libController調用此函數以清理庫。 \n 該WbrInterface結構具有多個功能（強制性），必須對其進行映射才能使遠程控制庫平穩運行。他們來了： \n \n bool wbr_start(const char *args) \n \n 當應該開始與真實機器人的連接時（即 wb_robot_set_mode(WB_MODE_REMOTE_CONTROL, ...) 從控制器調用時），將調用此函數。該函數的返回值應告知連接是否成功。該參數與wb_robot_set_mode初始化遙控器時給該功能的參數匹配。由於機器人窗口庫通常負責調用該wb_robot_set_mode函數，因此它們之間傳遞的結構應該匹配。 \n \n void wbr_stop() \n \n 當與真實機器人的連接應停止時，將調用此函數。通常，應該在停止連接之前發送停止實際機器人執行器的命令。 \n \n bool wbr_has_failed() \n \n libController經常調用此函數以檢查連接的有效性。此函數返回的值應始終與連接有效性匹配。 \n \n void wbr_stop_actuators() \n \n 調用此功能可停止實際機器人的執行器。當用戶按下模擬器的暫停按鈕時，將調用此方法。 \n \n int wbr_robot_step(int period) \n \n 當控制器進入步進循環時，將調用此功能。此功能的目的是發送執行器命令，然後讀取啟用的傳感器的值。定時問題應該在那裡解決。機械手應至少等待 一段時間（ 毫秒），如果 \xa0 超過該 時間段， 則返回增量時間。 \n 如上所述，必須與真實機器人一起使用的所有 Webots API 功能都必須包裝在遠程控制庫中。為達到這個： \n \n 必須將 libController 的內部狀態設置為與機械手的當前狀態匹配。 \n \n 通常，當已知傳感器的值時wbr_sensor_set_value，必須調用相應的 \xa0 功能。 \n \n 發送給 libController 的命令必須包裝。 \n \n 通常，在設置執行器的命令時，將wbr_actuator_set_value)調用相應的 \xa0 功能，並且必須將其發送給實際的機器人。 \n 遠程控制 API 和WbrInterface結構的完整定義包含在以下文件中： \n WEBOTS_HOME/include/controller/c/webots/remote_control.h \n 例如，如果您希望能夠使用真實機器人的距離傳感器，則必須包裝該wbr_set_sampling_period函數（設置遠程控制庫的內部狀態以僅在需要時讀取此距離傳感器），然後調用wbr_distance_sensor_set_value刷新距離傳感器後（通常到wbr_robot_step函數中）將函數存儲到遠程控制庫中。 \n 可以在以下目錄中找到完整的示例（使用藍牙與 e-puck 機器人通信）： \n WEBOTS_HOME/projects/robots/e-puck/plugins/remote_controls/e-puck_bluetooth \n \n', 'tags': '', 'url': '編成基礎(使用數值優化方法,控制器插件).html'}, {'title': 'Top 0文章', 'text': '主題:協同設計出更好的產品 \n 今天，數位產品比以往任何時候都更加複雜。創建它們需要多個團隊 成員，每個成員都有自己的一套技能和專業知識。例如，在Savvy，我們的客戶 與以下人員緊密合作：產品經理，UX設計人員，視覺設計師，開發人員，內容 戰略家和成長專家。 我們使用設計協作來處理這種複雜性。正確完成，設計協作可助力 每個專家都有共同的心態，流程和工具，共同建立更好的 產品更快。 我們編寫了此資源，以幫助其他應用程序創建者採用協作文化和流程。 繼續學習為什麼設計協同對於創造吸引人的產品很重要，以及 經驗。我們還將深入探討設計協作心態和文化，工具的要素 進行有效的設計協作，以及實際工作中的設計協作示例。 什麼是“設計”協同？ 在進入之前，我們需要在同一頁上了解什麼是設計協同…… 簡單來說，設計協同就是在設計優先的環境中進行協同。 由於設計的本質，特別是我們在Savvy所做的設計，設計協同趨向於超越人們通常認為的協作。 通常將協作定義為兩個或兩個以上的人共同完成一項任務 為了實現共同的目標，設計協作涉及更多。 設計協同包括更多具有不同技能，艱鉅挑戰和更大規模的人員,具有深遠影響的目標。 您可能將協同視為兩個人掛在一塊藝術品上。它只需要溝通，團隊合作和四隻手。設計協同是指一組策展人.精心設計訪問者的體驗。他們選擇藝術品，選擇在何處以及如何懸掛藝術品， 它所居住的房間（以及房間的照明，家具），甚至前面的房間和建築物 整個。為什麼設計協作很重要 您可以在沒有協同的情況下設計產品，但是需要一個協同設計過程才能完成 不錯的產品。這就是設計協作如此重要的原因。 我們不僅為客戶構建應用程序。精巧構建複雜且多平台的體驗 內部系統，在某些情況下還包括整個品牌和業務。為此，我們利用專業知識 跨多個核心學科：戰略，設計，開發和增長。每個項目都涉及 許多人都有各自的技能和專長。 設計協作將這些思想融合在一起，將他們各自的專業知識結合在一起 創建解決方案，以解決共同目標的所有方面。而不是一個人遇到問題 角度來看，設計協作將這個問題擺在所有專家面前，迫使他們考慮新 觀點和可能性。 \n 例如，我們在設計過程的早期就讓我們的開發人員參與進來，以確保我們 盡快解決技術機會和局限性。這使我們可以有好處並推動我們的技術能力，同時進一步消除了複雜的障礙處理。它還限制了一個人可以在筒倉中工作的數量，從而使工作保持公開狀態,並強調用戶需求和產品目標。 \n 培養設計協同心態 在設計過程中建立有效的協同時，正確的思維方式大有幫助。它規定了誰進行協同，如何進行以及達到何種目的的準則。 \n 合作適合每個人 設計師有時會認為不是設計師的人沒有資格提供良好的產品 反之。但是出色的設計不只是視覺效果。它涵蓋了有關產品的所有內容，從 它的品牌，工程技術及其成長。 設計協同吸引了許多人，每個人都有自己的觀點和優勢。它給大家一個聲音。這些新鮮的觀點為設計師提供了更多信息。觀點 使設計師能夠針對其他設計有持久並有影響的選擇做出正確的決定， \n 開發和營銷選擇 與客戶的合作和其他設計師和團隊的合作一樣重要 成員。在Savvy，我們讓客戶參與產品的整個創作過程。我們 花些時間來解釋選項，並與客戶進行討論以確保我們了解他們的想法。 這使我們能夠及早獲得客戶的認可，並從明確的起點和終點開始工作。 更大的曝光量並不是什麼好事，沒有人知道他們正在與客戶第一次合作. 客戶合作意味著無需花費高昂成本就能更快地獲得更清晰的產品 後退和不必要的會議。 很容易陷入當下而忽略全局。通過更早地參與更多的人 而且，您正在與隊友建立更緊密的聯繫，並共同承擔責任， 對產品成功的興趣。您正在創建一個更加開放和透明的流程，因為更緊密聯繫和投入的團隊。 \n 合作是背景性的 客戶向我們提出了複雜的挑戰和目標。更不用說，我們持續努力 與我們的客戶進行長達數月甚至好幾年的交流，並積累了過去的大量知識 決策，研究和其他有價值的地方。 通過採用上下文優先的方法，您可以確保每個人都處於最高水平知識。這樣，他們就可以在產品上做出最明智的決定。 為了做到這一點，我們通過引入所有團隊成員儘早，記錄和記錄會議，建立一些重疊的地方以及過程中的下一個團隊成員就像客戶一樣。 在個案協同的基礎上，上下文也同樣重要。請遵循以下準則以保持 協作中的上下文優先： 在顯示您的工作之前提供上下文。如果您正在工作，則您的工作是否出現在屏幕上 提供背景信息，您已經失去了聽眾的注意力。 描述您要解決的問題或要達到的目標。介紹與當前問題相關的工作。解釋您的想法以及為什麼要這麼做這些決定。請具體說明您要回饋的內容。 \n 合作是開放，誠實和無畏的 將您的工作（和您自己）放在那裡並不容易。情緒會阻礙提供 開放和誠實的反饋，尤其是當您擔心會傷害他人的感受時。 這並不意味著在協同中沒有情感的位置。 \n 感覺如何在設計中很重要。我們為有情感， 在決策中使用情感的人。離開談話可能會縮短 潛在的想法或解決方案。其實，僅圍繞事實和數據進行實際的討論是不會的。 提供完整圖片。在最壞的情況下，它可能是不相關或提供虛假的敘述。 在Savvy，我們使我們的團隊對收到反饋 “無所畏懼” 。這意味著放手 關於我們為自己創造的東西而被批評的任何焦慮。這也意味著了解我們 在一起變得更強大，更有機會創造偉大的事物。無所畏懼，我們 更好地信任並相互授權，以提供誠實和周到的反饋。 我們的團隊還相信，不要害怕提供反饋。這意味著了解 需要解決的問題以及客戶的品牌和目標。這也意味著要問很多 提問以發現相關思想或幫助指導決策。 嘗試以探索性和指導性的方式提出反饋意見，以建立並改善工作而不是拆散。您的反饋意見應具有建設性。與其說你不喜歡什麼，不如說 反饋以指出您要幫助解決的問題。在以下方面提供可行的步驟 改善工作，或者至少改善您的思維背後的理由。而且不要忘記 表達您喜歡什麼以及為什麼。 \n 合作不僅僅是新的想法 開放並接受協作反饋是一回事，解析這些想法是另一回事 並將它們用作激發自己的催化劑。這是一項發展起來的高級技能 時間。一種實踐方法是成為更好的聽眾。 通常，在與他人交談時，我們會更多地考慮接下來要說的內容 比別人說什麼這會影響反饋過程，尤其是在設計中， 因為我們 在聽到其他意見或解決方案之前，通常都知道我們要說什麼。 當您選擇先聆聽然後再做出反應時，它可以讓您完全理解反饋 有人在介紹您，並讓您更深入-他們使用的觀點是什麼 他們來自哪裡？很有可能這是您在 創建過程。通過聽取並理解反饋的上下文和推理 您正在接受，正在向更多的視角，思維方式和體驗方式開放您的設計。然後，您可以針對挑戰，目標和舉例子測試這些新觀點。 您正在設計用於查看是否更適合用戶。 當所有協作者都在積極聆聽時，更容易接受反饋。 最終，提供良好反饋的技能來自學習如何獲得反饋。當我們做一個 努力成為更好的聽眾，我們也發現自己變得更加謙虛 ，我們認為，更好的設計師。 尋找和使用正確的設計協作工具 正確的工具在增強團隊的設計協作思維方面大有幫助。 在這 部分，您將了解在協作工具中尋找什麼。 我們還建議我們的工具及 自己的經驗。 \n 選擇合適的工具 \n 有效的協作工具為協作者消除了所有障礙，使他們能夠快速輕鬆地訪問和 與工作互動。 這將重點放在提供反饋上。 他們還允許其他人 在不破壞原始設計的情況下進行協作。 過去，我們使用依賴於提供基本版本控制的工具，而不是真正的 協作功能。 例如，設計人員將保存一個Sketch文件並將其上傳到Dropbox。 然後，另一個團隊成員將下載它，進行處理，然後重新上傳。 沒有簡單的方法 在文件移交給他人的情況下進行更改。 我們嘗試了與Github類似的方法， 實踐證明，該工具非常適合管理代碼庫，但在迭代設計工作中卻不那麼重要。 不用說，這些版本控制流程使我們的協作更加耗時， 令人困惑，而且非常不合作。 現在，我們根據協作類型從多種更高級的工具中進行選擇,並且想要實現。 \n FIGMA \n 這是一個協作優先的共享工作區工具。 Figma非常適合在其中有多個人 設計文件的相同區域。 您可以觀看隊友設計或在同一個設計上一起即時工作 。 \n 好處: \n Figma降低了某人在筒倉中工作的能力。 無需添加不必要的修飾或創建靜態可交付結果即可實現協作。 所以 您無需更改工作流程即可展示設計。 可以輕鬆地在其本機環境中查看並與之交互，並隨意進行調整。 何時使用：流量文檔，高保真線框，即時協作和行走 客戶通過一系列屏幕來解釋並獲得有關設計方向的反饋。 \n Marvel \n 雖然Figma傾向於感覺更自由和靈活，但Marvel允許更標準化的形式 合作。 這也使我們的客戶可以輕鬆地與我們合作。 \n 好處： Marvel是一個更簡潔，更規範和集中的空間，非常適合與非設計團隊成員合作 。 \n 它消除了客戶支付帳戶或深入了解工具的所有需求 去看工作。 客戶可以下載屏幕並通過Marvel在設備環境中查看它們的運行情況 應用程式。 使用時間：與客戶和開發人員一起呈現更多最終設計工作。 （學習關於 Marvel與其他原型工具的比較。） \n 其他合作工具 \n Zeplin是一個有用的傳遞工具，可讓開發人員深入了解設計的細節。 工作。 （我們在這裡更深入地討論Zeplin。） Quip是集思廣益和產品/過程文檔的絕佳平台。 我們用它來記錄 並組織團隊成員在工作時需要了解的所有背景和知識 一個專案。 對於集思廣益而不是視覺關注的新想法也很有用。 請注意，還有許多其他工具可以為協作增加類似的好處， 上面列出的。 該列表代表了在我們日常工作中對我們有效的工具 協作，並不表示所有選項都可能對您的團隊有效. \n 精明的設計合作過程在實踐中 \n 現在，讓我們採用上面概述的最佳實踐和工具，並展示它們如何組合在一起。 現實生活中的情況。 我們將使用Press Play應用程序中的實時繪圖體驗來演示 設計協作的重要性。 這項經驗涉及到跨學科的團隊成員數量，包括視覺設計師，UX設計人員，開發人員，產品經理，當然還有客戶。 \n 處境與挑戰 \n Press Play是一個抽獎活動應用程序，可保存每日，每周和每月的圖紙。 用戶獲得門票 觀看廣告，然後選擇五個表情符號輸入繪圖。 然後根據 他們的選擇如何與圖形的隨機選擇表情符號匹配。 這個特殊的任務有 我們為正在等待現場繪畫結果的用戶創造了一個有趣而激動人心的現場體驗。 對於我們來說，為這種體驗創建類似遊戲的動畫非常重要。 我們特別想要 在用戶去看他們的屏幕時在屏幕上喚起一種嬉戲和期待感 所選表情符號與抽獎活動附圖中的表情符號匹配。 就是說，我們需要注意動畫所需的複雜程度及其影響 在整個產品的時間表和成本上。 我們的目標是將保真度提高到 合理的時間，而不會顯著影響項目的預算。 \n 合作過程 \n 第一階段：線框和集思廣益 首先，精明的用戶體驗設計師創建了Press Play的整體用戶體驗和線框，確定了 需要屏幕和每個屏幕的時間安排。 她還提出了一個粗略的概念（如圖 右圖）用於實時繪圖動畫，根據客戶的需求和項目的已建立UX。 她向產品經理和視覺設計師展示了線框和粗糙的動畫設計師。 然後，這三個人都與客戶會面，因此每個人都可以直接聽到反饋。 \n 第二階段：研究與背景 \n 精明的視覺設計師負責創建實際的實時繪圖動畫 新鮮的眼睛，並且對Press Play產品沒有太多的先驗知識。為了起床，他 與UX設計人員和產品經理進行了深入的交談。他還致力於其他研究 有時間了解整體產品目標，挑戰並熟悉工作 至今。如前所述，他是線框演示的一部分，並為客戶反饋。 在這種情況下，他進行了一些與手頭任務直接相關的其他研究。 通過這樣做，他確保自己了解現場繪畫體驗的要求，目標和挑戰。他查看了具有類似經驗和保真度的其他應用，並參考了動畫，以了解最終動畫到底需要顯示什麼（在這種情況下，表情符號和用戶的表情符號選擇）。 \n 在過於束縛解決方案之前，他遇到了一個精明的人 iOS開發人員了解技術限制和注意事項。 然後，我們的視覺設計師和UX設計師集思廣益，對視覺效果至關重要。他們 同意需要為用戶建立緩慢的提示以建立懸念/期望 \n 階段3：循環和反饋 當我們的視覺設計師沿多個不同方向工作時，他選擇了UX設計師 聊聊他在Figma中的進度和設計。通過討論工作，他們激發了更多 想法和迭代，同時確保它們符合客戶期望。還有更多 他手下有很多可靠的選擇，他再次與iOS開發人員會面，以確保一切都在 從技術角度出發。 \n 階段4：客戶的反饋和發展 當我們找到更多，更最終的體驗版本時，視覺設計師走了 通過他們與客戶一起使用Figma。 Press Play產品經理和UX設計師 還提供了反饋和指導。 一旦他們都了解了引起顧客興趣的東西，視覺設計師便開始最大限度地發揮作用。 視覺效果並使它們為開發做好準備。他繼續與iOS開發人員合作， 在技術層面上充分利用該概念。 最終結果 Press Play的實時繪圖動畫是工作中設計協作的一個範例。 一些跨學科專家一起解決更大的設計和開發挑戰 意思是。沒有設計協作，我們將找不到理想的交集 用戶體驗，視覺和技術。 當客戶在他的應用程序中看到動畫生動時，他稱其為“開創性的”。 而且，這種Press Play體驗的研究，合作和創造對我們有幫助 發現產品用戶旅程中的空白。最初，現場繪畫的目的是為了娛樂 向用戶顯示結果的方式。在設計過程中，我們意識到，如果用戶不觀看實時繪圖，他們就會迷失方向，無法體驗終結該圖紙的用戶旅程。 基於這一發現，我們決定在其他兩個地方也改進該應用程序。我們添加了一個 獲勝者範圍的結果/實時繪圖元素，以及用戶的輸贏歷史記錄部分 應用程序的細節部分。最後，需要用戶體驗,來設計協同使我們得以實現這一些未實現的目標。 \n 結論說明 \n 設計協作需要解決建造中伴隨的複雜，關鍵問題 很棒的產品和經驗。 通過利用多個團隊成員的專業知識 跨學科的設計協作可確保團隊從各個角度應對挑戰 並尋求更好的解決方案。 借助正確的思維方式，工具和流程，進行設計協作 使團隊能夠通過創造性思維和迭代來更深入。 我們希望本指南為您提供良好的基礎，以便您可以構建自己的有效設計 協作過程。 您可以在Savvy博客上了解有關設計和產品策略的更多信息， 並隨時在Savvy Apps網站上與我們聯繫以尋求幫助。 \n', 'tags': '', 'url': 'Top 0文章.html'}, {'title': '心得-2', 'text': '在看完Top 0的文章後，學到了蠻多事情的，在協同設計的過程中， 一定會遇到很多各式各樣得人，其中可能想法跟我類似的屈指可數， 但既然都是“協同”設計了，我們為何不聽聽看別人的想法呢？ 不光在協同設計方面，在其他事情上也是一樣，讀完這篇文章， 讓我領悟到一個團隊最需要的就是聆聽和溝通， 如果少了這兩個元素，那這個團隊很難被稱上是一個優秀的團隊， 做出來的東西，也沒辦法看到組內的團隊精神。 \n', 'tags': '', 'url': '心得-2.html'}, {'title': '設定IPV6', 'text': '操作影片1 \n \n 操作影片2 \n', 'tags': '', 'url': '設定IPV6.html'}]};