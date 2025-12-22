# გამოყენებული რესურსები და დოკუმენტაცია

პროექტის შექმნისას გამოყენებული ტექნოლოგიური სტეკი და მათი როლი სისტემის არქიტექტურაში:

### [Python](https://www.python.org/)

პროექტის ძირითადი ენა. გამოყენებულია ობიექტზე ორიენტირებული პროგრამირება (OOP) სისტემის მოდულურობისთვის.

* **გამოყენებული ფუნქციონალი:** * [`difflib.get_close_matches`](https://docs.python.org/3/library/difflib.html#difflib.get_close_matches) — ფილმების სათაურების Fuzzy Matching-ისთვის მომხმარებლის შეყვანისას.

### [FAISS (Facebook AI Similarity Search)](https://github.com/facebookresearch/faiss)

მაღალეფექტური ბიბლიოთეკა ვექტორული ძიებისთვის. პროექტში ის პასუხისმგებელია Collaborative Filtering-ის სისწრაფეზე.

* **გამოყენებული ფუნქციონალი:**
* [`faiss.IndexFlatIP`](https://faiss.ai/cpp_api/struct/structfaiss_1_1IndexFlatIP.html) — Inner Product ინდექსი მსგავსი მომხმარებლების საპოვნელად.
* [`faiss.normalize_L2`](https://github.com/facebookresearch/faiss/wiki/MetricType-and-distances) — ვექტორების ნორმალიზაცია Cosine Similarity-ს სიმულაციისთვის.



### [Pandas](https://pandas.pydata.org/docs/index.html)

მონაცემთა მანიპულაციის მთავარი ინსტრუმენტი.

* **გამოყენებული ფუნქციონალი:**
* [`pd.read_csv`](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html) — მონაცემთა ბაზების (movies/ratings) ჩატვირთვა.
* [`df.value_counts()`](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.value_counts.html) — Downsampling ლოგიკისთვის ყველაზე აქტიური მომხმარებლების გამოსაყოფად.



### [Scikit-Learn](https://scikit-learn.org/stable/index.html)

მანქანური სწავლების ბიბლიოთეკა ვექტორიზაციისა და მეტრიკებისთვის.

* **გამოყენებული ფუნქციონალი:**
* [`TfidfVectorizer`](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html) — ფილმების ჟანრების გარდაქმნა ტექსტურიდან ციფრულ ფორმატში.
* [`cosine_similarity`](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.cosine_similarity.html) — Content-Based მოდელში ფილმებს შორის მსგავსების დასადგენად.



### [Matplotlib](https://matplotlib.org/) & [Seaborn](https://seaborn.pydata.org/index.html)

მონაცემთა ვიზუალიზაციისთვის `visualize.py`-ში.

* **გამოყენებული ფუნქციონალი:**
* [`plt.savefig`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.savefig.html) — გრაფიკების შენახვა ვებგვერდზე გამოსაჩენად.
* [`sns.histplot`](https://seaborn.pydata.org/generated/seaborn.histplot.html) — რეიტინგების განაწილების ვიზუალიზაციისთვის.



### [Gradio](https://www.gradio.app/)

ინტერაქტიული UI-ს შესაქმნელად.

* **გამოყენებული ფუნქციონალი:**
* [`gr.Interface`](https://www.gradio.app/docs/gradio/interface) — მთავარი ინტერფეისის კონსტრუქტორი.
* [`gr.Blocks`](https://www.gradio.app/docs/gradio/blocks) — ლოგოსა და ინტერფეისის Custom განლაგებისთვის.

