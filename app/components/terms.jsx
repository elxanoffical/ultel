import Image from "next/image";
import termsImage from "@/public/termsImg.svg";

export default function TermsCard() {
  return (
    <div className="bg-[#def5f5] min-h-screen flex items-center justify-center p-4 py-20">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Qaydalar və şərtlər
        </h2>
        <div className="text-gray-800 space-y-4">
          <p className="font-medium"></p>
          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <h2 className="text-lg font-semibold">
              1. Müqavilə tərəfinin dəyişdirilməsi
            </h2>
            <p>
              1.1. Müqavilə tərəfinin dəyişdirilməsi yalnız “Ultel” MMC-nin
              (bundan sonra “Ultel”) cari abunəçisinin və yeni abunəçinin və ya
              onların səlahiyyətli nümayəndələrinin bu barədə əvvəlcədən verdiyi
              yazılı razılığı əsasında “Ultel”in müvafiq prosedurlarına uyğun
              olaraq mümkündür.
            </p>

            <h2 className="text-lg font-semibold">2. Tarif dəyişikliyi</h2>
            <p>
              2.1. Tarif dəyişikliyi üçün abunəçi və ya onun səlahiyyətli
              nümayəndəsi şəxsiyyətini təsdiq edən sənədlə “Ultel”in xidmət
              mərkəzləri, həmçinin əlaqə mərkəzi və ya Ultel tətbiqinin dəstək
              bölməsi vasitəsilə müraciət edə bilər və əməliyyatın icrası
              “Ultel”in daxili prosedurlarına uyğun olaraq mümkündür.
            </p>

            <h2 className="text-lg font-semibold">3. Ödəniş şərtləri</h2>
            <p>
              3.1. Xidmət ilkin olaraq Abunəçi tərəfindən ödəniş həyata
              keçirildikdən sonra aktivləşdirilir və Tarifdə müəyyən olunan
              xidmət haqqı müqabilində aylıq əsasla təmin edilir.
            </p>
            <p>
              3.2. Xidmət haqqı ödənişi xidmət aktivləşdirildiyi gün əsasında
              hər növbəti ayın müvafiq günü həyata keçirilməlidir (Ödəniş günü).
            </p>
            <p>
              3.3. Xidmət haqqı Ödəniş günündə ödənilmədikdə, 5 (beş) təqvim
              günü ərzində (güzəşt müddəti) xidmət məhdudlaşdırılmış sürətlə
              verilir. Ödəniş Güzəşt müddəti ərzində edilmədikdə xidmətin
              verilməsi dayandırılır.
            </p>
            <p>
              3.4. Ödəniş güzəşt müddəti ərzində edilərsə, ödəniş günü dəyişməz
              olaraq qalır. Ödəniş güzəşt müddəti bitdikdən sonra həyata
              keçirildiyi halda isə ödəniş günü Ödənişin icra edildiyi faktiki
              gün əsasında müəyyən edilir və Xidmətdən bir aylıq istifadə
              müddəti həmin tarixdən başlayır.
            </p>

            <h2 className="text-lg font-semibold">4. Ünvan dəyişikliyi</h2>
            <p>4.1. Əməliyyat ödənişsiz icra olunur.</p>
            <p>
              4.2. Ünvan dəyişikliyi üçün növbəti ödəniş günündən 5 gün əvvəl
              abunəçi “Ultel”in əlaqə mərkəzinə, xidmət mərkəzlərinə və ya
              sosial şəbəkələrin idarəetmə qrupuna müraciət edərək “Ultel”
              tərəfindən tələb olunan bütün zəruri məlumatları təqdim etməlidir
              (dəyişən ünvanlar, abunəçinin istifadəsində “Ultel” tərəfindən
              təqdim edilmiş son avadanlıq olub-olmaması və sair).
            </p>
            <p>
              4.3. Əməliyyatın icrası “Ultel”in daxili prosedurlarına uyğun
              olaraq icra olunur.
            </p>
            <p>
              4.4. Abunəçinin cari ünvanında “Ultel” tərəfindən təqdim edilmiş
              son avadanlıq istifadə edilirsə, abunəçi həmin son avadanlığı yeni
              ünvanda istifadə edə bilər.
            </p>

            <h2 className="text-lg font-semibold">5. Texniki dəstək</h2>
            <p>
              5.1. “Ultel” abunəçinin müraciətinə əsasən, xidmətdə yaranmış
              texniki problemlərin mümkün qısa müddət ərzində aradan
              qaldırılması üçün tədbirlər görür. Abunəçinin xidmətlərdən
              istifadəsi ilə bağlı yaranmış texniki çətinlik birbaşa “Ultel”in
              fəaliyyətinin nəticəsində yaranarsa, çağırış və tənzimləmə üçün
              ödəniş tələb olunmur.
            </p>
            <p>
              5.2. Texniki dəstəyin göstərilməsi üçün istifadəçi “Ultel”in əlaqə
              mərkəzi, xidmət mərkəzləri və ya Ultel tətbiqinin dəstək bölməsi
              vasitəsilə müraciət edə bilər.
            </p>
            <p>
              5.3. Texniki dəstəyin göstərilməsinə dair sifariş “Ultel”
              tərəfindən qəbul olunduqdan sonra aparılan araşdırma nəticəsində
              aşkar edilsə ki, texniki problem abunəçinin səhvi nəticəsində baş
              verib, texniki dəstəyin göstərilməsi məqsədilə texniki heyətin hər
              çağırışı üçün xidmət haqqı 5 (beş) manat təşkil edir.
            </p>
            <p>
              5.4. Abunəçinin kabel xəttində hər hansı səbəbdən qırılma və ya
              zədələnmə halları baş veribsə, xəttin bərpası üçün texniki heyətin
              hər çağırışı üçün xidmət haqqı 10 (on) manat təşkil edir.
            </p>
            <p>
              5.5. “Ultel” tərəfindən abunəçinin istifadəsinə verilmiş son
              avadanlığın təmiri ödənişli qaydada Abunəçinin vəsaiti hesabına
              həyata keçirilir. Son avadanlığın təmiri mümkün olmadıqda, son
              avadanlıq yenisi ilə əvəz edilmir.
            </p>

            <h2 className="text-lg font-semibold">
              6. Dayandırılmış xidmətin bərpası
            </h2>
            <p>
              6.1. Bərpa əməliyyatı üçün abunəçi və ya onun səlahiyyətli
              nümayəndəsi şəxsiyyətini təsdiq edən sənədlə xidmət mərkəzləri,
              həmçinin əlaqə mərkəzi və ya Ultel tətbiqinin dəstək bölməsi
              vasitəsilə müraciət edə bilər.
            </p>
            <p>
              6.2. Bərpa əməliyyatı üçün abunəçinin ünvanında texniki dəstəyin
              göstərilməsinə ehtiyac olmazsa, abunəçi tərəfindən yalnız abunə
              haqqı ödənildikdən sonra xidmət bərpa edilir.
            </p>
            <p>
              6.3. Bərpa əməliyyatına dair müraciət qəbul olunduqdan sonra
              aparılan araşdırma nəticəsində aşkar edilsə ki, bərpa əməliyyatı
              üçün texniki heyət abunəçinin ünvanında müvafiq işlər aparmalıdır,
              bu məqsədlə texniki heyətin çağırışı və (və ya) texniki heyətin
              çağırışı kabel çəkilməsi üçün 27.01.2024-cü il tarixindən etibarən
              ödənişsizdir.
            </p>
            <p>
              6.4. Əgər bərpa əməliyyatı abunəçinin ünvanında həyata
              keçirilirsə, o zaman abunəçi “Ultel”in texniki heyətinə öz
              şəxsiyyətini təsdiq edən sənədi təqdim etməlidir.
            </p>
            <p>
              6.5. Bərpa əməliyyatı bu barədə müraciət “Ultel”ə daxil olduqdan
              sonra 2 (iki) iş günü ərzində həyata keçirilir.
            </p>

            <h2 className="text-lg font-semibold">7. Müvəqqəti dayandırma</h2>
            <p>
              7.1. Abunəçi “Ultel” tərəfindən təqdim edilən xidmətlərdən
              istifadəni müvəqqəti olaraq dayandırmaq üçün şəxsiyyətini təsdiq
              edən sənədlə “Ultel”in xidmət mərkəzləri, həmçinin əlaqə mərkəzi
              və ya Ultel tətbiqinin dəstək bölməsi vasitəsilə müraciət edə
              bilər.
            </p>
            <p>
              7.2. Xidmətlərin müvəqqəti dayandırma müddəti ən azı 1 (bir) ay,
              ən çoxu isə 4 ay müddəti üçün ola bilər.
            </p>
            <p>
              7.3. Xidmətlərin müvəqqəti dayandırılması üçün haqq aylıq 1 (bir)
              manat təşkil edir.
            </p>

            <h2 className="text-lg font-semibold">
              8. Xidmətlərin ləğv edilməsi
            </h2>
            <p>
              8.1. Müqaviləyə xitam verildikdə, Müqavilənin 11.4-cü maddəsinə
              əsasən “Ultel” tərəfindən Abunəçinin istifadəsinə verilmiş
              avadanlıqlar “Ultel”in www.Ultel.com.az ünvanlı rəsmi internet
              səhifəsində müəyyən edilən Qaydalara uyğun olaraq, Müqaviləyə
              xitam verilməsi tarixindən sonra 20 (iyirmi) təqvim günü ərzində
              Abunəçi tərəfindən “Ultel”ə qaytarılmalıdır və ya bu öhdəliyi
              pozduğuna görə, avadanlıqların qaytarılması üçün müəyyən edilmiş
              20 (iyirmi) təqvim günündən ibarət müddət bitdikdən sonrakı 5
              (beş) təqvim günü ərzində Qaydalara əsasən müəyyən edilmiş
              məbləğdə Abunəçi tərəfindən “Ultel”ə cərimə (dəbbə pulu)
              ödənilməlidir. Abunəçi bu öhdəliyini icra etmədikdə, “Ultel”
              Abunəçidən cərimə (dəbbə pulu) məbləğinin tutulması üçün
              qanunvericiliklə nəzərdə tutulmuş hüquqi tədbirlər görmək hüququna
              malikdir.
            </p>
          </div>
          <Image
            src={termsImage}
            alt="Amortizasiya Cədvəli"
            className="w-full h-auto object-contain"
          />

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>Qeyd:</strong> Abunəçiyə istifadə müddəti ərzində müxtəlif
              səbəblərdən yenidən istifadə üçün avadanlıq təqdim olunarsa,
              abunəçi tərəfindən müqaviləyə xitam verildiyi zaman abunəçi
              avadanlığın amortizasiya cədvəlinə uyğun müəyyən edilmiş cərimə
              məbləğinin 50 faizini ödəməlidir. Bu müddət avadanlıq təqdim
              olunan tarixdən hesablanır.
            </p>

            <h2 className="text-lg font-semibold">
              9. Kampaniyalardan istifadə
            </h2>
            <p>
              9.1. Abunəçi eyni zamanda yalnız bir kampaniyanın istifadəçisi ola
              bilər.
            </p>
            <p>
              9.2. “Ultel” tərəfindən müvafiq kampaniyalar çərçivəsində və ya
              kommersiya strategiyasından irəli gələrək vaxtaşırı abunəçilərə
              təqdim olunan xüsusi tariflər bir qayda olaraq qoşulmadan sonrakı
              bir il və ya daha uzun müddət üçün təklif edilir. Bu müddətlərdən
              sonra abunəçilər üzrə münasibətlər həmin anda mövcud olan baza
              tarifinin şərtləri ilə tənzimlənir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
