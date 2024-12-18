//스케마 파일을 여기에 붙여넣기
export const rawGameData = `
$schema: './schema.yaml'

nodes:
  _after_branch:
    dest:
      - id: _prev
  _begin:
    dest:
      - id: scene1_1
        set:
          hp: 1
          _prev_idx: -1
  death:
    dest:
      - id: _prev
        set:
          dead: true # 죽음, 프론트엔드에서 적절히 처리하기

  scene1_1:
    text: '당신은 학교 건물을 뒤로 하고 집을 향해 발걸음을 재촉하고 있습니다. 한여름의 뜨거운 햇빛에 달궈진 모래가 튀어 종아리를 때리지만 여느 때와 같이 당신에게는 집에 가고 싶다는 일념 뿐입니다. 늘 교문 근처에서 전단지를 나눠주고 있던 사람마저도 오늘은 마음에 들지 않네요.'
    image: '배경이미지1'
    branch:
      - text: '전단지 살펴보기'
        id: scene1_1_1
      - text: '다음'
        id: scene1_2

  scene1_1_1:
    text: '전단지는 빨간색과 검은색의 조합으로 되어있네요. 오픈 1주년 기념 배양육 100% 무한리필이 단돈 14,000원으로 할인! .. 알 바가 아닙니다'
    image: '전단지'
    next:
      id: scene1_2

  scene1_2:
    text: '막 정문을 지나는데 벌써 조금 이 나는 것이 느껴집니다. 정문을 마주보고 있는 전봇대에 걸린 현수막이 눈에 들어옵니다. "구원받고 싶다면 믿으라." 현수막 상단에는 당신의 학교, 탐진 신학교의 로고가 박혀 있습니다. 지난번 현수막이 떨어진지 얼마나 됐다고, 벌써 무슨 일이 났나 봅니다. 누군가가 반역을 실패한 것 같네요, 아마.'
    image: '배경이미지1'
    next:
      id: scene1_3

  scene1_3:
    text: '언뜻 저 멀리에 다급하게 뛰어가는 한 사람이 보입니다. 탐진신학교의 교복을 입고 있네요. 교복 색을 보니 당신의 후배인듯 합니다.'
    image: '배경이미지2'
    next:
      id: scene1_4

  scene1_4:
    text: '자세히 보니 왠지 그 실루엣이 익숙합니다. 단발이라기엔 조금 긴 머리, 작은 키에 어울리지 않게 빠른 걸음. 아, 당신의 동생 휘인 것 같습니다.'
    image: '청휘2'
    next:
      id: scene1_5

  scene1_5:
    text: '휘가 저렇게 뛰어가는 모습은 본 적이 없는데요. 성격도 급하지 않고 친구도 많은 휘가 당신보다 먼저 가는 일도 흔한 일은 아닙니다. 무슨 일이 있는 게 분명합니다. 휘에게 무슨 일이 있다면, 당신과도 관련되어 있을 확률이 높겠죠.'
    image: '청휘2'
    branch:
      - text: '휘를 따라간다'
        id: scene2_1
      - text: '휘는 무시하고 가던 길을 간다'
        id: scene1_6
        set:
          achievement_pioneer: true

  scene1_6:
    text: '당신은 날씨가 왜 이렇게 더운 건지 생각하며 집으로 걸어갑니다.'
    image: '배경이미지2'
    next:
      id: scene2_2

  scene2_1:
    text: '당신은 휘를 뒤쫓아 열심히 뛰었지만 학교 육상부인 휘를 따라가기에는 역부족이었습니다. 하필 이렇게 더운 날에... 당신은 턱 끝까지 차오른 숨을 몰아쉬며 집으로 걸어갑니다.'
    image: '배경이미지2'
    next:
      id: scene2_1_1

  scene2_1_1:
    text: '열심히 뛰어온 것이 무색하게 집 앞은 평소와 다름없이 조용합니다. 왠지 허탈한 기분이 드네요.'
    image: '배경이미지6'
    next:
      id: scene2_2

  scene2_2:
    text: '공동현관문을 열고 건물에 들어갑니다. 엘리베이터는 5층에 서 있네요.'
    image: '배경이미지6'
    branch:
      - text: '엘리베이터 버튼을 누르고 기다린다'
        id: scene2_2_1
      - text: '계단으로 걸어 올라간다'
        id: scene2_3
      - text: '다시 밖으로 나간다'
        id: scene2_2_01

  scene2_2_01:
    text: '편의점이라도 들렀다 갈까 밖으로 나섰지만, 날씨가 너무 덥습니다. 나오자마자 다시 들어가고 싶어지네요.'
    image: '배경이미지6'
    next:
      id: scene2_2

  scene2_2_1:
    text: '당신은 엘리베이터 버튼을 누르고 기다립니다. 평소에 내려오던 속도보다 느린 것이 왠지 모르게 불안합니다.'
    image: '배경이미지6'
    next:
      id: scene2_2_2

  scene2_2_2:
    text: '이런, 내려오던 엘리베이터가 멈췄나 봅니다. 표시되는 숫자가 3에서 멈춰서 줄어들지를 않네요. 어쩔 수 없이 걸어가야겠습니다. 힘들어 죽겠는데.'
    image: '배경이미지6'
    next:
      id: scene2_3

  scene2_3:
    text: '계단을 올라가는 일이 이렇게 힘든 일이었던가요. 오늘따라 4층이 너무 높게 느껴집니다. 당신은 중간 중간 쉬어가면서 기다시피 계단을 올라 현관문 앞까지 도착합니다.'
    image: '배경이미지6'
    next:
      id: scene2_4

  scene2_4:
    text: '당신은 현관문에 기대어 도어락을 누르려다 문이 살짝 움직이는 것을 느끼고 멈칫합니다. 이런! 문이 열려 있었군요! 역시 무슨 일이 있었던 것이 분명합니다. 안 그래도 빨리 뛰던 심장이 주체할 수 없을 정도로 뛰기 시작합니다.'
    image: '배경이미지7'
    next:
      id: scene2_5

  scene2_5:
    text: '오른손을 왼쪽 가슴팍에 올려둔 채 조심스레 문을 열어봅니다. 온갖 물건이 바닥에 나뒹구는 거실의 모습이 마음 속에 안일하게 남아 있던 한 줄기 희망마저 지워버리네요. 대체 누가 집에 들어왔길래 집안이 이 정도로 난장판이 된 것일까요?'
    image: '배경이미지7'
    branch:
      - text: '수첩과 볼펜을 확인한다'
        id: scene2_5_1
      - text: '주머니칼을 확인한다'
        id: scene2_5_2

  scene2_5_1:
    text: '거실 바닥에 떨어져 있는 수첩과 검정 볼펜. 무언가를 메모할 때 쓸 수 있을 것 같다.'
    set : 
      수첩 : true
    image: '수첩'
    next:
      id: scene2_6

  scene2_5_2:
    text: '어딘가 유용하게 쓸 수 있을 것 같은 주머니칼이다.'
    image: '주머니칼'
    set: 
      주머니칼 : true
    next:
      id: scene2_6

  scene2_6:
    text: '당신은 이 사태가 아버지와 관련된 것임을 본능적으로 직감하였습니다. 휘와 당신을 위험에 노출시킬 수는 없다며 집을 나간 지 어언 2년이 다 되어가는 아버지이지만, 그것 만으로 모든 위험에서 벗어나는 것은 아버지 청상준의 명성에 걸맞지 않죠.'
    image: '배경이미지7'
    next:
      id: scene3_1

  scene3_1:
    text: '밖에서 누군가 계단을 뛰어 올라오는 소리가 들립니다. 이곳으로 향하고 있는 것일지도 모릅니다.'
    image: '배경이미지7'
    branch:
      - text: '급하게 방으로 들어가 숨는다'
        id: scene3_1_1
      - text: '그대로 서 있는다'
        id: scene3_1_3

  scene3_1_1:
    text: '잠시 뒤 문이 열리고 누군가의 숨소리가 들립니다.\n"엽아! 집에 있니?"\\n아, 이건 요한 아저씨의 목소리군요! 아버지는 집을 나가면서 요한 아저씨에게 아이들을 돌보는 자신의 역할을 넘겼습니다. 요한 아저씨는 아버지의 기대에 부합할 만한 사람이었습니다. 이제 당신에게 요한은 두 번째 아버지라고도 할 수 있는 사람이 되었죠.'
    image: '배경이미지7'
    next:
      id: scene3_1_2

  scene3_1_2:
    text: '당신은 책상 밑으로 구겨 넣었던 몸을 펴고 방문을 나섭니다.'
    image: '배경이미지7'
    next:
      id: scene3_2

  scene3_1_3:
    text: '"엽아!"\\n활짝 열린 문 밖에서 당신을 부른 것은 요한 아저씨였습니다. 아버지는 집을 나가면서 요한 아저씨에게 아이들을 돌보는 자신의 역할을 넘겼습니다. 요한 아저씨는 아버지의 기대에 부합할 만한 사람이었습니다. 이제 당신에게 요한은 두 번째 아버지라고도 할 수 있는 사람이 되었죠.\\n밖에 서 있는 사람이 요한 아저씨라서 얼마나 다행인지 모릅니다. 만약 총을 든 강도였다면 당신은 지금쯤 바닥에 누워있을 지도 모르는 일이지요.'
    image: '배경이미지7'
    next:
      id: scene3_2

  scene3_2:
    text: '"아저씨! 이게 무슨 일..."\\n"우선 빨리 사무소로 가자. 위험할지도 몰라."\\n요한 아저씨가 말을 끊고 당신의 가냘픈 손목을 붙잡습니다. 그대로 계단을 뛰어 내려가 바로 앞에 주차되어 있던 자동차를 타고서야 요한은 겨우 한숨을 돌립니다.'
    image: '자동차'
    next:
      id: scene3_3

  scene3_3:
    text: '거친 숨이 턱 끝까지 차올랐지만, 그래도 물어볼 건 물어봐야겠습니다.\\n"뭐가 어떻게 된 거에요?"\\n요한은 걱정 가득한 눈으로 당신을 마주 보며 대답합니다.\\n"그러게... 우리도 아직 정확한 건 모르겠다. 일단 하나 말해줄 수 있는 건 너희 아버지가 실종됐다는 거다."'
    image: '자동차안'
    next:
      id: scene3_4

  scene3_4:
    text: '요한 아저씨가 키를 꽂고 돌리자 자동차가 스르르 미끄러지듯이 움직입니다. 항상 아버지를 잃을지도 모른다는 긴장 속에 살아와서 그런가, 아버지가 실종되었다는 소식을 들었는데도 감정이 크게 동요하지는 않습니다. 올 게 왔구나, 싶기도 하네요.'
    image: '자동차안'
    next:
      id: scene3_5

  scene3_5:
    text: '"아버지는 괜찮으실 거다."\\n근육질 몸과 대비되는 요한 아저씨의 촌스러운 사투리는 확실히 사람을 편안하게 하는 힘이 있습니다. 강인하지 않은, 떨리는 목소리였지만 왠지 그 말을 들으니 정말 아무 일도 없을 것만 같은 기분이 듭니다. 그럴 리는 없지만요.'
    image: '자동차안'
    next:
      id: scene3_6

  scene3_6:
    text: '"근데 우리 어디로 가는 거에요?"\\n"우선은 사무소로 갈 거야. 우리 집에선 무슨 일이 생긴 건지 알고 나서 돌아오는 게 낫겠다고 결정했어. 지금은 집을 저 모양으로 만든 게 경찰인지 갱스터인지도 모르니까."'
    image: '자동차안'
    branch:
      - text: '휘에 대해 물어본다'
        id: scene3_6_1
      - text: '조용히 있는다'
        id: scene3_7

  scene3_6_1:
    text: '"휘는 이미 사무소에 들렀다. 원체 열정적인 애잖니. 지금 뭐하고 있는지는 모르겠네."'
    image: '자동차안'
    next:
      id: scene3_7

  scene3_7:
    text: '요한 아저씨도 더 이상 말을 꺼내지는 않습니다. 아버지와 함께한 시간만큼 생각이 많아질 수 밖에 없겠지요. 당신은 어쩌면 스스로보다 요한이 더 아버지를 걱정하고 있을지도 모른다고 생각합니다. 본인은 아버지에게 좋은 기억이 많지 않아서일까요.'
    image: '자동차'
    next:
      id: scene4_1

  scene4_1:
    text: '달리 할 것 없이 창 밖을 바라보고 있으니 자연히 휘에 대한 생각을 하게 되네요.'
    image: '청휘1'
    next:
      id: scene4_2

  scene4_2:
    text: '당신과 함께 한날 한시에 태어난 사람이 어떻게 그리도 당신과 닮지 않은 걸까요? 아니, 당신이 휘를 닮지 않았다고 하는 것이 맞으려나요. 휘는 아버지를 똑 닮았으니까요.'
    image: '청휘1'
    next:
      id: scene4_3

  scene4_3:
    text: '아버지가 그의 비밀을 일러준 것은 아마 당신이 2학년일 때였던 것 같습니다. 어머니, 이제는 그저 기억의 일부가 되어버린 그 사람은 아버지 곁에서 알 수 없는 표정으로 앉아있었고, 당신과 휘는 가만히 앉아 아버지의 말을, 그가 당신 앞에서 처음 내뱉은 진중하고 침울한 말을 듣고 있었습니다. 그 기억은 거의 10년이 다 되어가는 지금도 생생합니다.'
    image: '상준1'
    next:
      id: scene4_4

  scene4_4:
    text: '"요즘 학교에서는 뭘 배우냐? 그, 뭐야, 종교학 시간에?"'
    image: '상준1'
    branch:
      - text: '신께서 우리 우주를 어떻게 만드셨는지 배우고 있어요'
        id: scene4_4_1
        set:
          achievement_model_student: true
      - text: '잘 모르겠어요...'
        id: scene4_4_2

  scene4_4_1:
    text: '아버지는 짧게 한숨을 내뱉으셨던 것 같습니다.\\n"그걸 믿냐?"\\n잠시 정적이 맴돌았고, 머릿속은 금세 혼란으로 가득 찼던 기억이 납니다. 믿느냐니, 그런 질문은 들어본 적도, 생각조차도 해본 적이 없었으니까요. 당연한 진리를 믿고 말고 할 일이 무엇이 있을까요.'
    image: '상준1'
    next:
      id: scene4_5

  scene4_4_2:
    text: '아버지는 웃으며 말을 이으셨습니다.\\n"수업 제대로 안 듣지?"\\n당신은 혼날 것이 두려워 떨고 있었을 겁니다. 하지만 아버지는 호탕하게 웃으셨죠.\\n"그래, 내 아들답네."\\n당신은 휘의 얼굴에도 작게 미소가 떠오른 것을 보았습니다.'
    image: '상준1'
    next:
      id: scene4_5

  scene4_5:
    text: '"나는…\\n이단이다."\\n아버지는 자식들의 얼굴에 떠오른 표정을 훑으며 잠시 뜸을 들이셨습니다.\\n"그러니까, 학교에서 가르치는 그 신은 거짓이라 믿는다는 거다."\\n아버지는 조심스럽게 당신의 표정을 계속 살피셨지만, 한편으로는 후련해 보이셨습니다.'
    image: '상준1'
    branch:
      - text: '"하지만..!"'
        id: scene4_5_1
      - text: '생각을 정리한다'
        id: scene4_6

  scene4_5_1:
    text: '"하지만..! 그게 왜 틀렸는데요? 그게 거짓말이면 왜 다 그렇다고 해요?"\\n아버지는 깊게 한숨을 쉬셨습니다.\\n"그게 편하니까."\\n그동안 가만히 있던 휘가 갑자기 고개를 들고 한 마디를 거들었습니다. 아버지는 휘에게 따가운 눈길을 보냈고, 휘는 다시 고개를 푹 숙였습니다.'
    image: '청휘1'
    next:
      id: scene4_6

  scene4_6:
    text: '당신은 이 사태가 아버지와 관련된 것임을 본능적으로 직감하였습니다. 휘와 당신을 위험에 노출시킬 수는 없다며 집을 나간 지 어언 2년이 다 되어가는 아버지이지만, 그것 만으로 모든 위험에서 벗어나는 것은 아버지 청상준의 명성에 걸맞지 않죠.'
    image: '상준1'
    next:
      id: scene4_7

  scene4_7:
    text: '그때부터 1년이 넘는 시간 동안 당신은 방황했었죠. 휘는 곧바로 아버지의 사상에 동조했고요. 휘는 4학년 때부터는 아예 아버지 사무소에서 작은 일들을 맡을 정도로 아버지를 잘 따랐습니다. 아마 그때부터 아버지와 휘에 대한 당신의 거리감이 형성되었을 겁니다.'
    image: '청휘1'
    next:
      id: scene4_8

  scene4_8:
    text: '나야 그렇다 쳐도 휘는 뭘 안다고 그렇게 적극적으로 아버지를 따르는 건지, 당신은 항상 휘를 이해할 수 없었습니다.'
    image: '청휘1'
    next:
      id: scene4_9

  scene4_9:
    text: '"엽아."\\n수없이 반복해 온 사념에 빠져있던 당신을 요한이 현실로 끌어냅니다.\\n"휘는 상준이한테 무슨 일이 생긴 건지 알아보러 나갔다네. 그냥 궁금할까 해서."\\n이제 휘는 요한과 같은 단원이니, 저런 중요한 임무도 맡기는 모양입니다.\\n"기특하구나."\\n요한이 중얼거립니다.'
    image: '자동차안'
    next:
      id: scene5_1

  scene5_1:
    text: '당신과 요한은 저항단의 사무소로 걸어들어갑니다. 온몸이 피로한 상태였지만 몸은 계속 긴장된 상태였습니다. 사무소 안은 난잡했죠. 많은 조직원들이 한데 모여있었고, 리더의 부재로 인해 혼잡스러운 상태였습니다.'
    image: '배경이미지3'
    next:
      id: scene5_2

  scene5_2:
    text: '요한이 엽과 함께 사무소로 들어가자마자 누군가가 요한을 부릅니다.\\n"요한아, 이리 한번 와봐라."\\n요한은 한 테이블로 곧장 달려갔고, 테이블에서 토의하고 있던 사람들 틈에 앉습니다. 요한은 사람들의 이야기를 듣고 자신의 생각을 말하며 토의에 참여합니다.'
    image: '배경이미지3'
    next:
      id: scene5_3

  scene5_3:
    text: '요한이 불려가자 당신은 혼자 남게 되었습니다. 여기서 뭘해야 하나 고민하던 찰나 한 조직원이 당신에게 다가왔습니다. 조직원은 당신에게 안부를 물으며 지금까지 알아낸 내용을 대강 말해줍니다.'
    image: '배경이미지3'
    next:
      id: scene5_4

  scene5_4:
    text: '정보를 엽에게 전해준 뒤 그 조직원은 당신이 피로해하는 것을 느꼈는지 엽을 더 붙잡아두지 않고 곧장 쉴 수 있는 방으로 안내해줍니다. 방은 허름했지만 지친 몸에 쌓인 긴장을 풀어줍니다. 따뜻한 방이네요.'
    image: '배경이미지3'
    next:
      id: scene6_1

  scene6_1:
    text: '조직원들이 웅성거리며 사무소의 자료를 정리하며 리더의 실종에 대해 논의하고 있습니다. 그때, 사무소 문이 거칠게 열리며 벽에 부딪혀 큰 소리가 납니다. 모두가 고개를 들어 소리가 난 곳을 바라봅니다.'
    image: '배경이미지1'
    next:
      id: scene6_2

  scene6_2:
    text: '문을 연 사람은 휘였습니다. 엽이 들어왔을 때에는 흘겨보고 말던 조직원들이 하던 일을 모두 내려놓고 휘에게 집중합니다. 조직원들 모두가 휘가 말을 꺼내기를 기다리네요. 얼마 후 잠시 숨을 고른 휘가 입을 엽니다.'
    image: '청휘1'
    next:
      id: scene7_1

  scene7_1:
    text: '휘가 방 안을 둘러보며 깊은 숨을 내쉽니다. 잔뜩 안 좋은 일이 있었다는 티를 내는 얼굴로 말이죠. 당신을 포함한 모두가 침묵하며 휘가 말하기를 기다립니다. 휘가 입을 엽니다.\\n”아버지가 체포됐대요!”\\n 조직원들은 말문이 막힙니다. 당신은 놀란 표정으로 휘를 바라볼 뿐이였습니다.'
    image: '청휘1'
    next:
      id: scene7_2

  scene7_2:
    text: '휘는 이어서 자신이 알아낸 단서들을 말합니다.\\n"근처 이웃들과 이야기를 나눠봤어요. 몇몇은 오늘 아침 경찰차 소리를 들었다고 했고, 또 어떤 사람들은 경찰들이 어딘가로 급히 뛰어가는 모습을 봤다고 했어요.”'
    image: '청휘1'
    next:
      id: scene7_3

  scene7_3:
    text: '"그리고 경찰들과 친한 식당 아저씨를 찾아갔는데, 그분이 오늘 경찰 측에서 큰 작전이 있다는 말을 들었다고 했어요."\\n휘는 자신이 알고있는 모든 정보를 말했습니다.'
    image: '청휘1'
    next:
      id: scene8_1

  scene8_1:
    text: '저항단 사무소 단원들은 당신의 아버지의 행방을 알아내기 위해 머리를 맞대고 있습니다\\n갖가지 의견이 나오던 중 단원 한 명이 입을 엽니다.\\n"어차피 짭새들 일도 제대로 안 하는데 분명 집에 무언가 남아있지 않을까? 그놈들이 그렇게 치밀하게 모든 곳을 둘러볼 애들이 아닌데."'
    image: '배경이미지3'
    next:
      id: scene8_2

  scene8_2:
    text: '그렇습니다. 월면도시의 경찰들은 열심히 일하지 않습니다. 길을 가다 보면 삼삼오오 모여 도박 내기를 하며 담배를 태우는 모습을 심심치 않게 볼 수 있습니다. 아버지의 말을 돌이켜보면 경찰의 범죄 검거율은 지구와 비교하였을 때 처참한 수준이라고 했던 것 같습니다.\\n그렇게 사무소에서는 경찰들이 실수로 두고 간 중요한 물품이 있을지 찾아보기로 결정합니다.'
    image: '배경이미지3'
    next:
      id: scene8_3

  scene8_3:
    text: '누구를 보내야 할지가 의문입니다. 일단 집에 대해 알고 있는 당신과 휘, 요한은 보내는 것이 정해졌지만, 세 명은 위험할 것 같아 한 명을 더 보내야 할 것 같습니다. 저항 단원들에게 함께 수색 임무를 맡을 인원은 손을 들으라고 말합니다.\\n한 명이 손을 들고, 곧이어 두 명이 더 손을 듭니다. 첫 두 명은 전투 능력이 부족하였기에 남은 아메드를 수색대에 포함하기로 합니다'
    image: '배경이미지3'
    next:
      id: scene8_4

  scene8_4:
    text: '사무소에서는 계속해서 아버지의 행방을 추적하기로 합니다. 자주 가던 상점, 알고 있는 이웃들에게 수소문하느라 바쁜 모습입니다.'
    image: '배경이미지3'
    branch:
      - text: '수색대를 따라간다'
        id: scene9_1
      - text: '수색대와 떨어져 혼자 행동한다'
        id: scene8_4_1

  scene8_4_1:
    text: '당신은 사무소에 남아 단원들이 서로 시끄럽게 떠드는 것을 듣습니다. 회의에 참여하려고 했는데, 이렇게 정신 사나워서야 안 되겠네요. 당신은 막 사무소 문을 나서려는 휘를 따라갑니다.'
    image: '배경이미지3'
    next:
      id: scene9_1

  scene9_1:
    text: '모험은 완성판에서 계속됩니다. 엽과 휘는 아버지를 다시 만날 수 있을까요? 많은 기대 부탁드립니다.\\n”다음”을 누르면 재시작합니다.'
    image: '청엽1'
    next:
      id: scene1_1
`