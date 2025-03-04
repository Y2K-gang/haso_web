export interface ProductData {
    title: string; // 제목
    images: (File | undefined)[]; // 이미지 URL
    quantity: number | undefined; // 수량
    unitPrice: number | undefined; // 단가
    description: string; // 상세설명
    location: string; // 장소
    category: string; // 어종
    ownerId: string; // 작성자
  }
