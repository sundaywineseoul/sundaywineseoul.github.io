<script lang="ts">
  import { onMount } from 'svelte';

  let isMobile = false;

  onMount(() => {
    const mql = window.matchMedia('(max-width: 1280px)');
    mql.addEventListener('change', (v) => (isMobile = v.matches));
  });
</script>

<main>
  <div class="logo">
    {#if isMobile}
      <h1>sunday<br />wine<br />seoul</h1>
    {:else}
      <h1>sunday wine seoul</h1>
    {/if}
    <h2>Wine importer</h2>
    <h2>Est. 2022</h2>
  </div>

  <div class="info">
    <div>
      <h1>특별한 매장에 어울리는 특별한 와인</h1>
      <p>
        저희 선데이와인서울에서는 작은 와이너리에서 장인정신을 담아 만들어 기본기가 탄탄하고,
        이제까지 한국에 소개된 적 없던 특별한 와인만 들여옵니다.
      </p>
      <p>
        소매는 저희 직영 쇼룸에서만 가능하며 대형마트, 일반 슈퍼 등에 납품하지 않아 희소성이
        극대화됩니다. 와인을 그 자리에서 즐길 수 있는 요식업장에만 납품합니다.
      </p>
    </div>
    <div class="image" />
  </div>

  <div class="info">
    <div class="image" />
    <div>
      <h1>직접 드셔보시고 판매하세요</h1>

      <p>
        선데이와인서울은 무엇보다 음식에 진심이신 요식업 대표님들을 위해 무료 출장 시음 서비스도
        제공합니다.
      </p>
      <p>
        밀봉용기에 소분 후 아르곤 가스를 충전해서 보내드리죠. 먹어보지도 않은 와인을 한 줄 소개만
        읽고 몇 병씩 구매해서 맛도 모른 채 고객님께 소개한다는 건… 말이 안 되는 이야기니까요.
      </p>
      <p>
        <small> * 스파클링 와인은 소분이 불가하여 시음이 어렵습니다. 양해 부탁드립니다. </small>
      </p>
    </div>
  </div>

  <div class="info">
    <div>
      <h1>와인 관련해서는 전부 맡겨주세요</h1>

      <p>
        업장 스타일에 맞는 와인 추천은 물론 와인 소개문구 작성부터 잔 와인 솔루션까지, 와인과 관련된
        모든 컨설팅을 제공해 드립니다.
      </p>
      <p>
        와인에 대해 추가로 알아보실 시간이 없는 대표님들을 위해 납품 시 각 와인별로 메뉴와 인스타에
        소개하실 수 있도록 상세한 설명을 담은 가이드 문서를 따로 정리해 드리고, 업장별로 어떤 잔을
        구비하시면 좋은지, 어떤 요소가 고객님들께 반응이 좋은지 등 성심성의껏 컨설팅해 드립니다.
      </p>
    </div>
    <div class="image" />
  </div>

  <h2>업장을 한층 개성있고 돋보이게 해줄 와인들을 선데이와인서울에서 만나보세요.</h2>
</main>

<style lang="sass">
  @import 'open-color/open-color.scss'

  p
    margin: 1rem 0
    font-size: 1.2rem
    line-height: 2rem

  main 
    font-family: 'Abel', sans-serif
    display: flex
    flex-direction: column
    > div
      height: 100vh
    > div.logo:nth-child(1)
      display: flex
      flex-direction: column
      justify-content: center
      align-self: center
      text-align: center
      width: 100%
      background: url('/1_2.jpeg')
      background-position: center
      background-size: cover
      color: $oc-gray-0
      h1
        margin: 0 0 2rem 0
        font-family: 'Megrim', cursive
        font-size: 8rem
        text-shadow: $oc-gray-8 1px 0 8px
      h2
        margin: 0 0 1rem 0
    > div.info
      display: flex
      justify-content: space-between
      align-items: center
      div
        box-sizing: border-box
        padding: 4rem
        width: 60%
        height: fit-content
        h1
          padding: 1rem 0
        p
          text-wrap: balance
      div.image
        width: 40%
        height: 100%
      img
        height: 32%
        border-radius: 2rem
    > div:nth-child(even)
      text-align: left
      div
        h1
          border-bottom: 2px solid $oc-gray-0
    > div:nth-child(odd)
      text-align: right
      color: $oc-gray-9
      background-color: $oc-gray-0
      div
        h1
          border-bottom: 2px solid $oc-gray-9
    > div:nth-child(2)
      div.image
        background-image: url('/1_1.jpeg')
        background-size: cover
    > div:nth-child(3)
      div.image
        background-image: url('/2_1.jpeg')
        background-size: cover
        background-position: center
    > div:nth-child(4)
      div.image
        background-image: url('/3_1.jpeg')
        background-size: cover
    > h2
      margin: 0
      padding: 2rem 4rem
      background: $oc-gray-0
      color: $oc-gray-9
      text-align: center
      text-wrap: balance

  @media (max-width: 1024px)
    main
      > div
        flex-direction: column
        justify-content: center
      > div.logo:nth-child(1)
        h1
          font-size: 6rem
      > div.info
        div
          padding: 1rem
          width: 100%
        div.image
          width: 100%
      > div:nth-child(3)
        div
          order: 1
        div.image
          order: 2
</style>
