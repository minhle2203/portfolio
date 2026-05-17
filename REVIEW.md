# Case study review checklist

Mục đích: kiểm tra 3 case study trước khi launch portfolio. Tick ✅ khi đã verify, ❌ khi cần sửa.

---

## 1. Weploy Payroll System

File: `lib/case-studies/weploy-payroll-system.ts`

### Metadata (header)
- [ ] Duration: **6 months** — đúng không?
- [ ] Team: **1 PM, 4 engineers, 1 designer** — đúng team size?
- [ ] Status: **Shipped — Jan 2024** — ngày ship đúng không?

### Numbers / claims cần verify
- [ ] **"200+ talents"** — số lượng TA thật là bao nhiêu?
- [ ] **"~8,000 VND per talent every month"** — chi phí Mobi E-contract đúng không?
- [ ] **"~40M VND in delivery penalty fees"** (nếu có) — số chính xác?
- [ ] Outcome metrics: **"100% Mobi savings", "0 dependencies"** — có đúng đã thực sự ngừng dùng Mobi 100%?

### Tone / voice
- [ ] Reflections cuối: "the legal alignment in week one, not week six" — có phải bài học thật của bạn? Nếu không, sửa.
- [ ] Có từ/câu nào nghe không giống bạn?

---

## 2. Kilo 3PL Logistics

File: `lib/case-studies/kilo-3pl-logistics.ts`

### Metadata
- [ ] Duration: **4 months** — đúng (May-Aug 2021)?
- [ ] Team: **1 PM, 1 Designer, 3 Engineers, 2 Ops** — đúng?
- [ ] Status: **Shipped — Aug 2021** — đã thật sự ship?

### Numbers / claims
- [ ] **"29.64% cross-city / 2.16% same-city cancellations"** — số đúng?
- [ ] **"30+ survey participants"** — đúng không?
- [ ] **"5 launch cities: Ha Noi, Hai Phong, Da Nang, Binh Duong, HCMC"** — đúng?
- [ ] Goals: 30% adoption / 90% delivery rate / +15% cross-province — đây là MVP goal hay actual outcome? Hiện tại đang ghi là "MVP goals" — OK chưa?

### Tone / voice
- [ ] Câu chuyện "ăn trưa với Ops" — có đúng experience của bạn không?
- [ ] Reflections cuối — đúng bài học?

---

## 3. Kilo Payment Method

File: `lib/case-studies/kilo-payment-method.ts`

### Metadata
- [ ] Duration: **4 months** — đúng (Aug-Nov 2021)?
- [ ] Team: **1 PM, 1 Designer, 2 Engineers** — đúng?
- [ ] Status: **Shipped — Nov 2021** — đã ship?

### Numbers / claims
- [ ] **"AOV 9M VND, 796M VND để bù"** — math đúng?
- [ ] **"10% of November orders >20M"** — số đúng?
- [ ] **"~40M penalty fees in November"** — đúng?
- [ ] **"80% retailers biết bank transfer"** — số đúng?
- [ ] **"5 retailers said BNPL is nice to have"** — đúng?
- [ ] Goals: 50% / 95% / 25% — MVP goal hay actual outcome?

### Tone / voice
- [ ] Reflections về "user research doesn't always say what you hope" — đúng bài học?
- [ ] Quote "Cash is still king..." — có phải bạn nghĩ vậy không?

---

## Tổng quát (áp dụng cho cả 3)

- [ ] Tên công ty (Kilo, Weploy) — public OK chưa, hay cần đổi thành "a B2B marketplace" / "a workforce platform"?
- [ ] Tên người khác (Hiếu, Đại, Thảo, Katrick, Rob, Ryan) — nên ẩn không?
- [ ] Số liệu nội bộ (chi phí 8,000 VND, 40M fees...) — có vấn đề NDA không?
- [ ] Link Figma / Google Docs / Vimeo trong notion-import: tôi **không** đưa vào portfolio (vì cần xác nhận có public không) — bạn muốn thêm link nào sau khi check?

---

## Quy trình sửa

1. Tick checklist này khi đọc xong từng case study
2. Mở file `lib/case-studies/<slug>.ts` để sửa thẳng
3. Hoặc paste vào chat: "Sửa Kilo 3PL — duration thật là 3 tháng, team có 2 engineers thôi"
4. Tôi sẽ cập nhật code và push lên Vercel
