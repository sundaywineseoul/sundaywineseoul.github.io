import { error } from '@sveltejs/kit';

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  switch (params.producer) {
    case 'eccocivi':
      return {
        title: 'Eccocivi',
        contents: [
          '마음을 설레게 하는 하늘색 박스, 명품 주얼리 브랜드 #티파니앤코 를 지금의 티파니로 만들어준 사람이 누군지 아시나요? 바로 엘사 퍼레티인데요.',
          '이탈리아 재벌가의 막내딸에서 뉴욕의 패션모델로, 그리고 세계 최고의 주얼리 디자이너로 변신을 거듭했던 엘사 퍼레티. 그녀의 삶은 화려했습니다. 뉴욕의 고층 아파트에서 마약, 예술과 항상 함께하는 일상이었죠. 하지만 그런 중에도 그녀의 안식처였던 곳은 따로 있었습니다. 바로 스페인 까딸루냐의 와이너리, Eccocivi입니다.',
          '​그녀는 우연히 알게 된 스페인의 중세 마을 Sant Marti Vell에 반해 그 일대의 집과 밭을 사들였습니다. 인적이 거의 없고 황폐해진 곳이었지만, 어쩐지 푹 빠져버렸죠. 그래서 손수 하나하나 개조하고, 와이너리를 만들겠다는 꿈을 키웠습니다. 마침 마을은 휴화산 자락에 위치해 있었습니다. 남동향 휴화산자락, 지중해성 기후 덕분에 매해 열매가 완숙되기 좋은 조건이었죠. 그래서 곧 "Here we are"이라는 의미의 "Eccoci"라는 이탈리아어로 와인 브랜드를 시작했습니다. (나중에는 와인이라는 의미의 vi를 더해 "Eccocivi"가 최종 이름이 됩니다.) 경사로 인해 100% 수작업으로 수확하고 하나하나 선별하는 과정을 거치는 곳입니다. 경사지는 일조량 확보 측면에서는 좋은 조건이지만, 사실 인건비 측면에서는 악조건이죠.',
          '​이후 젊은 감각의 와인마스터 Guillem Parres가 합류하며 Eccocivi는 빠르게 시장에서 자리를 잡아나갔고, 지금은 그의 여러 와인들이 좋은 평가를 받으며 유럽뿐만 아니라 북미 등 각지로 수출되고 있습니다. 안타깝게도 엘사 퍼레티 여사는 판데믹 기간 동안 작고하셨지만, 그녀가 애정을 담아 만들었던 와인들은 영원히 살아갈 겁니다. ​매년 와인마스터 Guillem Parres가 직접 블렌딩한 Montrodo 시리즈는 특히 실키한 텍스쳐로 목넘김이 좋고 충분한 산도가 뒷받침되며 향이 풍성해 식사와 곁들이기에 가장 적합한 와인입니다. 티파니 디자이너의 와인, 장인의 블렌드. 궁금하지 않으신가요?'
        ],
        images: ['/producers/eccocivi_01.jpg']
      };
    case 'podere-sottoilnoce':
      return {
        title: 'Podere Sottoilnoce',
        contents: [
          '에밀리아로마냐 지역의 내추럴 와인 생산자, " Podere Sottoilnoce"는 "호두나무 아래에서"라는 의미를 담고 있는데요. 포도밭의 가장 오래된 포도나무들 사이에 거대한 호두나무가 한 그루 서 있기 때문에 붙은 이름입니다. "호두나무 아래에서는 아무것도 자라지 않는다"라는 서구권 격언과는 반대되는... 아이러니한 상황이죠?',
          '와이너리의 주인이자 와인마스터인 Max Brondolo는 원래 아스티에서 바르베라 와인을 만들던 집안 출신이지만, 비오디나미 농법에 매료되어 에밀리아로마냐에 정착한 후 에밀리아로마냐의 토착 품종으로, 모데나 전통 방식을 존중하면서 비오디나미 농법을 이용해 포도를 재배하고 와인을 양조하게 되었습니다. 비오디나미는 단순한 농사 방법이 아니라, "농장은 자생이 가능한 하나의 유기체"라는 믿음이 있는 철학입니다. 화학적인 개입을 지양하는 것은 물론, 달과 별의 움직임을 기반으로 하기 때문에 "초승달이 뜨는 날" 병입을 하는 등 신비한(?!) 요소도 있습니다. 그런 비오디나미 농법을 충실하게 따르는 Podere Sottoilnoce에서 양조는 인간의 개입이 최소한으로만 이루어집니다. 시판 효모는 사용하지 않고 토착 효모만을 사용하며 단백질을 사용한 정제도 하지 않습니다. 그래서 #비건와인 #비건프렌들리 와인으로 인정받고 있죠.',
          '약간의 침전물과, 클라우디한 느낌이 있으며 병마다 약간씩 다른 탄산감은 또다른 매력 포인트입니다. 보통 많이 보이는 화이트 스파클링 (탄산은 일반적인 스파클링보다 약한 강도의 프리잔떼 입니다.) 외에도, 색깔부터 매력적인 로제와, 흔히 보기 힘든 레드 스파클링까지 들여왔습니다.',
          '매년 10월 4일, 성 프란치스코의 날에 60년 된 토착품종 올드바인에서 난 포도를 수확해 꼭 초승달 뜨는 밤에 바틀링하며, 연평균 단 6,000 바틀만 생산하는 Podere Sottoilnoce의 귀한 와인을 만나보세요.​'
        ],
        images: ['/producers/podere_01.jpg', '/producers/podere_02.jpg']
      };
    case 'hegyi-kaló':
      return {
        title: 'Hegyi Kaló',
        contents: [
          '헝가리의 유명 와인 산지 에게르에서도 HEGYI-KALÓ (Ket Diofas Pince)가 있는 소몰야는 숨은 진주같은 곳입니다. 이곳에 바로 오늘의 주인공, 와이너리 HEGYI-KALÓ가 있죠. 와이너리의 주인이자 와인마스터인 줄리아와 아담 부부는 선대로부터 내려오던 이 작은 와이너리를 이어가고 있는데요. 집 뒤편 언덕에 소박하게 자리한 셀러에서 헝가리 최고의 내추럴 와인이 생산됩니다.',
          '줄리아는 내추럴 와인을 만들게 된 이유에 대해 이렇게 말합니다. "저희 아버지, 임레 칼로(Imre Kalo)가 집안에서 처음으로 내추럴 와인을 만들기 시작하셨습니다. 1990년대 헝가리에서는 극히 드물게 수확량이 매우 낮은 완숙 포도를 와인에 사용했습니다. 장기간의 스킨콘택트를 통해 자연 발효를 시키고 그 후 배럴에서도 장기간 숙성시키셨죠. 저와 제 남편은 학생 때부터 아버지를 많이 도왔습니다. 포도밭과 저장고 작업도 도왔고요. 내추럴 와인 제조에 대해 많은 것을 배우려고 노력했습니다. 특히 저희처럼 소규모로 생산하는 경우 와인을 통해 지역의 매력을 그대로 보여드릴 수 있다는 게 장점이라고 생각합니다."',
          '주로 레아니카, 올라스즈리즐링, 메디나, 케크프랑코스, 투란과 같은 현지 토착 품종을 이용해 전통적인 방식으로 와인이 생산됩니다. 가족 와이너리 그 자체인 이곳에서는 헝가리 전통 방식으로 포도밭을 경작하고, 토종 효모로 발효하며, 첨가물이나 산업 기술 없이 수년간 오크통에서 와인을 숙성합니다. 병입할 때 여과나 청징을 하지 않으며 대부분의 와인은 한 배럴에 담긴 내용물 그대로입니다.',
          '이렇게 만들어진 HEGYI-KALÓ의 와인은 “이런 와인은 처음 마셔본다”는 평가를 자주 듣습니다. 이곳이야말로 세상에 하나뿐인 와인이라는 평가가 가장 잘 어울리는 와이너리 아닐까요?'
        ],
        images: [
          '/producers/hegyikalo_01.jpeg',
          '/producers/hegyikalo_02.jpeg',
          '/producers/hegyikalo_03.jpeg'
        ]
      };
    case 'clos-thierrière':
      return {
        title: 'Clos Thierrière',
        contents: [
          '프랑스의 MZ 쌍둥이 형제가 100년 올드바인 슈냉블랑을 만났다? 듣기만 해도 희한한 이 조합이 바로 프랑스 루아르 부브레 AOC의 와이너리 Clos Thierrière입니다.',
          '기욤과 밥티스트, 두 형제는 9살 때 부모님께서 와인을 병입하는 파티를 열었는데, 그때 병입된 와인병에 라벨을 붙이며 놀았던 것이 이들의 첫 와인 추억입니다. 그렇게 시작된 와인에 대한 관심은 점점 커져 결국 와인 애호가로 성장했고, 학교에서는 와인이 아닌 다른 전공을 선택했지만 결국에는 직접 최고의 와인을 만들어 보겠다는 열망 하나로 두 사람이 의기투합하여 루아르의 부브레 지역에 정착하게 됩니다.',
          '형제가 양조를 시작한 포도밭은 올드바인 슈냉블랑으로 가득한 곳입니다. 보통 100년은 고사하고 30년 올드바인도 찾기 힘든데, Clos Thierrière에서는 최고 100년부터 최소 30년 수령의 다양한 올드바인을 보유하고 있습니다. 다른 와이너리들에서는 블렌드를 각기 다른 품종으로 한다면, 이곳의 블렌드는 다양한 수령의 올드바인 슈냉블랑으로 이루어집니다.',
          '자갈토, 점토, 석회토, 미사토 등 토질도 다양해서 같은 슈냉블랑 품종의 와인이지만 각자의 개성이 뚜렷합니다. 기회가 된다면 꼭 MZ 감성으로 만든 올드바인 슈냉블랑 와인들을 비교시음해보시길 권합니다. 정말 귀중한 경험이 될 테니까요.'
        ],
        images: [
          '/producers/closthierriere_01.JPG',
          '/producers/closthierriere_02.JPG',
          '/producers/closthierriere_03.JPG'
        ]
      };
    default:
      throw error(404, 'Not found');
  }
}
