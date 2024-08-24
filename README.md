<<<<<<< HEAD
# 프로젝트 설명

## 테스트 안내

### API 호출 테스트

- 데스크탑으로 접속시 좌측에 순서대로 정상 호출, 로딩 호출, 오류 호출 3가지가 있습니다.
  - 나머지 테스트는 정상 상태 호출 페이지에서 진행해주세요!

## 패키지

- API
  - axios
  - @tanskack/react-query
- style
  - styled-components
- 개발환경 (DX)
  - react-router-dom
  - vite-tsconfig-paths

## 기능

### API

- axios interceptor를 이용하여 오류 및 로딩 상태를 구현했습니다.
- 페이지 진입시 API 호출해야 하기 때문에 react-query의 useSuspenseQuery를 이용하여 Suspense와 Errorboundary를 같이 이용했습니다. ( `모듈화` )

### 검색 및 필터링

- 검색창 포커스시 Enter로 검색할 수 있습니다.
- 검색창 포커스시 command + Backspace로 검색값을 초기화할 수 있습니다.
- 필터링 각 항목별로 중복으로 필터링 할 수 있습니다.
- 필터링 후 특가 차량 클릭시 필터링이 전체 초기화 됩니다.

### 캐러셀

- 드래그 이벤트와 클릭 이벤트를 분리했습니다.
- 해랑 차량 클릭시 모든 차량 리스트에서 찾아 스크롤 이동합니다.

### 모달

- ESC, 외부 클릭, x아이콘 클릭시 닫힙니다.

## 아쉬운 점

- 데이터 값에 따라 필터링의 데이터를 동적으로 자동화하지 못한점
- 케러셀을 왼쪽에서 오른쪽까지만 가는것이 아닌 선형으로 이어지도록 구현하지 못한점
- 캐러셀 일정한 시간 간격으로 다음으로 넘어가는것 ( 위 기능 선행 )

# 프로젝트 회고

### Index

- 성장 Point.
  - 폴더명, 파일명, 컴포넌트명 작명법
  - 키보드 이벤트
- 문제 해결 Point.
  - Carousel Event 버블링과 캡쳐링
  - 검색 및 필터링 시스템

## 성장 Point.

### 1. 폴더명, 파일명, 컴포넌트명의 작명법

> 서론

기존에 나는 항상 `폴더, 파일 관련 네이밍`을 어떻게 해야 하는게 좋을지 고민이 많아서

(개발 중 가장 많은 시간을 할애할수도…) GPT에게 물어보기도 하고 `모던 자바스크립트` 책에서 저자는

변수명, 파일명을 **_”첫째 아이 이름 짓듯이”_** 지으라고 했다. ( ~~둘째는 안된다고 했다~~ )

아직 아이를 낳아보지는 않았지만 이제 조금 깨달은것 같다.

```javascript
// 기존 나의 작명법
// 차량 정보를 담은 카드 컴포넌트
// 주어부터 시작해 정법으로 한국 어순을 따른다.
CarInfoCard.tsx; // -> 차량 정보 카드
```

하지만 생각해보면 당연히 차량 관련 도메인이니까 이렇게 할 경우 거의 모든 네이밍이 car로 시작한다.

그렇다고 Car를 빼자니 다른 데이터들과의 구분점은 필요하니 써야겠고…

우리가 리팩토링이나 다른 팀원이 내 코드를 보고 수정해야 할 경우 화면을 보고 파일을 찾는 경우가 많은데

`( 거의 모든 QA, QC는 화면으로부터 나온다. )`

그럴 경우 ( 차량 정보를 담은 카드 컴포넌트를 찾아야 한다는 가정. ) Car~, info~ 이후에 단어들을 전부

확인해야 한다. 가독성이 좋지 않다. 직관성 xxxxx

Car이후에 것들을 찾는데 걸리는 시간을 환산하면 생각보다 큰 비용이라 생각한다.

그래서 단어들을 뒤집었다.

> 결론

1. 어떤 형태인지. (UI) → Card
2. 어떤 역할인지 → Info
3. 어떤 데이터인지 → Car

```javascript
// 수정안
CardInfoCar.tsx; // -> 카드 정보 차량
// 정확하게 한국 어순과 반대로 영어권 어순으로, 결론이 가장 먼저고 이유와 주어는 뒤에 따라 온다.
```

---

### 2. 키보드 이벤트

한글인 상태로 키보드 이벤트를 동작하면 이벤트가 2번씩 발생된다.

렌더가 2번되나? 라는 생각에 로그찍어서 봤는데 그 문제는 아니였다.

찾아보니까 IME(Input Method Editor)가 자음과 모음을 하나의 음절로 연결하기 위해

2번씩 이벤트를 발생시킬 수 있다고 한다.

명료한 해결책이였다.

```javascript
if (e.code === "Enter" && !e.nativeEvent.isComposing) {
  onSearchClick();
}
```

---

## 문제 해결 Point.

### 1. Carousel Click Event

> 문제의 기능: 드래그 이벤트로 `요소들을 넘길 수 있어야 하며` 요소 Click 시 `해당 차량으로 스크롤 이동` 기능

기존 드래그 이벤트에 `Click` 이벤트를 연결하여 구현해봤는데 의도치 않게 드래그 후 뗄때(mouseup)

`Click` 이벤트가 버블링되어 동작하고 있었다. 내가 드래그 이벤트를 구현한 코드부터 보자

