Search.setIndex({"docnames": ["components/attentions", "components/feedforward", "components/index", "components/mha", "components/ops", "components/position_embedding", "components/reversible", "custom_parts/index", "index", "tutorials/blocksparse", "tutorials/extend_attentions", "tutorials/index", "tutorials/reversible", "tutorials/sparse_vit", "tutorials/triton", "tutorials/use_attention", "what_is_xformers"], "filenames": ["components/attentions.rst", "components/feedforward.rst", "components/index.rst", "components/mha.rst", "components/ops.rst", "components/position_embedding.rst", "components/reversible.rst", "custom_parts/index.rst", "index.rst", "tutorials/blocksparse.rst", "tutorials/extend_attentions.rst", "tutorials/index.rst", "tutorials/reversible.rst", "tutorials/sparse_vit.rst", "tutorials/triton.rst", "tutorials/use_attention.rst", "what_is_xformers.rst"], "titles": ["Attention mechanisms", "Feedforward mechanisms", "API Reference", "Multi Head Attention", "xFormers optimized operators", "Position Embeddings", "Reversible layer", "Custom parts reference", "Welcome to xFormers\u2019s documentation!", "Using BlockSparseAttention", "Extend the xFormers parts zoo", "Tutorials", "Using the Reversible block", "Replace all attentions from an existing ViT model with a sparse equivalent?", "Using Triton-based layers", "I\u2019m only interested in testing out the attention mechanisms that are hosted here", "What is xFormers?"], "terms": {"class": [0, 1, 3, 4, 5, 6, 10, 12], "xformer": [0, 1, 2, 3, 5, 6, 7, 9, 11, 12, 13, 14, 15], "compon": [0, 1, 3, 5, 6, 9, 10, 12, 13, 15], "scaleddotproduct": [0, 13], "dropout": [0, 1, 3, 4, 5, 9, 10, 15], "float": [0, 1, 3, 4, 5, 10], "0": [0, 3, 4, 5, 7, 9, 15], "causal": [0, 4, 9, 10], "bool": [0, 1, 3, 5, 6, 10, 12], "fals": [0, 3, 6, 10, 12, 13, 14], "seq_len": [0, 5, 9, 15], "option": [0, 1, 3, 4, 8, 10, 12], "int": [0, 1, 3, 4, 5, 6, 10, 12], "none": [0, 1, 3, 4, 10, 14], "to_seq_len": 0, "arg": [0, 1, 3, 5, 6, 10], "kwarg": [0, 1, 3, 4, 5, 6, 9, 10, 12], "sourc": [0, 1, 3, 4, 5, 6, 7, 13, 16], "base": [0, 1, 4, 5, 7, 8, 10, 11, 13, 15], "implement": [0, 5, 7, 12], "scale": [0, 4, 7], "dot": [0, 7], "product": [0, 7], "propos": [0, 3, 12, 13, 14, 16], "all": [0, 3, 4, 8, 10, 11, 12, 14, 15, 16], "you": [0, 3, 4, 7, 9, 10, 12, 13, 14, 15, 16], "need": [0, 3, 4, 7, 9, 10, 12], "vaswani": [0, 3, 12], "et": [0, 3, 5, 12], "al": [0, 3, 5, 12], "mask": [0, 3, 4, 7, 9, 13, 15], "attentionmask": 0, "forward": [0, 1, 3, 4, 5, 6, 9, 10, 12], "q": [0, 3, 4, 5, 10], "tensor": [0, 1, 3, 4, 5, 6, 10, 12, 13, 14], "k": [0, 3, 4, 5, 10], "v": [0, 3, 4, 10], "att_mask": [0, 3, 9, 13], "union": [0, 1, 4, 5, 12], "A": [0, 3, 4, 5, 7, 9, 12], "2d": 0, "3d": 0, "which": [0, 1, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15, 16], "ignor": [0, 4], "certain": 0, "posit": [0, 2, 4, 8], "If": [0, 4, 9], "boolean": [0, 12], "valu": [0, 3, 4, 7, 9, 16], "true": [0, 1, 3, 6, 7, 9, 10, 12, 14], "keep": 0, "while": 0, "kei": [0, 1, 3, 4, 5, 9], "pad": [0, 4], "dimens": [0, 3, 4, 9, 14, 15], "batch": [0, 3, 4, 9, 10, 15], "x": [0, 4, 5, 6, 7, 10, 12, 14, 15], "sequenc": [0, 3, 4, 9, 12, 14, 15], "length": [0, 3, 4, 9], "OR": 0, "can": [0, 3, 4, 7, 8, 9, 10, 12, 13, 14, 15, 16], "combin": [0, 4, 8, 12, 15], "pass": [0, 4, 9, 12], "here": [0, 4, 8, 9, 11], "method": [0, 5], "maybe_merge_mask": 0, "provid": [0, 3, 4, 7, 9, 14, 15], "util": 0, "us": [0, 1, 3, 4, 5, 7, 8, 10, 11, 13, 15], "merg": 0, "ha": [0, 4], "type": [0, 1, 4, 5, 10], "an": [0, 4, 5, 8, 9, 11, 14, 15], "addit": [0, 4], "expect": [0, 3, 14, 15], "ar": [0, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14, 16], "inf": [0, 4], "localattent": 0, "window_s": [0, 4], "5": [0, 4], "force_spars": 0, "__init__": [0, 10, 12], "slide": 0, "window": [0, 4], "routingtransform": 0, "longform": 0, "bigbird": 0, "paramet": [0, 3, 4, 13, 15], "probabl": [0, 4, 9], "output": [0, 3, 4, 12, 13], "randomli": 0, "drop": [0, 9, 14], "train": [0, 1, 3, 5, 6], "time": [0, 9, 14], "appli": [0, 4, 10, 12], "cannot": [0, 4, 16], "futur": 0, "overal": 0, "size": [0, 3, 4, 9], "local": [0, 4, 10, 14, 16], "odd": 0, "number": [0, 3, 4, 12, 14], "evenli": 0, "distribut": [0, 12], "both": [0, 4, 10], "side": 0, "each": [0, 4, 14, 16], "queri": [0, 3, 4, 5, 9], "linformerattent": 0, "linform": 0, "from": [0, 1, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15], "self": [0, 1, 3, 4, 9, 10, 12], "linear": [0, 4], "complex": 0, "wang": 0, "2020": [0, 12], "The": [0, 3, 4, 5, 7, 9, 10, 12, 13, 14, 15], "origin": [0, 12], "notat": 0, "kept": 0, "nystromattent": [0, 10], "num_head": [0, 3, 4, 9, 10, 13, 15], "num_landmark": [0, 10], "64": [0, 10], "landmark_pool": [0, 10], "modul": [0, 1, 3, 5, 6, 7, 10, 12, 13], "use_razavi_pinvers": [0, 10], "pinverse_original_init": [0, 10], "inv_iter": [0, 10], "6": [0, 4, 7, 9, 10], "v_skip_connect": [0, 10], "conv_kernel_s": [0, 10], "nystrom": [0, 10], "nystromform": 0, "algorithm": 0, "approxim": 0, "xiong": 0, "y": [0, 4, 6, 14], "zeng": 0, "z": 0, "chakraborti": 0, "r": [0, 7, 12], "tan": 0, "m": [0, 4, 8, 11, 12], "fung": 0, "g": [0, 4, 6, 12], "li": 0, "singh": 0, "2021": [0, 14], "refer": [0, 8, 13, 16], "codebas": 0, "http": [0, 14], "github": [0, 7], "com": [0, 7], "mlpen": 0, "key_padding_mask": [0, 3], "onli": [0, 4, 7, 8, 11, 14], "accept": [0, 10], "must": [0, 4], "1": [0, 4, 5, 6, 9, 12, 13, 14, 15], "correct": 0, "mean": [0, 12, 16], "randomattent": 0, "01": 0, "constant_mask": 0, "random": [0, 9], "instanc": [0, 1, 5, 10], "case": [0, 4, 13, 14, 15], "attend": [0, 4], "set": [0, 4, 7, 12], "thi": [0, 1, 3, 4, 5, 9, 10, 12, 13, 14, 15, 16], "spars": [0, 8, 9, 11], "awar": [0, 3, 13, 14], "empti": [0, 4, 9], "part": [0, 1, 4, 5, 11], "repres": 0, "memori": [0, 2, 9, 12], "ratio": 0, "same": [0, 4, 10, 12], "orthoformerattent": 0, "32": [0, 4, 9], "subsample_fract": 0, "landmark_select": 0, "landmarkselect": 0, "orthogon": 0, "orthoform": 0, "your": [0, 10, 12, 15], "ey": 0, "ball": 0, "trajectori": 0, "video": 0, "transform": [0, 5, 8, 13, 14, 16], "patrick": 0, "campbel": 0, "d": [0, 4], "asano": 0, "misra": 0, "i": [0, 4, 8, 11], "metz": 0, "f": [0, 4, 6, 9, 12], "feichtenhof": 0, "c": [0, 10], "vedaldi": 0, "henriqu": 0, "j": 0, "facebookresearch": 0, "motionform": 0, "globalattent": 0, "attention_query_mask": [0, 15], "_": [0, 5], "__": [0, 5], "global": 0, "label": 0, "other": [0, 4, 5, 10, 12, 13, 14, 16], "neg": [0, 4], "ani": [0, 1, 4, 5, 7, 10, 13, 14, 16], "element": [0, 4], "zero": [0, 4], "torch": [0, 4, 9, 10, 12, 13, 14, 15], "favorattent": 0, "dim_featur": 0, "dim_head": 0, "iter_before_redraw": 0, "feature_map_typ": 0, "featuremaptyp": 0, "smreg": 0, "normalize_input": 0, "kernel": [0, 4, 8, 14], "perform": [0, 4, 14], "rethink": 0, "choromanski": 0, "favor": 0, "stand": 0, "fast": [0, 4, 9, 16], "via": [0, 4, 12], "featur": [0, 4], "space": [0, 4], "step": 0, "call": [0, 1, 4, 5, 10], "befor": [0, 4], "redraw": 0, "map": 0, "being": [0, 3, 9, 14, 16], "typic": [0, 13, 14], "sub": 0, "multi": [0, 2, 4, 8, 12, 15], "head": [0, 2, 4, 8, 9, 12, 15], "classmethod": [0, 1, 3, 4], "from_config": [0, 1, 3, 5], "config": [0, 1, 3, 5, 10], "attentionconfig": [0, 10], "abstract": 0, "additive_mask": 0, "is_caus": 0, "object": [0, 4], "hold": 0, "along": [0, 4, 9, 14], "coupl": [0, 7, 10, 14], "helper": [0, 9, 12, 13, 15], "attribut": 0, "to_bool": 0, "from_bool": 0, "creat": [0, 4, 7, 8], "given": [0, 1, 4, 5, 10, 13, 15, 16], "pattern": [0, 4, 9, 13], "warn": [0, 7], "we": [0, 4, 7, 9, 10, 12, 13, 15], "assum": [0, 1, 4, 5], "impli": 0, "should": [0, 4, 12, 15], "comput": [0, 4, 7, 9, 12], "from_multipl": 0, "multipl": [0, 12], "make_caus": [0, 4], "devic": [0, 4, 9, 15], "dtype": [0, 4, 9], "make_crop": 0, "return": [0, 4, 13], "crop": 0, "whose": [0, 4], "underli": 0, "view": 0, "one": [0, 4, 9, 10, 12, 13, 16], "properti": 0, "is_spars": 0, "ndim": 0, "shape": [0, 4, 13], "build_attent": [0, 15], "dict": [0, 1, 4, 5, 15], "str": [0, 1, 4, 5], "build": [0, 1, 5, 8, 9, 12, 15, 16], "name": [0, 1, 5, 7, 10, 13, 15], "determin": [0, 1, 5], "what": [0, 1, 5], "instanti": [0, 1, 5, 15], "For": [0, 1, 4, 5], "my_attent": 0, "foo": [0, 1, 5], "bar": [0, 1, 5], "find": [0, 1, 5], "wa": [0, 1, 5, 10, 12, 15], "regist": [0, 1, 3, 4, 5, 10], "see": [0, 1, 4, 5, 7, 12], "register_attent": [0, 10], "subclass": [0, 1, 5], "decor": [0, 1, 5], "allow": [0, 1, 4, 5, 15, 16], "configur": [0, 1, 5, 10], "file": [0, 1, 5, 15], "even": [0, 1, 5, 10], "itself": [0, 1, 5], "librari": [0, 1, 3, 5, 8, 16], "mlp": [1, 12], "dim_model": [1, 3, 5, 9, 15], "activ": [1, 7, 12], "hidden_layer_multipli": 1, "bia": [1, 3, 4], "input": [1, 3, 4, 12, 15], "feedforwardconfig": 1, "build_feedforward": 1, "attent": [1, 2, 5, 7, 8, 9, 10, 11, 12], "my_feedforward": 1, "register_feedforward": 1, "optim": [2, 8, 14, 16], "oper": [2, 8, 14], "effici": [2, 12], "mechan": [2, 3, 4, 8, 10, 11, 13], "feedforward": [2, 8, 12], "embed": [2, 3, 4, 8], "revers": [2, 8, 11], "layer": [2, 8, 11, 12], "multiheaddispatch": [3, 9, 15], "tupl": [3, 4, 5], "residual_dropout": [3, 9, 15], "use_separate_proj_weight": 3, "dim_kei": 3, "dim_valu": 3, "in_proj_contain": 3, "inputproject": 3, "use_rotary_embed": 3, "out_proj": 3, "dispatch": [3, 4, 15], "project": 3, "end": 3, "follow": [3, 4, 7, 10, 12, 13, 14, 16], "architectur": [3, 10, 15, 16], "actual": [3, 4, 9, 14], "vari": [3, 4], "well": [3, 13], "wrap": [3, 12], "make": [3, 4, 9, 12, 14, 15], "them": [3, 10, 12, 14], "model": [3, 7, 8, 11, 12, 15, 16], "whether": [3, 12, 15], "amount": 3, "residu": [3, 12], "path": [3, 10, 12, 15], "differ": [3, 4, 9, 10, 12], "weight": [3, 13], "rotari": [3, 5], "emb": [3, 9], "dim": [3, 4, 12, 13], "multiheaddispatchconfig": 3, "op": 4, "attentionbia": 4, "custom": 4, "attn_bia": 4, "argument": [4, 10], "memory_efficient_attent": 4, "That": [4, 15], "function": [4, 9, 12, 13], "abil": 4, "add": 4, "qk": 4, "t": 4, "matrix": [4, 9], "softmax": 4, "calcul": 4, "b": [4, 12], "n_queri": 4, "most": 4, "common": [4, 7], "contain": 4, "infin": 4, "form": 4, "so": [4, 9, 10, 14, 16], "some": [4, 7, 9, 12, 13, 14, 15], "children": 4, "defin": [4, 9, 10, 12, 13, 16], "altern": [4, 13, 15], "thing": [4, 10], "when": [4, 7, 12, 13, 14], "instead": 4, "doe": [4, 12], "materi": 4, "hardcod": 4, "better": [4, 9, 14], "fmha": 4, "lowertriangularmask": 4, "lowertriangularfrombottomrightmask": 4, "lowertriangularmaskwithtensorbia": 4, "blockdiagonalmask": 4, "blockdiagonalcausalmask": 4, "float32": 4, "cpu": 4, "veri": [4, 12, 14, 15], "slow": [4, 7], "don": 4, "attempt": 4, "debug": 4, "test": [4, 8, 10, 11, 16], "like": [4, 10, 12, 13, 14, 15], "q_seqlen": 4, "k_seqlen": 4, "attentionopbas": 4, "baseoper": 4, "cutlass": 4, "fwop": 4, "bwop": 4, "flash": 4, "triton": [4, 8, 9, 11], "small_k": 4, "not_supported_reason": 4, "list": 4, "reason": 4, "why": 4, "support": [4, 7, 13, 14], "run": [4, 9, 14], "p": 4, "attentionfwopbas": 4, "attentionbwopbas": 4, "output_dtyp": 4, "Not": 4, "o": 4, "n": [4, 10, 12], "2": [4, 9, 12], "format": 4, "h": 4, "where": [4, 9], "per": [4, 9], "have": [4, 9, 13], "3": [4, 7, 12, 13, 15], "also": [4, 7, 10, 12, 14, 16], "gqa": 4, "note": [4, 9, 12, 13], "below": 4, "contigu": 4, "requir": [4, 9, 10, 12], "last": [4, 14], "s": [4, 9, 10, 13, 14, 15], "stride": 4, "equival": [4, 8, 11], "pytorch": [4, 8, 9, 13, 14], "code": [4, 7, 10, 14, 15], "transpos": 4, "attn": 4, "exampl": [4, 7, 9, 13, 14], "import": [4, 9, 13, 14, 15], "xop": 4, "regular": 4, "With": 4, "hardwar": 4, "nvidia": [4, 14], "gpu": [4, 7, 12, 14], "capabl": [4, 7, 14], "abov": [4, 7, 12, 13], "p100": 4, "datatyp": 4, "f16": 4, "bf16": 4, "f32": 4, "experiment": 4, "mqa": 4, "group": 4, "16": [4, 9, 13, 15], "8": [4, 7, 9, 13], "pleas": [4, 9, 12, 13], "automat": [4, 7, 10, 16], "broadcast": 4, "manual": [4, 13], "128": 4, "cuda": [4, 8, 9, 13, 14], "float16": [4, 9], "randn": [4, 9], "out_gqa": 4, "reshap": 4, "4": 4, "expand": 4, "rais": 4, "notimplementederror": 4, "mha": [4, 12], "valueerror": 4, "invalid": 4, "mq": 4, "mkv": 4, "kv": 4, "default": [4, 7, 10], "arbitrari": 4, "slower": 4, "disabl": 4, "factor": 4, "recommend": [4, 10], "best": 4, "depend": [4, 5, 15], "larg": [4, 12], "includ": [4, 12], "without": [4, 12], "tensorcor": 4, "old": 4, "sm60": 4, "small": [4, 9], "pre": 4, "amper": 4, "bmk": 4, "extra": [4, 9, 10, 12, 13], "might": 4, "done": [4, 10], "deprec": 4, "new": [4, 10, 15, 16], "ck": [4, 10], "compos": [4, 16], "ck_decod": 4, "256": 4, "fit": 4, "work": [4, 10, 13, 15], "mi250x": 4, "localattentionfrombottomrightmask": 4, "window_left": 4, "window_right": 4, "_left": 4, "_right": 4, "num": 4, "_queri": 4, "_kei": 4, "print": [4, 9], "exp": 4, "4x4": 4, "4x5": 4, "illustr": 4, "total": 4, "tensor_arg": 4, "tensor_kwarg": 4, "lower": [4, 9], "triangular": [4, 9], "aka": 4, "farther": 4, "initi": [4, 15], "than": [4, 7, 9, 12, 14], "equal": 4, "add_bia": 4, "exactli": [4, 12], "shift": 4, "In": [4, 13, 14, 15], "word": 4, "nearer": 4, "final": 4, "between": [4, 9, 12], "left": 4, "right": 4, "thei": [4, 7, 8], "becom": [4, 12, 15], "make_local_attent": 4, "lowertriangularfrombottomrightlocalattentionmask": 4, "_window_s": 4, "distanc": 4, "either": [4, 14, 15], "less": [4, 7, 12], "e": [4, 7], "greater": 4, "green": 4, "area": 4, "grei": 4, "out": [4, 8, 9, 11], "q_seqinfo": 4, "_seqleninfo": 4, "k_seqinfo": 4, "_batch_siz": 4, "block": [4, 6, 7, 8, 9, 10, 11, 16], "diagon": 4, "divid": 4, "handl": 4, "from_tensor_list": 4, "list_x": 4, "nn": [4, 9, 10, 12, 13, 14], "unbind": 4, "list_out": 4, "split": 4, "assert": 4, "from_seqlen": 4, "kv_seqlen": 4, "concaten": 4, "back": 4, "m_i": 4, "correspond": [4, 14], "sum_i": 4, "invers": 4, "token": 4, "possibl": [4, 9, 14, 15], "make_causal_from_bottomright": 4, "blockdiagonalcausalfrombottomrightmask": 4, "prefix": 4, "blockdiagonalcausallocalattentionmask": 4, "make_local_attention_from_bottomright": 4, "blockdiagonalcausallocalattentionfrombottomrightmask": 4, "start": [4, 9, 14], "bottom": 4, "except": 4, "nor": 4, "num_kei": 4, "num_queri": 4, "otherwis": 4, "vector": 4, "blockdiagonalpaddedkeysmask": 4, "_paddedseqleninfo": 4, "12": 4, "three": [4, 10], "max": 4, "want": [4, 7, 10, 13], "first": [4, 12], "kv_pad": 4, "causal_diagon": 4, "upperbound": 4, "individu": 4, "unus": 4, "bc": 4, "blockdiagonalcausalwithoffsetpaddedkeysmask": 4, "offset": 4, "pagedblockdiagonalpaddedkeysmask": 4, "block_tabl": 4, "page_s": 4, "page": 4, "batch_siz": 4, "max_num_pag": 4, "head_dim": 4, "num_group": 4, "pagedblockdiagonalcausalwithoffsetpaddedkeysmask": 4, "blockdiagonalgappykeysmask": 4, "_gappyseqinfo": 4, "gappi": 4, "kv_seqstart": 4, "make_pag": 4, "notional_pad": 4, "paged_typ": 4, "pagedblockdiagonalgappykeysmask": 4, "our": [4, 9, 13], "live": 4, "separ": 4, "convert": [4, 9], "version": [4, 7], "blockdiagonalcausalwithoffsetgappykeysmask": 4, "unlik": 4, "address": 4, "were": 4, "do": [4, 7, 10, 13, 15], "two": [4, 9, 12, 14, 15], "100": 4, "chang": [4, 7, 9], "would": [4, 10, 13, 15], "101": 4, "200": 4, "But": 4, "band": 4, "its": 4, "further": 4, "memory_efficient_attention_backward": 4, "grad": 4, "lse": 4, "gradient": 4, "dq": 4, "dk": 4, "dv": 4, "explan": 4, "memory_efficient_attention_forward_requires_grad": 4, "memory_efficient_attention_forward": 4, "backward": 4, "later": 4, "positional_embed": 5, "rotaryembed": 5, "roform": 5, "su": 5, "crucial": 5, "insight": 5, "rotat": 5, "matric": 5, "rel": 5, "avail": [5, 14], "repo": [5, 16], "gpt": 5, "neox": 5, "inspir": [5, 16], "sinepositionalembed": 5, "positionembed": 5, "vocabembed": 5, "vocab_s": 5, "init_weight": 5, "gain": 5, "build_positional_embed": 5, "positionembeddingconfig": 5, "encod": 5, "my_position_encod": 5, "register_positional_embed": 5, "determinist": 6, "net": 6, "record_rng": 6, "set_rng": 6, "reversibleblock": [6, 12], "split_dim": 6, "f_arg": [6, 12], "g_arg": [6, 12], "backward_pass": 6, "dy": 6, "reversiblesequ": [6, 12], "modulelist": [6, 12], "arg_rout": [6, 12], "transpar": 7, "sputnik": 7, "These": [7, 14], "instal": 7, "recipi": 7, "machin": 7, "abl": 7, "compil": [7, 14], "git": 7, "clone": 7, "fairintern": 7, "conda": 7, "xformer_env": 7, "python": [7, 14], "cd": 7, "pip": 7, "txt": 7, "issu": 7, "relat": [7, 12], "nvcc": 7, "current": [7, 14], "runtim": 7, "match": [7, 9], "often": 7, "unload": 7, "load": 7, "xx": 7, "gcc": 7, "re": [7, 13, 15], "torch_cuda_arch_list": 7, "env": 7, "variabl": 7, "architur": 7, "suggest": 7, "setup": 7, "comprehens": 7, "export": 7, "7": 7, "trigger": [7, 10], "enough": [7, 9], "30": 7, "There": [7, 10, 14, 15], "noth": 7, "specif": [7, 16], "tutori": [7, 14], "visibl": 7, "enabl": [7, 10, 14], "condit": 7, "met": 7, "independ": 7, "limit": [7, 9, 14], "present": 7, "fullfil": 7, "host": [8, 11], "flexibl": [8, 16], "interoper": [8, 16], "state": [8, 16], "art": [8, 16], "api": [8, 15], "replac": [8, 11, 14], "exist": [8, 11], "vit": [8, 11], "blocksparseattent": [8, 11], "extend": [8, 11, 16], "zoo": [8, 11, 16], "interest": [8, 11], "blockspars": 9, "tile": 9, "construct": [9, 10], "simpl": 9, "just": [9, 13, 14], "minimum": 9, "coeffici": 9, "alreadi": [9, 13], "mind": [9, 13], "perfect": 9, "fine": [9, 15], "after": 9, "fact": 9, "grain": 9, "still": 9, "dens": 9, "maxpool": 9, "binari": 9, "layout": 9, "now": [9, 10, 13], "power": 9, "let": [9, 10, 13], "look": 9, "seq": [9, 15], "2048": 9, "1024": [9, 15], "block_siz": 9, "try": 9, "realli": [9, 16], "could": 9, "anyth": [9, 16], "causal_mask": 9, "tril": 9, "ones": 9, "causal_layout": 9, "_you": 9, "head_": 9, "commod": 9, "multihead": [9, 15], "multi_head": [9, 15], "respons": 9, "half": 9, "fw": [9, 12], "data": [9, 15], "remov": 9, "blockif": 9, "requires_grad": 9, "particular": [9, 13], "att_val": 9, "bonu": 9, "compar": [9, 12, 14, 16], "vs": 9, "def": [9, 10, 12, 13], "mem_us": 9, "fn": 9, "titl": 9, "bookeep": 9, "empty_cach": 9, "reset_peak_memory_stat": 9, "synchron": 9, "stop": 9, "report": 9, "max_memori": 9, "max_memory_alloc": 9, "20": 9, "peak": 9, "mb": 9, "round": 9, "1e6": 9, "1e3": 9, "ms": 9, "pytorch_multihead": 9, "multiheadattent": 9, "batch_first": 9, "attn_mask": [9, 13], "On": 9, "v100": [9, 14], "9": 9, "someth": [9, 10, 12, 15], "line": [9, 14], "151mb": 9, "619m": 9, "393mb": 9, "837m": 9, "more": [9, 10, 12, 13, 15, 16], "get": [9, 12, 13, 14], "bias": 9, "result": [9, 14], "toward": 9, "privat": 10, "fork": 10, "progress": 10, "share": 10, "point": [10, 14], "directli": [10, 14, 15], "order": 10, "submit": 10, "pr": [10, 16], "practic": [10, 13], "unit": [10, 14], "loos": 10, "inherit": 10, "expos": [10, 12, 13, 15], "exact": 10, "interfac": [10, 14], "consid": [10, 12, 13], "dataclass": 10, "nystromselfattentionconfig": 10, "paper": [10, 12], "remark": 10, "extens": [10, 16], "explicitli": 10, "constructor": 10, "It": [10, 14], "benchmark": [10, 14, 16], "field": [10, 16], "registr": 10, "snippet": 10, "ti": 10, "open": [10, 12], "up": [10, 12], "least": 10, "tool": 10, "toolbox": 10, "relev": [10, 16], "pick": 10, "variant": [10, 16], "go": 10, "pytest": 10, "my_component_nam": 10, "applic": [10, 12, 14], "lra": 10, "json": 10, "job": 10, "As": [10, 14], "remind": 10, "inform": 10, "dedic": 10, "readm": 10, "python3": [10, 14], "run_task": 10, "py": [10, 14], "task": 10, "config_path": 10, "world_siz": 10, "slurm": 10, "cluster": 10, "batch_submit": 10, "checkpo": 10, "log": [10, 14], "gomez": 12, "Its": 12, "context": 12, "reform": 12, "unrel": 12, "lsh": 12, "chunk": 12, "process": 12, "lightli": 12, "adapt": 12, "robin": 12, "bruegger": 12, "lucidrain": 12, "x1": 12, "x2": 12, "produc": 12, "y1": 12, "y2": 12, "turn": [12, 15], "recov": 12, "detail": 12, "anoth": 12, "effect": 12, "checkpoint": 12, "tradeoff": 12, "One": 12, "benefit": 12, "natur": 12, "free": 12, "help": 12, "save": 12, "commun": 12, "cost": 12, "moreov": 12, "made": 12, "stack": 12, "increas": [12, 14], "norm": 12, "close": 12, "formul": 12, "deal": 12, "accuraci": 12, "affect": 12, "verifi": 12, "repositori": [12, 13], "main": 12, "take": [12, 13, 15], "sequenti": 12, "similarli": 12, "rout": 12, "complet": [12, 15], "factori": 12, "model_factori": 12, "yet": 12, "compat": [12, 14], "ddp": 12, "xformerstackconfig": 12, "block_config": 12, "xformerencoderconfig": 12, "xformerdecoderconfig": 12, "num_lay": 12, "ren": 12, "urtasun": 12, "gross": 12, "2017": 12, "network": 12, "backpropag": 12, "store": 12, "kitaev": 12, "kaiser": 12, "\u0142": 12, "levskaya": 12, "sai": 13, "experi": 13, "show": 13, "how": [13, 14], "reus": [13, 16], "imag": 13, "aspect": 13, "translat": 13, "check": 13, "notebook": 13, "exhaust": 13, "timm": 13, "vision_transform": 13, "visiontransform": 13, "timm_sparse_attent": 13, "timmsparseattent": 13, "img_siz": 13, "224": 13, "patch_siz": 13, "embed_dim": 13, "96": 13, "depth": 13, "mlp_ratio": 13, "qkv_bia": 13, "norm_lay": 13, "layernorm": 13, "suppos": 13, "snipper": 13, "precis": 13, "sever": 13, "attention_pattern": 13, "my_fancy_mask": 13, "recurs": 13, "monkei": 13, "patch": 13, "replace_attn_with_xformers_on": 13, "module_output": 13, "isinst": 13, "qkv": 13, "minim": 13, "child": 13, "named_children": 13, "add_modul": 13, "del": 13, "variat": 13, "exchang": 13, "mai": 13, "good": 13, "idea": 13, "closer": 13, "exhibit": 13, "clear": 13, "sparsiti": 13, "alter": 13, "sparsifi": 13, "languag": 14, "parallel": 14, "program": 14, "pure": 14, "mani": 14, "primit": 14, "tranform": 14, "backend": 14, "short": 14, "jit": 14, "toolchain": 14, "famili": 14, "consolid": 14, "ad": 14, "hoc": 14, "goal": 14, "over": 14, "similar": [14, 15], "lang": 14, "org": 14, "02": 14, "html": 14, "sphx": 14, "glr": 14, "log_softmax": 14, "amp": 14, "autograd": 14, "throughput": 14, "operand": 14, "relu": 14, "simpli": 14, "fusedlinearlay": 14, "my_linear_lay": 14, "in_featur": 14, "out_featur": 14, "squared_relu": 14, "skip": 14, "septemb": 14, "faster": 14, "non": 14, "sigmoid": 14, "fp16": 14, "usecas": 14, "serv": 14, "measur": [14, 16], "laptop": 14, "3080": 14, "10": 14, "reproduc": 14, "benchmark_triton_layernorm": 14, "gb": 14, "benchmark_triton_dropout": 14, "own": 15, "everyth": 15, "requires_head_dimens": 15, "flag": 15, "defer": 15, "lot": 15, "littl": 15, "obscur": 15, "although": 15, "hopefulli": 15, "straightforward": 15, "built": 15, "intern": 15, "sure": 15, "programat": 15, "sweep": 15, "search": [15, 16], "definit": 15, "384": 15, "my_config": 15, "attention_nam": 15, "easili": [15, 16], "rand": 15, "dummi": 15, "my": 15, "focus": 16, "agnost": 16, "design": 16, "ideal": 16, "break": 16, "studi": 16, "ablat": 16, "aim": 16, "easi": 16, "focu": 16, "improv": 16, "against": 16, "across": 16, "domain": 16, "engin": 16, "effort": 16, "And": 16, "sinc": 16, "heavi": 16, "everi": 16, "alon": 16, "happen": 16, "anytim": 16, "somebodi": 16, "through": 16, "crowd": 16, "welcom": 16, "move": 16, "too": 16}, "objects": {"xformers.components": [[3, 0, 1, "", "MultiHeadDispatch"], [0, 3, 0, "-", "attention"], [1, 3, 0, "-", "feedforward"], [5, 3, 0, "-", "positional_embedding"]], "xformers.components.MultiHeadDispatch": [[3, 1, 1, "", "forward"], [3, 1, 1, "", "from_config"], [3, 2, 1, "", "training"]], "xformers.components.attention": [[0, 0, 1, "", "Attention"], [0, 0, 1, "", "AttentionMask"], [0, 0, 1, "", "FavorAttention"], [0, 0, 1, "", "GlobalAttention"], [0, 0, 1, "", "LinformerAttention"], [0, 0, 1, "", "LocalAttention"], [0, 0, 1, "", "NystromAttention"], [0, 0, 1, "", "OrthoFormerAttention"], [0, 0, 1, "", "RandomAttention"], [0, 0, 1, "", "ScaledDotProduct"], [0, 5, 1, "", "build_attention"], [0, 5, 1, "", "register_attention"]], "xformers.components.attention.Attention": [[0, 1, 1, "", "forward"], [0, 1, 1, "", "from_config"]], "xformers.components.attention.AttentionMask": [[0, 4, 1, "", "device"], [0, 4, 1, "", "dtype"], [0, 1, 1, "", "from_bool"], [0, 1, 1, "", "from_multiplicative"], [0, 4, 1, "", "is_sparse"], [0, 1, 1, "", "make_causal"], [0, 1, 1, "", "make_crop"], [0, 4, 1, "", "ndim"], [0, 4, 1, "", "shape"], [0, 1, 1, "", "to"], [0, 1, 1, "", "to_bool"]], "xformers.components.attention.FavorAttention": [[0, 1, 1, "", "__init__"], [0, 1, 1, "", "forward"]], "xformers.components.attention.GlobalAttention": [[0, 1, 1, "", "__init__"], [0, 1, 1, "", "forward"]], "xformers.components.attention.LinformerAttention": [[0, 1, 1, "", "__init__"], [0, 1, 1, "", "forward"]], "xformers.components.attention.LocalAttention": [[0, 1, 1, "", "__init__"], [0, 1, 1, "", "forward"]], "xformers.components.attention.NystromAttention": [[0, 1, 1, "", "__init__"], [0, 1, 1, "", "forward"]], "xformers.components.attention.OrthoFormerAttention": [[0, 1, 1, "", "__init__"], [0, 1, 1, "", "forward"]], "xformers.components.attention.RandomAttention": [[0, 1, 1, "", "__init__"], [0, 1, 1, "", "forward"]], "xformers.components.attention.ScaledDotProduct": [[0, 1, 1, "", "forward"], [0, 2, 1, "", "mask"]], "xformers.components.feedforward": [[1, 0, 1, "", "Feedforward"], [1, 0, 1, "", "MLP"], [1, 5, 1, "", "build_feedforward"], [1, 5, 1, "", "register_feedforward"]], "xformers.components.feedforward.Feedforward": [[1, 1, 1, "", "from_config"], [1, 2, 1, "", "training"]], "xformers.components.feedforward.MLP": [[1, 1, 1, "", "forward"], [1, 2, 1, "", "training"]], "xformers.components.positional_embedding": [[5, 0, 1, "", "RotaryEmbedding"], [5, 0, 1, "", "SinePositionalEmbedding"], [5, 0, 1, "", "VocabEmbedding"], [5, 5, 1, "", "build_positional_embedding"], [5, 5, 1, "", "register_positional_embedding"]], "xformers.components.positional_embedding.RotaryEmbedding": [[5, 1, 1, "", "forward"], [5, 2, 1, "", "training"]], "xformers.components.positional_embedding.SinePositionalEmbedding": [[5, 1, 1, "", "forward"], [5, 2, 1, "", "training"]], "xformers.components.positional_embedding.VocabEmbedding": [[5, 1, 1, "", "forward"], [5, 1, 1, "", "init_weights"], [5, 2, 1, "", "training"]], "xformers.components.reversible": [[6, 0, 1, "", "Deterministic"], [6, 0, 1, "", "ReversibleBlock"], [6, 0, 1, "", "ReversibleSequence"]], "xformers.components.reversible.Deterministic": [[6, 1, 1, "", "forward"], [6, 1, 1, "", "record_rng"], [6, 2, 1, "", "training"]], "xformers.components.reversible.ReversibleBlock": [[6, 1, 1, "", "backward_pass"], [6, 1, 1, "", "forward"], [6, 2, 1, "", "training"]], "xformers.components.reversible.ReversibleSequence": [[6, 1, 1, "", "forward"], [6, 2, 1, "", "training"]], "xformers": [[4, 3, 0, "-", "ops"], [7, 3, 0, "-", "triton"]], "xformers.ops": [[4, 0, 1, "", "AttentionBias"], [4, 0, 1, "", "AttentionOpBase"], [4, 3, 0, "-", "fmha"], [4, 5, 1, "", "memory_efficient_attention"]], "xformers.ops.AttentionBias": [[4, 1, 1, "", "materialize"]], "xformers.ops.AttentionOpBase": [[4, 1, 1, "", "not_supported_reasons"]], "xformers.ops.fmha": [[4, 3, 0, "-", "attn_bias"], [4, 3, 0, "-", "ck"], [4, 3, 0, "-", "ck_decoder"], [4, 3, 0, "-", "ck_splitk"], [4, 3, 0, "-", "cutlass"], [4, 3, 0, "-", "flash"], [4, 5, 1, "", "memory_efficient_attention_backward"], [4, 5, 1, "", "memory_efficient_attention_forward"], [4, 5, 1, "", "memory_efficient_attention_forward_requires_grad"], [4, 3, 0, "-", "small_k"]], "xformers.ops.fmha.attn_bias": [[4, 0, 1, "", "AttentionBias"], [4, 0, 1, "", "BlockDiagonalCausalFromBottomRightMask"], [4, 0, 1, "", "BlockDiagonalCausalLocalAttentionFromBottomRightMask"], [4, 0, 1, "", "BlockDiagonalCausalLocalAttentionMask"], [4, 0, 1, "", "BlockDiagonalCausalMask"], [4, 0, 1, "", "BlockDiagonalCausalWithOffsetGappyKeysMask"], [4, 0, 1, "", "BlockDiagonalCausalWithOffsetPaddedKeysMask"], [4, 0, 1, "", "BlockDiagonalGappyKeysMask"], [4, 0, 1, "", "BlockDiagonalMask"], [4, 0, 1, "", "BlockDiagonalPaddedKeysMask"], [4, 0, 1, "", "LocalAttentionFromBottomRightMask"], [4, 0, 1, "", "LowerTriangularFromBottomRightLocalAttentionMask"], [4, 0, 1, "", "LowerTriangularFromBottomRightMask"], [4, 0, 1, "", "LowerTriangularMask"], [4, 0, 1, "", "LowerTriangularMaskWithTensorBias"], [4, 0, 1, "", "PagedBlockDiagonalCausalWithOffsetPaddedKeysMask"], [4, 0, 1, "", "PagedBlockDiagonalGappyKeysMask"], [4, 0, 1, "", "PagedBlockDiagonalPaddedKeysMask"]], "xformers.ops.fmha.attn_bias.AttentionBias": [[4, 1, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.BlockDiagonalCausalWithOffsetGappyKeysMask": [[4, 1, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.BlockDiagonalCausalWithOffsetPaddedKeysMask": [[4, 1, 1, "", "from_seqlens"]], "xformers.ops.fmha.attn_bias.BlockDiagonalGappyKeysMask": [[4, 1, 1, "", "from_seqlens"], [4, 1, 1, "", "make_paged"], [4, 1, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.BlockDiagonalMask": [[4, 1, 1, "", "from_seqlens"], [4, 1, 1, "", "from_tensor_list"], [4, 1, 1, "", "make_causal"], [4, 1, 1, "", "make_causal_from_bottomright"], [4, 1, 1, "", "make_local_attention"], [4, 1, 1, "", "make_local_attention_from_bottomright"], [4, 1, 1, "", "materialize"], [4, 1, 1, "", "split"]], "xformers.ops.fmha.attn_bias.BlockDiagonalPaddedKeysMask": [[4, 1, 1, "", "from_seqlens"], [4, 1, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.LowerTriangularFromBottomRightMask": [[4, 1, 1, "", "make_local_attention"]], "xformers.ops.fmha.attn_bias.LowerTriangularMask": [[4, 1, 1, "", "add_bias"]], "xformers.ops.fmha.attn_bias.PagedBlockDiagonalGappyKeysMask": [[4, 1, 1, "", "from_seqlens"], [4, 1, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.PagedBlockDiagonalPaddedKeysMask": [[4, 1, 1, "", "from_seqlens"], [4, 1, 1, "", "materialize"]], "xformers.ops.fmha.ck": [[4, 0, 1, "", "BwOp"], [4, 0, 1, "", "FwOp"]], "xformers.ops.fmha.ck_decoder": [[4, 0, 1, "", "FwOp"]], "xformers.ops.fmha.cutlass": [[4, 0, 1, "", "BwOp"], [4, 0, 1, "", "FwOp"]], "xformers.ops.fmha.flash": [[4, 0, 1, "", "BwOp"], [4, 0, 1, "", "FwOp"]], "xformers.ops.fmha.small_k": [[4, 0, 1, "", "BwOp"], [4, 0, 1, "", "FwOp"]]}, "objtypes": {"0": "py:class", "1": "py:method", "2": "py:attribute", "3": "py:module", "4": "py:property", "5": "py:function"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "method", "Python method"], "2": ["py", "attribute", "Python attribute"], "3": ["py", "module", "Python module"], "4": ["py", "property", "Python property"], "5": ["py", "function", "Python function"]}, "titleterms": {"attent": [0, 3, 4, 13, 15], "mechan": [0, 1, 15], "feedforward": 1, "api": 2, "refer": [2, 7], "multi": 3, "head": 3, "xformer": [4, 8, 10, 16], "optim": 4, "oper": 4, "memori": 4, "effici": 4, "avail": 4, "implement": 4, "bias": 4, "non": 4, "autograd": 4, "posit": 5, "embed": 5, "revers": [6, 12], "layer": [6, 14], "custom": [7, 8], "part": [7, 8, 10], "spars": [7, 13], "cuda": 7, "kernel": 7, "1": 7, "build": 7, "2": 7, "usag": 7, "triton": [7, 14], "requir": 7, "possibl": 7, "welcom": 8, "s": 8, "document": 8, "compon": 8, "tutori": [8, 11], "exampl": 8, "some": 8, "us": [9, 12, 14], "blocksparseattent": 9, "extend": 10, "zoo": 10, "block": 12, "intro": 12, "transform": 12, "In": 12, "practic": 12, "replac": 13, "all": 13, "from": 13, "an": 13, "exist": 13, "vit": 13, "model": 13, "equival": 13, "base": 14, "fuse": 14, "softmax": 14, "linear": 14, "norm": 14, "dropout": 14, "bia": 14, "activ": 14, "i": 15, "m": 15, "onli": 15, "interest": 15, "test": 15, "out": 15, "ar": 15, "host": 15, "here": 15, "what": 16}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.todo": 2, "sphinx.ext.viewcode": 1, "sphinx": 56}})