```javascript
/* Drag 시작점부터 종료까지의 x값을 callback 으로 값 전달 */
export const dragEvent = ({ onDragChange, onDragEnd }: DragEventProps) => {
  /* MouseDown 이후부터 MouseMove & MouseUp Event 동작 */
  const onMouseDown = (clickEvent: React.MouseEvent<HTMLDivElement>) => {
    clickEvent.stopPropagation();

    const mouseMove = (moveEvent: MouseEvent) => {
      const stopCapture = (e: MouseEvent) => e.stopPropagation();

      const deltaX = moveEvent.pageX - clickEvent.pageX;
      onDragChange(deltaX);
    };

    const mouseUp = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.pageX - clickEvent.pageX;
      onDragEnd(deltaX);

      document.removeEventListener("mousemove", mouseMove);
    };

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp, {
      once: true,
      capture: true,
    });
  };

  return onMouseDown;
};
```

코드를 해석해보면 간단하게 `mouseDown` 이벤트가 발생했을때부터 `mouseMove` 이벤트와 `mouseUp`

이벤트를 생성한다. 문제는 `mouseDown` 이벤트 시작점부터 버블링이 일어나기 때문에 뗏을때 `Click` 이벤트가

동작한다.

> 시도 방식

내가 생각한 해결점은 `mouseMove` 이벤트가 동작되면 사용자는 `Click`이 아니라 드래그 할 의도라고 판단하고

`Click` 이벤트를 캡쳐링 하여 하위 요소에 있는 `Click` 이벤트를 무효화 했다.

```javascript
const onMouseDown = (clickEvent: React.MouseEvent<HTMLDivElement>) => {
    clickEvent.stopPropagation();

    const mouseMove = (moveEvent: MouseEvent) => {
      const stopCapture = (e: MouseEvent) => e.stopPropagation();

      const deltaX = moveEvent.pageX - clickEvent.pageX;
      onDragChange(deltaX);
			/* 추가된 부분 */
      document.addEventListener("click", stopCapture, {
        once: true,
        capture: true,
      });
    };

    const mouseUp = (moveEvent: MouseEvent) => //....
  };
```

---

### 2. Carousel 요소 클릭시 해당 차량으로 스크롤 이동

> 문제의 기능: Carousel 요소 Click 시 해당 차량으로 스크롤 이동 기능

먼저 내가 생각한 방식은 `querySelector`로 요소를 가져오는게 가장 확실하게 스크롤값을 알 수 있다고 생각했다.

하지만 선택한 요소가 현재 차량 리스트에 없다면 `querySelector`로 가져올 수가 없다.

먼저 `page`를 `setState` 하여 리스트를 늘리긴 했지만 `setState`는 비동기적으로 업데이트 하기 때문에

업데이트 시점을 정확하게 알 수 없다는게 문제였다.

> 시도 방식
> 비동기적으로 업데이트 되니 `interval`로 10번정도 확인하면 될거 같았다. ( 찾으면 `clearInterval` )

실제로 정상적으로 동작은 하였으나 아무리 봐도 이건 근본적인 깔끔한 해결책이 아니였다.

이 방식의 문제점은

1. 인터넷 환경과 디바이스 기기 사양에 따라 차이가 날 수 있다. ( 오류 가능성 높음 )
2. 업데이트 되기 까지 `querySelector`로 찾는 불필요한 작업을 수행한다. ( 성능 최적화 미흡 )
   > 해결 방식

씻고 있는 중에 해결 방안이 생각났다.

**내가 생각한 접근법**

1. 선택한 요소가 렌더링 되도록 더보기(page)를 업데이트한다.
2. 선택한 요소의 id를 state에 저장한다.
3. useEffect의 의존성 부분에 위 두 상태를 구독하여 업데이트가 완료 되었을때 로직을 수행한다.

```javascript
const [selectId, setSelectId] = useState<number>(); /* 선택한 요소 */
const [page, setPage] = useState<number>(1); /* 5개 요소씩 보여주는 page */

  /* Observer 패턴 사용 */
  useEffect(() => {
    if (selectId) {
      const targetElement = `#${CSS.escape(selectId.toString())}`;
      const scrollY = document
        .querySelectorAll(targetElement)[1]
        .getBoundingClientRect().top;

      window.scrollTo({ top: scrollY, behavior: "smooth" });
      setSelectId(undefined);
    }
  }, [selectId, page]); /* 지켜보고 있다 */

/* Carousel 요소 Click 핸들러 */
 const clickCardCar = (id: number) => {
    const rangePage = page * LIMIT;
    if (rangePage < id) {
      setPage(parseInt((id / LIMIT).toString()) + 1);
    }
    setSelectId(id);
  };
```

---

### 3. 검색 및 필터 시스템

프로젝트 필수 사항 진행하면서 추가 사항까지 다 구현한 뒤 어떤 기능을 추가할까 하다가

차량 데이터 즉, 데이터로 필터링 할 수 있게 하면 사용자가 렌트할 차량을 구할때 더 편리할것 같았고

서비스중인 업체들은 이미 구현한 필수 기능일 것이라는 생각이 들었다.

검색 관련해서는 깊게 해본적이 없어서 어떻게 접근할까 고민하다가 그냥 필터값들을 useState 상태로

저장하여 상태값에 따라 필터링되게 하려고 했는데 너무 복잡하고 리렌더의 위험도도 많아 보였다.

얼마전 옷을 산 무신사에 들어가서 어떻게 구현했는지 보았다.

필터링 요소를 QueryString으로 주소값에 전달하고 그 값에 따라 필터링 하는 거였다.

**유레카!** 바로 이거다 라는 생각을 했다. 이거라면 복잡한 state를 관리할 필요도 없고 필터링 요소가 active될시

url값만 업데이팅 해주면 되는거였다. 오류 가능성이 현저히 낮아보였다.

useSearchParams라는 react-router-dom에서 제공하는 메소드로 필터링 시스템을 모두 구현하였다.

`price` `tags` `name` `sort`
=======
## init
>>>>>>> 32c6f175 ([Init])
