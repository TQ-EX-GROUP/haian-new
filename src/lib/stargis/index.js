/* eslint-disable*/

/**
 * ���������ݼ���
 * pImportBinaryBufferΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-15
 */

export function BinaryBuffer(pImportBinaryBuffer) {
    var pBinaryBuffer = null;
    if (pImportBinaryBuffer == null) {
        pBinaryBuffer = plugin.NewBinaryBuffer();
    }
    else {
        pBinaryBuffer = pImportBinaryBuffer;
    }

    this.getNpObject = function () {
        return pBinaryBuffer;
    };

    this.Valid = function () {
        return pBinaryBuffer.isvalid;
    };

    /**
     * ��ȡ�������ַ�������(����bool���ͣ�����)
     * @param   {String}  sText
     * @return  {String}
     */
    this.GetText = function () {
        return pBinaryBuffer.GetText();
    };
    this.SetText = function (sText) {
        pBinaryBuffer.SetText(sText);
    };

    /**
     * ��ȡ�����ü��϶���ֵ
     * @param  {SAFEARRAY}
     * @return  {SAFEARRAY} arrayObj
     */
    this.GetByteArray = function () {
        return pBinaryBuffer.GetByteArray();
    };
    this.SetByteArray = function (arrayObj) {
        pBinaryBuffer.SetByteArray(arrayObj);
    };

    /**
     * ��Base64�����ַ�������
     * @param  {string} strValue
     */
    this.FromStringBase64 = function(strValue){
        pBinaryBuffer.FromStringBase64(strValue);
    };

    /**
     * ת��ΪBase64�����ַ���
     * @return  {string} strValue
     */
    this.AsStringBase64 = function(){
        return pBinaryBuffer.AsStringBase64();
    };

    /**
     * ��ȡ���϶���ֵ
     * @return  {int}
     */
    this.getLength = function(){
        return pBinaryBuffer.Length;
    };
}/**
* ����
* pCollectionΪ����Ĳ���
* Creator   Jimmy
* Time     2016-07-08
*/

export function Collection(pCollection) {
    this.getNpObject = function () {
        return pCollection;
    };

    /**
    * ��ȡֻ�����������
    * @return  {int}
    */
    this.getCount = function () {
        return pCollection.Count;
    };

    /**
    * ��ȡֻ�����������
    * @param {int} iIndex ����λ��
    */
    this.RemoveAt = function (iIndex) {
        pCollection.RemoveAt(iIndex);
    };

    /**
    * �Ƴ�ָ��λ����ָ�������Ķ���
    * @param {int} iIndex ����λ��
	* @param {int} iCount ����
    */
    this.Remove = function (iIndex, iCount) {
        pCollection.Remove(iIndex, iCount);
    };

    /**
    * ���
    */
    this.Clear = function () {
        pCollection.Clear();
    };

    /**
    * �ͷŶ����ڴ棬����������ΪCollection��Ԫ�ص�ʵ����Ŀ
    */
    this.TrimToSize = function () {
        pCollection.TrimToSize();
    };
}/**
 * ˫�������ݼ���
 * pImportDoublesΪ����Ĳ���
 * Creator  Jimmy
 * Time     2016-07-08
 */

export function DoubleCollection(pImportDoubles) {
    var pDoubles = null;
    if (pImportDoubles == null) {
        pDoubles = plugin.NewDoubleCollection();
    }
    else {
        pDoubles = pImportDoubles;
    }

    Collection.call(this, pDoubles);

    this.getNpObject = function () {
        return pDoubles;
    };

    this.Valid = function () {
        return pDoubles.isvalid;
    };

    /**
     * ��ȡ�����ü�����ָ��λ�õ�Ԫ��ֵ
     * @param {int} iIndex ����λ��
	 * @param {double} dValue Ԫ��ֵ
     */
    this.Get = function (iIndex) {
        return pDoubles.Get(iIndex);
    };
    this.Set = function (iIndex, dValue) {
        pDoubles.Set(iIndex, dValue);
    };

    /**
     * ��ȡ�����ü��϶���
     * @param {DoubleArray}  newDoubles
     * @return {DoubleArray}
     */
    this.getItems = function(){
        return pDoubles.Items;
    };
    this.setItems = function(newDoubles){
        pDoubles.Items=newDoubles;;
    };

    /**
     * ����ֵ
     * @param {double} dValue
     */
    this.Add = function (dValue) {
        pDoubles.Add(dValue);
    };
}

/**
 * ���ݷ�Χ��˫���ȣ���
 * pImportDoubleDomainΪ����Ĳ���
 * Creator  Jimmy
 * Time     2016-07-08
 */

export function DoubleDomain(pImportDoubleDomain) {
    var pDoubleDomain = null;
    if(pImportDoubleDomain == null){
        pDoubleDomain = plugin.NewDoubleDomain();
    }
    else{
        pDoubleDomain = pImportDoubleDomain;
    }
    this.getNpObject = function () {
        return pDoubleDomain;
    };

    this.Valid = function () {
        return pDoubleDomain.isvalid;
    };

    /**
     * ��ȡ��������Чֵ����Сֵ
     * @param {double} dValue
     * @return {double} dValue
     */
    this.getMinValue = function(){
        return pDoubleDomain.MinValue;
    };
    this.setMinValue = function (dValue) {
        pDoubleDomain.MinValue = dValue;
    };

    /**
     * ��ȡ���������ֵ
     * @param {double} dValue
     * @return {double} dValue
     */
    this.getMaxValue = function(){
        return pDoubleDomain.MaxValue;
    };
    this.setMaxValue = function (dValue) {
        pDoubleDomain.MaxValue = dValue;
    };
}

/**
 * ���������ݼ���
 * pImportFloatsΪ����Ĳ���
 * Creator  Jimmy
 * Time     2016-07-08
 */

export function FloatCollection(pImportFloats) {

    var pFloats = null;
    if (pImportFloats == null) {
        pFloats = plugin.NewFloatCollection();
    }
    else {
        pFloats = pImportFloats;
    }

    Collection.call(this, pFloats);

    this.getNpObject = function () {
        return pFloats;
    };

    this.Valid = function(){
        return pFloats.isvalid;
    };

    /**
     * ��ȡ�����ü�����ָ��λ�õ�Ԫ��ֵ
     * @param {int} iIndex ����λ��
	 * @param {float} fValue Ԫ��ֵ
     */
    this.Get = function (iIndex) {
        return pFloats.Get(iIndex);
    };
    this.Set = function (iIndex, fValue) {
        pFloats.Set(iIndex, fValue);
    };

    /**
     * ��ȡ�����ü��϶���
     * @param  {FloatArray} newFloats
     * @return {FloatArray}
     */
    this.getItems = function () {
        return pFloats.Items;
    };
    this.setItems = function (newFloats) {
        pFloats.Items = newFloats;
    };

    /**
     * ����ֵ
     * @param {float} fValue
     */
    this.Add = function (fValue) {
        pFloats.Add(fValue);
    };
}

/**
 * 32λ�������ݼ���
 * pImportInt32sΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-07-08
 */

export function Int32Collection(pImportInt32s) {
    var pInt32s = null;
    if (pImportInt32s == null) {
        pInt32s = plugin.NewInt32Collection();
    }
    else {
        pInt32s = pImportInt32s;
    }
    Collection.call(this, pInt32s);

    this.getNpObject = function () {
        return pInt32s;
    };

    this.Valid = function(){
        return pInt32s.isvalid;
    };

    /**
     * ��ȡ�����ü�����ָ��λ�õ�Ԫ��ֵ
     * @param {int} iIndex ����λ��
	 * @param {int} iValue Ԫ��ֵ
     */
    this.Get = function (iIndex) {
        return pInt32s.Get(iIndex);
    };
    this.Set = function (iIndex, iValue) {
        pInt32s.Set(iIndex, iValue);
    };

    /**
     * ��ȡ�����ü��϶���
     * @param  {Int32Array} newInt32s
     * @return {Int32Array}
     */
    this.getItems = function(){
        return pInt32s.Items;
    };
    this.setItems = function(newInt32s){
        pInt32s.Items=newInt32s;
    };

    /**
     * ����ֵ
     * @param {int} iValue
     */
    this.Add = function (iValue) {
        pInt32s.Add(iValue);
    };
}/**
 * Ȩ�����ɹ���
 * Creator zzz
 * Time    2018-05-25
 */

export function LicenseServer(pVal) {
    var licenseServer = null;
    if (pVal == null) {
        licenseServer = plugin.LicenseServer;
    }
    else {
        licenseServer = pVal;
    }

    this.getNpObject = function () {
        return licenseServer;
    };

    this.Valid = function () {
        return licenseServer.isvalid;
    };

      /**
    * ������Ȩ�����������ñ�����Ȩ�ļ�
    */
    this.SetLicenseKey = function (strKey) {
        return licenseServer.SetLicenseKey(strKey);
    };

   /**
    * �ж������Ƿ����
    */
    this.LicenseValid = function () {
        return licenseServer.LicenseValid();
    };

    
}

/**
 * ����
 * pImportPropertyΪ����Ĳ���
 * Creator Jimmy
 * Time    2016-06-17
 */

export function Property(pImportProperty) {
    var pProperty = null;
    if (pImportProperty == null) {
        pProperty = plugin.NewProperty();
    }
    else {
        pProperty = pImportProperty;
    }

    this.getNpObject = function () {
        return pProperty;
    };

    this.Valid = function () {
        return pProperty.isvalid;
    };

    /**
     * ��ȡ��������
     * @param  {String} sValue
	 * @return {String} sValue
     */
    this.getName = function(){
        return pProperty.Name;
    };
    this.setName = function (sValue) {
        pProperty.Name = sValue;
    };

    /**
     * ��ȡ��������ֵ
     * @param  {Variant} vValue
     * @return {Variant} vValue
     */
    this.getValue = function(){
        return pProperty.Value;
    };
    this.setValue = function (vValue) {
        pProperty.Value = vValue;
    };
}

/**
 * ���Լ���
 * pImportPropertysΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-07-08
 */

export function PropertyCollection(pImportPropertys) {
    var pPropertys = null;
    if (pImportPropertys == null) {
        pPropertys = plugin.NewPropertyCollection();
    }
    else {
        pPropertys = pImportPropertys;
    }
    Collection.call(this, pPropertys);

    this.getNpObject = function () {
        return pPropertys;
    };

    this.Valid = function () {
        return pPropertys.isvalid;
    };

    /**
     * ��ȡ�����ü�����ָ��λ�õ�Ԫ��ֵ
     * @param {int}  iIndex ����λ��
	 * @param {Property} pProperty ��Ӧλ�õ�����
     */
    this.Get = function (iIndex) {
        var pProperty = pPropertys.Get(iIndex);
        if (pProperty != null) {
            return new Property(pProperty);
        }
    };
    this.Set = function (iIndex, pProperty) {
        if ((pProperty != null)&&(pProperty != undefined)&&(pProperty.Valid())) {
            pPropertys.Set(iIndex, pProperty.getNpObject());
        }
        else{
            pPropertys.Set(iIndex, pProperty);
        }
    };

    /**
     * ��ȡ�����ü��϶���
     * @param {PropertyArray} newPros
     * @return {PropertyArray}
     */
    this.getItems = function(){
		return pPropertys.Items;
        // var newArrays =  pPropertys.GetItems();
        // if((newArrays != null)&&(newArrays != undefined)) {
            // var lI = newArrays.length;
            // var newPros = [];
            // for (var i = 0; i < lI; i++) {
                // var newArray = newArrays[i];
                // var newArrayRes = new Property(newArray);
                // newPros.push(newArrayRes);
            // }
            // return newPros;
        // }
        // else{
            // return newArrays;
        // }
    };
    this.setItems = function (newPros) {
		pPropertys.Items=newPros;
        // if((newPros != null)&&(newPros != undefined)) {
            // var lI = newPros.length;
            // var newArrays = [];
            // for (var i = 0; i < lI; i++) {
                // var newArray = newPros[i];
                // newArrays.push(newArray.getNpObject());
            // }
            // pPropertys.SetItems(newArrays);
        // }
        // else{
            // pPropertys.SetItems(newPros);
        // }
    };

    /**
     * ��ȡ������ָ�����Ƶ�����ֵ
     * @param {String}  sName ����
     * @return {Variant} vValue ����ֵ
     */
    this.GetValue = function (sName) {
        return pPropertys.GetValue(sName);
    };
    this.SetValue = function (sName, vValue) {
        pPropertys.SetValue(sName, vValue);
    };

    /**
     * ��ȡ�������Ƽ���
     * @return {StringCollection} pStrings
     */
    this.getNames = function () {
        var pStrings = pPropertys.Names;
        if ((pStrings != null)&&(pStrings != undefined)&&(pStrings.isvalid)) {
            return new StringCollection(pStrings);
        }
        else{
            return null;
        }
    };

    /**
     * ����ֵ
     * @param {Property} pProperty
     */
    this.Add = function (pProperty) {
        if ((pProperty != null)&&(pProperty != undefined)&&(pProperty.Valid())){
            pPropertys.Add(pProperty.getNpObject());
        }
        else{
            pPropertys.Add(pProperty);
        }
    };
}/**
* �ַ�������
* pImportStringsΪ����Ĳ���
* Creator   Jimmy
* Time      2016-07-08
*/

export function StringCollection(pImportStrings) {
    var pStrings = null;
    if (pImportStrings == null) {
        pStrings = plugin.NewStringCollection();
    }
    else {
        pStrings = pImportStrings;
    }
    Collection.call(this, pStrings);

    this.getNpObject = function () {
        return pStrings;
    };

    this.Valid = function () {
        return pStrings.isvalid;
    };

    /**
    * ��ȡ�����ü�����ָ��λ�õ�Ԫ��ֵ
    * @param {int} iIndex ����λ��
	* @param {string} sValue Ԫ��ֵ
    */
    this.Get = function (iIndex) {
        return pStrings.Get(iIndex);
    };
    this.Set = function (iIndex, sValue) {
        pStrings.Set(iIndex, sValue);
    };

    /**
     * ��ȡ�����ü�����ָ��λ�õ�Ԫ��ֵ
     * @param {StringArray}
     * @return {StringArray} pNewStringArray
     */
    this.getItems = function () {
        return pStrings.Items;
    };
    this.setItems = function (pNewStringArray) {
        pStrings.Items=pNewStringArray;
    };

    /**
    * ����ֵ
    * @param {String} sValue
    */
    this.Add = function (sValue) {
        pStrings.Add(sValue);
    };
}/**
 * �޷���16λ�������ݼ���
 * pImportUInt16sΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-08
 */

export function UInt16Collection(pImportUInt16s) {
    var pUInt16s = null;
    if (pImportUInt16s == null) {
        pUInt16s = plugin.NewUInt16Collection();
    }
    else {
        pUInt16s = pImportUInt16s;
    }
    Collection.call(this, pUInt16s);

    this.getNpObject = function () {
        return pUInt16s;
    };

    this.Valid = function(){
        return pUInt16s.isvalid;
    };

    /**
     * ��ȡ�����ü�����ָ��λ�õ�Ԫ��ֵ
     * @param {int} iIndex ����λ��
	 * @param {int} iValue Ԫ��ֵ
     */
    this.Get = function (iIndex) {
        return pUInt16s.Get(iIndex);
    };
    this.Set = function (iIndex, iValue) {
        pUInt16s.Set(iIndex, iValue);
    };

    /**
     * ��ȡ�����ü��϶���
     * @param {UInt16Array}
     * @return {UInt16Array} pNewUInt16Array
     */
    this.getItems = function () {
        return pUInt16s.Items;
    };
    this.setItems = function (pNewUInt16Array) {
        pUInt16s.Items=pNewUInt16Array;
    };

    /**
     * ����ֵ
     * @param {int} iValue
     */
    this.Add = function (iValue) {
        pUInt16s.Add(iValue);
    };
}
/**
 * �޷���32λ�������ݼ���
 * pImportUInt32sΪ����Ĳ���
 * Creator  Jimmy
 * Time     2016-07-08
 */

export function UInt32Collection(pImportUInt32s) {
    var pUInt32s = null;
    if (pImportUInt32s == null) {
        pUInt32s = plugin.NewUInt32Collection();
    }
    else {
        pUInt32s = pImportUInt32s;
    }

    Collection.call(this, pUInt32s);

    this.getNpObject = function () {
        return pUInt32s;
    };

    this.Valid = function(){
        return pUInt32s.isvalid;
    };

    /**
     * ��ȡ�����ü�����ָ��λ�õ�Ԫ��ֵ
     * @param {int} iIndex ����λ��
	 * @param {long} lValue Ԫ��ֵ
     */
    this.Get = function (iIndex) {
        return pUInt32s.Get(iIndex);
    };
    this.Set = function (iIndex, lValue) {
        pUInt32s.Set(iIndex, lValue);
    };

    /**
     * ��ȡ�����ü��϶���
     * @param {UInt32Array} newUInt32Array
     * @return {UInt32Array}
     */
    this.getItems = function () {
        return pUInt32s.Items;
    };
    this.setItems = function (newUInt32Array) {
        pUInt32s.SetItems=newUInt32Array;
    };

    /**
     * ����ֵ
     * @param {long} lValue
     */
    this.Add = function (lValue) {
        pUInt32s.Add(lValue);
    };
}

/**
 * ����
 * pImportAttachmentΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-05
 */

export function Attachment(pImportAttachment){
    var pAttachment = null;
    if (pImportAttachment == null) {
        pAttachment = plugin.NewAttachment();
    }
    else {
        pAttachment = pImportAttachment;
    }

    this.getNpObject = function () {
        return pAttachment;
    };

    this.Valid = function () {
        return pAttachment.isvalid;
    };

    /**
     * ��ȡ��ʶ
     * @return {GUID}
     */
    this.getGuid = function(){
        return pAttachment.Guid;
    };

    /**
     * ��ȡ����
     * @return {long}
     */
    this.getID = function(){
        return pAttachment.ID;
    };

    /**
     * ��ȡ����������
     * @param {string}  sName
     * @return {string}
     */
    this.getName = function(){
        return pAttachment.Name;
    };
    this.setName = function(sName){
        pAttachment.Name = sName;
    };

    /**
     * ��ȡ������MIMEЭ�����ͱ�ʶ
     * @param {string}  sMimeType
     * @return {string}
     */
    this.getMimeType = function(){
        return pAttachment.MimeType;
    };
    this.setMimeType = function(sMimeType){
        pAttachment.MimeType = sMimeType;
    };

    /**
     * ��ȡ������Ҫ������
     * @param {long}  lFeatureID
     * @return {long}
     */
    this.getFeatureID = function(){
        return pAttachment.FeatureID;
    };
    this.setFeatureID = function (lFeatureID) {
        pAttachment.FeatureID = lFeatureID;
    };

    /**
     * ��ȡ����������
     * @param {BinaryBuffer}  pBinaryBuffer
     * @return {BinaryBuffer} pBinaryBuffer
     */
    this.getData = function () {
        var pBinaryBuffer = pAttachment.Data;
        if ((pBinaryBuffer != null)&&(pBinaryBuffer != undefined)&&(pBinaryBuffer.isvalid)) {
            return new BinaryBuffer(pBinaryBuffer);
        }
        else{
            return null;
        }
    };
    this.setData = function (pBinaryBuffer) {
        if((pBinaryBuffer != null)&&(pBinaryBuffer != undefined)&&(pBinaryBuffer.Valid())) {
            pAttachment.Data = pBinaryBuffer.getNpObject();
        }
        else{
            pAttachment.Data = pBinaryBuffer;
        }
    };

    /**
     * ��ȡ���ݳ���
     * @return {long}
     */
    this.getDataLength = function(){
        return pAttachment.DataLength;
    };
}
/**
 * ��������
 * pImportAttachmentsΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-05
 */

export function AttachmentCollection(pImportAttachments) {
    var pAttachments = pImportAttachments;

    this.getNpObject = function () {
        return pAttachments;
    };

    this.Valid = function () {
        return pAttachments.isvalid;
    };

    /**
     * ��ȡԪ�ظ���
     * @return {long}
     */
    this.getCount = function(){
        return pAttachments.Count;
    };

    /**
     * ��ȡ�������ָ��Ҫ��
     * @return {Attachment} pNewAttachment
     */
    this.Get = function (nIndex) {
        var pNewAttachment = pAttachments.Get(nIndex);
        if ((pNewAttachment != null)&&(pNewAttachment != undefined)&&(pNewAttachment.isvalid)) {
            return new Attachment(pNewAttachment);
        }
        else{
            return null;
        }
    }
}
/**
 * ����������(ObjectClass��������)
 * pImportAttachmentManΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-05
 */
export function AttachmentManager(pImportAttachmentMan){

    this.getNpObject = function () {
        return pImportAttachmentMan;
    };

    this.Valid = function () {
        return pImportAttachmentMan.isvalid;
    };

    /**
     * ��ȡԪ�ظ���
     * @return {boolean}
     */
    this.getIsClosed = function(){
        return pImportAttachmentMan.IsClosed;
    };

    /**
     * ����Attachment
     * @param {Attachment}  pAttachment
     * @return {boolean}
     */
    this.Add = function (pAttachment) {
        if((pAttachment != null)&&(pAttachment != undefined)&&(pAttachment.Valid())){
            return pImportAttachmentMan.Add(pAttachment.getNpObject());
        }
        else{
            return pImportAttachmentMan.Add(pAttachment);
        }
    };

    /**
     * ɾ����ǰObjectClass�����и���
     * @return {long}
     */
    this.DeleteAll = function () {
        return pImportAttachmentMan.DeleteAll();
    };

    /**
     * ��������ɾ��
     * @param {long} lIndex
     * @return {boolean}
     */
    this.Delete = function (lIndex) {
        return pImportAttachmentMan.Delete(lIndex);
    };

    /**
     * ����Ҫ������ɾ��
     * @param {long} lFeatureID
     * @return {boolean}
     */
    this.DeleteByFeatureID = function (lFeatureID) {
        return pImportAttachmentMan.DeleteByFeatureID(lFeatureID);
    };

    /**
     * ��ȡ��ǰObjectClass�����и���
     * @param {boolean} bOnlyInfos
     * @return {AttachmentCollection} pAttachments
     */
    this.GetAllAttachments = function(bOnlyInfos){
        var pAttachments = pImportAttachmentMan.GetAllAttachments(bOnlyInfos);
        if ((pAttachments != null)&&(pAttachments != undefined)&&(pAttachments.isvalid)) {
            return new AttachmentCollection(pAttachments);
        }
        else{
            return null;
        }
    };

    /**
     * ����������ȡ����
     * @param {long} lIndex
     * @return {Attachment} pAttachment
     */
    this.GetAttachment = function (lIndex) {
        var pAttachment = pImportAttachmentMan.GetAttachment(lIndex);
        if ((pAttachment != null)&&(pAttachment != undefined)&&(pAttachment.isvalid)) {
            return new Attachment(pAttachment);
        }
        else{
            return null;
        }
    };

    /**
     * �����������ϻ�ȡ����
     * @param {Int32Collection} pInt32S
     * @param {boolean} bOnlyInfos
     * @return {AttachmentCollection} pAttachments
     */
    this.GetAttachments = function (pInt32S, bOnlyInfos) {
        var pAttachments = pImportAttachmentMan.GetAttachments(pInt32S.getNpObject(), bOnlyInfos);
        if ((pAttachments != null)&&(pAttachments != undefined)&&(pAttachments.isvalid)) {
            return new AttachmentCollection(pAttachments);
        }
        else{
            return null;
        }
    };

    /**
     * ����Ҫ��������ȡ
     * @param {long} lFeatureID
     * @param {boolean} bOnlyInfos
     * @return {AttachmentCollection} pAttachments
     */
    this.GetAttachmentsByFeatureID = function (lFeatureID, bOnlyInfos) {
        var pAttachments = pImportAttachmentMan.GetAttachmentsByFeatureID(lFeatureID, bOnlyInfos);
        if ((pAttachments != null)&&(pAttachments != undefined)&&(pAttachments.isvalid)) {
            return new AttachmentCollection(pAttachments);
        }
        else{
            return null;
        }
    };


    /**
     * ����Ҫ���������ϻ�ȡ
     * @param {Int32Collection} int32Coll
     * @param {boolean} bOnlyInfos
     * @return {AttachmentCollection} pAttachments
     */
    this.GetAttachmentsByFeatureIDs = function (int32Coll, bOnlyInfos) {
        var pAttachments = null;
        if ((int32Coll != null)&&(int32Coll != undefined)&&(int32Coll.Valid())){
            pAttachments = pImportAttachmentMan.GetAttachmentsByFeatureIDs(int32Coll.getNpObject(), bOnlyInfos);
        }
        else{
            pAttachments = pImportAttachmentMan.GetAttachmentsByFeatureIDs(int32Coll, bOnlyInfos);
        }
        if ((pAttachments != null)&&(pAttachments != undefined)&&(pAttachments.isvalid)) {
            return new AttachmentCollection(pAttachments);
        }
        else{
            return null;
        }
    };

    /**
     * ���¸���
     * @param {Attachment} pAttachment
     * @return {boolean} pAttachment
     */
    this.UpdateAttachment = function (pAttachment) {
        if ((pAttachment != null)&&(pAttachment != undefined)&&(pAttachment.Valid())){
            return pImportAttachmentMan.UpdateAttachment(pAttachment.getNpObject());
        }
        else{
            return pImportAttachmentMan.UpdateAttachment(pAttachment);
        }
    };

    /**
     * �ر�Manager���ͷ����ݿ���Դ
     */
    this.Close = function () {
        pImportAttachmentMan.Close();
    };
}
/**
 * ��ͨ�ֶΣ��ǿռ��ֶΣ�
 * pImportCommonFieldΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-05
 */

export function CommonField(pImportCommonField) {
    var commonField = pImportCommonField;
    Field.call(this, pImportCommonField);

    this.Valid = function () {
        return commonField.isvalid;
    };

    /**
     * ��ȡ�������ֶ�Ĭ��ֵ
     * @param {Variant}  vValue
     * @return {Variant}
     */
    this.getDefaultValue = function(){
        return commonField.DefaultValue;
    };
    this.setDefaultValue = function(vValue){
        commonField.DefaultValue = vValue;
    };

    /**
     * ��ȡ�������ֶγ���
     * @param {long}  lLength
     * @return {long}
     */
    this.getLength = function(){
        return commonField.Length;
    };
    this.setLength = function(lLength){
        commonField.Length = lLength;
    };

    /**
     * ��ȡ�������ֶξ���
     * @param {long}  lPrecision
     * @return {long}
     */
    this.getPrecision = function(){
        return commonField.Precision;
    };
    this.setPrecision = function(lPrecision){
        commonField.Precision = lPrecision;
    };

    /**
     * �ж��ֶ��Ƿ��Ϊ��
     * @param {boolean}  bValue
     * @return {boolean}
     */
    this.getAllowNULL = function(){
        return commonField.AllowNULL;
    };
    this.setAllowNULL = function(bValue){
        commonField.AllowNULL = bValue;
    };

    /**
     * ��ȡ�������ֶ���
     * @param {Domain}  pDomain
     * @return {Domain} pDomain
     */
    this.getDomain = function () {
        var pDomain = commonField.Domain;
        if((pDomain != null)&&(pDomain != undefined)&&(pDomain.isvalid)){
            var tDomainType = pDomain.DomainType;
            switch(tDomainType){
                case VRStarDomainType.VRStarDomainCodedValue:
                    return new CodedValueDomain(pDomain);
                case VRStarDomainType.VRStarDomainRange:
                    return new RangeDomain(pDomain);
                default:
                    return new Domain(pDomain);
            }
        }
        else{
            return null;
        }
    };
    this.setDomain = function (pDomain) {
        if((pDomain != null)&&(pDomain != undefined)&&(pDomain.Valid())){
            commonField.Domain = pDomain.getNpObject();
        }
        else{
            commonField.Domain = pDomain;
        }
    };

    /**
     * �ж��Ƿ�ע��Ϊ��Ⱦ�����ֶ�
     * @param {boolean}  bValue
     * @return {boolean}
     */
    this.getRegisteredRenderIndex = function(){
        return commonField.RegisteredRenderIndex;
    };
    this.setRegisteredRenderIndex = function(bValue){
        commonField.RegisteredRenderIndex = bValue;
    };

    /**
     * ��ȡ�������ֶα�ȣ�С������λ����
     * @param {long}  lScale
     * @return {long}
     */
    this.getScale = function(){
        return commonField.Scale;
    };
    this.setScale = function(lScale){
        commonField.Scale = lScale;
    };
}
/**
 * FDE������Ϣ����
 * pImportConnectionΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-05
 */

export function Connection(pImportConnection) {

    var connection = null;
    if (pImportConnection == null) {
        connection = plugin.NewConnection();
    }
    else
        connection = pImportConnection;

    this.getNpObject = function () {
        return connection;
    };

    this.Valid = function () {
        return connection.isvalid;
    };
    /**
     * ��ȡ����������Դ��������
     * @param {VRStarConnectionType}  enumType
     * @return {VRStarConnectionType}
     */
    this.getConnectionType = function(){
        return connection.ConnectionType;
    };
    this.setConnectionType = function(enumType){
        connection.ConnectionType = enumType;
    };

    /**
     * ��ȡ���������ݿ�
     * @param {string}  sDatabase
     * @return {string}
     */
    this.getDatabase = function () {
        return connection.Database;
    };
    this.setDatabase = function (sDatabase) {
        connection.Database = sDatabase;
    };

    /**
     * ��ȡ������ʵ��
     * @param {string}  sInstance
     * @return {string}
     */
    this.getInstance = function(){
        return connection.Instance;
    };
    this.setInstance = function(sInstance){
        connection.Instance = sInstance;
    };

    /**
     * ��ȡ�������û�
     * @param {string}  sUser
     * @return {string}
     */
    this.getUser = function(){
        return connection.User;
    };
    this.setUser = function(sUser){
        connection.User = sUser;
    };

    /**
     * ��ȡ����������
     * @param {string}  sPassword
     * @return {string}
     */
    this.getPassword = function(){
        return connection.Password;
    };
    this.setPassword = function(sPassword){
        connection.Password = sPassword;
    };

    /**
     * ��ȡ�����÷�����
     * @param {string}  sServer
     * @return {string}
     */
    this.getServer = function(){
        return connection.Server;
    };
    this.setServer = function(sServer){
        connection.Server = sServer;
    };

    /**
     * ��ȡ�����ö˿�
     * @param {ULONG}  uPort
     * @return {ULONG}
     */
    this.getPort = function(){
        return connection.Port;
    };
    this.setPort = function(uPort){
        connection.Port = uPort;
    };

    /**
     * ��ȡ�����ð汾
     * @param {string}  sVersion
     * @return {string}
     */
    this.getVersion = function(){
        return connection.Version;
    };
    this.setVersion = function(sVersion){
        connection.Version = sVersion;
    };

    /**
     * ��ȡ��������
     * @return {string}
     */
    this.getProviderName = function(){
        return connection.ProviderName;
    };

    /**
     * ������ת��Ϊ�ַ���
     * @return {string}
     */
    this.ToConnectionString = function () {
        return connection.ToConnectionString();
    };

    /**
     * �������ַ�����ȡָ������
     * @param {string}  sValue
     */
    this.FromConnectionString = function (sValue) {
        connection.FromConnectionString(sValue);
    };

    /**
     * ��ȡ���������Լ���
     * @param {PropertyCollection}  pPropertys
     * @return {PropertyCollection} pPropertys
     */
    this.GetPropertys = function () {
        var pPropertys = connection.GetPropertys();
        if ((pPropertys != null)&&(pPropertys != undefined)&&(pPropertys.isvalid)) {
            return new PropertyCollection(pPropertys);
        }
        else{
            return null;
        }
    };
    this.SetPropertys = function (pPropertys) {
        if((pPropertys != null)&&(pPropertys != undefined)&&(pPropertys.Valid())){
            connection.SetPropertys(pPropertys.getNpObject());
        }
        else{
            connection.SetPropertys(pPropertys);
        }
    };
    
}
/**
 * ��������Դ
 * pImportDataSourceΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-05
 */
export function DataSource(pImportDataSource) {
    this.getNpObject = function () {
        return pImportDataSource;
    };

    this.Valid = function () {
        return pImportDataSource.isvalid;
    };

    /**
     * ��ȡ��ʶ
     * @return {GUID}
     */
    this.getID = function () {
        return pImportDataSource.ID;
    };

    /**
     * ��ȡ����Դ������Ϣ
     * @return {Connection} pConn
     */
    this.getConnection = function () {
        var pConn = pImportDataSource.Connection;
        if ((pConn != null)&&(pConn != undefined)&&(pConn.isvalid)) {
            return new Connection(pConn);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ����ʱ��
     * @return {DATE}
     */
    this.getCreateTime = function(){
        return pImportDataSource.CreateTime;
    };

    /**
     * ��ȡ���ݿ�������˵�ǰʱ��
     * @return {DATE}
     */
    this.getDatabaseTime = function () {
        return pImportDataSource.DatabaseTime;
    };

    /**
     * �ж��Ƿ��Ѿ���ʼ����
     * @return {boolean}
     */
    this.getIsEditing = function () {
        return pImportDataSource.IsEditing;
    };

    /**
     * ��ȡ��ǰ׺
     * @return {string}
     */
    this.getSchemaPrefix = function(){
        return pImportDataSource.SchemaPrefix;
    };

    /**
     * ��ȡ����������Դ��������Ϣ�������û������Զ�����Ϣ
     * @param {string} sDescription
     * @return {string}
     */
    this.getDescription = function(){
        return pImportDataSource.Description;
    };

    this.setDescription = function(sDescription){
          pImportDataSource.Description = sDescription;
    };

    /**
     * ��ȡ�������û��Զ�������
     * @param {PropertyCollection} pPropertys
     * @return {PropertyCollection} pPropertys
     */
    this.getCustomData = function(){
        var pPropertys = pImportDataSource.CustomData;
        if ((pPropertys != null)&&(pPropertys != undefined)&&(pPropertys.isvalid)) {
            return new PropertyCollection(pPropertys);
        }
        else{
            return null;
        }
    };

    this.setCustomData = function(pPropertys){
        if((pPropertys != null)&&(pPropertys != undefined)&&(pPropertys.Valid())) {
            pImportDataSource.CustomData = pPropertys.getNpObject();
        }
        else{
            pImportDataSource.CustomData = pPropertys;
        }
    };

    /**
     * ��ȡ�������ݼ�������
     * @return {StringCollection} pStrings
     */
      this.GetFeatureDatasetNames = function () {
        var pStrings = pImportDataSource.GetFeatureDatasetNames();
        if ((pStrings != null)&&(pStrings != undefined)&&(pStrings.isvalid)) {
            return new StringCollection(pStrings);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�����Ƽ���
     * @return {StringCollection} pStrings
     */
    this.GetTableNames = function (bIncludeSystemTable) {
        var pStrings = pImportDataSource.GetTableNames(bIncludeSystemTable);
        if ((pStrings != null)&&(pStrings != undefined)&&(pStrings.isvalid)) {
            return new StringCollection(pStrings);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�����Ƽ���
     * @return {StringCollection} pStrings
     */
    this.GetDomainNames = function () {
        var pStrings = pImportDataSource.GetDomainNames();
        if ((pStrings != null)&&(pStrings != undefined)&&(pStrings.isvalid)) {
            return new StringCollection(pStrings);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�򼯺�
     * @param {string} sName
     * @return {Domain} pDomain
     */
    this.GetDomainByName = function(sName){
        var pDomain = pImportDataSource.GetDomainByName(sName);
        if((pDomain != null)&&(pDomain != undefined)&&(pDomain.isvalid)){
            var tDomainType = pDomain.DomainType;
            switch(tDomainType){
                case VRStarDomainType.VRStarDomainCodedValue:
                    return new CodedValueDomain(pDomain);
                case VRStarDomainType.VRStarDomainRange:
                    return new RangeDomain(pDomain);
                default:
                    return new Domain(pDomain);
            }
        }
        else{
            return null;
        }
    };

    /**
     * ������
     * @param {Domain}
     */
    this.AddDomain = function (pDomain) {
        if((pDomain != null)&&(pDomain != undefined)&&(pDomain.Valid())){
            pImportDataSource.AddDomain(pDomain.getNpObject());
        }
        else{
            pImportDataSource.AddDomain(pDomain);
        }
    };

    /**
     * ɾ����
     * @param {string} sName
     */
    this.DeleteDomain = function(sName){
        pImportDataSource.DeleteDomain(sName);
    };

    /**
     * ������
     * @param {Domain} pDomain
     */
    this.ModifyDomain = function (pDomain) {
        if((pDomain != null)&&(pDomain != undefined)&&(pDomain.Valid())){
            pImportDataSource.ModifyDomain(pDomain.getNpObject());
        }
        else{
            pImportDataSource.ModifyDomain(pDomain);
        }
    };

    /**
     * ��ָ�����ݼ�
     * @param {string} sName
     * @return {FeatureDataSet} pDataSet
     */
    this.OpenFeatureDataSet = function (sName) {
        var pDataSet = pImportDataSource.OpenFeatureDataSet(sName);
        if ((pDataSet != null)&&(pDataSet != undefined)&&(pDataSet.isvalid)) {
            return new FeatureDataSet(pDataSet);
        }
        else{
            return null;
        }
    };

    /**
     * �������ݼ�
     * @param {string} sName
     * @param {SpatialCoordinateReferenceSystem} spaCoorSystem
     * @return {FeatureDataSet} pDataSet
     */
    this.CreateFeatureDataset = function (sName, spaCoorSystem) {
        var spaCoorSystemUse = null;
        if ((spaCoorSystem != null) && (spaCoorSystem != undefined) && (spaCoorSystem.Valid())) {
            spaCoorSystemUse = spaCoorSystem.getNpObject();
        }
        else {
            spaCoorSystemUse = spaCoorSystem;
        }
        var pDataSet = pImportDataSource.CreateFeatureDataset(sName, spaCoorSystemUse);
        if ((pDataSet != null) && (pDataSet != undefined) && (pDataSet.isvalid)) {
            return new FeatureDataSet(pDataSet);
        }
        else {
            return null;
        }
    };

    /**
     * ɾ��ָ�����ݼ�
     * @param {string} sName
     */
    this.DeleteFeatureDataset = function(sName){
        pImportDataSource.DeleteFeatureDataset(sName);
    };

    /**
     * ������
     * @param {string} sName
     * @param {string} sPrimaryKey
     * @param {FieldCollection} pFields
     * @return {Table} pTable
     */
    this.CreateTable = function (sName, sPrimaryKey, pFields) {
        var pTable = null;
        if((pFields != null)&&(pFields != undefined)&&(pFields.Valid())){
            pTable = pImportDataSource.CreateTable(sName, sPrimaryKey, pFields.getNpObject());
        }
        else{
            pTable = pImportDataSource.CreateTable(sName, sPrimaryKey, pFields);
        }
        if ((pTable != null)&&(pTable != undefined)&&(pTable.isvalid)) {
            return new Table(pTable);
        }
        else{
            return null;
        }
    };

    /**
     * ɾ����
     * @param {string} sName
     */
    this.DeleteTable = function(sName){
        pImportDataSource.DeleteTable(sName);
    };

    /**
     * �򿪱�
     * @param {string} sName
     * @return {Table} pTable
     */
    this.OpenTable = function(sName){
        var pTable = pImportDataSource.OpenTable(sName);
        if ((pTable != null)&&(pTable != undefined)&&(pTable.isvalid)) {
            return new Table(pTable);
        }
        else{
            return null;
        }
    };

    /**
     * �޸�����
     * @param {string} sPassword
     */
    this.ChangePassword = function (sPassword) {
        pImportDataSource.ChangePassword(sPassword);
    };

    /**
     * �ر�����Դ
     */
    this.Close = function(){
        pImportDataSource.Close();
    };

    /**
     * ������ѯ����
     * @return {QueryDefine} pQueryDefine
     */
    this.CreateQueryDefine = function(){
        var pQueryDefine = pImportDataSource.CreateQueryDefine();
        if ((pQueryDefine != null)&&(pQueryDefine != undefined)&&(pQueryDefine.isvalid)) {
            return new QueryDefine(pQueryDefine);
        }
        else{
            return null;
        }
    };

    /**
     * ִ��Insert/Update/Delete���������κν��
     * @param {string} sSQL
     */
    this.ExecuteUpdate = function(sSQL){
        pImportDataSource.ExecuteUpdate(sSQL);
    };

    /**
     * ��ȡ��������ͻ���û�������Ϣ
     * @param {long} lClassID
     * @return {string}
     */
    this.GetLocks = function (lClassID) {
        return pImportDataSource.GetLocks(lClassID);
    };

    /**
     * �ж����ݿ��Ƿ���ָ������
     * @param {VRStarDatabaseCapabilityType} enumDatabaseCapabilityType
     * @return {boolean}
     */
    this.HasCapability = function(enumDatabaseCapabilityType){
        return pImportDataSource.HasCapability(enumDatabaseCapabilityType);
    };

    /**
     * �ж��Ƿ���������
     * @return {boolean}
     */
    this.Ping = function () {
        return pImportDataSource.Ping();
    };

    /**
     * ��������
     */
    this.ReOpen = function () {
        pImportDataSource.ReOpen();
    };

    /**
     * ��ʼ����
     */
    this.StartEditing = function(){
        pImportDataSource.StartEditing();
    };

    /**
     * ������ع�����
     * @param {boolean} bIsSaveEditing
     */
    this.StopEditing = function(bIsSaveEditing){
        pImportDataSource.StopEditing(bIsSaveEditing);
    };

    /**
     * ��ѯ������������ֶ�����
     * @param {string} sDomainName
     * @return {StringCollection} pStrings
     */
    this.QueryDomainRefFields = function (sDomainName) {
        var pStrings = pImportDataSource.QueryDomainRefFields(sDomainName);
        if ((pStrings != null)&&(pStrings != undefined)&&(pStrings.isvalid)) {
            return new StringCollection(pStrings);
        }
        else{
            return null;
        }
    }
}/**
 * ��������Դ������
 * Creator  Jimmy
 * Time     2016-06-21
 */

export function DataSourceFactory(){
    var pDataSourFac = plugin.DataSourceFactory;

    /**
     * ������Դ
     * @param {Connection} pConnection
     * @return {DataSource} pDataSource
     */
    this.OpenDataSource = function (pConnection) {
        var pDataSource = null;
        if((pConnection != null)&&(pConnection != undefined)&&(pConnection.Valid())) {
            pDataSource = pDataSourFac.OpenDataSource(pConnection.getNpObject());
        }
        else{
            pDataSource = pDataSourFac.OpenDataSource(pConnection);
        }
        if ((pDataSource != null) && (pDataSource != undefined) && (pDataSource.isvalid)) {
            return new DataSource(pDataSource);
        }
        else{
            return null;
        }
    };

    /**
     * ��������Դ
     * @param {Connection} pConnection
     * @return {DataSource} pDataSource
     */
    this.CreateDataSource = function (pConnection) {
        var pDataSource = null;
        if((pConnection != null)&&(pConnection != undefined)&&(pConnection.Valid())) {
            pDataSource = pDataSourFac.CreateDataSource(pConnection.getNpObject());
        }
        else{
            pDataSource = pDataSourFac.CreateDataSource(pConnection);
        }
        if ((pDataSource != null) && (pDataSource != undefined) && (pDataSource.isvalid)) {
            return new DataSource(pDataSource);
        }
        else{
            return null;
        }
    };


    /**
     * �ж�����Դ�Ƿ����
     */
    this.HasDataSource = function(pConnection){
        if((pConnection != null)&&(pConnection != undefined)&&(pConnection.Valid())) {
            return pDataSourFac.HasDataSource(pConnection.getNpObject());
        }
        else{
            return pDataSourFac.HasDataSource(pConnection);
        }
    };

    /**
     * �ж�����Դ�Ƿ����
     */
    this.HasDataSourceByString = function(sConnection){
        return pDataSourFac.HasDataSourceByString(sConnection);
    };

    /**
     * ������Դ
     * @param {string} sConnection
     * @return {DataSource} pDataSource
     */
    this.OpenDataSourceByString = function (sConnection) {
        var pDataSource = pDataSourFac.OpenDataSourceByString(sConnection);
        if ((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.isvalid)) {
            return new DataSource(pDataSource);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ���ݿ�������
     * @param {Connection} pConnection
     * @param {boolean} bOnlyVRStar
     * @return {StringCollection} pStrings
     */
    this.GetDatabaseNames = function(pConnection, bOnlyVRStar){
        var pStrings = null;
        if((pConnection != null)&&(pConnection != undefined)&&(pConnection.Valid())) {
            pStrings = pDataSourFac.GetDatabaseNames(pConnection.getNpObject(), bOnlyVRStar);
        }
        else{
            pStrings = pDataSourFac.GetDatabaseNames(pConnection, bOnlyVRStar);
        }
        if ((pStrings != null)&&(pStrings != undefined)&&(pStrings.isvalid)) {
            return new StringCollection(pStrings);
        }
        else{
            return null;
        }
    }
}
/**
 * �򹤳���
 * Creator  Jimmy
 * Time     2016-7-5
 */

export function DomainFactory(){
    var pDomainFac = plugin.DomainFactory;

    /**
     * ����������
     * @param {string} sName
     * @param {VRStarFieldType } enumFieldType
     * @return {CodedValueDomain} pCodedDomain
     */
    this.CreateCodedValueDomain = function(sName, enumFieldType){
        var pCodedDomain  = pDomainFac.CreateCodedValueDomain(sName, enumFieldType);
        if ((pCodedDomain != null)&&(pCodedDomain != undefined)&&(pCodedDomain.isvalid)) {
            return new CodedValueDomain(pCodedDomain);
        }
        else{
            return null;
        }
    };

    /**
     * ������Χ��
     * @param {string} sName
     * @param {VRStarFieldType } enumFieldType
     * @return {RangeDomain} pRangeDomain
     */
    this.CreateRangeDomain = function(sName, enumFieldType){
        var pRangeDomain   = pDomainFac.CreateRangeDomain(sName, enumFieldType);
        if ((pRangeDomain != null)&&(pRangeDomain != undefined)&&(pRangeDomain.isvalid)) {
            return new RangeDomain(pRangeDomain);
        }
        else{
            return null;
        }
    };
}

/**
 * ������
 * pImportCodedDomainΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-05
*/

export function CodedValueDomain(pImportCodedDomain) {
    Domain.call(this, pImportCodedDomain);

    this.Valid = function () {
        return pImportCodedDomain.isvalid;
    };

    /**
     * ��ȡ��Ч����ֵ�Եĸ���
     * @return {long}
     */
    this.getCount = function () {
        return pImportCodedDomain.Count;
    };

    /**
    * ��ȡ�����ñ�����
     * @param {long} lIndex
     * @return {string}
    */
    this.GetItemName = function (lIndex) {
        return pImportCodedDomain.GetItemName(lIndex);
    };

    /**
     * ��ȡָ��λ���ϵı���ֵ
     * @param {long} lIndex
     * @return {Variant}
     */
    this.GetItemValue = function (lIndex) {
        return pImportCodedDomain.GetItemValue(lIndex);
    };

    /**
     * ����һ����Ч����ֵ��
     * @param {string} sName
     * @param {Variant} varValue
     */
    this.AddCode = function (sName, varValue) {
        pImportCodedDomain.AddCode(sName, varValue);
    };

    /**
     * ����������ɾ��һ����Чֵ
     * @param {string} sName
     */
    this.DeleteCode = function (sName) {
        pImportCodedDomain.DeleteCode(sName);
    };

    /**
     * ����ֵ��ɾ��һ����Чֵ
     * @param {Variant} varValue
     */
    this.DeleteCodeByValue = function (varValue) {
        pImportCodedDomain.DeleteCodeByValue(varValue);
    };
}

/**
 * ��Χ��
 * pRangeDomainΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-06
 */

export function RangeDomain(pRangeDomain) {
    Domain.call(this, pRangeDomain);

    this.Valid = function () {
        return pRangeDomain.isvalid;
    };

    /**
     * ��ȡ��������Сֵ
     * @param {Variant} varValue
     * @return {Variant}
     */
    this.getMinValue = function () {
        return pRangeDomain.MinValue;
    };
    this.setMinValue = function (varValue) {
        pRangeDomain.MinValue = varValue;
    };

    /**
     * ��ȡ���������ֵ
     * @param {Variant} varValue
     * @return {Variant}
     */
    this.getMaxValue = function () {
        return pRangeDomain.MaxValue;
    };
    this.setMaxValue = function (varValue) {
        pRangeDomain.MaxValue = varValue;
    };
}

/**
 * ��һ���߼�Լ��
 * pDomainΪ����Ĳ���
 * Creator  Jimmy
 * Time     2016-07-05
 */

export function Domain(pDomain) {

    this.getNpObject = function () {
        return pDomain;
    };

    this.Valid = function () {
        return pDomain.isvalid;
    };

    /**
     * ��ȡ����������
     * @param {string} sName
     * @return {string}
     */
    this.getName = function () {
        return pDomain.Name;
    };
    this.setName = function (sName) {
        pDomain.Name = sName;
    };

    /**
     * ��ȡ������
     * @return {VRStarDomainType}
     */
    this.getDomainType = function () {
        return pDomain.DomainType;
    };

    /**
     * ��ȡ�ֶ�����
     * * @return {VRStarFieldType}
     */
    this.getFieldType = function () {
        return pDomain.FieldType;
    };

    /**
     * ��ȡ���������,�����ߵ�������Ϣ
     * @param {string} sOwner
     * @return {string}
     */
    this.getOwner = function () {
        return pDomain.Owner;
    };
    this.setOwner = function (sOwner) {
        pDomain.Owner = sOwner;
    };

    /**
     * ��ȡ������������
     * @param {string} sDescription
     * @return {string}
     */
    this.getDescription = function () {
        return pDomain.Description;
    };
    this.setDescription = function (sDescription) {
        pDomain.Description = sDescription;
    };

    /**
     * ��¡
     * @return {Domain} pDomainRes
     */
    this.Clone = function () {
        var pDomainRes = pDomain.Clone();
        if((pDomainRes != null)&&(pDomainRes != undefined)&&(pDomainRes.isvalid)){
            var tDomainType = pDomainRes.DomainType;
            switch(tDomainType){
                case VRStarDomainType.VRStarDomainCodedValue:
                    return new CodedValueDomain(pDomain);
                case VRStarDomainType.VRStarDomainRange:
                    return new RangeDomain(pDomain);
                default:
                    return new Domain(pDomain);
            }
        }
        else{
            return null;
        }
    };

    /**
     * �жϸ�����ֵ�Ƿ�������ֵҪ��
     * @param {Variant} varValue
     * @return {boolean}
     */
    this.IsMemberOf = function (varValue) {
        return pDomain.IsMemberOf(varValue);
    };
}


/**
 * ����Ҫ����
 * pImportFeaClassΪ����Ĳ���
 * Creator   Jimmy
 * Time     2017-10-28
*/

export function DrillFeatureClass(pImportFeaClass) {
    FeatureClass.call(this, pImportFeaClass);

    this.getNpObject = function () {
        return pImportFeaClass;
    };

    this.Valid = function () {
        return pImportFeaClass.isvalid;
    };

	/**
     * ��ȡ���Ҫ����
     * @return {FeatureClass} pFC
     */
    this.getAnnotationClass = function () {
        var pFC = pImportFeaClass.DrillHoleFeatureClass;
        if ((pFC != null)&&(pFC != undefined)&&(pFC.isvalid)) {
            return new FeatureClass(pFC);
        }
        else{
            return null;
        }
    };
	
	/**
     * ��ȡ��׼�ز������
     * @return {ObjectClass} pOC
     */
    this.getStandardStrataObjectClass = function () {
        var pOC = pImportFeaClass.StandardStrataObjectClass;
        if ((pOC != null)&&(pOC != undefined)&&(pOC.isvalid)) {
            return new ObjectClass(pOC);
        }
        else{
            return null;
        }
    };
	
	/**
     * ��ȡԭʼ�ز������
     * @return {ObjectClass} pOC
     */
    this.getOriginalStrataObjectClass = function () {
        var pOC = pImportFeaClass.OriginalStrataObjectClass;
        if ((pOC != null)&&(pOC != undefined)&&(pOC.isvalid)) {
            return new ObjectClass(pOC);
        }
        else{
            return null;
        }
    };
	
	/**
     * ��ȡ����ض��ж�Ӧ�ֶ�����
     * @return {PropertyCollection} pPropertys
     */
    this.getDrillHoleColumnReferences = function () {
        var pPropertys = pImportFeaClass.DrillHoleColumnReferences;
        if ((pPropertys != null)&&(pPropertys != undefined)&&(pPropertys.isvalid)) {
            return new PropertyCollection(pPropertys);
        }
        else{
            return null;
        }
    };
	
	/**
     * ��ȡ��׼�ز��ض��ж�Ӧ�ֶ�����
     * @return {PropertyCollection} pPropertys
     */
    this.getStandardStrataColumnReferences = function () {
        var pPropertys = pImportFeaClass.StandardStrataColumnReferences;
        if ((pPropertys != null)&&(pPropertys != undefined)&&(pPropertys.isvalid)) {
            return new PropertyCollection(pPropertys);
        }
        else{
            return null;
        }
    };
	
	/**
     * ��ȡԭʼ�ز��ض��ж�Ӧ�ֶ�����
     * @return {PropertyCollection} pPropertys
     */
    this.getOriginalStrataColumnReferences = function () {
        var pPropertys = pImportFeaClass.OriginalStrataColumnReferences;
        if ((pPropertys != null)&&(pPropertys != undefined)&&(pPropertys.isvalid)) {
            return new PropertyCollection(pPropertys);
        }
        else{
            return null;
        }
    };
}

/**
 * CADҪ����
 * pImportFeaClassΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-15
*/

export function DwgFeatureClass(pImportFeaClass) {
    FeatureClass.call(this, pImportFeaClass);

    this.getNpObject = function () {
        return pImportFeaClass;
    };

    this.Valid = function () {
        return pImportFeaClass.isvalid;
    };

	/**
     * ��ȡע��Ҫ����
     * @return {FeatureClass} pFC
     */
    this.getAnnotationClass = function () {
        var pFC = pImportFeaClass.AnnotationClass;
        if ((pFC != null)&&(pFC != undefined)&&(pFC.isvalid)) {
            return new FeatureClass(pFC);
        }
        else{
            return null;
        }
    };
	
	/**
     * ��ȡ��Ҫ����
     * @return {FeatureClass} pFC
     */
    this.getPointClass = function () {
        var pFC = pImportFeaClass.PointClass;
        if ((pFC != null)&&(pFC != undefined)&&(pFC.isvalid)) {
            return new FeatureClass(pFC);
        }
        else{
            return null;
        }
    };
	
	/**
     * ��ȡ��Ҫ����
     * @return {FeatureClass} pFC
     */
    this.getPolylineClass = function () {
        var pFC = pImportFeaClass.PolylineClass;
        if ((pFC != null)&&(pFC != undefined)&&(pFC.isvalid)) {
            return new FeatureClass(pFC);
        }
        else{
            return null;
        }
    };
	
	/**
     * ��ȡ��Ҫ����
     * @return {FeatureClass} pFC
     */
    this.getPolygonClass = function () {
        var pFC = pImportFeaClass.PolygonClass;
        if ((pFC != null)&&(pFC != undefined)&&(pFC.isvalid)) {
            return new FeatureClass(pFC);
        }
        else{
            return null;
        }
    };
	
	/**
     * ��ȡ����Ҫ����
     * @return {FeatureClass} pFC
     */
    this.getMeshClass = function () {
        var pFC = pImportFeaClass.MeshClass;
        if ((pFC != null)&&(pFC != undefined)&&(pFC.isvalid)) {
            return new FeatureClass(pFC);
        }
        else{
            return null;
        }
    };
}
/**
 * ��Դ����ö����
 * pEnumResourceNameΪ����Ĳ���
 * Creator   Jimmy
 * Time     2017-4-14
 */

export function EnumResourceName(pEnumResourceName){

    this.getNpObject = function () {
        return pEnumResourceName;
    };

    this.Valid = function () {
        return pEnumResourceName.isvalid;
    };

    /**
     * ��ǰԪ�ء�MoveNextΪTrue��ֵ��Ч
     * @return {sting}
     */
    this.getCurrent = function(){
        return pEnumResourceName.Current;
    };

    /**
     * ��һԪ��
     * @return {boolean}
     */
    this.MoveNext = function(){
        return pEnumResourceName.MoveNext();
    };
}
/**
 * ������ͬ�ռ䡢ʱ̬��Property������һ��������������Ҫ����
 * pImportFeaClassΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-15
 */

export function FeatureClass(pImportFeaClass) {
    ObjectClass.call(this, pImportFeaClass);

    this.getNpObject = function () {
        return pImportFeaClass;
    };

    this.Valid = function () {
        return pImportFeaClass.isvalid;
    };

    /**
     * ��ȡ�ռ���������
     * @return {IndexCollection} pIndexs
     */
    this.GetSpatialIndexs = function () {
        var pIndexs = pImportFeaClass.GetSpatialIndexs();
        if ((pIndexs != null)&&(pIndexs != undefined)&&(pIndexs.isvalid)) {
            return new IndexCollection(pIndexs);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ��Ⱦ��������
     * @return {IndexCollection} pIndexs
     */
    this.GetRenderIndexs = function () {
        var pIndexs = pImportFeaClass.GetRenderIndexs();
        if ((pIndexs != null)&&(pIndexs != undefined)&&(pIndexs.isvalid)) {
            return new IndexCollection(pIndexs);
        }
        else{
            return null;
        }
    };

    /**
     * �жϻ�������Ⱦ�����Ƿ����
     * @param {string} sGeoFieldName
     * @param {boolean} bVal
     * @param {boolean}
     */
    this.GetRenderIndexEnabled = function (sGeoFieldName) {
        return pImportFeaClass.GetRenderIndexEnabled(sGeoFieldName);
    };
    this.SetRenderIndexEnabled = function (sGeoFieldName, bVal) {
        pImportFeaClass.SetRenderIndexEnabled(sGeoFieldName, bVal);
    };

    /**
     * ���ռ������ӿռ�����
     * @param {GridIndex} pGridIndex
     */
    this.AddSpatialIndex = function (pGridIndex) {
        if((pGridIndex != null)&&(pGridIndex != undefined)&&(pGridIndex.Valid())){
            pImportFeaClass.AddSpatialIndex(pGridIndex.getNpObject());
        }
        else
        {
            pImportFeaClass.AddSpatialIndex(pGridIndex);
        }
    };

    /**
     * ��FDE����Ĭ�ϵĿռ���������
     * @param {string} sGeoFieldName
     * @return {GridIndex} pGridIndex
     */
    this.CalculateDefaultGridIndex = function (sGeoFieldName) {
        var pGridIndex = pImportFeaClass.CalculateDefaultGridIndex(sGeoFieldName);
        if ((pGridIndex != null)&&(pGridIndex != undefined)&&(pGridIndex.isvalid)) {
            return new GridIndex(pGridIndex);
        }
        else{
            return null;
        }
    };

    /**
     * ɾ���ռ�����
     * @param {string} sGeoFieldName
     */
    this.DeleteSpatialIndex  = function(sGeoFieldName){
        pImportFeaClass.DeleteSpatialIndex (sGeoFieldName);
    };

    /**
     * ����ԭ�Ȳ����ؽ��ռ����ϵĿռ�����
     * @param {string} sGeoFieldName
     */
    this.RebuildSpatialIndex = function(sGeoFieldName){
        pImportFeaClass.RebuildSpatialIndex(sGeoFieldName);
    };

    /**
     * ��FC������Ⱦ����
     */
    this.AddRenderIndex = function(pRenderIndex){
        if((pRenderIndex != null)&&(pRenderIndex != undefined)&&(pRenderIndex.Valid())){
            pImportFeaClass.AddRenderIndex(pRenderIndex.getNpObject());
        }
        else{
            pImportFeaClass.AddRenderIndex(pRenderIndex);
        }
    };

    /**
     * ��FDE����Ĭ�ϵ���Ⱦ��������
     * @param {string} sGeoFieldName
     * @return {RenderIndex} pRenderIndex
     */
    this.CalculateDefaultRenderIndex  = function(sGeoFieldName){
        var pRenderIndex = pImportFeaClass.CalculateDefaultRenderIndex(sGeoFieldName);
        if ((pRenderIndex != null)&&(pRenderIndex != undefined)&&(pRenderIndex.isvalid)) {
            return new RenderIndex(pRenderIndex);
        }
        else{
            return null;
        }
    };

    /**
     * ɾ���ռ��е���Ⱦ����
     * @param {string} sGeoFieldName
     */
    this.DeleteRenderIndex  = function(sGeoFieldName){
        pImportFeaClass.DeleteRenderIndex(sGeoFieldName);
    };

    /**
     * �ؽ���Ⱦ����
     * @param {string} sGeoFieldName
     * @param {VRStarRenderIndexRebuildType} enumRenderIndexRebuildType
     */
    this.RebuildRenderIndex = function(sGeoFieldName, enumRenderIndexRebuildType){
        pImportFeaClass.RebuildRenderIndex(sGeoFieldName, enumRenderIndexRebuildType);
    };

    /**
     * ���¼����е�ͳ����Ϣ
     * @param {string} sGeoFieldName
     */
    this.UpdateExtend = function(sGeoFieldName){
        pImportFeaClass.UpdateExtend(sGeoFieldName);
    };

    /**
     * ��ȡ�ض��ռ�����ָ����¼��Geometries����С���
     * @param {Int32Collection} pInt32s
     * @param {string} sGeoFieldName
     * @return {Envelope} pEnvelope
     */
    this.GetFeaturesEnvelope = function(pInt32s, sGeoFieldName){
        var pEnvelope = null;
        if((pInt32s != null)&&(pInt32s != undefined)&&(pInt32s.Valid())){
            pEnvelope = pImportFeaClass.GetFeaturesEnvelope(pInt32s.getNpObject(), sGeoFieldName);
        }
        else{
            pEnvelope = pImportFeaClass.GetFeaturesEnvelope(pInt32s, sGeoFieldName);
        }
        if ((pEnvelope != null)&&(pEnvelope != undefined)&&(pEnvelope.isvalid)) {
            return new Envelope(pEnvelope);
        }
        else{
            return null;
        }
    };
	
	/**
     * ʵʱ����ռ��е������
     * @param {string} sGeoFieldName
     */
    this.CalculateExtent = function(sGeoFieldName){
        var pEnvelope = pImportFeaClass.CalculateExtent(sGeoFieldName);
		if ((pEnvelope != null)&&(pEnvelope != undefined)&&(pEnvelope.isvalid)) {
            return new Envelope(pEnvelope);
        }
        else{
            return null;
        }
    };
}
/**
 * �α���
 * pImportFeaCursorΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-06
 */

export function FeatureCursor(pImportFeaCursor){

    this.getNpObject = function () {
        return pImportFeaCursor;
    };

    this.Valid = function () {
        return pImportFeaCursor.isvalid;
    };

    /**
     * ��ȡ�������¼������ID
     * @return {long}
     */
    this.getLastInsertID = function(){
        return pImportFeaCursor.LastInsertID;
    };

    /**
     * ��ȡCursor��Ӧ�ı����ֶμ���
     * @return {FieldCollection} pFields
     */
    this.GetFields = function () {
        var pFields = pImportFeaCursor.GetFields();
        if ((pFields != null)&&(pFields != undefined)&&(pFields.isvalid)) {
            return new FieldCollection(pFields);
        }
        else{
            return null;
        }
    };

    /**
     * ����ָ���ֶ������ֶ�������
     * @param {string} sName
     * @return {long}
     */
    this.FindField = function (sName) {
        return pImportFeaCursor.FindField(sName);
    };

    /**
     * ����һ��
     * @param {Row} pRow
     */
    this.InsertRow = function (pRow) {
        if((pRow != null)&&(pRow != undefined)&&(pRow.Valid())){
            pImportFeaCursor.InsertRow(pRow.getNpObject());
        }
        else{
            pImportFeaCursor.InsertRow(pRow);
        }
    };

    /**
     * ���µ�ǰ��
     * @param {Row} pRow
     */
    this.UpdateRow = function (pRow) {
        if((pRow != null)&&(pRow != undefined)&&(pRow.Valid())){
            pImportFeaCursor.UpdateRow(pRow.getNpObject());
        }
        else{
            pImportFeaCursor.UpdateRow(pRow);
        }
    };

    /**
     * ɾ����ǰ��
     */
    this.DeleteRow = function () {
        pImportFeaCursor.DeleteRow();
    };

    /**
     * ��ȡ��һ��
     * @return {Row} pRow
     */
    this.NextRow = function () {
        var pRow = pImportFeaCursor.NextRow();
        if ((pRow != null)&&(pRow != undefined)&&(pRow.isvalid)) {
            return new Row(pRow);
        }
        else{
            return null;
        }
    };

    /**
     * ͬ�������ݿ�
     */
    this.Flush = function () {
        pImportFeaCursor.Flush();
    };

    /**
     * �ر��α�
     */
    this.Close = function () {
        pImportFeaCursor.Close();
    };
}
/**
 * ���ݼ�
 * pImportDataSetΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-05
 */

export function FeatureDataSet(pImportDataSet) {
    ResourceManager.call(this, pImportDataSet);

    this.getNpObject = function () {
        return pImportDataSet;
    };

    this.Valid = function () {
        return pImportDataSet.isvalid;
    };

    /**
     * ��ȡ���������ݼ�����
     * @param {string}  sName
     * @return {string}
     */
    this.getName = function(){
        return pImportDataSet.Name;
    };
    this.setName = function(sName){
        pImportDataSet.Name = sName;
    };

    /**
     * ��ȡ���������ݼ�����
     * @param {string}  sAlias
     * @return {string}
     */
    this.getAlias = function(){
        return pImportDataSet.Alias;
    };
    this.setAlias = function(sAlias){
        pImportDataSet.Alias = sAlias;
    };

    /**
     * ��ȡ���������ݼ��ı�ʶ
     * @return {GUID}
     */
    this.getGuid = function(){
        return pImportDataSet.Guid;
    };

    /**
     * ��ȡ���ݼ���ID
     * @return {long}
     */
    this.getID = function(){
        return pImportDataSet.ID;
    };

    /**
     * ��ȡ����Դ
     * @return {pDataSource} pDataSource
     */
    this.getDataSource = function () {
        var pDataSource = pImportDataSet.DataSource;
        if ((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.isvalid)) {
            return DataSource(pDataSource);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ���������ݼ��Ŀռ�ο�
     * @param {SpatialCoordinateReferenceSystem}  pSpaCoorSystem
     * @return {SpatialCoordinateReferenceSystem} pSpaCoorSystem
     */
    this.getSpatialReference = function () {
        var pSpaCoorSystem = pImportDataSet.SpatialReference;
        if ((pSpaCoorSystem != null)&&(pSpaCoorSystem != undefined)&&(pSpaCoorSystem.isvalid)) {
            return new SpatialCoordinateReferenceSystem(pSpaCoorSystem);
        }
        else{
            return null;
        }
    };
    this.setSpatialReference = function (pSpaCoorSystem) {
        if((pSpaCoorSystem != null)&&(pSpaCoorSystem != undefined)&&(pSpaCoorSystem.Valid())){
            pImportDataSet.SpatialReference = pSpaCoorSystem.getNpObject();
        }
        else{
            pImportDataSet.SpatialReference = pSpaCoorSystem;
        }
    };

    /**
     * �ж��Ƿ�ǩ��
     * @return {boolean}
     */
    this.getIsCheckOut = function(){
        return pImportDataSet.IsCheckOut;
    };

    /**
     * �ж��Ƿ���ǩ�������е����˱�����ǩ��
     * @return {boolean}
     */
    this.getIsCheckOutAsMaster = function(){
        return pImportDataSet.IsCheckOutAsMaster;
    };

    /**
     * ��ȡ���ݼ�����ʱ��
     */
    this.getCreateTime = function(){
        return pImportDataSet.CreateTime;
    };

    /**
     * ��ȡ���ݼ�������ʱ��
     */
    this.getLastUpdateTime = function(){
        return pImportDataSet.LastUpdateTime;
    };

    /**
     * ��ȡ����������
     * @param {string}  sDescription
     * @return {string}
     */
    this.getDescription = function(){
        return pImportDataSet.Description;
    };
    this.setDescription = function(sDescription){
        pImportDataSet.Description = sDescription;
    };
	
	/**
     * ��ȡ���������ݼ���Դ��Կ
     * @param {string}  sResourceKey
     * @return {string}
     */
    this.getResourceKey = function(){
        return pImportDataSet.ResourceKey;
    };
    this.setResourceKey = function(sResourceKey){
        pImportDataSet.ResourceKey = sResourceKey;
    };

    /**
     * ��ȡ�������û��Զ�������
     * @param {PropertyCollection} pPropertys
     * @return {PropertyCollection} pPropertys
     */
    this.getCustomData = function(){
        var pPropertys = pImportDataSet.CustomData;
        if ((pPropertys != null)&&(pPropertys != undefined)&&(pPropertys.isvalid)) {
            return new PropertyCollection(pPropertys);
        }
        else{
            return null;
        }
    };

    this.setCustomData = function(pPropertys){
        if((pPropertys != null)&&(pPropertys != undefined)&&(pPropertys.Valid())) {
            pImportDataSet.CustomData = pPropertys.getNpObject();
        }
        else{
            pImportDataSet.CustomData = pPropertys;
        }
    };

    /**
     * ��ȡҪ�������Ƽ���
     * @return {StringCollection}
     */
    this.GetNamesByType = function (type) {
        var pStrings = pImportDataSet.GetNamesByType(type);
        if ((pStrings != null)&&(pStrings != undefined)&&(pStrings.isvalid)) {
            return new StringCollection(pStrings);
        }
        else{
            return null;
        }
    };

    /**
     * ����������ͬ�ռ䡢ʱ̬������������һ�������������Ƶ�������Ҫ����
     * @param {string}  sName
     * @param {FieldCollection}  pFields
     * @return {FeatureClass} pFcClass
     */
    this.CreateFeatureClass = function(sName, pFields){
        var pFcClass = null;
        if((pFields != null)&&(pFields != undefined)&&(pFields.Valid())){
            pFcClass = pImportDataSet.CreateFeatureClass(sName, pFields.getNpObject());
        }
        else{
            pFcClass = pImportDataSet.CreateFeatureClass(sName, pFields);
        }
        if ((pFcClass != null)&&(pFcClass != undefined)&&(pFcClass.isvalid)) {
            var tTableType = pFcClass.TableType;
            switch(tTableType){
                case VRStarTableType.VRStarTablePipeFeatureClass:
                    return new PipeFeatureClass(pFcClass);
                case VRStarTableType.VRStarTableFeatureClass:
                    return new FeatureClass(pFcClass);
                case VRStarTableType.VRStarTableObjectClass:
                    return new ObjectClass(pFcClass);
				case VRStarTableType.VRStarTableDwgFeatureClass:
                    return new DwgFeatureClass(pFcClass);
                case VRStarTableType.VRStarTableDrillFeatureClass:
                    return new DrillFeatureClass(pFcClass);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    };

    /**
     * ����������
     */
    this.CreateObjectClass = function(strName, pFields){};

    /**
     * ɾ��ָ������Ҫ����
     * @param {string}  sName
     */
    this.DeleteFeatureClass = function(sName){
        pImportDataSet.DeleteFeatureClass(sName);
    };

    /**
     * ��ָ��Ҫ����
     * @param {string}  sName
     * @return {FeatureClass} pFcClass
     */
    this.OpenFeatureClass = function(sName){
        var pFcClass = pImportDataSet.OpenFeatureClass(sName);
        if ((pFcClass != null)&&(pFcClass != undefined)&&(pFcClass.isvalid)) {
            var tTableType = pFcClass.TableType;
            switch(tTableType){
                case VRStarTableType.VRStarTablePipeFeatureClass:
                    return new PipeFeatureClass(pFcClass);
                case VRStarTableType.VRStarTableFeatureClass:
                    return new FeatureClass(pFcClass);
                case VRStarTableType.VRStarTableObjectClass:
                    return new ObjectClass(pFcClass);
				case VRStarTableType.VRStarTableDwgFeatureClass:
                    return new DwgFeatureClass(pFcClass);
                case VRStarTableType.VRStarTableDrillFeatureClass:
                    return new DrillFeatureClass(pFcClass);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    };

    /**
     * �򿪶�����
     * @param {string}  sName
     * @return {ObjectClass} pFcClass
     */
    this.OpenObjectClass = function(sName){
        var pFcClass  = pImportDataSet.OpenObjectClass(sName);
        if ((pFcClass != null)&&(pFcClass != undefined)&&(pFcClass.isvalid)) {
            var tTableType = pFcClass.TableType;
            switch(tTableType){
                case VRStarTableType.VRStarTablePipeFeatureClass:
                    return new PipeFeatureClass(pFcClass);
                case VRStarTableType.VRStarTableFeatureClass:
                    return new FeatureClass(pFcClass);
                case VRStarTableType.VRStarTableObjectClass:
                    return new ObjectClass(pFcClass);
				case VRStarTableType.VRStarTableDwgFeatureClass:
                    return new DwgFeatureClass(pFcClass);
                case VRStarTableType.VRStarTableDrillFeatureClass:
                    return new DrillFeatureClass(pFcClass);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    };
}

/**
 * ����չʾ�ӿ�
 * pImportFeaProgressΪ����Ĳ���
 * Creator   Jimmy
 * Time     2017-2-18
 */

export function FeatureProgress(pImportFeaProgress) {

    this.getNpObject = function () {
        return pImportFeaProgress;
    };

    this.Valid = function () {
        return pImportFeaProgress.isvalid;
    };

    /**
     * ��ȡ��ǰ�������漰�������еĲ�������
     * @return {SAFEARRAY}
     */
    this.getOperations = function(){
        return pImportFeaProgress.Operations;
    };

    /**
     * ��ȡ��ǰ������һ���ж��ٸ�����
     * @return {long}
     */
    this.getOperationCount = function(){
        return pImportFeaProgress.OperationCount;
    };

    /**
     * ��ǰ��������
     * @return {VRStarReplicateOperationType}
     */
    this.getCurrentOperationType = function(){
        return pImportFeaProgress.CurrentOperationType;
    };

    /**
     * ��ȡ��ǰ�Ѿ���������Ҫ�ظ���
     * @return {long}
     */
    this.getCurrentFeatureCount = function(){
        return pImportFeaProgress.CurrentFeatureCount;
    };

    /**
     * ��ȡһ���ж��ٸ�Feature��¼
     * @return {long}
     */
    this.getTotalFeatureCount = function(){
        return pImportFeaProgress.TotalFeatureCount;
    };

    /**
     * ��ǰ���������ӵ����
     * @return {string}
     */
    this.getFeatureOwner = function(){
        return pImportFeaProgress.FeatureOwner;
    };

    /**
     * ȡ����ǰ���Ȳ���
     */
    this.Cancel = function(){
        return pImportFeaProgress.Cancel();
    };
}/**
 * �ֶ�
 * pImportFieldΪ����Ĳ���
 * Creator  Jimmy
 * Time     2016-6-21
 */

export function Field(pImportField) {
    var pField = null;
    if (pImportField == null) {
        pField = plugin.NewField();
    }
    else
        pField = pImportField;

    this.getNpObject = function () {
        return pField;
    };

    this.Valid = function () {
        return pField.isvalid;
    };

    /**
     * ��ȡ�ֶ�����
     * @param {string}  sName
     * @return {string}
     */
    this.getName = function(){
        return pField.Name;
    };
    this.setName = function(sName){
        pField.Name = sName;
    };

    /**
     * ��ȡ�ֶα���
     * @param {string}  sAlias
     * @return {string}
     */
    this.getAlias = function(){
        return pField.Alias;
    };
    this.setAlias = function(sAlias){
        pField.Alias = sAlias;
    };

    /**
     * ��ȡ�ֶ�����
     * @param {VRStarFieldType}  enumFieldType
     * @return {VRStarFieldType}
     */
    this.getFieldType = function(){
        return pField.FieldType;
    };
    this.setFieldType = function(enumFieldType){
        pField.FieldType = enumFieldType;
    };

    /**
     * �ж��Ƿ���ϵͳ�ֶ�
     * @return {boolean}
     */
    this.getIsSystemField = function () {
        return pField.IsSystemField;
    };

    /**
     * ��ȡ�������û��Զ�������
     * @param {PropertyCollection} pPropertys
     * @return {PropertyCollection} pPropertys
     */
    this.getCustomData = function () {
        var pPropertys = pField.CustomData;
        if ((pPropertys != null)&&(pPropertys != undefined)&&(pPropertys.isvalid)) {
            return new PropertyCollection(pPropertys);
        }
        else{
            return null;
        }
    };
    this.setCustomData = function (pPropertys) {
        if((pPropertys != null)&&(pPropertys != undefined)&&(pPropertys.Valid())){
            pField.CustomData = pPropertys.getNpObject();
        }
        else{
            pField.CustomData = pPropertys;
        }
    };

    /**
     * ��¡
     * @return {Field} pFieldRes
     */
    this.Clone = function () {
        var pFieldRes = pField.Clone();
        if ((pFieldRes != null)&&(pFieldRes != undefined)&&(pFieldRes.isvalid)) {
            var enumFieldType = pFieldRes.FieldType;
            switch(enumFieldType){
                case VRStarFieldType.VRStarFieldUnknow:
                    return new Field(pFieldRes);
                case VRStarFieldType.VRStarFieldGeometry:
                    return new GeometryField(pFieldRes);
                default:
                    return new CommonField(pFieldRes);
            }
        }
        else{
            return null;
        }
    };

    /**
     * �ж�����Field�����Ƿ���ͬ
     * @return {Field} pNewField
     * @return {boolean}
     */
    this.Equal = function (pNewField) {
        if((pNewField != null)&&(pNewField != undefined)&&(pNewField.Valid())){
            return pField.Equal(pNewField.getNpObject());
        }
        else{
            return pField.Equal(pNewField);
        }
    };
}
/**
 * �ֶμ���
 * pImportFieldsΪ����Ĳ���
 * Creator  Jimmy
 * Time     2016-7-6
 */

export function FieldCollection(pImportFields) {
    var pFields = null;
    if (pImportFields == null) {
        pFields = plugin.NewFieldCollection();
    }
    else
        pFields = pImportFields;

    this.getNpObject = function () {
        return pFields;
    };

    this.Valid = function () {
        return pFields.isvalid;
    };
    
    /**
     * ��ȡ�ֶμ��ϳ���
     * @return {long}
     */
    this.getCount = function () {
        return pFields.Count;
    };

    /**
     * ��ȡ������ָ��λ���ϵ��ֶ�
     * @param {long} lIndex
     * @param {Field} pNewField
     * @return {Field} pFieldRes
     */
    this.Get = function (lIndex) {
        var pFieldRes = pFields.Get(lIndex);
        if ((pFieldRes != null)&&(pFieldRes != undefined)&&(pFieldRes.isvalid)) {
            var enumFieldType = pFieldRes.FieldType;
            switch(enumFieldType){
                case VRStarFieldType.VRStarFieldUnknow:
                    return new Field(pFieldRes);
                case VRStarFieldType.VRStarFieldGeometry:
                    return new GeometryField(pFieldRes);
                default:
                    return new CommonField(pFieldRes);
            }
        }
        else{
            return null;
        }
    };
    this.Set = function (lIndex, pNewField) {
        if((pNewField != null)&&(pNewField != undefined)&&(pNewField.Valid())){
            pFields.Set(lIndex, pNewField.getNpObject());
        }
        else{
            pFields.Set(lIndex, pNewField);
        }
    };

    /**
     * ��ָ����������������
     * @param {Field} pNewField
     */
    this.Add = function (pNewField) {
        if((pNewField != null)&&(pNewField != undefined)&&(pNewField.Valid())){
            pFields.Add(pNewField.getNpObject());
        }
        else{
            pFields.Add(pNewField);
        }
    };

    /**
     * ��ָ��λ�ô��򼯺���������
     * @param {long} lIndex
     * @param {Field} pNewField
     */
    this.Insert = function (lIndex, pNewField) {
        if((pNewField != null)&&(pNewField != undefined)&&(pNewField.Valid())){
            pFields.Insert(lIndex, pNewField.getNpObject());
        }
        else{
            pFields.Insert(lIndex, pNewField);
        }
    };

    /**
     * ��ȡ�������ֶ�
     * @param {string} sName
     * @param {Field} pNewField
     * @return {Field} pFieldRes
     */
    this.GetByName = function (sName) {
        var pFieldRes = pFields.GetByName(sName);
        if ((pFieldRes != null)&&(pFieldRes != undefined)&&(pFieldRes.isvalid)) {
            var enumFieldType = pFieldRes.FieldType;
            switch(enumFieldType){
                case VRStarFieldType.VRStarFieldUnknow:
                    return new Field(pFieldRes);
                case VRStarFieldType.VRStarFieldGeometry:
                    return new GeometryField(pFieldRes);
                default:
                    return new CommonField(pFieldRes);
            }
        }
        else{
            return null;
        }
    };
    this.SetByName = function (sName, pNewField) {
        if((pNewField != null)&&(pNewField != undefined)&&(pNewField.Valid())){
            pFields.SetByName(sName, pNewField.getNpObject());
        }
        else{
            pFields.SetByName(sName, pNewField);
        }
    };

    /**
     * ��¡
     * @return {FieldCollection} pFieldsRes
     */
    this.Clone = function(){
        var pFieldsRes = pFields.Clone();
        if ((pFieldsRes != null)&&(pFieldsRes != undefined)&&(pFieldsRes.isvalid)) {
            return new FieldCollection(pFieldsRes);
        }
        else{
            return null;
        }
    };

    /**
     * �Ƴ�������ָ�����Ƶ��ֶ�
     * param {string} sName
     */
    this.RemoveByName = function (sName) {
        pFields.RemoveByName(sName);
    };

    /**
     * ��ȡ�ֶ�����
     * param {string} sName
     * @return {long}
     */
    this.IndexOf = function(sName){
        return pFields.IndexOf(sName);
    };
}
/**
 * �ֶ���
 * pImportFieldDomainΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-7-6
 */

export function FieldDomain(pImportFieldDom) {

    var pImportFieldDomain = null;
    if (pImportFieldDom == null) {
        pImportFieldDomain = plugin.NewFieldDomain();
    }
    else
        pImportFieldDomain = pImportFieldDom;

    this.getNpObject = function () {
        return pImportFieldDomain;
    };

    this.Valid = function () {
        return pImportFieldDomain.isvalid;
    };

    /**
     * ��ȡ�������ֶ�����
     * @param {string} sFieldName
     * @return {string}
     */
    this.getFieldName = function(){
        return pImportFieldDomain.FieldName;
    };
    this.setFieldName = function(sFieldName){
        pImportFieldDomain.FieldName = sFieldName;
    };

    /**
     * ��ȡ��������
     * @param {Domain} pNewDomain
     * @return {Domain} pDomainRes
     */
    this.getDomain = function () {
        var pDomainRes = pImportFieldDomain.Domain;
        if((pDomainRes != null)&&(pDomainRes != undefined)&&(pDomainRes.isvalid)){
            var tDomainType = pDomainRes.DomainType;
            switch(tDomainType){
                case VRStarDomainType.VRStarDomainCodedValue:
                    return new CodedValueDomain(pDomain);
                case VRStarDomainType.VRStarDomainRange:
                    return new RangeDomain(pDomain);
                default:
                    return new Domain(pDomain);
            }
        }
        else{
            return null;
        }
    };
    this.setDomain = function(pNewDomain){
        if((pNewDomain != null)&&(pNewDomain != undefined)&&(pNewDomain.Valid())){
            pImportFieldDomain.Domain = pNewDomain.getNpObject();
        }
        else{
            pImportFieldDomain.Domain = pNewDomain;
        }
    };

    /**
     * ��ȡ������Ĭ��ֵ
     * @param {Variant} varDefaultValue
     * @return {Variant}
     */
    this.getDefaultValue = function(){
        return pImportFieldDomain.DefaultValue;
    };
    this.setDefaultValue = function(varDefaultValue){
        pImportFieldDomain.DefaultValue = varDefaultValue;
    };

    /**
     * ��ȡ���������Ĭ��ֵ�Ƿ��Field�м̳�
     * @param {boolean} bVal
     * @return {boolean}
     */
    this.getInherited = function(){
        return pImportFieldDomain.Inherited;
    };
    this.setInherited = function(bVal){
        pImportFieldDomain.Inherited = bVal;
    };

}/**
 * �ռ��ֶ�
 * pImportGeoFieldΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-7-6
 */

export function GeometryField(pImportGeoField) {
    Field.call(this, pImportGeoField);

    this.Valid = function () {
        return pImportGeoField.isvalid;
    };

    /**
     * ��ȡ�����ÿռ��м�������
     * @param {VRStarGeometryColumnType} enumGeoColumnType
     * @return {VRStarGeometryColumnType}
     */
    this.getGeometryColumnType = function(){
        return pImportGeoField.GeometryColumnType;
    };
    this.setGeometryColumnType = function(enumGeoColumnType){
        pImportGeoField.GeometryColumnType = enumGeoColumnType;
    };

    /**
     * ��ȡ�����ö�������
     * @param {VRStarVertexAttributeType} enumVertexAttributeType
     * @return {VRStarVertexAttributeType}
     */
    this.getVertexAttributeType = function(){
        return pImportGeoField.VertexAttributeType;
    };
    this.setVertexAttributeType = function(enumVertexAttributeType){
        pImportGeoField.VertexAttributeType = enumVertexAttributeType;
    };

    /**
     * ��ȡ�������Ƿ���IDֵ
     * @param {boolean} bVal
     * @return {boolean}
     */
    this.getHasID = function(){
        return pImportGeoField.HasID;
    };
    this.setHasID = function(bVal){
        pImportGeoField.HasID = bVal;
    };

    /**
     * ��ȡ�������Ƿ���Mֵ
     * @param {boolean} bVal
     * @return {boolean}
     */
    this.getHasM = function(){
        return pImportGeoField.HasM;
    };
    this.setHasM = function(bVal){
        pImportGeoField.HasM = bVal;
    };

    /**
     * ��ȡ�������Ƿ���Zֵ
     * @param {boolean} bVal
     * @return {boolean}
     */
    this.getHasZ = function(){
        return pImportGeoField.HasZ;
    };
    this.setHasZ = function(bVal){
        pImportGeoField.HasZ = bVal;
    };

    /**
     * ��ȡ�ռ䷶Χ
     * @return {Envelope} pEnvelopeRes
     */
    this.getEnvelope = function () {
        var pEnvelopeRes = pImportGeoField.Envelope;
        if ((pEnvelopeRes != null)&&(pEnvelopeRes != undefined)&&(pEnvelopeRes.isvalid)) {
            return new Envelope(pEnvelopeRes);
        }
        else{
            return null;
        }
    };

    /**
     * �ж��Ƿ�ע���˿ռ�����
     * @return {boolean}
     */
    this.getHasSpatialIndex = function(){
        return pImportGeoField.HasSpatialIndex;
    };

    /**
     * �ж��Ƿ�ע������Ⱦ����
     * @return {boolean}
     */
    this.getHasRenderIndex = function(){
        return pImportGeoField.HasRenderIndex;
    };

    /**
     * ��ȡ������M��Сֵ
     * @param {double} dMinM
     * @return {double}
     */
    this.getMinM = function(){
        return pImportGeoField.MinM;
    };
    this.setMinM = function(dMinM){
        pImportGeoField.MinM = dMinM;
    };

    /**
     * ��ȡ������M���ֵ
     * @param {double} dMaxM
     * @return {double}
     */
    this.getMaxM = function(){
        return pImportGeoField.MaxM;
    };
    this.setMaxM = function(dMaxM){
        pImportGeoField.MaxM = dMaxM;
    };

    /**
     * ��ȡƽ�������������������ζ����Ƿ����
     * @return {long}
     */
    this.getAvgNumPoints = function(){
        return pImportGeoField.AvgNumPoints;
    }
}
/**
 * ����
 * pImportIndexΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-6
 */

export function Index(pImportIndex){

    this.getNpObject = function () {
        return pImportIndex;
    };

    this.Valid = function () {
        return pImportIndex.isvalid;
    };

    /**
     * ��ȡ��������
     * @return {VRStarIndexType}
     */
    this.getIndexType = function(){
        return pImportIndex.IndexType;
    };
}

/**
 * ���ݿ������࣬���ڼ������Բ�ѯ
 * pImportDatabaseIndexΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-6
 */

export function DatabaseIndex(pImportDatabaseIndex) {
    Index.call(this, pImportDatabaseIndex);

    this.Valid = function () {
        return pImportDatabaseIndex.isvalid;
    };

    /**
     * ��ȡ������������
     * @param   {String}  sName
     * @return  {String}
     */
    this.getName = function () {
        return pImportDatabaseIndex.Name;
    };
    this.setName = function (sName) {
        connection.Name = sName;
    };

    /**
     * ��ȡ�������Ƿ���Ψһ����
     * @param   {boolean}  bUnique
     * @return  {boolean}
     */
    this.getUnique = function () {
        return pImportDatabaseIndex.Unique;
    };
    this.setUnique = function (bUnique) {
        connection.Unique = bUnique;
    };

    /**
     * ��ȡ���������ݿ��������ֶθ���
     * @return  {long}
     */
    this.getFieldCount = function () {
        return pImportDatabaseIndex.FieldCount;
    };

    /**
     * ��ȡָ���Ľ��������ݿ��������ֶ���
     * @param   {long}  lIndex
     * @return  {string}
     */
    this.GetFieldName = function (lIndex) {
        return pImportDatabaseIndex.GetFieldName(lIndex);
    };

    /**
     * �ж��Ƿ��ǽ������������л�����
     * @param   {long}  lIndex
     * @return  {boolean}
     */
    this.GetFieldAscending = function (lIndex) {
        return pImportDatabaseIndex.GetFieldAscending(lIndex);
    };

    /**
     * ���������ֶε�����˳��
     * @param   {string}  sFieldName
     * @param   {boolean}  bVal
     */
    this.SetSortAsc = function (sFieldName, bVal) {
        pImportDatabaseIndex.SetSortAsc(sFieldName, bVal);
    };

    /**
     * �����ֶε���������
     * @param   {string}  sFieldName
     * @param   {boolean}  bSortAsc
     */
    this.AppendFieldIndexDefine = function (strFieldName, bSortAsc) {
        return pImportDatabaseIndex.AppendFieldIndexDefine(strFieldName, bSortAsc);
    };

    /**
     * ɾ���ֶ���������
     * @param   {string}  sFieldName
     */
    this.DeleteFieldIndexDefine = function (sFieldName) {
        pImportDatabaseIndex.DeleteFieldIndexDefine(sFieldName);
    };
}

/**
 * Created by Jimmy on 2016-7-6.
 * ����������
 * pImportGridIndexΪ����Ĳ���
 * Creator   Jimmy
 * Time     2016-07-6
 */

export function GridIndex(gridIndex) {
    Index.call(this, gridIndex);

    this.Valid = function () {
        return gridIndex.isvalid;
    };

    /**
     * ��ȡ��������������Ӧ�ļ���������
     * @param {string} sGeoColumnName
     * @return  {string}
     */
    this.getGeoColumnName = function () {
        return gridIndex.GeoColumnName;
    };
    this.setGeoColumnName = function (sGeoColumnName) {
        gridIndex.GeoColumnName = sGeoColumnName;
    };

    /**
     * ��ȡ�����õ�һ������X�����ϵĳ��ȣ���λ��
     * @param {double} dL1
     * @return  {double}
     */
    this.getL1 = function () {
        return gridIndex.L1;
    };
    this.setL1 = function (dL1) {
        gridIndex.L1 = dL1;
    };

    /**
     * ��ȡ�����õ�һ������X�����ϵĳ��ȣ���λ��
     * @param {double} dL2
     * @return  {double}
     */
    this.getL2 = function () {
        return gridIndex.L2;
    };
    this.setL2 = function (dL2) {
        gridIndex.L2 = dL2;
    };

    /**
     * ��ȡ�����õ�һ������X�����ϵĳ��ȣ���λ��
     * @param {double} dL3
     * @return  {double}
     */
    this.getL3 = function () {
        return gridIndex.L3;
    };
    this.setL3 = function (dL3) {
        gridIndex.L3 = dL3;
    }
}

/**
 * ��Ⱦ����
 * renderΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-7-6
 */

export function RenderIndex(render) {
    Index.call(this, render);
    var renderIndex = render;

    this.Valid = function () {
        return renderIndex.isvalid;
    };

    /**
     * ��ȡ��������������Ӧ�ļ���������
     * @param {string} sGeoColumnName
     * @return {string}
     */
    this.getGeoColumnName = function () {
        return renderIndex.GeoColumnName;
    };
    this.setGeoColumnName = function (sGeoColumnName) {
        renderIndex.GeoColumnName = sGeoColumnName;
    };

    /**
     * ��ȡ�����õ�һ������X�����ϵĳ���
     * @param {double} dL1
     * @return  {double}
     */
    this.getL1 = function () {
        return renderIndex.L1;
    };
    this.setL1 = function (dL1) {
        renderIndex.L1 = dL1;
    };
}


/**
 * Created by Jimmy on 2016-7-6.
 * ��������
 * indexCollectionΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-7-6
 */

export function IndexCollection(indexCollection){

    /**
     * ��ȡԪ�ظ���
     */
    this.getCount = function(){
        return indexCollection.Count;
    };

    this.Valid = function () {
        return indexCollection.isvalid;
    };

    /**
     * ��ȡ����������ָ����Ԫ��ֵ
     * @param {long} lIndex
     * @return {Index}
     */
    this.Get = function (lIndex) {
        var pIndex = indexCollection.Get(lIndex);
        if ((pIndex != null)&&(pIndex != undefined)&&(pIndex.isvalid)) {
            var enumIndexType = pIndex.IndexType;
            switch(enumIndexType){
                case VRStarIndexType.VRStarIndexGrid:
                    return new GridIndex(pIndex);
                case VRStarIndexType.VRStarIndexRender:
                    return new RenderIndex(pIndex);
                case VRStarIndexType.VRStarIndexRdbms:
                    return new DatabaseIndex(pIndex);
                default:
                    return new Index(pIndex);
            }
        }
        else{
            return null;
        }
    };
}
/**
 * һ�ֲ����ռ��е������࣬��Ҫ���������������֮��Ĺ�ϵ����Ʒǿռ�������
 * pObjectClassResultΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-7-6
 */

export function ObjectClass(pObjectClassResult) {
    Table.call(this, pObjectClassResult);
    var objectClass = pObjectClassResult;

    this.getNpObject = function () {
        return objectClass;
    };

    this.Valid = function () {
        return objectClass.isvalid;
    };

    /**
     * ��ȡ�����ö��������
     * @param {string} sAlias
     * @return {string}
     */
    this.getAlias = function(){
        return objectClass.Alias;
    };
    this.setAlias = function(sAlias){
        objectClass.Alias = sAlias;
    };

    /**
     * ��ȡObjectClass������ʱ��GUID
     * @return {GUID}
     */
    this.getGuid = function(){
        return objectClass.Guid;
    };

    /**
     * ��ȡ���������
     * @return {long}
     */
    this.getID = function(){
        return objectClass.ID;
    };

    /**
     * �ж϶�����Ƿ�ֻ��
     * @return {boolean}
     */
    this.getReadOnly = function(){
        return objectClass.ReadOnly;
    };

    /**
     * ��ȡ���ݼ�����ʱ��
     * @return {DATE}
     */
    this.getCreateTime = function(){
        return objectClass.CreateTime;
    };

    /**
     * ��ȡ���ݼ�������ʱ��
     * @return {DATE}
     */
    this.getLastUpdateTime = function(){
        return objectClass.LastUpdateTime;
    };

    /**
     * ��ȡ������������ݼ�
     * @return {FeatureDataSet}
     */
    this.getFeatureDataSet = function () {
        var pDataSet = objectClass.FeatureDataSet;
        if ((pDataSet != null)&&(pDataSet != undefined)&&(pDataSet.isvalid)) {
            return new FeatureDataSet(pDataSet);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ����������ֶ�����
     * @return {string}
     */
    this.getIDFieldName = function(){
        return objectClass.IDFieldName;
    };

    /**
     * ��ȡ�����ö����������
     * @param {VRStarSchemaLockType} enumSchemaLockType
     * @return {VRStarSchemaLockType}
     */
    this.getSchemaLockType = function () {
        return objectClass.SchemaLockType;
    };
    this.setSchemaLockType = function (enumSchemaLockType) {
        objectClass.SchemaLockType = enumSchemaLockType;
    };


    /**
     * �ж϶�����Ƿ�ָ����SubType Field
     * @return {boolean}
     */
    this.getHasSubTypes = function(){
        return objectClass.HasSubTypes;
    };

    /**
     * ��ȡ�����ö����Ĭ�ϵ�SubTypeCode
     * @return {long}
     */
    this.getSubTypeCount = function () {
        return objectClass.SubTypeCount;
    };

    /**
     * ��ȡ�����ö����Ĭ�ϵ�SubTypeCode
     * @param {long} lDefaultSubTypeCode
     * @return {long}
     */
    this.getDefaultSubTypeCode = function () {
        return objectClass.DefaultSubTypeCode;
    };
    this.setDefaultSubTypeCode = function (lDefaultSubTypeCode) {
        objectClass.DefaultSubTypeCode = lDefaultSubTypeCode;
    };


    /**
     * ��ȡSubTypeField��Fields�е�λ��
     * @return {long}
     */
    this.getSubTypeFieldIndex = function () {
        return objectClass.SubTypeFieldIndex;
    };

    /**
     * ��ȡ�����ö������Ҫ������subtypes��Ӧ��field
     * @param {string} sSubTypeFieldName
     * @return {string}
     */
    this.getSubTypeFieldName = function () {
        return objectClass.SubTypeFieldName;
    };
    this.setSubTypeFieldName = function (sSubTypeFieldName) {
        objectClass.SubTypeFieldName = sSubTypeFieldName
    };

    /**
     * ��ȡ�������û��Զ�������
     * @param {PropertyCollection} pPropertys
     * @return {PropertyCollection} pPropertys
     */
    this.getCustomData = function(){
        var pPropertys = objectClass.CustomData;
        if ((pPropertys != null)&&(pPropertys != undefined)&&(pPropertys.isvalid)) {
            return new PropertyCollection(pPropertys);
        }
        else{
            return null;
        }
    };

    this.setCustomData = function(pPropertys){
        if((pPropertys != null)&&(pPropertys != undefined)&&(pPropertys.Valid())) {
            objectClass.CustomData = pPropertys.getNpObject();
        }
        else{
            objectClass.CustomData = pPropertys;
        }
    };

    /**
     * �ж��Ƿ������˸���
     * @return {boolean}
     */
    this.HasAttachments = function () {
        return objectClass.HasAttachments();
    };

    /**
     * ��ȡ��ǰObjectClass�ĸ����������������༭��������
     * @return {AttachmentManager} pAttManager
     */
    this.GetAttachmentManager = function () {
        var pAttManager = objectClass.GetAttachmentManager();
        if ((pAttManager != null)&&(pAttManager != undefined)&&(pAttManager.isvalid)) {
            return new AttachmentManager(pAttManager);
        }
        return null;
    };

    /**
     * ��ȡ��ǰObjectClass�ĸ����������������༭��������
     */
    this.GetLocks = function () {
        return objectClass.GetLocks();
    };

    /**
     * ��ȡ����������ͼ���
     * @param {long} lId
     * @return {SubType}
     */
    this.GetSubType = function (lId) {
        var pSubType = objectClass.GetSubType(lId);
        if ((pSubType != null)&&(pSubType != undefined)&&(pSubType.isvalid)) {
            return new SubType(pSubType);
        }
        return null;
   };

    /**
     * ����һ��SubType��SubTypes��
     * @param {SubType} pSubType
     */
    this.AddSubType = function(pSubType){
        if((pSubType != null)&&(pSubType != undefined)&&(pSubType.Valid())){
            objectClass.AddSubType(pSubType.getNpObject());
        }
        else{
            objectClass.AddSubType(pSubType);
        }
    };

    /**
     * ɾ��������
     * @param {long} lId
     */
    this.DeleteSubType = function(lId){
        objectClass.DeleteSubType(lId);
    };

    /**
     * �޸�������
     * @param {SubType} pSubType
     */
    this.ModifySubType = function(pSubType){
        if((pSubType != null)&&(pSubType != undefined)&&(pSubType.Valid())){
            objectClass.ModifySubType(pSubType.getNpObject());
        }
        else{
            objectClass.ModifySubType(pSubType);
        }
    };

    /**
     * �رն����
     */
    this.Close = function(){
        objectClass.Close();
    };

    /**
     * ����Attachment���ܣ���ɾ������Attachment����
     */
    this.DisableAttachment = function(){
        objectClass.DisableAttachment();
    };

    /**
     * ����Attachment����
     * @param {boolean} bUseAttachClass
     */
    this.EnableAttachment = function(bUseAttachClass){
        objectClass.EnableAttachment(bUseAttachClass);
    };
}
/**
 * ��ѯ����
 * queryDefineResΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-7-6
 */

export function QueryDefine(queryDefineRes) {
    var queryDefine = queryDefineRes;

    this.getNpObject = function () {
        return queryDefine;
    };

    this.Valid = function () {
        return queryDefine.isvalid;
    };

    /**
     * ��ȡ���������ݱ����Ƽ���
     * @param {StringCollection} pStrings
     * @return {StringCollection}
     */
    this.getTableNames = function () {
        var pStrings = queryDefine.TableNames;
        if ((pStrings != null)&&(pStrings != undefined)&&(pStrings.isvalid)) {
            return new StringCollection(pStrings);
        }
        else{
            return null;
        }
    };
    this.setTableNames = function(pStrings){
        queryDefine.TableNames = pStrings.getNpObject();
    };

    /**
     * ��ȡ�����ò�ѯ�ֶμ���
     * @param {StringCollection} pStrings
     * @return {StringCollection}
     */
    this.getSubFields = function(){
        var pStrings = queryDefine.SubFields;
        if ((pStrings != null)&&(pStrings != undefined)&&(pStrings.isvalid)) {
            return new StringCollection(pStrings);
        }
        else{
            return null;
        }
    };
    this.setSubFields = function(pStrings){
        queryDefine.SubFields = pStrings.getNpObject();
    };

    /**
     * ��ȡ������where��ѯ����
     * @param {string} sWhereClause
     * @return {string}
     */
    this.getWhereClause = function(){
        return queryDefine.WhereClause;
    };
    this.setWhereClause = function(sWhereClause){
        queryDefine.WhereClause = sWhereClause;
    };


    /**
     * ��ȡ�����ø��ӵ�SELECT����еĲ�ѯ������ͨ������where���֮�󣬳��õ�����ORDER BY
     * @param {string} sPostfixClause
     * @return {string}
     */
    this.getPostfixClause = function(){
        return queryDefine.PostfixClause;
    };
    this.setPostfixClause = function(sPostfixClause){
        queryDefine.PostfixClause = sPostfixClause;
    };

    /**
     * ��ȡ�����ò���SELECT�ؼ��ֺ�SELECT����֮��Ĳ�ѯ���������õ�����DISTINCT��ALL��
     * @param {string} sPrefixClause
     * @return {string}
     */
    this.getPrefixClause = function(){
        return queryDefine.PrefixClause;
    };
    this.setPrefixClause = function(sPrefixClause){
        queryDefine.PrefixClause = sPrefixClause;
    };

    /**
     * ��ȡ���������ݴ洢λ��
     * @param {VRStarResultStoreLocationType} sPrefixClause
     * @return {VRStarResultStoreLocationType}
     */
    this.getResultStoreLocationType = function(){
        return queryDefine.ResultStoreLocationType;
    };
    this.setResultStoreLocationType = function(enumResultStoreLocationType){
        queryDefine.ResultStoreLocationType = enumResultStoreLocationType;
    };

    /**
     * ��ȡ���������ݴ洢λ��
     * @param {boolean} bReuseRow
     * @return {FeatureCursor} pFeatureCursor
     */
    this.Execute = function(bReuseRow){
        var pFeatureCursor = queryDefine.Execute(bReuseRow);
        if ((pFeatureCursor != null)&&(pFeatureCursor != undefined)&&(pFeatureCursor.isvalid)) {
            return new FeatureCursor(pFeatureCursor);
        }
        else{
            return null;
        }
    };

    /**
     * ִ��Select sql�����ؽ����
     * @param {string}  sSQL
     * @param {SAFEARRAY}  arrParam
     * @param {long}  lBulkSize
     * @param {boolean}  bReuseRow
     * @return {FeatureCursor} pFeatureCursor
     */
    this.ExecuteSQL = function(sSQL,arrParam,lBulkSize,bReuseRow){
        var pFeatureCursor = queryDefine.ExecuteSQL(sSQL,arrParam,lBulkSize,bReuseRow);
        if ((pFeatureCursor != null)&&(pFeatureCursor != undefined)&&(pFeatureCursor.isvalid)) {
            return new FeatureCursor(pFeatureCursor);
        }
        else{
            return null;
        }
    };
}
/**
 * Created by Administrator on 2016-6-21.
 * ��ѯ������
 * pImQueryFilterΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-6-21.
 */

export function QueryFilter(pImQueryFilter) {
    var queryFilter = null;
    if (pImQueryFilter == null) {
        queryFilter = plugin.NewQueryFilter();
    }
    else
        queryFilter = pImQueryFilter;

    this.getNpObject = function () {
        return queryFilter;
    };

    this.Valid = function () {
        return queryFilter.isvalid;
    };

    /**
    * ���������
    */
    this.getFilterType = function () {
        return queryFilter.FilterType;
    };

    /**
     * ��ȡ���������ݱ�����
     * @param {string} sTableName
     * @return {string}
     */
    this.getTableName = function(){
        return queryFilter.TableName;
    };
    this.setTableName = function(sTableName){
        queryFilter.TableName = sTableName;
    };

    /**
     * ��ȡ�����ò�ѯ�ֶμ���
     * @param {string} sSubFields
     * @return {string}
     */
    this.getSubFields = function(){
        return queryFilter.SubFields;
    };
    this.setSubFields = function(sSubFields){
        queryFilter.SubFields = sSubFields;
    };

    /**
     * ��ȡ������where��ѯ����
     * @param {string} sWhereClause
     * @return {string}
     */
    this.getWhereClause = function(){
        return queryFilter.WhereClause;
    };
    this.setWhereClause = function(sWhereClause){
        queryFilter.WhereClause = sWhereClause;
    };

    /**
     * ��ȡ������Id���ϣ���ѯ������Id���ڸü��ϵļ�¼���н���
     * @param {SAFEARRAY} arrVal
     * @return {SAFEARRAY}
     */
    this.getIdsFilter = function(){
        return queryFilter.IdsFilter;
    };
    this.setIdsFilter = function(arrVal){
        queryFilter.IdsFilter = arrVal;
    };

    /**
     * ��ȡ�����ø��ӵ�SELECT����еĲ�ѯ������ͨ������where���֮�󣬳��õ�����ORDER BY
     * @param {string} sPostfixClause
     * @return {string}
     */
    this.getPostfixClause = function(){
        return queryFilter.PostfixClause;
    };
    this.setPostfixClause = function(sPostfixClause){
        queryFilter.PostfixClause = sPostfixClause;
    };

    /**
     * ��ȡ�����ò���SELECT�ؼ��ֺ�SELECT����֮��Ĳ�ѯ���������õ�����DISTINCT��ALL
     * @param {string} sPrefixClause
     * @return {string}
     */
    this.getPrefixClause = function(){
        return queryFilter.PrefixClause;
    };
    this.setPrefixClause = function(sPrefixClause){
        queryFilter.PrefixClause = sPrefixClause;
    };

    /**
     * ��ȡ�����ý�����ӵڼ��п�ʼ����
     * @param {long} lIndex
     * @return {long}
     */
    this.getResultBeginIndex = function(){
        return queryFilter.ResultBeginIndex;
    };
    this.setResultBeginIndex = function(lIndex){
        queryFilter.ResultBeginIndex = lIndex;
    };

    /**
     * ��ȡ�����ý�����ӵڼ��п�ʼ����
     * @param {long} lIndex
     * @return {long}
     */
    this.getResultLimit = function(){
        return queryFilter.ResultLimit;
    };
    this.setResultLimit = function(lVal){
        queryFilter.ResultLimit = lVal;
    };
}
/**
 * ͬ���Ĺ�����
 * @author   Jimmy
 * @date     2016-7-6.
 */

export function ReplicationFactory(){
    var replicationFactory = plugin.ReplicationFactory;

    /**
     * ��������ͬ������
     * @param {Connection} pConnection
     * @param {string} strDataSetName
     * @return {Replication} pReplication
     */
    this.CreateReplicationClass = function (pConnection, strDataSetName) {
        var pReplication = null;
        if((pConnection != null)&&(pConnection != undefined)&&(pConnection.Valid())) {
            pReplication = replicationFactory.CreateReplicationClass(pConnection.getNpObject(), strDataSetName);
        }
        else{
            pReplication = replicationFactory.CreateReplicationClass(pConnection, strDataSetName);
        }
        if ((pReplication != null)&&(pReplication != undefined)&&(pReplication.isvalid)) {
            return new Replication(pReplication);
        }
        else{
            return null;
        }
    };

    /**
     * ����ǩ�����
     * @param {DataSource} pDataSource
     * @param {string} strFeatureDataSetName
     * @param {VRStarConflictDetectedType} enumConflictDetectedType
     * @return {CheckIn} pCheckIn
     */
    this.CreateCheckIn = function (pDataSource, strFeatureDataSetName, enumConflictDetectedType) {
        var pCheckIn = null;
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())) {
            pCheckIn = replicationFactory.CreateCheckIn(pDataSource.getNpObject(), strFeatureDataSetName, enumConflictDetectedType);
        }
        else{
            pCheckIn = replicationFactory.CreateCheckIn(pDataSource, strFeatureDataSetName, enumConflictDetectedType);
        }
        if ((pCheckIn != null)&&(pCheckIn != undefined)&&(pCheckIn.isvalid)) {
            return new CheckIn(pCheckIn);
        }
        else{
            return null;
        }
    };

    /**
     * ����ǩ������
     * @param {DataSource} pDataSourceFrom
     * @param {DataSource} pDataSourceTo
     * @param {string} strFeatureDataSetName
     * @param {VRStarConflictDetectedType} enumConflictDetectedType
     * @return {CheckOut} pCheckOut
     */
    this.CreateCheckOut = function(pDataSourceFrom,pDataSourceTo,strFeatureDataSetName,enumConflictDetectedType){
        var pDataSourceFromMid = null;
        if((pDataSourceFrom != null)&&(pDataSourceFrom != undefined)&&(pDataSource.Valid())) {
            pDataSourceFromMid = pDataSourceFrom.getNpObject();
        }
        else{
            pDataSourceFromMid = pDataSourceFrom;
        }
        var pDataSourceToMid = null;
        if((pDataSourceTo != null)&&(pDataSourceTo != undefined)&&(pDataSourceTo.Valid())) {
            pDataSourceToMid = pDataSourceTo.getNpObject();
        }
        else{
            pDataSourceToMid = pDataSourceTo;
        }
        var pCheckOut = replicationFactory.CreateCheckOut(pDataSourceFromMid, pDataSourceToMid, strFeatureDataSetName, enumConflictDetectedType);
        if ((pCheckOut != null)&&(pCheckOut != undefined)&&(pCheckOut.isvalid)) {
            return new CheckOut(pCheckOut)
        }
        else{
            return null;
        }
    };

   /**
     * ����ǩ��
     * @param {DataSource} pDataSource
     * @param {string} strDataSetName
     */
    this.UndoCheckOut = function(pDataSource,strDataSetName){
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())) {
            replicationFactory.UndoCheckOut(pDataSource.getNpObject(), strDataSetName);
        }
        else{
            replicationFactory.UndoCheckOut(pDataSource, strDataSetName);
        }
    };
}
/**
 * ��Դ�������ӿ�
 * resourceManagerΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-7-6
 */

export function ResourceManager(resourceManager){

    this.getNpObject = function () {
        return resourceManager;
    };

    this.Valid = function () {
        return resourceManager.isvalid;
    };

    /**
     * ����ģ��
     * @param {string} strName
     * @param {Model} pModel
     * @param {Model} pModelSimplified
     * @return {boolean}
     */
    this.AddModel = function(strName,pModel,pModelSimplified){
        var pModelMid = null;
        if((pModel != null)&&(pModel != undefined)&&(pModel.Valid())) {
            pModelMid = pModel.getNpObject();
        }
        else{
            pModelMid = pModel;
        }
        var pModelSimplifiedMid = null;
        if((pModelSimplified != null)&&(pModelSimplified != undefined)&&(pModelSimplified.Valid())) {
            pModelSimplifiedMid = pModelSimplified.getNpObject();
        }
        else{
            pModelSimplifiedMid = pModelSimplified;
        }
        return resourceManager.AddModel(strName, pModelMid, pModelSimplifiedMid);
    };

    /**
     * ɾ��ģ��
     * @param {string} strName
     * @return {boolean}
     */
    this.DeleteModel = function(strName){
        return resourceManager.DeleteModel(strName);
    };

    /**
     * ��ȡģ������
     * @return {long}
     */
    this.GetModelCount = function(){
        return resourceManager.GetModelCount();
    };

    /**
     * ��ȡ��ģ
     * @param {string} strName
     * @return {Model} modelResult
     */
    this.GetModel = function (strName) {
        var modelResult = resourceManager.GetModel(strName);
        if ((modelResult != null)&&(modelResult != undefined)&&(modelResult.isvalid)) {
            return new Model(modelResult);
        }
        else{
            return null;
        }
    };

    /**
     * ���¾�ģ
     * @param {string} strName
     * @param {Model} pModel
     * @return {boolean}
     */
    this.UpdateModel = function(strName,pModel){
        if((pModel != null)&&(pModel != undefined)&&(pModel.Valid())) {
            return resourceManager.UpdateModel(strName, pModel.getNpObject());
        }
        else{
            return resourceManager.UpdateModel(strName, pModel);
        }
    };

    /**
     * ��ȡ��ģ
     * @param {string} strName
     * @return {Model} modelResult
     */
    this.GetSimplifiedModel = function(strName){
        var modelResult = resourceManager.GetSimplifiedModel(strName);
        if ((modelResult != null)&&(modelResult != undefined)&&(modelResult.isvalid)) {
            return new Model(modelResult);
        }
        else{
            return null;
        }
    };

    /**
     * ���¼�ģ
     * @param {string} strName
     * @param {Model} pModel
     * @return {boolean}
     */
    this.UpdateSimplifiedModel = function(strName,pModel){
        if((pModel != null)&&(pModel != undefined)&&(pModel.Valid())) {
            return resourceManager.UpdateSimplifiedModel(strName, pModel.getNpObject());
        }
        else{
            return resourceManager.UpdateSimplifiedModel(strName, pModel);
        }
    };

    /**
     * ģ������ö����
     * @return {EnumResourceName} pEnumResourceNameRes
     */
    this.GetModelNames = function(){
        var pEnumResourceNameRes = resourceManager.GetModelNames();
        if ((pEnumResourceNameRes != null)&&(pEnumResourceNameRes != undefined)&&(pEnumResourceNameRes.isvalid)) {
            return new EnumResourceName(pEnumResourceNameRes);
        }
        else{
            return null;
        }
    };

    /**
     * �ж�ģ���Ƿ����
     * @param {string} strName
     * @return {boolean}
     */
    this.ModelExist = function(strName){
        return resourceManager.ModelExist(strName);
    };

    /**
     * �������ɼ�ģ
     * @param {string} strName
     * @return {boolean}
     */
    this.RebuildSimplifiedModel  = function(strName){
        return resourceManager.RebuildSimplifiedModel(strName);
    };

    /**
     * ������ͼ
     * @param {string} strName
     * @param {Image} pImage
     * @return {boolean}
     */
    this.AddImage = function(strName,pImage){
        if((pImage != null)&&(pImage != undefined)&&(pImage.Valid())) {
            return resourceManager.AddImage(strName, pImage.getNpObject());
        }
        else{
            return resourceManager.AddImage(strName, pImage);
        }
    };

    /**
     * ɾ����ͼ
     * @param {string} strName
     * @return {boolean}
     */
    this.DeleteImage = function(strName){
        return resourceManager.DeleteImage(strName);
    };

    /**
     * ��ǰ��ͼ����
     * @return {long}
     */
    this.GetImageCount = function(){
        return resourceManager.GetImageCount();
    };

    /**
     * ��ȡ��ͼ
     * @param {string} strName
     * @return {Image}
     */
    this.GetImage = function (strName) {
        var modelResult = resourceManager.GetImage(strName);
        if ((modelResult != null)&&(modelResult != undefined)&&(modelResult.isvalid)) {
            return new Image(modelResult);
        }
        else{
            return null;
        }
    };

    /**
     * ������ͼ
     * @param {string} strName
     * @param {Image} pImage
     * @return {boolean}
     */
    this.UpdateImage = function (strName, pImage) {
        if((pImage != null)&&(pImage != undefined)&&(pImage.Valid())) {
            return resourceManager.UpdateImage(strName, pImage.getNpObject());
        }
        else{
            return resourceManager.UpdateImage(strName, pImage);
        }
    };

    /**
     * ��ȡ��ͼ����ö����
     * @return {EnumResourceName} pEnumResourceNameRes
     */
    this.GetImageNames = function(){
        var pEnumResourceNameRes = resourceManager.GetImageNames();
        if ((pEnumResourceNameRes != null)&&(pEnumResourceNameRes != undefined)&&(pEnumResourceNameRes.isvalid)) {
            return new EnumResourceName(pEnumResourceNameRes);
        }
        else{
            return null;
        }
    };

    /**
     * �ж���ͼ�Ƿ����
     * @param {string} strName
     * @return {boolean}
     */
    this.ImageExist = function(strName){
        return resourceManager.ImageExist(strName);
    };

    /**
     * �����Դ���ƺϷ���
     * @param {string} strName
     * @return {boolean}
     */
    this.CheckResourceName = function(strName){
        return resourceManager.CheckResourceName(strName);
    };

    /**
     * ��ָ��ģ�ͺ�ģ�����õ���ͼд�뵽ָ��·����
     * @param {string} strModelName
     * @param {string} strFileName
     * @return {boolean}
     */
    this.WriteModelAndImageToFile = function(strModelName,strFileName){
        return resourceManager.WriteModelAndImageToFile(strModelName, strFileName);
    };

    /**
     * ���Ӷ����ģ
     * @param {PropertyCollection} pPropertys
     * @return {boolean}
     */
    this.AddModels = function(pPropertys){
        if((pPropertys != null)&&(pPropertys != undefined)&&(pPropertys.Valid())){
            return resourceManager.AddModels(pPropertys.getNpObject());
        }
        else{
            return resourceManager.AddModels(pPropertys);
        }
    };

    /**
     * ���Ӷ����ͼ
     * @param {PropertyCollection} pPropertys
     * @return {boolean}
     */
    this.AddImages = function(pPropertys){
        if((pPropertys != null)&&(pPropertys != undefined)&&(pPropertys.Valid())){
            return resourceManager.AddImages(pPropertys.getNpObject());
        }
        else{
            return resourceManager.AddImages(pPropertys);
        }
    };
}/**
 * ��
 * rowResΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-7-6
 */

export function Row(rowRes) {

    var row = rowRes;

    this.getNpObject = function () {
        return row;
    };

    this.Valid = function () {
        return row.isvalid;
    };

    /**
     * ��ȡ������ָ��λ�õ��ֶ�ֵ
     * @param {long} nFieldIndex
     * @param {Variant} newVal
     * @return {Variant} newVal
     */
    this.GetValue = function (nFieldIndex) {
        return row.GetValue(nFieldIndex);
    };
    this.SetValue = function (nFieldIndex, newVal) {
        row.SetValue(nFieldIndex, newVal);
    };

    /**
     * ��ȡָ�����Ƶ��ֶ�����ֵ
     * @param {string} sFieldName
     * @return {long}
     */
    this.FieldIndex = function (sFieldName) {
        return row.FieldIndex(sFieldName);
    };

    /**
     * ��ȡ�ֶμ���
     * @return {FieldCollection} pFields
     */
    this.GetFields = function () {
        var pFields = row.GetFields();
        if ((pFields != null)&&(pFields != undefined)&&(pFields.isvalid)) {
            return new FieldCollection(pFields);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ������ָ�������е��ֶ�ֵ
     * @param {string} sFieldName
     * @return {Variant}
     */
    this.GetValueByName = function (sFieldName) {
            var pGeometry = row.GetValueByName(sFieldName);
            if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.isvalid)){
                var enumGeometryType = pGeometry.GeometryType;
                switch (enumGeometryType) {
                    case VRStarGeometryType.VRStarGeometryUnknow:
                        return new Geometry(pGeometry);
                    case VRStarGeometryType.VRStarGeometryPoint:
                        return new Point(pGeometry);
                    case VRStarGeometryType.VRStarGeometryModelPoint:
                        return new ModelPoint(pGeometry);
                    case VRStarGeometryType.VRStarGeometryArc:
                        return new CirculeArc(pGeometry);
                    case VRStarGeometryType.VRStarGeometryLine:
                        return new Line(pGeometry);
                    case VRStarGeometryType.VRStarGeometryCircle:
                        return new Circle(pGeometry);
                    case VRStarGeometryType.VRStarGeometryPolyline:
                        return new Polyline(pGeometry);
                    case VRStarGeometryType.VRStarGeometryRing:
                        return new Ring(pGeometry);
                    case VRStarGeometryType.VRStarGeometryPolygon:
                        return new Polygon(pGeometry);
                    case VRStarGeometryType.VRStarGeometryTriMesh:
                        return new TriMesh(pGeometry);
                    case VRStarGeometryType.VRStarGeometryCollection:
                        return new GeometryCollection(pGeometry);
                    case VRStarGeometryType.VRStarGeometryMultiPoint:
                        return new MultiPoint(pGeometry);
                    case VRStarGeometryType.VRStarGeometryMultiPolyline:
                        return new MultiPolyline(pGeometry);
                    case VRStarGeometryType.VRStarGeometryMultiPolygon:
                        return new MultiPolygon(pGeometry);
                    case VRStarGeometryType.VRStarGeometryMultiTrimesh:
                        return new MultiTriMesh(pGeometry);
                    case VRStarGeometryType.VRStarGeometryPointCloud:
                        return new PointCloud(pGeometry);
                    default:
                        return null;
                }
            }
            else{
                return pGeometry;
            }


    };
    this.SetValueByName = function (sFieldName, objVal) {
        if((sFieldName == "ModelPoint")||(sFieldName == "SHAPE")){
            row.SetValueByName(sFieldName, objVal.getNpObject());
        }
        else{
            row.SetValueByName(sFieldName, objVal);
        }
    };
    
    /**
     * ��¡
     * @param {boolean} bCloneChangedFlag
     * @return {Row}
     */
    this.Clone = function (bCloneChangedFlag) {
        var pRowRes = row.Clone(bCloneChangedFlag);
        if ((pRowRes != null)&&(pRowRes != undefined)&&(pRowRes.isvalid)) {
            return new Row(pRowRes);
        }
        else{
            return null;
        }
    };

    /**
     * �ж��ֶ��Ƿ��޸Ĺ�
     * @param {long} bCloneChangedFlag
     * @return {boolean}
     */
    this.IsChanged = function (lIndex) {
        return row.IsChanged(lIndex);
    };

    /**
     * ��ȡ�ֶθ���
     * @return {long}
     */
    this.getFieldCount = function () {
        return row.FieldCount;
    };
}/**
 * �м���
 * @author   Jimmy
 * @date     2016-6-23.
 */

export function RowCollection(){
    var rowCollection = plugin.NewRowCollection();

    Collection.call(this, rowCollection);

    this.getNpObject = function () {
        return rowCollection;
    };

    this.Valid = function () {
        return rowCollection.isvalid;
    };

    /**
     * ��ȡ�м�����
     * @return {long}
     */
    this.getCount = function(){
        return rowCollection.Count;
    };

    /**
     * ��ָ����������������
     * @param {Row} pRow
     */
    this.Add = function(pRow){
        if((pRow != null)&&(pRow != undefined)&&(pRow.Valid())){
            rowCollection.Add(pRow.getNpObject());
        }
        else{
            rowCollection.Add(pRow);
        }

    };

    /**
     * ��ȡ������ָ��λ���ϵ��ж���
     * @param {long} nIndex
     * @return {Row}
     */
    this.Get = function (nIndex) {
        var pRow = rowCollection.Get(nIndex);
        if ((pRow != null)&&(pRow != undefined)&&(pRow.isvalid)) {
            return new Row(pRow);
        }
        else{
            return null;
        }
    };
    this.Set = function (nIndex, pRow) {
        if((pRow != null)&&(pRow != undefined)&&(pRow.Valid())){
            rowCollection.Set(nIndex, pRow.getNpObject());
        }
        else{
            rowCollection.Set(nIndex, pRow);
        }
    };

    /**
    * ��ȡ�����ü��϶���ֵ
    */
   this.getItems = function () {
        var rColl = rowCollection.Items;
        if ((rColl != null)&&(rColl != undefined)&&(rColl.isvalid)) {
            return new Row(rColl);
        }
       else{
            return null;
        }
    };
    this.setItems = function (rColl) {
        if((rColl != null)&&(rColl != undefined)&&(rColl.Valid())) {
            rowCollection.Items = rColl.getNpObject();
        }
        else{
            rowCollection.Items = rColl
        }
    };

    /**
    * ���������������
    */
    this.Clear = function () {
        rowCollection.Clear();
    };

    /**
     * ɾ��������ָ������λ�ÿ�ʼ(����)��iCount������
     * @param {int} iIndex
     * @param {int} iCount
     */
    this.Remove = function(iIndex, iCount){
        rowCollection.Remove(iIndex, iCount);
    };

    /**
     * ɾ��ָ������λ�õĶ���
     * @param {int} iIndex
     */
    this.RemoveAt = function(iIndex){
        rowCollection.RemoveAt(iIndex);
    };

    /**
     * �ͷŶ����ڴ�
     */
    this.TrimToSize = function(){
        rowCollection.TrimToSize();
    };
}
/**
 * �й�����
 * @author   Jimmy
 * @date     2017-1-17
 */

export function RowFactory() {
    var rowFac = plugin.RowFactory;

    /**
     * �����ж���
     * @return {Row}
     */
    this.CreateRow = function (pFields) {
        var pRow = rowFac.CreateRow(pFields.getNpObject());
        if ((pRow != null)&&(pRow != undefined)&&(pRow.isvalid)) {
            return new Row(pRow);
        }
        else{
            return null;
        }
    };
}/**
 * �ռ��������
 * @author   Jimmy
 * @date     2016-6-21
 */

export function SpatialFilter(){
    var spatialFilter = plugin.NewSpatialFilter();

    QueryFilter.call(this, spatialFilter);

    this.Valid = function () {
        return spatialFilter.isvalid;
    };

    /**
     * ��ȡ�����ÿռ��е�����
     * @param {string} sGeometryField
     * @return {string}
     */
    this.getGeometryField = function(){
        return spatialFilter.GeometryField;
    };
    this.setGeometryField = function(sGeometryField){
        spatialFilter.GeometryField = sGeometryField;
    };

    /**
     * ��ȡ�����ÿռ���˶���
     * @param {Geometry} gGeometry
     * @return {Geometry}
     */
    this.getGeometry = function () {
        var type = spatialFilter.SpatialRelationType;
        var vGeometry = spatialFilter.Geometry;
        if (vGeometry != null) {
            switch (type) {
                case VRStarGeometryType.VRStarGeometryUnknow:
                    return new Geometry(vGeometry);
                case VRStarGeometryType.VRStarGeometryPoint:
                    return new Point(vGeometry);
                case VRStarGeometryType.VRStarGeometryModelPoint:
                    return new ModelPoint(vGeometry);
                case VRStarGeometryType.VRStarGeometryArc:
                    return new CirculeArc(vGeometry);
                case VRStarGeometryType.VRStarGeometryLine:
                    return new Line(vGeometry);
                case VRStarGeometryType.VRStarGeometryCircle:
                    return new Circle(vGeometry);
                case VRStarGeometryType.VRStarGeometryPolyline:
                    return new Polyline(vGeometry);
                case VRStarGeometryType.VRStarGeometryRing:
                    return new Ring(vGeometry);
                case VRStarGeometryType.VRStarGeometryPolygon:
                    return new Polygon(vGeometry);
                case VRStarGeometryType.VRStarGeometryTriMesh:
                    return new TriMesh(vGeometry);
                case VRStarGeometryType.VRStarGeometryCollection:
                    return new GeometryCollection(vGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPoint:
                    return new MultiPoint(vGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolyline:
                    return new MultiPolyline(vGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolygon:
                    return new MultiPolygon(vGeometry);
                case VRStarGeometryType.VRStarGeometryMultiTrimesh:
                    return new MultiTriMesh(vGeometry);
                case VRStarGeometryType.VRStarGeometryPointCloud:
                    return new PointCloud(vGeometry);
            }
        }       
    };
    this.setGeometry = function(gGeometry){
        if((gGeometry != null)&&(gGeometry != undefined)&&(gGeometry.Valid())){
            spatialFilter.Geometry = gGeometry.getNpObject();
        }
        else{
            spatialFilter.Geometry = gGeometry;
        }

    };

    /**
     * ��ȡ�ռ��ϵ����
     * @param {VRStarSpatialRelationType} enumSpatialRelationType
     * @return {VRStarSpatialRelationType}
     */
    this.getSpatialRelationType = function(){
        return spatialFilter.SpatialRelationType;
    };

    /**
     * ���ÿռ��ϵ����
     */
    this.setSpatialRelationType = function(enumSpatialRelationType){
        spatialFilter.SpatialRelationType = enumSpatialRelationType;
    };
}


/**
 * SQLУ����
 * pSQLCheckΪ����Ĳ���
 * @author   Jimmy
 * @date     2017-4-29.
 */

export function SQLCheck(pSQLCheck){

    /**
     * �Բ�ѯ�ֶν��кϷ��Լ��
     * @param {string}  sCheckSelectList
     * @return {string}
     */
    this.CheckSelectList = function(sCheckSelectList){
        return pSQLCheck.CheckSelectList(sCheckSelectList);
    };

    /**
     * ��������SQL�����кϷ��Լ��
     * @param {string}  sSQL
     * @return {string}
     */
    this.CheckSQLStatement = function(sSQL){
        return pSQLCheck.CheckSQLStatement(sSQL);
    };

    /**
     * ���������кϷ��Լ��
     * @param {string}  sWhereClause
     * @return {string}
     */
    this.CheckWhereClause = function(sWhereClause){
        return pSQLCheck.CheckWhereClause(sWhereClause);
    };
}
/**
 * �����Ͷ���ӿ�
 * typeΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-7-6
 */

export function SubType(pImportType) {
        var pSubType = null;
    if (pImportType == null) {
        pSubType = plugin.NewSubType();
    }
    else
        pSubType = pImportType;
	
    this.getNpObject = function () {
        return pSubType;
    };

    this.Valid = function () {
        return pSubType.isvalid;
    };

    /**
     * ��ȡԪ�ظ���
     * @return {long}
     */
    this.getFieldDomainCount = function(){
        return pSubType.FieldDomainCount;
    };

    /**
     * ��ȡָ���ֶ�ֵ
     * @return {FieldDomain} pFieldDomain
     */
    this.Get = function (nIndex) {
        var pFieldDomain = pSubType.Get(nIndex);
        if ((pFieldDomain != null)&&(pFieldDomain != undefined)&&(pFieldDomain.isvalid)) {
            return new FieldDomain(pFieldDomain);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ����������������
     * @param {string} sGeometryField
     * @return {string}
     */
    this.getName = function(){
        return pSubType.Name;
    };
    this.setName = function(sName){
        pSubType.Name = sName;
    };

    /**
     * ��ȡ����������������
     * @param {long} lCode
     * @return {long}
     */
    this.getCode = function(){
        return pSubType.Code;
    };
    this.setCode = function(lCode){
        pSubType.Code = lCode;
    };

    /**
     * ����
     * @param {FieldDomain} fieDom
     */
    this.Add = function (fieDom) {
        if((fieDom != null)&&(fieDom != undefined)&&(fieDom.Valid())){
            pSubType.Add(fieDom.getNpObject());
        }
        else{
            pSubType.Add(fieDom);
        }
    }
}
/**
 * ��ά�������ݣ���ʾ���п��Ա���ɶ�ά���������
 * tableResultΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-7-6
 */

export function Table(tableResult) {

    var table = tableResult;

    this.getNpObject = function () {
        return table;
    };

    this.Valid = function () {
        return table.isvalid;
    };

    /**
     * ��ȡ����
     * @return {string}
     */
    this.getTableName = function () {
        return table.TableName;
    };

    /**
     * ��ȡ������
     * @return {VRStarTableType}
     */
    this.getTableType = function () {
        return table.TableType;
    };

    /**
     * ��ȡ�����ֶμ���
     * @return {StringCollection} pStrings
     */
    this.getPrimaryKeys = function () {
        var pStrings = table.PrimaryKeys;
        if ((pStrings != null)&&(pStrings != undefined)&&(pStrings.isvalid)) {
            return new StringCollection(pStrings);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ������Դ����
     * @return {DataSource} pDataSource
     */
    this.getDataSource = function () {
        var pDataSource = table.DataSource;
        if ((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.isvalid)) {
            return new DataSource(pDataSource);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�м�¼
     * @param {long} lIndex
     * @return {Row} pDataSource
     */
    this.GetRow = function (lIndex) {
        var pRow = table.GetRow(lIndex);
        if ((pRow != null)&&(pRow != undefined)&&(pRow.isvalid)) {
            return new Row(pRow);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�������ݿ���������
     * @return {IndexCollection} pIndexs
     */
    this.GetDatabaseIndexs = function () {
        var pIndexs = table.GetDatabaseIndexs();
        if ((pIndexs != null)&&(pIndexs != undefined)&&(pIndexs.isvalid)) {
            return new IndexCollection(pIndexs);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�ֶμ���
     * @return {FieldCollection} pFields
     */
    this.getFields = function () {
        var pFields = table.Fields;
        if ((pFields != null)&&(pFields != undefined)&&(pFields.isvalid)) {
            return new FieldCollection(pFields);
        }
        else{
            return null;
        }
    };

    /**
     * ���������ֶ�
     * @param {Field} fie
     */
    this.AddField = function (fie) {
        if((fie != null)&&(fie != undefined)&&(fie.Valid())){
            table.AddField(fie.getNpObject());
        }
        else{
            table.AddField(fie);
        }
    };

    /**
     * ɾ���ֶ�
     * @param {string} strFieldName
     */
    this.DeleteField = function (strFieldName) {
        table.DeleteField(strFieldName);
    };

    /**
     * �޸������ֶ�
     * @param {Field} fie
     */
    this.ModifyField = function (fie) {
        if((fie != null)&&(fie != undefined)&&(fie.Valid())) {
            table.ModifyField(fie.getNpObject());
        }
        else{
            table.ModifyField(fie);
        }
    };

    /**
     * �������ݿ�����
     * @param {DatabaseIndex} pIDatabaseIndex
     */
    this.AddDatabaseIndex = function (pIDatabaseIndex) {
        if((pIDatabaseIndex != null)&&(pIDatabaseIndex != undefined)&&(pIDatabaseIndex.Valid())) {
            table.AddDatabaseIndex(pIDatabaseIndex.getNpObject());
        }
        else{
            table.AddDatabaseIndex(pIDatabaseIndex);
        }
    };

    /**
     * ɾ�����ݿ�����
     * @param {string} strDatabaseIndexName
     */
    this.DeleteDatabaseIndex = function (strDatabaseIndexName) {
        table.DeleteDatabaseIndex(strDatabaseIndexName);
    };

    /**
     * �ؽ����ݿ�����
     * @param {string} strDatabaseIndexName
     */
    this.RebuildDatabaseIndex = function (strDatabaseIndexName) {
        table.RebuildDatabaseIndex(strDatabaseIndexName);
    };

    /**
     * ������
     * @return {Row} rowRes
     */
    this.CreateRow = function () {
        var rowRes = table.CreateRow();
        if ((rowRes != null)&&(rowRes != undefined)&&(rowRes.isvalid)) {
            return new Row(rowRes);
        }
        else{
            return null;
        }
    };

    /**
     * ɾ����
     * @return {long} nRowIndex
     */
    this.DeleteRow = function (nRowIndex) {
        table.DeleteRow(nRowIndex);
    };

    /**
     * �����ѯ�����ļ�¼����
     * @param {QueryFilter} pQueryFilter
     * @return {long} nRowIndex
     */
    this.GetCount = function (pQueryFilter) {
        if((pQueryFilter != null)&&(pQueryFilter != undefined)&&(pQueryFilter.Valid())){
            return table.GetCount(pQueryFilter.getNpObject());
        }
        else{
            return table.GetCount(pQueryFilter);
        }
    };

    /**
     * ��ȡָ��ID�Ķ������
     * @param {Int32Collection} pArrayInt32ID
     * @param {boolean} bReuseRow
     * @return {FeatureCursor}
     */
    this.GetRows = function (pArrayInt32ID, bReuseRow) {
        var feaCur = null;
        if((pArrayInt32ID != null)&&(pArrayInt32ID != undefined)&&(pArrayInt32ID.Valid())){
            feaCur = table.GetRows(pArrayInt32ID.getNpObject(), bReuseRow);
        }
        else{
            feaCur = table.GetRows(pArrayInt32ID, bReuseRow);
        }
        if ((feaCur != null)&&(feaCur != undefined)&&(feaCur.isvalid)) {
            return new FeatureCursor(feaCur);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ���������ļ�¼
     * @param {QueryFilter} pQueryFilter
     * @param {boolean} bReuseRow
     * @return {FeatureCursor}
     */
    this.Search = function (pQueryFilter, bReuseRow) {
        var cur = null;
        if((pQueryFilter != null)&&(pQueryFilter != undefined)&&(pQueryFilter.Valid())){
            cur = table.Search(pQueryFilter.getNpObject(), bReuseRow);
        }
        else{
            cur = table.Search(pQueryFilter, bReuseRow);
        }
        if ((cur != null)&&(cur != undefined)&&(cur.isvalid)) {
            return new FeatureCursor(cur);
        }
        else{
            return null;
        }
    };

    /**
     * ͨ��ָ������ɾ������
     * @param {QueryFilter} pQueryFilter
     * @return {FeatureCursor}
     */
    this.Delete = function (pQueryFilter) {
        if((pQueryFilter != null)&&(pQueryFilter != undefined)&&(pQueryFilter.Valid())){
            return table.Delete(pQueryFilter.getNpObject());
        }
        else{
            return table.Delete(pQueryFilter);
        }
    };

    /**
     * �ڱ�ĩβ����һ�м�¼
     * @return {FeatureCursor}
     */
    this.Insert = function () {
        var cur = table.Insert();
        if ((cur != null)&&(cur != undefined)&&(cur.isvalid)) {
            return new FeatureCursor(cur);
        }
        else{
            return null;
        }
    };

    /**
     * �Ѵ�����м�¼��������ݿ�
     * @param {Row} pRow
     */
    this.Store = function (pRow) {
        if((pRow != null)&&(pRow != undefined)&&(pRow.Valid())){
            table.Store(pRow.getNpObject());
        }
        else{
            table.Store(pRow);
        }
    };

    /**
     * �������������ļ�¼
     * @param {QueryFilter} pQueryFilter
     * @return {FeatureCursor}
     */
    this.Update = function (pQueryFilter) {
        var cur = null;
        if((pQueryFilter != null)&&(pQueryFilter != undefined)&&(pQueryFilter.Valid())){
            cur = table.Update(pQueryFilter.getNpObject());
        }
        else{
            cur = table.Update(pQueryFilter);
        }
        if ((cur != null)&&(cur != undefined)&&(cur.isvalid)) {
            return new FeatureCursor(cur);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�������
     * @param {RowCollection} pRows
     * @param {boolean} bUpdateNotChangeValue
     */
    this.UpdateRows = function (pRows, bUpdateNotChangeValue) {
        if((pRows != null)&&(pRows != undefined)&&(pRows.Valid())){
            table.UpdateRows(pRows.getNpObject(), bUpdateNotChangeValue);
        }
        else{
            table.UpdateRows(pRows, bUpdateNotChangeValue);
        }
    };

    /**
     * ����������ݣ����������ṹ
     */
    this.Truncate = function () {
        table.Truncate();
    };
}
// /**
//  * ����Ҫ����
//  * pImportFieldDomainΪ����Ĳ���
//  * @author   Jimmy
//  * @date     2016-7-7
//  */

// export function DrillFeatureClass(DrillFeatureClass) {
//     FeatureClass.call(this, DrillFeatureClass);

//     this.getNpObject = function () {
//         return DrillFeatureClass;
//     };

//     this.Valid = function () {
//         return DrillFeatureClass.isvalid;
//     };

//     /**
//      * ��ȡ���Ҫ����
//      * @return {DrillFeatureClass}
//      */
//     this.getDrillHoleFeatureClass = function () {
//         var pVal = DrillFeatureClass.DrillHoleFeatureClass;
//         if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
//             return new DrillFeatureClass(pVal);
//         }
//         else{
//             return null;
//         }
//     };

//     /**
//      * ��ȡ��׼�ز������
//      * @return {DrillFeatureClass}
//      */
//     this.getStandardStrataObjectClass = function(){
//         var pVal = DrillFeatureClass.StandardStrataObjectClass;
//         if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
//             return new DrillFeatureClass(pVal);
//         }
//         else{
//             return null;
//         }
//     };
	
// 	/**
//      * ��ȡԭʼ�ز������
//      * @return {DrillFeatureClass}
//      */
//     this.get_OriginalStrataObjectClass = function(){
//         var pVal = DrillFeatureClass.OriginalStrataObjectClass;
//         if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
//             return new DrillFeatureClass(pVal);
//         }
//         else{
//             return null;
//         }
//     };

//     /**
//      * ��ȡ����ض��ж�Ӧ�ֶ�����
//      * @return {PropertyCollection}
//      */
//     this.getDrillHoleColumnReferences = function () {
//         var pColl = DrillFeatureClass.DrillHoleColumnReferences;
//         if ((pColl != null)&&(pColl != undefined)&&(pColl.isvalid)) {
//             return new PropertyCollection(pColl);
//         }
//         else{
//             return null;
//         }
//     };

//     /**
//      * ��ȡ��׼�ز��ض��ж�Ӧ�ֶ�����
//      * @return {PropertyCollection}
//      */
//     this.getStandardStrataColumnReferences = function(){
//         var pColl = DrillFeatureClass.StandardStrataColumnReferences;
//         if ((pColl != null)&&(pColl != undefined)&&(pColl.isvalid)) {
//             return new PropertyCollection(pColl);
//         }
//         else{
//             return null;
//         }
//     };
	
// 	 /**
//      * ��ȡԭʼ�ز��ض��ж�Ӧ�ֶ�����
//      * @return {PropertyCollection}
//      */
//     this.getOriginalStrataColumnReferences = function(){
//         var pColl = DrillFeatureClass.OriginalStrataColumnReferences;
//         if ((pColl != null)&&(pColl != undefined)&&(pColl.isvalid)) {
//             return new PropertyCollection(pColl);
//         }
//         else{
//             return null;
//         }
//     };
// }

/**
 * ���߹���
 * @author   Jimmy
 * @date     2016-7-6
 */

export function PipeFactory(){
    var pipeFactory = plugin.PipeFactory;

    /**
     * ��ȡ����ģ�Ϳ�������������ݼ�
     * pDataSource ��������Դ��
     * @return {FeatureDataSet} pDataSet
     */
    this.GetPipeBaseDataSet = function(pDataSource){
        var pVal = null;
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())){
            pVal = pipeFactory.GetPipeBaseDataSet(pDataSource.getNpObject());
        }
        else{
            pVal = pipeFactory.GetPipeBaseDataSet(pDataSource);
        }
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new FeatureDataSet(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * ��������Ҫ����
     * @param {string} sName
     * @param {string} sPipeType
     * @param {FeatureDataSet} pDataSet
     * @param {FeatureClass} pPipePointFeatureClass
     * @param {FeatureClass} pPipeLineFeatureClass
     * @param {PropertyCollection} pPipePointColumnReferences
     * @param {PropertyCollection} pPipeLineColumnReferences
     * @return {PipeFeatureClass}
     */
    this.CreatePipeFeatureClass = function(sName, sPipeType, pDataSet, pPipePointFeatureClass, pPipeLineFeatureClass, pPipePointColumnReferences, pPipeLineColumnReferences){
        var pDataSetMid = null;
        if((pDataSet != null)&&(pDataSet != undefined)&&(pDataSet.Valid())){
            pDataSetMid = pDataSet.getNpObject();
        }
        else{
            pDataSetMid = pDataSet;
        }
        var pPipePointFeatureClassMid = null;
        if((pPipePointFeatureClass != null)&&(pPipePointFeatureClass != undefined)&&(pPipePointFeatureClass.Valid())){
            pPipePointFeatureClassMid = pPipePointFeatureClass.getNpObject();
        }
        else{
            pPipePointFeatureClassMid = pPipePointFeatureClass;
        }
        var pPipeLineFeatureClassMid = null;
        if((pPipeLineFeatureClass != null)&&(pPipeLineFeatureClass != undefined)&&(pPipeLineFeatureClass.Valid())){
            pPipeLineFeatureClassMid = pPipeLineFeatureClass.getNpObject();
        }
        else{
            pPipeLineFeatureClassMid = pPipeLineFeatureClass;
        }
        var pPipePointColumnReferencesMid = null;
        if((pPipePointColumnReferences != null)&&(pPipePointColumnReferences != undefined)&&(pPipePointColumnReferences.Valid())){
            pPipePointColumnReferencesMid = pPipePointColumnReferences.getNpObject();
        }
        else{
            pPipePointColumnReferencesMid = pPipePointColumnReferences;
        }
        var pPipeLineColumnReferencesMid = null;
        if((pPipeLineColumnReferences != null)&&(pPipeLineColumnReferences != undefined)&&(pPipeLineColumnReferences.Valid())){
            pPipeLineColumnReferencesMid = pPipeLineColumnReferences.getNpObject();
        }
        else{
            pPipeLineColumnReferencesMid = pPipeLineColumnReferences;
        }
        var pipeFea = pipeFactory.CreatePipeFeatureClass(sName, sPipeType, pDataSetMid, pPipePointFeatureClassMid, pPipePointColumnReferencesMid, pPipeLineColumnReferencesMid);
        if ((pipeFea != null)&&(pipeFea != undefined)&&(pipeFea.isvalid)) {
            return new PipeFeatureClass(pipeFea);
        }
        else{
            return null;
        }
    };

    /**
     * ���ݹ��߱���͸��������ƻ�ȡ���ߵ���Ⱦ��ʽ
     * @return {PipePointRenderStyle}
     */
    this.GetPipePointRenderStyle = function(pDataSource, sPipeCode, sAttachmentName){
        var pprStyle = null;
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())){
            pprStyle = pipeFactory.GetPipePointRenderStyle(pDataSource.getNpObject(), sPipeCode, sAttachmentName);
        }
        else{
            pprStyle = pipeFactory.GetPipePointRenderStyle(pDataSource, sPipeCode, sAttachmentName);
        }
        if ((pprStyle != null)&&(pprStyle != undefined)&&(pprStyle.isvalid)) {
            return new PipePointRenderStyle(pprStyle);
        }
        else{
            return null;
        }
    };

    /**
     * ���ݹ��߱����ȡ���ߵ���Ⱦ��ʽ
     * @return {PipePointRenderStyleCollection}
     */
    this.GetPipePointRenderStyleByPipeCode = function(pDataSource, sPipeCode){
        var pprSbpc = null;
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())){
            pprSbpc = pipeFactory.GetPipePointRenderStyleByPipeCode(pDataSource.getNpObject(), sPipeCode);
        }
        else{
            pprSbpc = pipeFactory.GetPipePointRenderStyleByPipeCode(pDataSource, sPipeCode);
        }
        if ((pprSbpc != null)&&(pprSbpc != undefined)&&(pprSbpc.isvalid)) {
            return new PipePointRenderStyleCollection(pprSbpc);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ���й��ߵ���Ⱦ��ʽ
     * @return {PipePointRenderStyleCollection}
     */
    this.GetAllPipePointRenderStyles = function(pDataSource){
        var pprSbpc = null;
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())){
            pprSbpc = pipeFactory.GetAllPipePointRenderStyles(pDataSource.getNpObject());
        }
        else{
            pprSbpc = pipeFactory.GetAllPipePointRenderStyles(pDataSource);
        }
        if (pprSbpc != null) {
            return new PipePointRenderStyleCollection(pprSbpc);
        }
        else{
            return null;
        }
    };

    /**
     * ���ӹ��ߵ���Ⱦ��ʽ
     * @param {DataSource} pDataSource
     * @param {PipeLineRenderStyle} pPipePointRenderStyle
     * @return {boolean}
     */
    this.AddPipePointRenderStyle = function(pDataSource, pPipePointRenderStyle){
        var pDataSourceUse = null;
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())){
            pDataSourceUse = pDataSource.getNpObject();
        }
        else{
            pDataSourceUse = pDataSource;
        }
        var pPipePointRenderStyleUse = null;
        if((pPipePointRenderStyle != null)&&(pPipePointRenderStyle != undefined)&&(pPipePointRenderStyle.Valid())){
            pPipePointRenderStyleUse = pPipePointRenderStyle.getNpObject();
        }
        else{
            pPipePointRenderStyleUse = pPipePointRenderStyle;
        }
        return pipeFactory.AddPipePointRenderStyle(pDataSourceUse, pPipePointRenderStyleUse);

    };

    /**
     * ���ݹ��߱���͸���������ɾ�����ߵ���Ⱦ��ʽ
     * @param {DataSource} pDataSource
     * @param {string} sPipeCode
     * @param {string} sAttachmentName
     * @return {boolean}
     */
    this.DeletePipePointRenderStyle = function(pDataSource, sPipeCode, sAttachmentName){
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())){
            return pipeFactory.DeletePipePointRenderStyle(pDataSource.getNpObject(), sPipeCode, sAttachmentName);
        }
        else{
            return pipeFactory.DeletePipePointRenderStyle(pDataSource, sPipeCode, sAttachmentName);
        }
    };

    /**
     * ���ݹ��߱���ɾ�����ߵ���Ⱦ��ʽ
     * @param {DataSource} pDataSource
     * @param {string} sPipeCode
     * @return {long}
     */
    this.DeletePipePointRenderStyleByPipeCode = function(pDataSource, sPipeCode){
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())){
            return pipeFactory.DeletePipePointRenderStyleByPipeCode(pDataSource.getNpObject(), sPipeCode);
        }
        else{
            return pipeFactory.DeletePipePointRenderStyleByPipeCode(pDataSource, sPipeCode);
        }
    };

    /**
     * ɾ��ȫ�����ߵ���Ⱦ��ʽ
     * @param {DataSource} pDataSource
     * @return {long}
     */
    this.DeleteAllPipePointRenderStyles = function(pDataSource){
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())){
            return pipeFactory.DeleteAllPipePointRenderStyles(pDataSource.getNpObject());
        }
        else{
            return pipeFactory.DeleteAllPipePointRenderStyles(pDataSource);
        }
    };

    /**
     * ���¹��ߵ���Ⱦ��ʽ
     * @param {DataSource} pDataSource
     * @param {PipePointRenderStyle} pPipePointRenderStyle
     * @return {boolean}
     */
    this.UpdatePipePointRenderStyle = function(pDataSource, pPipePointRenderStyle){
        var pDataSourceUse = null;
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())){
            pDataSourceUse = pDataSource.getNpObject();
        }
        else{
            pDataSourceUse = pDataSource;
        }
        var pPipePointRenderStyleUse = null;
        if((pPipePointRenderStyle != null)&&(pPipePointRenderStyle != undefined)&&(pPipePointRenderStyle.Valid())){
            pPipePointRenderStyleUse = pPipePointRenderStyle.getNpObject();
        }
        else{
            pPipePointRenderStyleUse = pPipePointRenderStyle;
        }
        return pipeFactory.UpdatePipePointRenderStyle(pDataSourceUse, pPipePointRenderStyleUse);
    };

    /**
     * ��ȡ���й�������Ⱦ��ʽ
     * @param {DataSource} pDataSource
     * @param {string} sPipeCode
     * @return {PipeLineRenderStyle}
     */
    this.GetPipeLineRenderStyle = function(pDataSource, sPipeCode){
        var plrStyle = null;
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())){
            plrStyle = pipeFactory.GetPipeLineRenderStyle(pDataSource.getNpObject(), sPipeCode);
        }
        else{
            plrStyle = pipeFactory.GetPipeLineRenderStyle(pDataSource, sPipeCode);
        }
        if ((plrStyle != null)&&(plrStyle != undefined)&&(plrStyle.isvalid)) {
            return new PipeLineRenderStyle(plrStyle);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ���й�������Ⱦ��ʽ
     * @param {DataSource} pDataSource
     * @return {PipeLineRenderStyleCollection}
     */
    this.GetAllPipeLineRenderStyles = function (pDataSource) {
        var plrSc = null;
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())){
            plrSc = pipeFactory.GetAllPipeLineRenderStyles(pDataSource.getNpObject());
        }
        else{
            plrSc = pipeFactory.GetAllPipeLineRenderStyles(pDataSource);
        }
        if ((plrSc != null)&&(plrSc != undefined)&&(plrSc.isvalid)) {
            return new PipeLineRenderStyleCollection(plrSc);
        }
        else{
            return null;
        }
    };

    /**
     * ���ӹ�������Ⱦ��ʽ
     * @param {DataSource} pDataSource
     * @param {PipeLineRenderStyle} pPipeLineRenderStyle
     * @return {boolean}
     */
    this.AddPipeLineRenderStyle = function(pDataSource, pPipeLineRenderStyle){
        var pDataSourceUse = null;
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())){
            pDataSourceUse = pDataSource.getNpObject();
        }
        else{
            pDataSourceUse = pDataSource;
        }
        var pPipeLineRenderStyleUse = null;
        if((pPipeLineRenderStyle != null)&&(pPipeLineRenderStyle != undefined)&&(pPipeLineRenderStyle.Valid())){
            pPipeLineRenderStyleUse = pPipeLineRenderStyle.getNpObject();
        }
        else{
            pPipeLineRenderStyleUse = pPipeLineRenderStyle;
        }
        return pipeFactory.AddPipeLineRenderStyle(pDataSourceUse, pPipeLineRenderStyleUse);
    };

    /**
     * ���ݹ��߱���ɾ����������Ⱦ��ʽ
     * @param {DataSource} pDataSource
     * @param {string} sPipeCode
     * @return {boolean}
     */
    this.DeletePipeLineRenderStyle = function(pDataSource, sPipeCode){
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())){
            return pipeFactory.DeletePipeLineRenderStyle(pDataSource.getNpObject(), sPipeCode);
        }
        else{
            return pipeFactory.DeletePipeLineRenderStyle(pDataSource, sPipeCode);
        }
    };

    /**
     * ɾ��ȫ����������Ⱦ��ʽ
     * @param {DataSource} pDataSource
     * @return {long}
     */
    this.DeleteAllPipeLineRenderStyles = function(pDataSource){
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())){
            return pipeFactory.DeleteAllPipeLineRenderStyles(pDataSource.getNpObject());
        }
        else{
            return pipeFactory.DeleteAllPipeLineRenderStyles(pDataSource);
        }
    };

    /**
     * ���¹�������Ⱦ��ʽ
     * @param {DataSource} pDataSource
     * @param {PipeLineRenderStyle} pPipeLineRenderStyle
     * @return {boolean}
     */
    this.UpdatePipeLineRenderStyle = function(pDataSource, pPipeLineRenderStyle){
        var pDataSourceUse = null;
        if((pDataSource != null)&&(pDataSource != undefined)&&(pDataSource.Valid())){
            pDataSourceUse = pDataSource.getNpObject();
        }
        else{
            pDataSourceUse = pDataSource;
        }
        var pPipeLineRenderStyleUse = null;
        if((pPipeLineRenderStyle != null)&&(pPipeLineRenderStyle != undefined)&&(pPipeLineRenderStyle.Valid())){
            pPipeLineRenderStyleUse = pPipeLineRenderStyle.getNpObject();
        }
        else{
            pPipeLineRenderStyleUse = pPipeLineRenderStyle;
        }
        return pipeFactory.UpdatePipeLineRenderStyle(pDataSourceUse, pPipeLineRenderStyleUse);
    };

    /**
     * ��ȡ���ߵ���ײ�߳��ֶ�
     * @return {CommonField}
     */
    this.GetPipePointPZFCField = function () {
        var pValPZGCField = pipeFactory.GetPipePointPZFCField();
        if ((pValPZGCField != null)&&(pValPZGCField != undefined)&&(pValPZGCField.isvalid)) {
            return new CommonField(pValPZGCField);
        }
        else{
            return null;
        }
    };

    /**
     * ������ߵ������ģ����ײ��ĸ߳�ֵ
     * @param {FeatureClass} pGroundFeatureClass
     * @param {double} dPipePointX
     * @param {double} dPipePointY
     * @return {double}
     */
    this.CalculatePipePointPZGCValue = function(pGroundFeatureClass, dPipePointX, dPipePointY){
        if((pGroundFeatureClass != null)&&(pGroundFeatureClass != undefined)&&(pGroundFeatureClass.Valid())) {
            return pipeFactory.CalculatePipePointPZGCValue(pGroundFeatureClass.getNpObject(), dPipePointX, dPipePointY);
        }
        else{
            return pipeFactory.CalculatePipePointPZGCValue(pGroundFeatureClass, dPipePointX, dPipePointY);
        }
    };

    /**
     * ɾ������Ҫ����
     * @param {string} sName
     * @param {FeatureDataSet} pDataSet
     * @return {boolean}
     */
    this.DeletePipeFeatureClass = function(sName, pDataSet){
        if((pDataSet != null)&&(pDataSet != undefined)&&(pDataSet.Valid())){
            return DeletePipeFeatureClass(sName, pDataSet.getNpObject());
        }
        else{
            return DeletePipeFeatureClass(sName, pDataSet);
        }
    };

    /**
     * ʹ��DEM������ߵ���ײ�߳�ǰԤ����
     * @param {DataSource} pDEMDataSource
     * @param {SpatialCoordinateReferenceSystem} pPipePointSpatialReference
     */
    this.BeforeCalculatePZGCValueByDEM = function(pDEMDataSource, pPipePointSpatialReference){
        var pDEMDataSourceUse = null;
        if((pDEMDataSource != null)&&(pDEMDataSource != undefined)&&(pDEMDataSource.Valid())){
            pDEMDataSourceUse = pDEMDataSource.getNpObject();
        }
        else{
            pDEMDataSourceUse = pDEMDataSource;
        }
        var pPipePointSpatialReferenceUse = null;
        if((pPipePointSpatialReference != null)&&(pPipePointSpatialReference != undefined)&&(pPipePointSpatialReference.Valid())){
            pPipePointSpatialReferenceUse = pPipePointSpatialReference.getNpObject();
        }
        else{
            pPipePointSpatialReferenceUse = pPipePointSpatialReference;
        }
        pipeFactory.BeforeCalculatePZGCValueByDEM(pDEMDataSourceUse, pPipePointSpatialReferenceUse);
    };

    /**
     * ������ߵ���DEM��ײ��ĸ߳�ֵ
     * @param {double} dPipePointX
     * @param {double} dPipePointY
     * @return {double}
     */
    this.CalculatePipePointPZGCValueByDEM = function(dPipePointX, dPipePointY){
        return pipeFactory.CalculatePipePointPZGCValueByDEM(dPipePointX, dPipePointY);
    };
}

/**
 * ����Ҫ����
 * pImportFieldDomainΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-7-7
 */

export function PipeFeatureClass(pipeFeatureClass) {
    FeatureClass.call(this, pipeFeatureClass);

    this.getNpObject = function () {
        return pipeFeatureClass;
    };

    this.Valid = function () {
        return pipeFeatureClass.isvalid;
    };

    /**
     * ��ȡ���ߵ�Ҫ����
     * @return {PipeFeatureClass}
     */
    this.getPipePointFeatureClass = function () {
        var pVal = pipeFeatureClass.PipePointFeatureClass;
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new PipeFeatureClass(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ������Ҫ����
     * @return {PipeFeatureClass}
     */
    this.getPipeLineFeatureClass = function(){
        var pVal = pipeFeatureClass.PipeLineFeatureClass;
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new PipeFeatureClass(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�����ù�������
     */
    this.getPipeTypeCode = function () {
        return pipeFeatureClass.PipeTypeCode;
    };

    this.setPipeTypeCode = function (sVal) {
        pipeFeatureClass.PipeTypeCode = sVal;
    };

    /**
     * ��ȡ���ߵ��ض��ж�Ӧ�ֶ�����
     * @return {PropertyCollection}
     */
    this.getPipePointColumnReferences = function () {
        var pColl = pipeFeatureClass.PipePointColumnReferences;
        if ((pColl != null)&&(pColl != undefined)&&(pColl.isvalid)) {
            return new PropertyCollection(pColl);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ���ߵ��ض��ж�Ӧ�ֶ�����
     * @return {PropertyCollection}
     */
    this.getPipeLineColumnReferences = function(){
        var pColl = pipeFeatureClass.PipeLineColumnReferences;
        if ((pColl != null)&&(pColl != undefined)&&(pColl.isvalid)) {
            return new PropertyCollection(pColl);
        }
        else{
            return null;
        }
    }
}

/**
 * Created by Administrator on 2016-7-7.
 */

export function PipeLineRenderStyle(pipeLineRenderStyle){

    this.getNpObject = function () {
        return pipeLineRenderStyle;
    };

    this.Valid = function () {
        return pipeLineRenderStyle.isvalid;
    };

    /**
     * ��ȡ�����ù��߱���
     */
    this.getPipeCode = function(){
        return pipeLineRenderStyle.PipeCode;
    };
    this.setPipeCode = function(sVal){
        pipeLineRenderStyle.PipeCode = sVal;
    };

    /**
     * ��ȡ����������Ⱦ��ʽ
     */
    this.getRenderStyle = function(){
        return pipeLineRenderStyle.RenderStyle;
    };
    this.setRenderStyle = function(sVal){
        pipeLineRenderStyle.RenderStyle = sVal;
    };

    /**
     * ��ȡ�����ùܱں��
     */
    this.getWallThickness = function(){
        return pipeLineRenderStyle.WallThickness;
    };
    this.setWallThickness = function (dVal) {
        pipeLineRenderStyle.WallThickness = dVal;
    };

    /**
     * ��ȡ�������ڱ���ɫ
     */
    this.getInnerColor = function(){
        return pipeLineRenderStyle.InnerColor;
    };
    this.setInnerColor = function(sVal){
        pipeLineRenderStyle.InnerColor = sVal;
    };

    /**
     * ��ȡ�����������ɫ
     */
    this.getOuterColor = function(){
        return pipeLineRenderStyle.OuterColor;
    };
    this.setOuterColor = function(sVal){
        pipeLineRenderStyle.OuterColor = sVal;
    };

    /**
     * ��ȡ�������ڱ���������
     */
    this.getInnerImageName = function(){
        return pipeLineRenderStyle.InnerImageName;
    };
    this.setInnerImageName = function(sVal){
        pipeLineRenderStyle.InnerImageName = sVal;
    };

    /**
     * ��ȡ�����������������
     */
    this.getOuterImageName = function(){
        return pipeLineRenderStyle.OuterImageName;
    };
    this.setOuterImageName = function(sVal){
        pipeLineRenderStyle.OuterImageName = sVal;
    };
}


/**
 * Created by Administrator on 2016-7-8.
 */

export function PipeLineRenderStyleCollection(pipeLineRenderStyleCollection) {

    Collection.call(this, pipeLineRenderStyleCollection);

    /**
     * ��ȡ�����ù�������Ⱦ��ʽ�������ָ��Ҫ��
     * @return {PipeLineRenderStyle}
     */
    this.Get = function (nIndex) {
        var plRenSty = pipeLineRenderStyleCollection.Get(nIndex);
        if ((plRenSty != null)&&(plRenSty != undefined)&&(plRenSty.isvalid)) {
            return new PipeLineRenderStyle(plRenSty);
        }
        else{
            return null;
        }
    };
    this.Set = function (nIndex, plRenSty) {
        if((plRenSty != null)&&(plRenSty != undefined)&&(plRenSty.Valid())){
            pipeLineRenderStyleCollection.Set(nIndex, plRenSty.getNpObject());
        }
        else{
            pipeLineRenderStyleCollection.Set(nIndex, plRenSty);
        }
    };

    /**
     * ��ȡ����������Ⱦ��ʽ����
     */
    this.getItems = function(){
        var pPipeLineRenderStyle = pipeLineRenderStyleCollection.Items;
        if ((pPipeLineRenderStyle != null)&&(pPipeLineRenderStyle != undefined)&&(pPipeLineRenderStyle.isvalid)) {
            return new PipeLineRenderStyle(pPipeLineRenderStyle);
        }
        else{
            return null;
        }
    };
    this.setItems = function(newPipeLineRenderStyle){
        if((newPipeLineRenderStyle != null)&&(newPipeLineRenderStyle != undefined)&&(newPipeLineRenderStyle.Valid())) {
            pipeLineRenderStyleCollection.Items = newPipeLineRenderStyle.getNpObject();
        }
        else{
            pipeLineRenderStyleCollection.Items = newPipeLineRenderStyle;
        }
    };

    /**
     * ��������Ⱦ��ʽ
     */
    this.Add = function (plRenSty) {
        if((plRenSty != null)&&(plRenSty != undefined)&&(plRenSty.Valid())){
            pipeLineRenderStyleCollection.Add(plRenSty.getNpObject());
        }
        else{
            pipeLineRenderStyleCollection.Add(plRenSty);
        }
    };

    /**
     * ��ָ��λ�ô��򼯺���������
     */
    this.Insert = function (nIndex, plRenSty) {
        if((plRenSty != null)&&(plRenSty != undefined)&&(plRenSty.Valid())){
            pipeLineRenderStyleCollection.Insert(nIndex, plRenSty.getNpObject());
        }
        else{
            pipeLineRenderStyleCollection.Insert(nIndex, plRenSty);
        }
    };

}
/**
 * Created by Administrator on 2016-7-8.
 */

export function PipePointRenderStyle(pipePointRenderStyle) {

    this.getNpObject = function () {
        return pipePointRenderStyle;
    };

    this.Valid = function () {
        return pipePointRenderStyle.isvalid;
    };

    /**
     * ��ȡ�����ù��߱���
     */
    this.getPipeCode = function(){
        return pipePointRenderStyle.PipeCode;
    };
    this.setPipeCode = function(sVal){
        pipePointRenderStyle.PipeCode = sVal;
    };

    /**
     * ��ȡ�����ø���������
     */
    this.getAttachmentName = function(){
        return pipePointRenderStyle.AttachmentName;
    };
    this.setAttachmentName = function(sVal){
        pipePointRenderStyle.AttachmentName = sVal;
    };

    /**
     * ��ȡ������ģ������
     */
    this.getModelName = function(){
        return pipePointRenderStyle.ModelName;
    };
    this.setModelName = function(sVal){
        pipePointRenderStyle.ModelName = sVal;
    };

    /**
     * ��ȡ�������Ƿ����ܾ�
     */
    this.getIsFollowDiameter = function(){
        return pipePointRenderStyle.IsFollowDiameter;
    };
    this.setIsFollowDiameter = function(bVal){
        pipePointRenderStyle.IsFollowDiameter = bVal;
    };

    /**
     * ��ȡ�������Ƿ�����
     */
    this.getIsStickToGround = function(){
        return pipePointRenderStyle.IsStickToGround;
    };
    this.setIsStickToGround = function(bVal){
        pipePointRenderStyle.IsStickToGround = bVal;
    };

    /**
     * ��ȡ�������Ƿ������߷���
     */
    this.getIsFollowDirection = function(){
        return pipePointRenderStyle.IsFollowDirection;
    };
    this.setIsFollowDirection = function(bVal){
        pipePointRenderStyle.IsFollowDirection = bVal;
    };

    /**
     * ��ȡ�������Ƿ���Z�᷽������
     */
    this.getIsScaleZ = function(){
        return pipePointRenderStyle.IsScaleZ;
    };
    this.setIsScaleZ = function(bVal){
        pipePointRenderStyle.IsScaleZ = bVal;
    };

    /**
     * ��ȡ�������Ƿ��Զ��ں����߹���
     */
    this.getIsMergeLine = function(){
        return pipePointRenderStyle.IsMergeLine;
    };
    this.setIsMergeLine = function(bVal){
        pipePointRenderStyle.IsMergeLine = bVal;
    };

    /**
     * ��ȡ�������Ƿ���Z����ת
     */
    this.getIsRotateZ = function(){
        return pipePointRenderStyle.IsRotateZ;
    };
    this.setIsRotateZ = function(bVal){
        pipePointRenderStyle.IsRotateZ = bVal;
    };
}/**
 * Created by Administrator on 2016-7-8.
 */

export function PipePointRenderStyleCollection(pipePointRenderStyleCollection) {
    Collection.call(this, pipePointRenderStyleCollection);

    /**
     * ��ȡ�����ù��ߵ���Ⱦ��ʽ�������ָ��Ҫ��
     * @return {PipePointRenderStyle}
     */
    this.Get = function (nIndex) {
        var ppRenSty = pipePointRenderStyleCollection.Get(nIndex);
        if ((ppRenSty != null)&&(ppRenSty != undefined)&&(ppRenSty.isvalid)) {
            return new PipePointRenderStyle(ppRenSty);
        }
        else{
            return null;
        }
    };
    this.Set = function (nIndex, ppRenSty) {
        if((ppRenSty != null)&&(ppRenSty != undefined)&&(ppRenSty.Valid())){
            pipePointRenderStyleCollection.Set(nIndex, ppRenSty.getNpObject());
        }
        else{
            pipePointRenderStyleCollection.Set(nIndex, ppRenSty);
        }
    };

    /**
     * ��ȡ�����ü��϶���
     */
    this.getItems = function(){
        var pPipePointRenderStyle = pipePointRenderStyleCollection.Items;
        if ((pPipePointRenderStyle != null)&&(pPipePointRenderStyle != undefined)&&(pPipePointRenderStyle.isvalid)) {
            return new PipePointRenderStyle(pPipePointRenderStyle);
        }
        else{
            return null;
        }
    };
    this.setItems = function(newPipePointRenderStyle){
        if((newPipePointRenderStyle != null)&&(newPipePointRenderStyle != undefined)&&(newPipePointRenderStyle.Valid())) {
            pipePointRenderStyleCollection.SetItems = newPipePointRenderStyle.getNpObject();
        }
        else{
            pipePointRenderStyleCollection.SetItems = newPipePointRenderStyle;
        }
    };

    /**
     * ���ӹ��ߵ���Ⱦ��ʽ
     */
    this.Add = function (ppRenSty) {
        if((ppRenSty != null)&&(ppRenSty != undefined)&&(ppRenSty.Valid())){
            pipePointRenderStyleCollection.Add(ppRenSty.getNpObject());
        }
        else{
            pipePointRenderStyleCollection.Add(ppRenSty);
        }
    };

    /**
     * ��ָ��λ�ô��򼯺���������
     */
    this.Insert = function (nIndex, ppRenSty) {
        if((ppRenSty != null)&&(ppRenSty != undefined)&&(ppRenSty.Valid())){
            pipePointRenderStyleCollection.Insert(nIndex, ppRenSty.getNpObject());
        }
        else{
            pipePointRenderStyleCollection.Insert(nIndex, ppRenSty);
        }
    };
}

/**
 * �ز�����ӿ�
 * @author   Jimmy
 * @date     2016-7-6
 */

export function StrataManager(){
    var strataManager = plugin.StrataManager;

    /**
     * ���ݷ�Χ���ɵز�ģ��
     * @param {DrillFeatureClass} pFeatureClass �ز�Ҫ����
     * @param {Polygon} pPoly ���ɵز�ģ�͵ķ�Χ
     * @param {int} iStrataType �ز����ͣ�0����׼�ز㣻1��ԭʼ�ز�
     * @param {int} iShowType �ز�ģ��չʾ���ͣ�0��������1����ɫ
     * @return {StrataManagerResult} �����ĵز�ģ�ͼ��ϡ����õ��������ϡ�ModelPoint����
     */
    this.GenerateDrillStrataModels = function(pFeatureClass, pPoly, iStrataType, iShowType){
	    var pFeatureClassUse = null;
        if((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())){
            pFeatureClassUse = pFeatureClass.getNpObject();
        }
        else{
            pFeatureClassUse = pFeatureClass;
        }
        var pPolyUse = null;
        if((pPoly != null)&&(pPoly != undefined)&&(pPoly.Valid())){
            pPolyUse = pPoly.getNpObject();
        }
        else{
            pPolyUse = pPoly;
        }
        var operateRes = strataManager.GenerateDrillStrataModels(pFeatureClassUse, pPolyUse, iStrataType, iShowType);
		
		if((operateRes != null)&&(operateRes != undefined)) {
		    var pModelPropertysMid = operateRes.ModelPropertyArray;
            var pModelPropertyRes = null;
            if ((pModelPropertysMid != null) && (pModelPropertysMid != undefined) && (pModelPropertysMid.isvalid)) {
                pModelPropertyRes = new PropertyCollection(pModelPropertysMid);
            }
            else {
                return null;
            }
            var pImagePropertyMid = operateRes.ImagePropertyArray;
            var pImagePropertyRes = null;
            if ((pImagePropertyMid != null) && (pImagePropertyMid != undefined) && (pImagePropertyMid.isvalid)) {
                pImagePropertyRes = new PropertyCollection(pImagePropertyMid);
            }
            else {
                return null;
            }
			
			var pModelPointPropertyMid = operateRes.ModelPointPropertyArray;
            var pModelPointPropertyRes = null;
            if ((pModelPointPropertyMid != null) && (pModelPointPropertyMid != undefined) && (pModelPointPropertyMid.isvalid)) {
                pModelPointPropertyRes = new PropertyCollection(pModelPointPropertyMid);
            }
            else {
                return null;
            }
			
			 return new GenerateDrillStrataModelsParameter(pModelPropertyRes,pImagePropertyRes,pModelPointPropertyRes);
		}
		else {
            return null
        }
    };
	
	function GenerateDrillStrataModelsParameter(pModelPropertyRes,pImagePropertyRes,pModelPointPropertyRes){
        this.ModelPropertyArray = pModelPropertyRes;
        this.ImagePropertyArray = pImagePropertyRes;
        this.ModelPointPropertyArray = pModelPointPropertyRes;
    }
}

/**
 * �������ö��
 */

/*
*	enum VRStarDataEngine
*/

/*! ������*/
if (typeof VRStarDomainType == "undefined") {
    var VRStarDomainType = {};
    VRStarDomainType.VRStarDomainUnknow = 0; /* !< Unknow Domain.*/
    VRStarDomainType.VRStarDomainRange = 1; /* !< Range Domain */
    VRStarDomainType.VRStarDomainCodedValue = 2; /* !< Coded Value Domain */
}

/*! �ֶ�����*/
if (typeof VRStarFieldType == "undefined") {
    var VRStarFieldType = {};
    VRStarFieldType.VRStarFieldUnknow = 0; /* !< Unknown.*/
    VRStarFieldType.VRStarFieldInt16 = 1; /* !< 2byte  */
    VRStarFieldType.VRStarFieldInt32 = 2; /* !< 4byte  */
    VRStarFieldType.VRStarFieldInt64 = 3; /* !< 8byte */
    VRStarFieldType.VRStarFieldFloat = 4; /* !< 4byte */
    VRStarFieldType.VRStarFieldDouble = 5; /* !< 8byte */
    VRStarFieldType.VRStarFieldString = 6; /* !< String. */
    VRStarFieldType.VRStarFieldDate = 7; /* !< Date. */
    VRStarFieldType.VRStarFieldBlob = 8; /* !< Blob. */
    VRStarFieldType.VRStarFieldID = 9; /* !< FID. */
    VRStarFieldType.VRStarFieldUUID = 10; /* !< UUID. */
    VRStarFieldType.VRStarFieldGeometry = 11; /* !< <Geometry */
}

/*! ������*/
if (typeof VRStarGeometryColumnType == "undefined") {
    var VRStarGeometryColumnType = {};
    VRStarGeometryColumnType.VRStarGeometryColumnUnknow = 0; ///Unknow. 
    VRStarGeometryColumnType.VRStarGeometryColumnPoint = 1; ///�㡣����Ϊ�����͵Ŀռ���ֻ�ܴ洢VRStarGeometryPoint����Geometry�� 
    VRStarGeometryColumnType.VRStarGeometryColumnModelPoint = 2; ///��άģ�͡�����Ϊ�����͵Ŀռ���ֻ�ܴ洢VRStarGeometryModelPoint����Geometry�� 
    VRStarGeometryColumnType.VRStarGeometryColumnMultiPoint = 3; ///��㡣����Ϊ�����͵Ŀռ���ֻ�ܴ洢VRStarGeometryMultiPoint����Geometry�� 
    VRStarGeometryColumnType.VRStarGeometryColumnPolyline = 4; ///���顣����Ϊ�����͵Ŀռ��п��Դ洢VRStarGeometryLine��VRStarGeometryPolyline��VRStarGeometryMultiPolyline����Geometry�� 
    VRStarGeometryColumnType.VRStarGeometryColumnPolygon = 5; ///������顣����Ϊ�����͵Ŀռ��п��Դ洢VRStarGeometryPolygon��VRStarGeometryMultiPolygon����Geometry��
    VRStarGeometryColumnType.VRStarGeometryColumnTriMesh = 6; ///�����������顣����Ϊ�����͵Ŀռ��п��Դ洢VRStarGeometryTriMesh��VRStarGeometryMultiTrimesh��VRStarGeometryClosedTriMesh����Geometry�� 
    VRStarGeometryColumnType.VRStarGeometryColumnPointCloud = 7; ///���ơ�����Ϊ�����͵Ŀռ���ֻ�ܴ洢VRStarGeometryPointCloud����Geometry�� 
    VRStarGeometryColumnType.VRStarGeometryColumnCollection = 8; ///���μ��ϡ�����Ϊ�����͵Ŀռ���ֻ�ܴ洢VRStarGeometryCollection����Geometry�� 
	VRStarGeometryColumnType.VRStarGeometryColumnStreetPoint = 9; ///�־��㡣����Ϊ�����͵Ŀռ���ֻ�ܴ洢VRStarGeometryColumnStreetPoint����Geometry�� 
	VRStarGeometryColumnType.VRStarGeometryColumnWell = 10; ///���ҡ�����Ϊ�����͵Ŀռ���ֻ�ܴ洢VRStarGeometryColumnWell����Geometry�� 
}

/*! �ռ��ϵν�� */
if (typeof VRStarSpatialRel == "undefined") {
    var VRStarSpatialRel = {};
    VRStarSpatialRel.VRStarSpatialRelUnknow = 0;
    VRStarSpatialRel.VRStarSpatialRelEnvelope = 1; //ͨ��Envelope�����ཻ��ѯ
    VRStarSpatialRel.VRStarSpatialRelEquals = 2; //���
    VRStarSpatialRel.VRStarSpatialRelIntersects = 3; //������
    VRStarSpatialRel.VRStarSpatialRelTouches = 4; //����
    VRStarSpatialRel.VRStarSpatialRelCrosses = 5; //�ཻ
    VRStarSpatialRel.VRStarSpatialRelWithin = 6; //������
    VRStarSpatialRel.VRStarSpatialRelationContains = 7; //����
    VRStarSpatialRel.VRStarSpatialRelOverlaps = 8; //���ָ���
}

/*! ������ */
if (typeof VRStarTableType == "undefined") {
    var VRStarTableType = {};
    VRStarTableType.VRStarTableUnknow = 0; //Unknow. 
    VRStarTableType.VRStarTableCommonClass = 1; //��ͨ���ݱ� 
    VRStarTableType.VRStarTableObjectClass = 2; //�����  
    VRStarTableType.VRStarTableFeatureClass = 3; //�ռ�Ҫ�ر� 
    VRStarTableType.VRStarTablePipeFeatureClass = 4; //����Ҫ�ر� 
    VRStarTableType.VRStarTableDwgFeatureClass = 5; //dwgҪ���� 
    VRStarTableType.VRStarTableDrillFeatureClass = 6; //����Ҫ����   	
}

/*! �������� */
if (typeof VRStarIndexType == "undefined") {
    var VRStarIndexType = {};
    VRStarIndexType.VRStarIndexUnknow = 0; //Unknow. 
    VRStarIndexType.VRStarIndexRdbms = 1; //����Btree�����ݿ�����
    VRStarIndexType.VRStarIndexGrid = 2; //����Grid�Ŀռ�����
    VRStarIndexType.VRStarIndexRender = 3; //��Ⱦ����
}

/*! ����Դ�������� */
if (typeof VRStarConnectionType == "undefined") {
    var VRStarConnectionType = {};
    VRStarConnectionType.VRStarConnectionUnknow = 0;  ///< Unknown��newһ��ConnectionInfo���Ĭ��ֵ��
    VRStarConnectionType.VRStarConnectionMySql = 1;  ///< MySqlmysql 5.5������
    VRStarConnectionType.VRStarConnectionFireBird = 2;  ///< FireBird 2.1
    VRStarConnectionType.VRStarConnectionOracle = 3; ///< Oracle 9, Oracle 10, Oracle 11
    VRStarConnectionType.VRStarConnectionSQLServer = 4;  ///< Microsoft SQLServer Native Client 2005������
    VRStarConnectionType.VRStarConnectionSQLite = 5;  ///< sqlite v3 client
    VRStarConnectionType.VRStarConnectionShapeFile = 6; ///< Ersi Shape File
    VRStarConnectionType.VRStarConnectionArcGISServer10 = 7;  ///< Ersi ArcGIS Server 10
    VRStarConnectionType.VRStarConnectionArcSDE9 = 8;  ///< Arc SDE 9 C API
    VRStarConnectionType.VRStarConnectionREST = 9;  ///< Server 7 REST interface
    VRStarConnectionType.VRStarConnectionHttp = 10;  ///< Gsoap
    VRStarConnectionType.VRStarConnectionWFS = 11; ///< WFS
	VRStarConnectionType.VRStarConnectionBeyon=12;///< Beyon
	VRStarConnectionType.VRStarConnectionOgr =13;///< gdb
}

/*! ���ݴ洢λ�� */
if (typeof VRStarResultStoreLocationType == "undefined") {
    var VRStarResultStoreLocationType = {};
    VRStarResultStoreLocationType.VRStarResultStoreLocationUnknow = 0; //Unknown(�м����ݻ�����Ĭ��λ��)
    VRStarResultStoreLocationType.VRStarResultStoreLocationServer = 1; //�м����ݻ����ڷ����
    VRStarResultStoreLocationType.VRStarResultStoreLocationClient = 2; //�м����ݻ����ڿͻ���
}


/*! FDB�����������ݿ������*/
if (typeof VRStarDatabaseCapabilityType == "undefined") {
    var VRStarDatabaseCapabilityType = {};
    VRStarDatabaseCapabilityType.VRStarDatabaseCapabilityUnknow = 0; //Unknow
    VRStarDatabaseCapabilityType.VRStarDatabaseCapabilityReplicationCheckOutMaster = 1; //���߱༭��checkout ��������
    VRStarDatabaseCapabilityType.VRStarDatabaseCapabilityQueryResultIndexRange = 2; //��ѯʱ��������FromIndex �� ToIndex
    VRStarDatabaseCapabilityType.VRStarDatabaseCapabilityModifyField = 3; //�ܷ�༭�ֶ�
    VRStarDatabaseCapabilityType.VRStarDatabaseCapabilityAddField = 4; //�ܷ������ֶ�
    VRStarDatabaseCapabilityType.VRStarDatabaseCapabilityDeleteField = 5; //�ܷ�ɾ���ֶ�
}

/*! ������ */
if (typeof VRStarSchemaLockType == "undefined") {
    var VRStarSchemaLockType = {};
    VRStarSchemaLockType.VRStarSchemaLockUnknow = 0; //Unknow
    VRStarSchemaLockType.VRStarSchemaLockSharedReadonly = 1; //����ֻ����
    VRStarSchemaLockType.VRStarSchemaLockShared = 2; //������
    VRStarSchemaLockType.VRStarSchemaLockExclusive = 3; //��ռ��
}

/*! �ؽ���Ⱦ����ʱ�ķ�ʽ */
if (typeof VRStarRenderIndexRebuildType == "undefined") {
    var VRStarRenderIndexRebuildType = {};
    VRStarRenderIndexRebuildType.VRStarRenderIndexRebuildUnknow = 0; //Unknow
    VRStarRenderIndexRebuildType.VRStarRenderIndexRebuildFlagOnly = 1; //����������ǡ����ַ�ʽֻ�ǰ����ݿ���ı�־λ���࣬��δ�����������ݣ�ִ�������Ͽ�
    VRStarRenderIndexRebuildType.VRStarRenderIndexRebuildWithData = 2; //�����������ݡ����ַ�ʽ��ΪҪ�������м�¼��ִ�������ȽϷ�ʱ��
}

/*! ͬ����ͻ�������� */
if (typeof VRStarConflictDetectedType == "undefined") {
    var VRStarConflictDetectedType = {};
    VRStarConflictDetectedType.VRStarConflictDetectedUnknow = 0; //Unknow��ʹ��Ĭ�ϴ������ԣ�
    VRStarConflictDetectedType.VRStarConflictDetectedMaster = 1; //��masterΪ׼��������������1�ļ�¼�����˲�һ�£��������˵�����ȥ���ǴӶ˵�
    VRStarConflictDetectedType.VRStarConflictDetectedSlave = 2; //��slaveΪ׼��������������1�ļ�¼�����˲�һ�£����ôӶ˵�����ȥ�������˵�
    VRStarConflictDetectedType.VRStarConflictDetectedManual = 3; //�����û��ֶ�����
}

/*! �ռ��ϵ���� */
if (typeof VRStarSpatialRelationType == "undefined") {
    var VRStarSpatialRelationType = {};
    VRStarSpatialRelationType.VRStarSpatialRelationUnknow = 0; //Unknow
    VRStarSpatialRelationType.VRStarSpatialRelationEnvelope = 1; //ͨ��Envelope�����ཻ��ѯ
    VRStarSpatialRelationType.VRStarSpatialRelationEquals = 2; //���
    VRStarSpatialRelationType.VRStarSpatialRelationIntersects = 3; //������
    VRStarSpatialRelationType.VRStarSpatialRelationTouches = 4; //����
    VRStarSpatialRelationType.VRStarSpatialRelationCrosses = 5; //�ཻ
    VRStarSpatialRelationType.VRStarSpatialRelationWithin = 6; //������
    VRStarSpatialRelationType.VRStarSpatialRelationContains = 7; //����
    VRStarSpatialRelationType.VRStarSpatialRelationOverlaps = 8; //���ָ���
}

/*! ����Դ�������� */
if (typeof VRStarReplicateOperationType == "undefined") {
    var VRStarReplicateOperationType = {};
    VRStarReplicateOperationType.VRStarReplicateOperationInitialize = 0;  ///< ��ʼ��
    VRStarReplicateOperationType.VRStarReplicateOperationFinished = 1;  ///< �������
    VRStarReplicateOperationType.VRStarReplicateOperationExtractSchema = 2;  ///< ģʽ��ȡ
    VRStarReplicateOperationType.VRStarReplicateOperationExtractData = 3; ///< ��ȡ����
    VRStarReplicateOperationType.VRStarReplicateOperationCreateSchema = 4;  ///< ģʽ����
    VRStarReplicateOperationType.VRStarReplicateOperationReplicateData = 5;  ///< ���ݸ���
    VRStarReplicateOperationType.VRStarReplicateOperationCreateSpatialIndex = 6; ///< �����ռ�����
    VRStarReplicateOperationType.VRStarReplicateOperationCreateRenderIndex = 7;  ///< ������Ⱦ����
    VRStarReplicateOperationType.VRStarReplicateOperationCommitTransaction = 8;  ///< �ύ����
    VRStarReplicateOperationType.VRStarReplicateOperationTruncateDelta = 9;  ///< ɾ��������Ϣ
    VRStarReplicateOperationType.VRStarReplicateOperationReleaseLock = 10;  ///< �ͷŶ�ռ��
    VRStarReplicateOperationType.VRStarReplicateOperationCloseFile = 11; ///< �ر��ļ� 
    VRStarReplicateOperationType.VRStarReplicateOperationWriteFile = 12;  ///< д���ļ�
    VRStarReplicateOperationType.VRStarReplicateOperationOpenFile = 13;  ///< ���ļ� 
    VRStarReplicateOperationType.VRStarReplicateOperationWriteImage = 14;  ///< д��ͼ���� 
    VRStarReplicateOperationType.VRStarReplicateOperationWriteModel = 15; ///< дģ������
}


/*
*	enum VRStarDataInterop
*/

/*! �ⲿ����Դ���������� */
if (typeof VRStarExtConnectionType == "undefined") {
    var VRStarExtConnectionType = {};
    VRStarExtConnectionType.VRStarExtConnectionUnknow = 0;  ///< Unknown
    VRStarExtConnectionType.VRStarExtConnectionDWG = 1;  ///< dwg
    VRStarExtConnectionType.VRStarExtConnectionShp = 2;  ///< shape file
    VRStarExtConnectionType.VRStarExtConnectionSDE = 3; ///< sde
    VRStarExtConnectionType.VRStarExtConnectionOCI = 4;  ///< oracle spatial
    VRStarExtConnectionType.VRStarExtConnectionMS = 5;  ///< microsoft sqlserver spatial
    VRStarExtConnectionType.VRStarExtConnectionPG = 6; ///< postgis
    VRStarExtConnectionType.VRStarExtConnectionPGEO = 7;  ///< personal geodatabase
    VRStarExtConnectionType.VRStarExtConnectionWFS = 8;  ///< wfs
}

/*! �򿽱����� */
if (typeof VRStarDomainCopyPolicy == "undefined") {
    var VRStarDomainCopyPolicy = {};
    VRStarDomainCopyPolicy.VRStarDomainIgnor = 0; //< ������
    VRStarDomainCopyPolicy.VRStarDomainCopy = 1; //< ����
}

/*! ��Ⱦ�����ؽ����� */
if (typeof VRStarRebuildRenderIndexPolicy == "undefined") {
    var VRStarRebuildRenderIndexPolicy = {};
    VRStarRebuildRenderIndexPolicy.VRStarRebuildNone = 0; //< ���ؽ����������ݸ��¹���ͬ��������Ⱦ����
    VRStarRebuildRenderIndexPolicy.VRStarRebuildOnlyFlag = 1; //< �ڸ��¼�¼ǰ�ؽ���Ⱦ����
    VRStarRebuildRenderIndexPolicy.VRStarRebuildWithData = 2; //< �ڸ��¼�¼���ؽ���Ⱦ����
}

/*! ������Դ��ͻ���� */
if (typeof VRStarResourceConflictPolicy == "undefined") {
    var VRStarResourceConflictPolicy = {};
    VRStarResourceConflictPolicy.VRStarResourceIgnor = 0; //< ����������Դ�Ĵ���
    VRStarResourceConflictPolicy.VRStarResourceUseExists = 1; //< ����������Դ����ͻ��ʱ�򣬲����������֡�Ҳ���ǳ�ͻ�Ļ�������
    VRStarResourceConflictPolicy.VRStarResourceOverWirte = 2; //< ����������Դ����ͻ��ʱ�򣬸������е�
    VRStarResourceConflictPolicy.VRStarResourceRenameToNew = 3; //< ����������Դ����ͻ��ʱ����������û�����ûص��������Զ��������������ϲ���ÿ��Բ����������
}


/*
*	enum VRStarGeometry
*/

/*! ����ϵ���� */
if (typeof VRStarCoordinateReferenceSystemType == "undefined") {
    var VRStarCoordinateReferenceSystemType = {};
    VRStarCoordinateReferenceSystemType.VRStarCoordinateReferenceSystemUnknow = 0; //< δ֪����ϵ
    VRStarCoordinateReferenceSystemType.VRStarCoordinateReferenceSystemProject = 1; //< ͶӰ����ϵ
    VRStarCoordinateReferenceSystemType.VRStarCoordinateReferenceSystemGeographic = 2; //< ��������ϵ
    VRStarCoordinateReferenceSystemType.VRStarCoordinateReferenceSystemVertical = 3; //< ��ֱ����ϵ
    VRStarCoordinateReferenceSystemType.VRStarCoordinateReferenceSystemTemporal = 4; //< ʱ������ϵ
}

/*! �������� */
if (typeof VRStarGeometryType == "undefined") {
    var VRStarGeometryType = {};
    VRStarGeometryType.VRStarGeometryUnknow = 0, ///< δ֪����(Unknown type of geometry),��empty����(������Ϊ0)���ǿ�ֵ(����) 
	VRStarGeometryType.VRStarGeometryPoint = 1, ///< �� 
	VRStarGeometryType.VRStarGeometryModelPoint = 2, ///< ����άģ�͵ĵ�
	VRStarGeometryType.VRStarGeometryArc = 3, ///< Բ��
	VRStarGeometryType.VRStarGeometryLine = 4, ///<  ֱ�߶�(P = tP0+(1-t)P1,0.0 = <t< = 1.0,��vertex֮���������) 
	VRStarGeometryType.VRStarGeometryCircle = 5, ///<  Բ 
	VRStarGeometryType.VRStarGeometryCompoundLine = 6, ///< ������ 
	VRStarGeometryType.VRStarGeometryPolyline = 7, ///< �����(��VRStarGeometryLine��������Ҫ���������Ӷ���) 
	VRStarGeometryType.VRStarGeometryRing = 8, ///<  ��(һά) 
	VRStarGeometryType.VRStarGeometryPolygon = 9, ///< ����� 
	VRStarGeometryType.VRStarGeometryTriMesh = 10, ///< ����������(ÿ������������P = aP0+bP1+cP2,a+b+c = 1.0,a>0&&b>0&&c>0,��vertex֮���������) 
	VRStarGeometryType.VRStarGeometryCollection = 11, ///< ���μ���
	VRStarGeometryType.VRStarGeometryMultiPoint = 12, ///< ���
	VRStarGeometryType.VRStarGeometryMultiPolyline = 13, ///< ����߼���
	VRStarGeometryType.VRStarGeometryMultiPolygon = 14, ///< ����μ��� 
	VRStarGeometryType.VRStarGeometryMultiTrimesh = 15, ///< ���������漯�� 
	VRStarGeometryType.VRStarGeometryClosedTriMesh = 16, ///< ������������� 
	VRStarGeometryType.VRStarGeometryPointCloud = 18, ///<����
	VRStarGeometryType.VRStarGeometryStreetPoint= 19, ///<�־���
	VRStarGeometryType.VRStarGeometryWell= 20///<����
}

/*! ��ά�ռ��м���ʵ��������ά�� */
if (typeof VRStarGeometryDimension == "undefined") {
    var VRStarGeometryDimension = {};
    VRStarGeometryDimension.VRStarGeometryDimensionUnknow = 0; //< ����ά��δ֪��δ������
    VRStarGeometryDimension.VRStarGeometryDimensionZero = 1; //< ��γ������һ������߶�㣩
    VRStarGeometryDimension.VRStarGeometryDimensionOne = 2; //< һά�������ߣ�
    VRStarGeometryDimension.VRStarGeometryDimensionTwo = 3; //< ��ά�������棩
    VRStarGeometryDimension.VRStarGeometryDimensionThree = 4; //< ��ά
}

/*! ������������*/
if (typeof VRStarVertexAttributeType == "undefined") {
    var VRStarVertexAttributeType = {};
    VRStarVertexAttributeType.VRStarVertexAttributeNormal = 0, ///< x,y
	VRStarVertexAttributeType.VRStarVertexAttributeZ = 1, ///< x,y,z
	VRStarVertexAttributeType.VRStarVertexAttributeM = 2, ///< x,y,m
	VRStarVertexAttributeType.VRStarVertexAttributeID = 4, ///< x,y,id
	VRStarVertexAttributeType.VRStarVertexAttributeZM = 3, ///<3 x,y,z,m
	VRStarVertexAttributeType.VRStarVertexAttributeZID = 5, ///<5 x,y,z,id
	VRStarVertexAttributeType.VRStarVertexAttributeMID = 6, ///<6 x,y,m,id
	VRStarVertexAttributeType.VRStarVertexAttributeZMID = 7///<7 x,y,z,m,id
}

/*! Ƭ��segment�Ĳ�ֵ���� */
if (typeof VRStarCurveInterpolationType == "undefined") {
    var VRStarCurveInterpolationType = {};
    VRStarCurveInterpolationType.VRStarCurveInterpolationUnknow = 0; //< Unknow
    VRStarCurveInterpolationType.VRStarCurveInterpolationLine = 1; //< The interpolation type between the begin point and the end point is linear
    VRStarCurveInterpolationType.VRStarCurveInterpolationCircle = 2; //< The interpolation type between the begin point and the end point is parameterize circle
}

/*! SurfacePatch�Ĳ�ֵ���� */
if (typeof VRStarSurfaceInterpolationType == "undefined") {
    var VRStarSurfaceInterpolationType = {};
    VRStarSurfaceInterpolationType.VRStarSurfaceInterpolationUnknow = 0; //< Unknow
    VRStarSurfaceInterpolationType.VRStarSurfaceInterpolationPlanar = 1; //< ƽ��
    VRStarSurfaceInterpolationType.VRStarSurfaceInterpolationSpherical = 2; //< ����
    VRStarSurfaceInterpolationType.VRStarSurfaceInterpolationElliptical = 3; //< ��Բ
    VRStarSurfaceInterpolationType.VRStarSurfaceInterpolationParametricCurve = 4; //< �Զ�������
}

/*! ��λ����trimesh��λ�ù�ϵ */
if (typeof VRStarLocateStatus == "undefined") {
    var VRStarLocateStatus = {};
    VRStarLocateStatus.VRStarLocateOutside = 0; //< ����trimesh��
    VRStarLocateStatus.VRStarLocateNode = 1; //< �Ƕ���
    VRStarLocateStatus.VRStarLocateEdge = 2; //< �ڱ߽���
    VRStarLocateStatus.VRStarLocateFacet = 3; //< ������
}

/*! ָ���������߽����� */
if (typeof VRStarBufferStyle == "undefined") {
    var VRStarBufferStyle = {};
    VRStarBufferStyle.VRStarBufferCapround = 0; //< Բ�ǣ���ά��
    VRStarBufferStyle.VRStarBufferCapbutt = 1; //< �߽�ֱ����ֱ�߽ضϣ���ά��
    VRStarBufferStyle.VRStarBufferCapsquare = 2; //< ���ǣ���ά��
    VRStarBufferStyle.VRStarBuffer3D = 3; //< ��ά
}

/*! ���η����������� */
if (typeof VRStarTerrainAnalyseOperation == "undefined") {
    var VRStarTerrainAnalyseOperation = {};
    VRStarTerrainAnalyseOperation.VRStarerrainGetSurfaceArea = 0; //< �ر��������
    VRStarTerrainAnalyseOperation.VRStarTerrainFindWaterSinkBoundary = 1; //< ˮ�ͷ���(����ˮ�ӵı߽�)
    VRStarTerrainAnalyseOperation.VRStarTerrainCalculateCutFill = 2; //< ���ڷ�����
}

/*! �ݶ����͡�*/
if (typeof VRStarRoofType == "undefined") {
    var VRStarRoofType = {};
    VRStarRoofType.VRStarRoofFlat = 0; //< ƽ�ݶ�
    VRStarRoofType.VRStarRoofHip = 1; //< ���ݶ�Hip��ʽ
    VRStarRoofType.VRStarRoofGable = 2; //< ���ݶ�Gable��ʽ
}

/*
*	VRStarRenderControl
*/

/*! ���ζ���ķ������� */
if (typeof VRStarGeometrySymbolType == "undefined") {
    var VRStarGeometrySymbolType = {};
    VRStarGeometrySymbolType.VRStarGeometrySymbolUnknow = 0; //< Unknow
    VRStarGeometrySymbolType.VRStarGeometrySymbolPoint = 1; //< �����
    VRStarGeometrySymbolType.VRStarGeometrySymbolModelPoint = 5; //< ģ�ͷ���
    VRStarGeometrySymbolType.VRStarGeometrySymbolCurve = 2; //< �߷���
    VRStarGeometrySymbolType.VRStarGeometrySymbolSurface = 3; //< �����
    VRStarGeometrySymbolType.VRStarGeometrySymbolSolid = 4; //< �����
    VRStarGeometrySymbolType.VRStarGeometrySymbolPicturePoint = 6; //< ͼƬ�����
	VRStarGeometrySymbolType.VRStarGeometrySymbol3DPolygon=7;//< ��ά�������
}

/*! ���ֱ�ǩ�Ĳ������� */
if (typeof VRStarPivotAlignType == "undefined") {
    var VRStarPivotAlignType = {};
    VRStarPivotAlignType.VRStarPivotAlignBottomUnknow = 0; //< Unknow
    VRStarPivotAlignType.VRStarPivotAlignBottomLeft = 1; //< ����
    VRStarPivotAlignType.VRStarPivotAlignBottomCenter = 2; //< ����
    VRStarPivotAlignType.VRStarPivotAlignBottomRight = 3; //< ����
    VRStarPivotAlignType.VRStarPivotAlignCenterLeft = 4; //< ����
    VRStarPivotAlignType.VRStarPivotAlignCenterCenter = 5; //< ����
    VRStarPivotAlignType.VRStarPivotAlignCenterRight = 6; //< ����
    VRStarPivotAlignType.VRStarPivotAlignTopLeft = 7; //< ����
    VRStarPivotAlignType.VRStarPivotAlignTopCenter = 8; //< ����
    VRStarPivotAlignType.VRStarPivotAlignTopRight = 9; //< ����
}

/*! ���׵����ʾ��ʽ */
if (typeof VRStarSimplePointStyle == "undefined") {
    var VRStarSimplePointStyle = {};
    VRStarSimplePointStyle.VRStarSimplePointUnknow = 0; //< Unknow
    VRStarSimplePointStyle.VRStarSimplePointCircle = 1; //< Բ��
    VRStarSimplePointStyle.VRStarSimplePointSquare = 2; //< ����
    VRStarSimplePointStyle.VRStarSimplePointCross = 3; //< ʮ����
    VRStarSimplePointStyle.VRStarSimplePointX = 4; //< ����
    VRStarSimplePointStyle.VRStarSimplePointDiamond = 5; //< ����
}

/*! ���ֶ��뷽ʽ */
if (typeof VRStarMultilineJustification == "undefined") {
    var VRStarMultilineJustification = {};
    VRStarMultilineJustification.VRStarMultilineUnknow = 0; //< Unknow
    VRStarMultilineJustification.VRStarMultilineLeft = 1; //< �����
    VRStarMultilineJustification.VRStarMultilineCenter = 2; //< ����
    VRStarMultilineJustification.VRStarMultilineRight = 3; //< �Ҷ���
}

/*! ��Ⱦ���� */
if (typeof VRStarRenderType == "undefined") {
    var VRStarRenderType = {};
    VRStarRenderType.VRStarRenderSimple = 0; //< ����Ⱦ
    VRStarRenderType.VRStarRenderValueMap = 1; //< ֵ��Ⱦ
}

/*! �߶�ģʽ */
if (typeof VRStarHeightStyle == "undefined") {
    var VRStarHeightStyle = {};
    // VRStarHeightStyle.VRStarHeightUnknow = 0; //< Unknow
    VRStarHeightStyle.VRStarHeightOnTerrain = 0; //< ����
    VRStarHeightStyle.VRStarHeightAbsolute = 1; //< ���Ը߶ȣ�����˵���θ߶�
    VRStarHeightStyle.VRStarHeightRelative = 2; //< ����
    VRStarHeightStyle.VRStarHeightOnTileLayer = 3 //< ���Ը߶ȣ�����˵���θ߶�
}

/*! ��Ⱦ�������� */
if (typeof VRStarRenderRuleType == "undefined") {
    var VRStarRenderRuleType = {};
    VRStarRenderRuleType.VRStarRenderRuleUnknow = 0; //< Unknow
    VRStarRenderRuleType.VRStarRenderRuleRange = 1; //< ���շ�Χ������Ⱦ
    VRStarRenderRuleType.VRStarRenderRuleUniqueValues = 2; //< ����Ψһ����ֵ������Ⱦ
}

/*! RenderControl�Ķ������� */
if (typeof VRStarObjectType == "undefined") {
    var VRStarObjectType = {};
    VRStarObjectType.VRStarObjectUnknow = 0; ///< Unknow
	VRStarObjectType.VRStarObjectNone = 1; ///< �ն��󣬵������ĳЩ�ڵ㣬����ϣ�����л����󽻵Ȳ�������ָ��������
	VRStarObjectType.VRStarObjectReferencePlane = 2; ///< ��׼ƽ�����
	VRStarObjectType.VRStarObjectFeatureLayer = 3; ///< ����Ҫ��ͼ��
	VRStarObjectType.VRStarObjectTerrain = 4; ///< ����
	VRStarObjectType.VRStarObjectRenderModelPoint = 5; ///<  ModelPoint����Ⱦ����
	VRStarObjectType.VRStarObjectTerrainRoute = 6; ///< ���ٶȿ��ƹؼ�֡�����·��
	VRStarObjectType.VRStarObjectRenderPolyline = 7; ///< Polyline����Ⱦ����
	VRStarObjectType.VRStarObjectRenderPolygon = 8; ///<  Polygon����Ⱦ����
	VRStarObjectType.VRStarObjectRenderTriMesh = 9; ///< Polygon����Ⱦ����
	VRStarObjectType.VRStarObjectRenderPointCollection  = 10; ///< PointCollection����Ⱦ����
	VRStarObjectType.VRStarObjectRenderPoint = 11; ///< Point����Ⱦ����
	VRStarObjectType.VRStarObjectCameraTour = 12; ///< ��ʱ����ƹؼ�֡�����·��
	VRStarObjectType.VRStarObjectMotionPath = 13; ///< �����˶�·��
	VRStarObjectType.VRStarObjectSkyBox = 14; ///< ��պ�
	VRStarObjectType.VRStarObjectParticleEffect = 15; ///< ������Ч
	VRStarObjectType.VRStarObjectLabel = 16; ///< ���ֱ�ǩ����
	VRStarObjectType.VRStarObjectTableLabel = 17; ///<���ֱ����ǩ����
    VRStarObjectType.VRStarObjectSkinnedMesh = 18; ///< ��������
	VRStarObjectType.VRStarObjectRenderArrow = 19; ///< ��ͷ���
	VRStarObjectType.VRStarObjectRenderPolylineCollection  = 20; ///< PolylineCollection����Ⱦ����
	VRStarObjectType.VRStarObjectRenderPolygonCollection  = 21; ///< PolygonCollection����Ⱦ����
	VRStarObjectType.VRStarObjectImageryLayer = 22; ///< Ӱ��ͼ��
	VRStarObjectType.VRStarObjectRenderTriMeshCollection = 23; ///< MultiTriMesh����Ⱦ����
	VRStarObjectType.VRStarObjectTerrainHole = 24; ///< �����ڶ�
	VRStarObjectType.VRStarObject3DTileLayer = 25; ///< ��б��Ӱ
	VRStarObjectType.VRStarObject3DTileHole = 26; ///<��б��Ӱ
    VRStarObjectType.VRStarObjectRenderMultiPoint = 27;
    VRStarObjectType.VRStarObjectRenderMultiPolyline = 28;
    VRStarObjectType.VRStarObjectRenderMultiPolygon=29;
	VRStarObjectType.VRStarObjectOverlayLabel = 30;
    VRStarObjectType.VRStarObjectDynamicObject =31;
}

/*! ������������˶��켣�Ĳ�ֵģʽ */
if (typeof VRStarCameraTourMode == "undefined") {
    var VRStarCameraTourMode = {};
    VRStarCameraTourMode.VRStarCameraTourUnknow = 0; //< Unknow
    VRStarCameraTourMode.VRStarCameraTourLinear = 1; //< ���Բ�ֵ
    VRStarCameraTourMode.VRStarCameraTourSmooth = 2; //< ƽ����ֵ��hermite��ֵ��
    VRStarCameraTourMode.VRStarCameraTourBounce = 3; //< ��Ծʽ
}

/*! ��Чģʽ */
if (typeof VRStarFogMode == "undefined") {
    var VRStarFogMode = {};
    VRStarFogMode.VRStarFogUnknow = 0; //< Unknow
    VRStarFogMode.VRStarFogNone = 1; //< ��������Ч
    VRStarFogMode.VRStarFogLinear = 2; //< ������Ч
    VRStarFogMode.VRStarFogExp = 3; //< ��չ1
    VRStarFogMode.VRStarFogExp2 = 4; //< ��չ2
}

/*! ��պ�ͼƬ�趨���� */
if (typeof VRStarSkyboxImageIndex == "undefined") {
    var VRStarSkyboxImageIndex = {};
    VRStarSkyboxImageIndex.VRStarSkyboxImageUnknow = 0; //< Unknow
    VRStarSkyboxImageIndex.VRStarSkyboxImageFront = 1; //< ����
    VRStarSkyboxImageIndex.VRStarSkyboxImageBack = 2; //< ����
    VRStarSkyboxImageIndex.VRStarSkyboxImageLeft = 3; //< ����
    VRStarSkyboxImageIndex.VRStarSkyboxImageRight = 4; //< ����
    VRStarSkyboxImageIndex.VRStarSkyboxImageTop = 5; //< ������ͼƬ���Ϸ����ϣ�
    VRStarSkyboxImageIndex.VRStarSkyboxImageBottom = 6; //< �ײ���ͼƬ���Ϸ�������
}

/*! �ӿ����� */
if (typeof VRStarViewportMask == "undefined") {
    var VRStarViewportMask = {};
    VRStarViewportMask.VRStarViewportNone = 0, ///< �����ӿڶ�����ʾ 
	VRStarViewportMask.VRStarViewportOne = 0x1, ///< ��һ���ӿ� 
	VRStarViewportMask.VRStarViewportTwo = 0x2, ///< �ڶ����ӿ� 
	VRStarViewportMask.VRStarViewportThree = 0x4, ///< �������ӿ� 
	VRStarViewportMask.VRStarViewportFour = 0x8, ///< ���ĸ��ӿ�
    VRStarViewportMask.VRStarViewportAll = 0xF, ///< �������ĸ��ӿڶ���ʾ
	VRStarViewportMask.VRStarViewportPIP = 0x10///< ���л��ӿڣ�IRenderable����Ĭ�ϲ�����ʾ������ӿ� 
}

/*! ��ȡָ��λ�ø̷߳�ʽ */
if (typeof VRStarGetElevationType == "undefined") {
    var VRStarGetElevationType = {};
    VRStarGetElevationType.VRStarGetElevationUnknow = 0; //< Unknow
    VRStarGetElevationType.VRStarGetElevationFromDatabase = 1; //< �����ݿ����ȡ�߳�ֵ�����ݿ������ǵ��ξ�ϸ�����ֵ
    VRStarGetElevationType.VRStarGetElevationFromMemory = 2; //< ���ڴ��л�ȡ�߳�ֵ���ǵ�ʱ�ӽǿ����ĵ���ֵ���ڸߴ��������ǵ��δֲ������ֵ�� �߳�ֵͨ���Ⱦ�ϸ����Ҫ��
}

/*! ����ϵͳ��ʹ�õ�billboard���� */
if (typeof VRStarParticleBillboardType == "undefined") {
    var VRStarParticleBillboardType = {};
    VRStarParticleBillboardType.VRStarParticleBillboardUnknow = 0; //< Unknow
    VRStarParticleBillboardType.VRStarParticleBillboardOrientedCamera = 1; //< �������
    VRStarParticleBillboardType.VRStarParticleBillboardOrientedMoveDirection = 2; //< �����˶�����
}

/*! ��ά�ӿ�ģʽ */
if (typeof VRStarViewportMode == "undefined") {
    var VRStarViewportMode = {};
    VRStarViewportMode.VRStarViewportSinglePerspective = 0; //< ���ӿ�͸��ͶӰ
    VRStarViewportMode.VRStarViewportStereoAnaglyph = 1; //< ��һ��ͼ��������
    VRStarViewportMode.VRStarViewportStereoQuadbuffer = 2; //< ��һ��ͼ�Ļ�������
    VRStarViewportMode.VRStarViewportL1R1 = 3; //< ��һ��һ
    VRStarViewportMode.VRStarViewportT1B1 = 4; //< ��һ��һ
    VRStarViewportMode.VRStarViewportL1M1R1 = 5; //< ��һ��һ��һ
    VRStarViewportMode.VRStarViewportT1M1B1 = 6; //< ��һ��һ��һ
    VRStarViewportMode.VRStarViewportL2R1 = 7; //< ��������ӿڣ��ұ�һ��
    VRStarViewportMode.VRStarViewportL1R2 = 8; //< ��һ�Ҷ�
    VRStarViewportMode.VRStarViewportQuad = 9; //< ���ӿ�
    VRStarViewportMode.VRStarViewportPInP = 10; //< ��С����ͼ�����л���
    VRStarViewportMode.VRStarViewportQuadH = 11; //< ˮƽ���ӿ�
    VRStarViewportMode.VRStarViewportStereoDualView = 12; //< ˮƽ���ӿ�����
    VRStarViewportMode.VRStarViewportL1R1SingleFrustum = 13; //< ���ҷ�ͼ
    VRStarViewportMode.VRStarViewportT1B1SingleFrustum = 14; //< ���·�ͼ
}

/*! ����ɵ����������ķ�ʽ */
if (typeof VRStarActionCode == "undefined") {
    var VRStarActionCode = {};
    VRStarActionCode.VRStarActionUnknow = 0; //< Unknow
    VRStarActionCode.VRStarActionFlyTo = 1; //< �ɵ�
    VRStarActionCode.VRStarActionJump = 2; //< ����
    VRStarActionCode.VRStarActionFollowBehind = 3; //< �������������ĺ���
    VRStarActionCode.VRStarActionFollowAbove = 4; //< ������������������
    VRStarActionCode.VRStarActionFollowBelow = 5; //< ������������������
    VRStarActionCode.VRStarActionFollowLeft = 6; //< ������������������
    VRStarActionCode.VRStarActionFollowRight = 7; //< ������������������
    VRStarActionCode.VRStarActionFollowBehindAndAbove = 8; //< �������������ĺ�����
    VRStarActionCode.VRStarActionFollowCockpit = 9; //< ��������ڼ�ʻ��
}

/*! ����ģʽ */
if (typeof VRStarFlyMode == "undefined") {
    var VRStarFlyMode = {};
    VRStarFlyMode.VRStarFlyUnknow = 0; //< Unknow
    VRStarFlyMode.VRStarFlyArc = 1; //< (Ĭ��)����Զ��ʱ��������Ϸɣ�Ȼ��λ��ȥ
    VRStarFlyMode.VRStarFlyLinear = 2; //< �����Ϸɣ�ֱ�ӷɹ�ȥ 
	VRStarFlyMode.VRStarFlyTo=3;//< ������λ������
}

/*! �趨�����λ�Ĳ������ */
if (typeof VRStarSetCameraFlag == "undefined") {
    var VRStarSetCameraFlag = {};
    VRStarSetCameraFlag.VRStarSetCameraUnknow = 0; //< Unknow
    VRStarSetCameraFlag.VRStarSetCameraNo = 1; //< ���в���ȫ���趨������λ�ú�ת��
    VRStarSetCameraFlag.VRStarSetCameraIgnoreX = 2; //< ����x����ֵ���趨
    VRStarSetCameraFlag.VRStarSetCameraIgnoreY = 3; //< ����y����ֵ���趨
    VRStarSetCameraFlag.VRStarSetCameraIgnoreZ = 4; //< ����z����ֵ���趨
    VRStarSetCameraFlag.VRStarSetCameraIgnorePosition = 5; //< ����λ�õ��趨
    VRStarSetCameraFlag.VRStarSetCameraIgnoreYaw = 6; //< ����Headingת��Heading����������ң�ҡ�ڵĽǶ�ֵ�� 
    VRStarSetCameraFlag.VRStarSetCameraIgnorePitch = 7; //< ����Tiltת��Tilt����������£������ĽǶ�ֵ��
    VRStarSetCameraFlag.VRStarSetCameraIgnoreRoll = 8; //< ����Rollת��
    VRStarSetCameraFlag.VRStarSetCameraIgnoreOrientation = 9; //< ��������ת��
}

/*! ���α༭���� */
if (typeof VRStarGeometryEditType == "undefined") {
    var VRStarGeometryEditType = {};
    VRStarGeometryEditType.VRStarGeometryEditUnknow = 0; //< Unknow
    VRStarGeometryEditType.VRStarGeometryEditCreator = 1; //< ����
    VRStarGeometryEditType.VRStarGeometryEditMove = 2; //< ƽ��
    VRStarGeometryEditType.VRStarGeometryEditRotate = 3; //< ��ת
    VRStarGeometryEditType.VRStarGeometryEditScale = 4; //< ����
    VRStarGeometryEditType.VRStarGeometryEditVertex = 5; //< ����༭
}

/*! ���α༭������� */
if (typeof VRStarGeometryEditResultCode == "undefined") {
    var VRStarGeometryEditResultCode = {};
    VRStarGeometryEditResultCode.VRStarGeometryEditResultUnknow = 0; //< Unknow
    VRStarGeometryEditResultCode.VRStarGeometryEditResultOK = 1; //< ����༭״̬�ɹ�
    VRStarGeometryEditResultCode.VRStarGeometryEditResultCreateFailed = 2; //< ���뼸�α༭״̬ʧ��
    VRStarGeometryEditResultCode.VRStarGeometryEditResultErrorInteractMode = 3; //< ��ǰ�Ľ���ģʽ���Ǽ��α༭״̬
    VRStarGeometryEditResultCode.VRStarGeometryEditResultErrorGeometryType = 4; //< ��ǰ���岢�ǿɱ༭����
    VRStarGeometryEditResultCode.VRStarGeometryEditResultErrorParameters = 5; //< ��������
    VRStarGeometryEditResultCode.VRStarGeometryEditResultErrorFieldIndex = 6; //< �ֶ���������
    VRStarGeometryEditResultCode.VRStarGeometryEditResultErrorAlreadyIn = 7; //< �Ѿ��ڶ�һ��Geometry���б༭����ʱ���پɵģ��Ķ��µ�Geometry���б༭
    VRStarGeometryEditResultCode.VRStarGeometryEditErrorPointMustMove = 8; //< ��ֻ�ܽ�������ƽ�Ʊ༭
}

/*! ����༭��ʽ */
if (typeof VRStarEditorType == "undefined") {
    var VRStarEditorType = {};
    VRStarEditorType.VRStarEditorUnknow = 0; //< Unknow
    VRStarEditorType.VRStarEditorNone = 1; //< �ղ���
    VRStarEditorType.VRStarEditorMove = 2; //< �ƶ���ʽ
    VRStarEditorType.VRStarEditorRotate = 3; //< ��ת��ʽ
    VRStarEditorType.VRStarEditorScale = 4; //< ���ŷ�ʽ
    VRStarEditorType.VRStarEditorZRotate = 5; //< ֻ��z����ת
    VRStarEditorType.VRStarEditorZRotate = 6; //< ֻ��z������
}

/*! ����ģʽ */
if (typeof VRStarInteractMode == "undefined") {
    var VRStarInteractMode = {};
    VRStarInteractMode.VRStarInteractUnknow = 0; //< Unknow
    VRStarInteractMode.VRStarInteractNormal = 1; //< ��ͨ����ģʽ������ģʽ��
    VRStarInteractMode.VRStarInteractSelect = 2; //< ���ʰȡģʽ����ģʽ�¿ɽ������ʰȡ������
    VRStarInteractMode.VRStarInteractMeasurement = 3; //< ����ģʽ
    VRStarInteractMode.VRStarInteractGeometryEdit = 4; //< �������ݱ༭ģʽ
    VRStarInteractMode.VRStarInteractWalk = 5; //< ����ģʽ��ģ���������ģʽ��
    VRStarInteractMode.VRStarInteractDisable = 6; //< ��ֹ����ģʽ�������̰����������ã��ɶ��ο����ӹܽ�����
    VRStarInteractMode.VRStarInteract2DMap = 7; //< ��άģʽ(����ͼ)
    VRStarInteractMode.VRStarInteractSlide = 8; //< ��ͨ����ģʽ������ģʽ��
	VRStarInteractMode.VRStarInteractFixedSite = 9; //�̶��ӵ�ģʽ 
    VRStarInteractMode.VRStarInteractOrtho = 10; //��������ģʽ 
	VRStarInteractMode.VRStarInteract2DMapOrtho = 11; //����ͼ����۲�ģʽ 
}

/*! ����ģʽ */
if (typeof VRStarMeasurementMode == "undefined") {
    var VRStarMeasurementMode = {};
    VRStarMeasurementMode.VRStarMeasurementUnknow = -1; //< Unknow
    VRStarMeasurementMode.VRStarMeasurementAerialDistance = 0; //< �������
    VRStarMeasurementMode.VRStarMeasurementHorizontalDistance = 1; //< ˮƽ�ռ���
    VRStarMeasurementMode.VRStarMeasurementVerticalDistance = 2; //< ��ֱ�ռ���
    VRStarMeasurementMode.VRStarMeasurementCoordinate = 3; //< �������
    VRStarMeasurementMode.VRStarMeasurementArea = 4; //< �������
}

/*! ���ʰȡ������ʽ */
if (typeof VRStarMouseSelectMode == "undefined") {
    var VRStarMouseSelectMode = {};
    VRStarMouseSelectMode.VRStarMouseSelectUnknow = 0; //< Unknow
    VRStarMouseSelectMode.VRStarMouseSelectClick = 1; //< ��������ѡģʽ��up��ʱ�򴥷���
    VRStarMouseSelectMode.VRStarMouseSelectDrag = 2; //< ��������ѡģʽ��up��ʱ�򴥷���
    VRStarMouseSelectMode.VRStarMouseSelectMove = 4; //< ����ƶ�ģʽ��������ƶ�ʱ�������ʰȡ��������û���κμ����µ�����¼���ִ�У�
    VRStarMouseSelectMode.VRStarMouseSelectHover = 8; //< �����ͣģʽ�����ͣ����һ��λ��һ��ʱ��󴥷���������ֱ�Ӷ�ӦWM_HOVER��Ϣ��û���κμ����µ���������������������ʾ��
}

/*! ���ʰȡʱ��Ҫ���˵Ķ����������� */
if (typeof VRStarMouseSelectObjectMask == "undefined") {
    var VRStarMouseSelectObjectMask = {};
    VRStarMouseSelectObjectMask.VRStarMouseSelectNone = 0x0, ///<  �ն��󣬵������ĳЩ�ڵ㣬����ϣ�����л��ƻ����󽻵Ȳ�������ָ�������� 
	VRStarMouseSelectObjectMask.VRStarMouseSelectFeatureLayer = 0x1, ///< ��������
	VRStarMouseSelectObjectMask.VRStarMouseSelectTerrain = 0x2, ///< ��������
	VRStarMouseSelectObjectMask.VRStarMouseSelectReferencePlane = 0x4, ///< ��׼��
	VRStarMouseSelectObjectMask.VRStarMouseSelectTerrainHole = 0x8, ///< �����ڶ�
	VRStarMouseSelectObjectMask.VRStarMouseSelectLable = 0x10, ///< �ı���ǩ��TableLable��Label���ô��� 
	VRStarMouseSelectObjectMask.VRStarMouseSelectParticleEffect = 0x20, ///< ����ϵͳ 
	VRStarMouseSelectObjectMask.VRStarMouseSelectRenderGeometry = 0x40, ///< ��Ⱦ������
	VRStarMouseSelectObjectMask.VRStarMouseSelectSkinnedMesh = 0x80, ///< �������� 
	VRStarMouseSelectObjectMask.VRStarMouseSelectAll = 0xFFFF///< ���ж���
}

/*! �������ͣ�����ģ����ѩЧ�� */
if (typeof VRStarWeatherType == "undefined") {
    var VRStarWeatherType = {};
    VRStarWeatherType.VRStarWeatherSunShine = 0; //< ����
    VRStarWeatherType.VRStarWeatherLightRain = 1; //< С��
    VRStarWeatherType.VRStarWeatherModerateRain =2; //< ����
    VRStarWeatherType.VRStarWeatherHeavyRain = 3; //< ����
    VRStarWeatherType.VRStarWeatherLightSnow = 4; //< Сѩ
    VRStarWeatherType.VRStarWeatherModerateSnow = 5; //< ��ѩ
    VRStarWeatherType.VRStarWeatherHeavySnow = 6; //< ��ѩ
}

/*! ��갴��״̬ */
if (typeof VRStarModKeyMask == "undefined") {
    var VRStarModKeyMask = {};
    VRStarModKeyMask.VRStarModKeyUnknow = 0; //< Unknow
    VRStarModKeyMask.VRStarModKeyCtrl = 1; //< Ctrl������
    VRStarModKeyMask.VRStarModKeyShift = 2; //< Shift������
    VRStarModKeyMask.VRStarModKeyDblClk = 3; //< ���˫��
}

/*! �������� */
if (typeof VRStarCommandType == "undefined") {
    var VRStarCommandType = {};
    VRStarCommandType.VRStarCommandUnknow = 0; //< Unknow
    VRStarCommandType.VRStarCommandStart = 1; //< ��ʼ
    VRStarCommandType.VRStarCommandInsert = 2; //< ����
    VRStarCommandType.VRStarCommandDelete = 3; //< ɾ��
    VRStarCommandType.VRStarCommandUpdate = 4; //< ����
}

/*! �������� */
if (typeof VRStarRasterSourceType == "undefined") {
    var VRStarRasterSourceType = {};
    VRStarRasterSourceType.VRStarRasterUnknown = 0; //< File
    VRStarRasterSourceType.VRStarRasterSourceFile = 1; //< File�����ļ�
    VRStarRasterSourceType.VRStarRasterSourceGeoRaster = 2; //< GeoRaster �ݲ�֧��
    VRStarRasterSourceType.VRStarRasterSourceWMS = 3; //< WMS
    VRStarRasterSourceType.VRStarRasterSourceWMTS = 4; //< WSTS
    VRStarRasterSourceType.VRStarRasterSourceWCS = 5; //< WCS
}

/*! ̫��λ�ü���ģʽ�� */
if (typeof VRStarSunCalculateMode == "undefined") {
    var VRStarSunCalculateMode = {};
    VRStarSunCalculateMode.VRStarSunModeFollowCamera = 0;
    VRStarSunCalculateMode.VRStarSunModeAccordingToGMT = 1;
    VRStarSunCalculateMode.VRStarSunModeUserDefined = 2;
}

/*! ��ײ���ģʽ�� */
if (typeof VRStarCollisionDetectionMode == "undefined") {
    var VRStarCollisionDetectionMode = {};
    VRStarCollisionDetectionMode.VRStarCollisionDisable = 0;
    VRStarCollisionDetectionMode.VRStarCollisionOnlyKeyboard = 1;
    VRStarCollisionDetectionMode.VRStarCollisionEnable = 2;
}

/*! ����ϵͳ���������͡� */
if (typeof VRStarEmitterType == "undefined") {
    var VRStarEmitterType = {};
    VRStarEmitterType.VRStarEmitterNone = 0;
    VRStarEmitterType.VRStarEmitterPoint = 1;
    VRStarEmitterType.VRStarEmitterBox = 2;
    VRStarEmitterType.VRStarEmitterCircle = 3;
}

/*! ���Ƶ�RenderObject��һЩbool���ԡ� */
if (typeof VRStarAttributeMask == "undefined") {
    var VRStarAttributeMask = {};
    VRStarAttributeMask.VRStarAttributeHighlight = 0;
    VRStarAttributeMask.VRStarAttributeCollision = 1;
    VRStarAttributeMask.VRStarAttributeClipPlane = 2;
}

/*! ���β��ݷ�ʽ�� */
if (typeof VRStarManipulatorMode == "undefined") {
    var VRStarManipulatorMode = {};
    VRStarManipulatorMode.VRStarGISEarthManipulator = 0;
    VRStarManipulatorMode.VRStarGoogleEarthManipulator = 1;
}

/*! ����ģʽ */
if (typeof VRStarLockMode == "undefined") {
    var VRStarLockMode = {};
    VRStarLockMode.VRStarLockDecal = 0;
    VRStarLockMode.VRStarLockAxis = 1;
	VRStarLockMode.VRStarLockAxisTextUp = 2;
    VRStarLockMode.VRStarAxisAutoPitch = 3;
	VRStarLockMode.VRStarAxisAutoPitchTextup = 4;
}

/*! �˶�ģʽ��  */
if (typeof VRStarDynamicMotionStyle == "undefined") {
    var VRStarDynamicMotionStyle = {};
    VRStarDynamicMotionStyle.VRStarDynamicMotionGroundVehicle = 0;
    VRStarDynamicMotionStyle.VRStarDynamicMotionAirplane = 1;
	VRStarDynamicMotionStyle.VRStarDynamicMotionHelicopter = 2;
    VRStarDynamicMotionStyle.VRStarDynamicMotionHover = 3;
}

/*
*	enum VRStarResource
*/

/*! ͼ���ʽ */
if (typeof VRStarImageFormat == "undefined") {
    var VRStarImageFormat = {};
    VRStarImageFormat.VRStarImageUnknow = 0; //< Unknow
    VRStarImageFormat.VRStarImageDDS = 1; //< DDS��ʽ������ѹ����֧��ͨ����
    VRStarImageFormat.VRStarImagePNG = 2; //< PNG��ʽ������ѹ����֧��ͨ����
    VRStarImageFormat.VRStarImageJPG = 3; //< JPG��ʽ������ѹ������֧��ͨ����
}

/*! ͼ������ */
if (typeof VRStarImageType == "undefined") {
    var VRStarImageType = {};
    VRStarImageType.VRStarImageStatic = 0; //< ��̬ͼ��
    VRStarImageType.VRStarImageDynamic = 1; //< ��̬ͼ�񣬻���˵������ͼ
    VRStarImageType.VRStarImageCube = 2; //< CubeMapͼ������top,bottom,front,back,right,left������ͼ
}

/*! ��ü�ģʽ */
if (typeof VRStarCullFaceMode == "undefined") {
    var VRStarCullFaceMode = {};
    VRStarCullFaceMode.VRStarCullFaceClose = 0; //< �ر���ü�
    VRStarCullFaceMode.VRStarCullFaceBack = 1; //< ��������ü�
    VRStarCullFaceMode.VRStarCullFaceFront = 2; //< ��������ü�
}

/*! ��������ļ��㷽ʽ */
if (typeof VRStarTextureWrapMode == "undefined") {
    var VRStarTextureWrapMode = {};
    VRStarTextureWrapMode.VRStarTextureWrapClampToEdge = 0; //< ��ȡģʽ
    VRStarTextureWrapMode.VRStarTextureWrapRepeat = 1; //< �ظ�ģʽ
}

/*! ����ģʽ */
if (typeof VRStarPrimitiveMode == "undefined") {
    var VRStarPrimitiveMode = {};
    VRStarPrimitiveMode.VRStarPrimitiveTriangleList = 0; //< ������
    VRStarPrimitiveMode.VRStarPrimitiveLineList = 1; //< �߶�
    VRStarPrimitiveMode.VRStarPrimitivePointList = 2; //< ��
    VRStarPrimitiveMode.VRStarPrimitiveNone = 3; //< �����������������ͺ��ж�ʹ��
}

/*! �������� */
if (typeof VRStarPrimitiveType == "undefined") {
    var VRStarPrimitiveType = {};
    VRStarPrimitiveType.VRStarPrimitiveUnknow = 0; //< Unknow
    VRStarPrimitiveType.VRStarPrimitiveNormal = 1; //< ����ģ��
    VRStarPrimitiveType.VRStarPrimitiveBillboardZ = 2; //< ��Z����ת��Billboard
    VRStarPrimitiveType.VRStarPrimitiveWater = 3; //< ˮ
    VRStarPrimitiveType.VRStarPrimitiveGlass = 4; //< ��������,�ܷ�����պ�
}

/*! ��ü�ģʽ  */
if (typeof VRStarCullMode == "undefined") {
    var VRStarCullMode = {};
    VRStarCullMode.VRStarCullNone = 0; //< �ر���ü� 
    VRStarCullMode.VRStarCullBack = 1; //< ��������ü�
    VRStarCullMode.VRStarCullFront = 2; //< ��������ü�
}

/*! brief ����ģʽ  */
if (typeof VRStarOperatorMode == "undefined") {
    var VRStarOperatorMode = {};
    VRStarOperatorMode.VRStarOperatorUnknow = 0; //< Unknow 
    VRStarOperatorMode.VRStarOperator3DMap = 1; //< ��ά����ģʽ
    VRStarOperatorMode.VRStarOperator2DMap = 2; //< ��ά����ģʽ(����ͼ)
}

if (typeof VRStarFilter == "undefined") {
    var VRStarFilter = {};
    VRStarFilter.VRStarFilterNearest = 0;
    VRStarFilter.VRStarFilterLinear = 1;
    VRStarFilter.VRStarFilterBilinear = 2;
    VRStarFilter.VRStarFilterBox_BOX = 3;
    VRStarFilter.VRStarFilterTriangle = 4;
    VRStarFilter.VRStarFilterBicubic = 5;
    VRStarFilter.VRStarFilterNum = 6;
}

if (typeof VRStarCodec == "undefined") {
    var VRStarCodec = {};
    VRStarCodec.VRStarNoneCodec = 0;
    VRStarCodec.VRStarDDSCodec = 1;
    VRStarCodec.VRStarPVRTCCodec = 2;
    VRStarCodec.VRStarFreeImageCodec = 3;
    VRStarCodec.VRStarALLCodec = 4;
}

/*! brief ��ȼ�鷽ʽ  */
if (typeof VRStarDepthTestMode == "undefined") {
    var VRStarDepthTestMode = {};
    VRStarDepthTestMode.VRStarDepthTestEnable = 0;//< ������ȼ�⣨�ڵ��˾Ϳ�������û�ڵ����ܿ�����
    VRStarDepthTestMode.VRStarDepthTestDisable = 1;//< ������ȼ�⣨ȫ�ܿ�����
    VRStarDepthTestMode.VRStarDepthTestAdvance = 2;//<  ���ڵ���͸����ʾ��û���ڵ���������ʾ
    VRStarDepthTestMode.VRStarDepthTestGreaterEqual = 3;//< ��ǰ�������ȴ��ڵ������ж�������ʱ��ͨ����ȼ��
    VRStarDepthTestMode.VRStarDepthTestGreater = 4;//< ��ǰ�������ȴ������ж�������ʱ��ͨ����ȼ��
	VRStarDepthTestMode.VRStarDepthTestLessEqual = 5;//< ��ǰ��������С�ڵ������ж�������ʱ��ͨ����ȼ��
	VRStarDepthTestMode.VRStarDepthTestEqual = 6;//< ��ǰ�������ȵ������ж�������ʱ��ͨ����ȼ��
	VRStarDepthTestMode.VRStarDepthTestNotEqual = 7;//< ��ǰ�������Ȳ��������ж�������ʱ��ͨ����ȼ��
	VRStarDepthTestMode.VRStarDepthTestAlways = 8;//< ��ǰ��������ͨ����ȼ��
	VRStarDepthTestMode.VRStarDepthTestAdvanceSecondDrawMaxDepth = 9;//< 1km֮�ڱ��ڵ�������͸Ч��
}

/*! brief HTML�������ڵ�λ��  */
if (typeof VRStarHTMLWindowPosition == "undefined") {
    var VRStarHTMLWindowPosition = {};
    VRStarHTMLWindowPosition.VRStarWinPosUserDefined = 0;//< �û��Զ���
    VRStarHTMLWindowPosition.VRStarWinPosCenterParent = 1;//< �����ڵ����м� 
    VRStarHTMLWindowPosition.VRStarWinPosCenterDesktop = 2;//< ��������м�
    VRStarHTMLWindowPosition.VRStarWinPosMousePosition = 3;//< ������ĵط� 
    VRStarHTMLWindowPosition.VRStarWinPosParentSize = 4;//< �����ڵĴ�С 
	VRStarHTMLWindowPosition.VRStarWinPosParentRightTop = 5;//< ���������Ͻ� 
}
/*! brief �����߳�����  */
if (typeof VRStarPagerType == "undefined") {
    var VRStarPagerType = {};
    VRStarPagerType.VRStarModelPager = 0x1; //< ģ�͵����߳�
    VRStarPagerType.VRStarTexturePager = 0x2; //< ���������߳� 
    VRStarPagerType.VRStarFeaturePager = 0x4; //< Ҫ�ص����߳�
    VRStarPagerType.VRStarTilesPager = 0x8;  //< ��Ƭ�����߳� 
    VRStarPagerType.VRStarAllPager = 0xFFFF; //< �����߳� 
}
/*! brief UIEvent����  */
if (typeof VRStarUIEventType == "undefined") {
    var VRStarUIEventType = {};
    VRStarUIEventType.VRStarUINone = 0; //< None.
	VRStarUIEventType.VRStarUIMouseClick = 1; //< �����.  
	VRStarUIEventType.VRStarUIMouseEntersArea = 2; //< ������ؼ�����. 
	VRStarUIEventType.VRStarUIMouseLeavesArea = 3; //< ����뿪�ؼ�����. 
	VRStarUIEventType.VRStarUIMouseButtonDown = 4; //< ��갴��. 
	VRStarUIEventType.VRStarUIMouseButtonUp = 5; //< ��굯��.  
	VRStarUIEventType.VRStarUIMouseButtonDoubleClick = 6; //< ���˫��. 
	VRStarUIEventType.VRStarUIMouseMove = 7; //< ����ƶ�. 
}
/*! brief ��갴������  */
if (typeof VRStarUIMouseButtonType == "undefined") {
    var VRStarUIMouseButtonType = {};
    VRStarUIMouseButtonType.VRStarUILeftButton = 0; //< ���.
	VRStarUIMouseButtonType.VRStarUIRightButton = 1; //< �Ҽ�.  
	VRStarUIMouseButtonType.VRStarUIMiddleButton = 2; //< �м�. 
	VRStarUIMouseButtonType.VRStarUIX1Button = 3; //< ��һ�����. 
	VRStarUIMouseButtonType.VRStarUIX2Button = 4; //< �ڶ������. 
	VRStarUIMouseButtonType.VRStarUIMouseButtonCount = 5; //< ֧�ֵ���갴������.  
	VRStarUIMouseButtonType.VRStarUINoButton = 6; //< ��. 
}
/*! brief ͼ������ */
if (typeof VRStarPipeFeatureLayerType == "undefined") {
    var VRStarPipeFeatureLayerType = {};
    VRStarPipeFeatureLayerType.VRStarPipeFeatureLayerPoint  = 0; //< ���ߵ�ͼ������.
	VRStarPipeFeatureLayerType.VRStarPipeFeatureLayerLine  = 1; //< ������ͼ������.  
}


/*
*	enum VRStarRenderControl
*/

/*! brief ����ʽ��ǰ�᣺�߿�>0�������ء� */
if (typeof VRStarDashStyle == "undefined") {
    var VRStarDashStyle = {};
	VRStarDashStyle.VRStarDashSolid = 0;	//< ʵ�ߣ�Ĭ��ֵ��
	VRStarDashStyle.VRStarDashXLarge = 1;	//< ������
	VRStarDashStyle.VRStarDashLarge = 2;	//< ����
	VRStarDashStyle.VRStarDashSmall = 3;	//< С���
	VRStarDashStyle.VRStarDashTiny = 4;		//< ��С���
	VRStarDashStyle.DashDots = 5;			//< �ȼ��� 
	VRStarDashStyle.DashDot = 6;			//< ����
	VRStarDashStyle.DashDotDot = 7;			//< ˫���� 
}
/**
 * ����ο�ϵͳ����Ĺ�����
 * Creator   Jimmy
 * Time      2016-6-29
 */

export function CoordinateReferenceSystemFactory() {
    var pCoorFactory = plugin.CoordinateReferenceSystemFactory;

    /**
     * ��WKT����������ϵͳ
     * @param {string} sWKT
     * @return {SpatialCoordinateReferenceSystem} pCoorSystem
     */
    this.CreateFromWKT = function (sWKT) {
        var pCoorSystem = pCoorFactory.CreateFromWKT(sWKT);
        if ((pCoorSystem != null)&&(pCoorSystem != undefined)&&(pCoorSystem.isvalid)) {
            var enumCoorSystemType = pCoorSystem.CoordinateReferenceSystemType;
            switch (enumCoorSystemType){
                case VRStarCoordinateReferenceSystemType.VRStarCoordinateReferenceSystemProject:
                    return new ProjectedCoordinateReferenceSystem(pCoorSystem);
                case VRStarCoordinateReferenceSystemType.VRStarCoordinateReferenceSystemGeographic:
                    return new SpatialCoordinateReferenceSystem(pCoorSystem);
                default :
                    return new CoordinateReferenceSystem(pCoorSystem);
            }
        }
        else{
            return null;
        }
    }
}



/**
 * ����ο�ϵͳ����
 * pImportCoorSystemΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-6-24
 */

export function CoordinateReferenceSystem(pImportCoorSystem) {
    var pCoorSystem = pImportCoorSystem;

    this.getNpObject = function () {
        return pCoorSystem;
    };

    /**
     * ��ȡ����������ϵ����
     * @param {string} sName
     * @return {string}
     */
    this.getName = function(){
        return pCoorSystem.Name;
    };

    this.setName = function(sName){
        pCoorSystem.Name = sName;
    };

    /**
     * ��ȡ����������ϵ����
     * @param {string} sAlias
     * @return {string}
     */
    this.getAlias = function(){
        return pCoorSystem.Alias;
    };

    this.setAlias = function(sAlias){
        pCoorSystem.Alias = sAlias;
    };


    /**
     * ��ȡ����������ϵ��д��
     * @param {string} sAbbr
     * @return {string}
     */
    this.getAbbreviation = function(){
        return pCoorSystem.Abbreviation;
    };

    this.setAbbreviation = function(sAbbr){
        pCoorSystem.Abbreviation = sAbbr;
    };

    /**
     * ��ȡ����ϵ����
     * @return {CoordinateReferenceSystemType}
     */
    this.getCoordinateReferenceSystemType = function(){
        return pCoorSystem.CoordinateReferenceSystemType;
    };

    /**
     * ��ȡ����������ϵ��ע��
     * @param {string} sRemarks
     * @return {string}
     */
    this.getRemarks = function(){
        return pCoorSystem.Remarks;
    };

    this.setRemarks = function(sRemarks){
        pCoorSystem.Remarks = sRemarks;
    };

    /**
     * �ж���������ϵ�Ƿ���ͬ
     * @param {CoordinateReferenceSystemType}
     * @return {boolean}
     */
    this.IsSame = function(pNewCoorSystem){
        if((pNewCoorSystem != null)&&(pNewCoorSystem != undefined)&&(pNewCoorSystem.Valid())){
            return pCoorSystem.IsSame(pNewCoorSystem.getNpObject());
        }
        else{
            return pCoorSystem.IsSame(pNewCoorSystem);
        }
    };

    /**
     * ��¡����ϵ
     * @return {CoordinateReferenceSystem} pNewCoorSystem
     */
    this.Clone = function () {
        var pNewCoorSystem = pCoorSystem.Clone();
        if ((pNewCoorSystem != null)&&(pNewCoorSystem != undefined)&&(pNewCoorSystem.isvalid)) {
            var enumCoorSystemType = pNewCoorSystem.CoordinateReferenceSystemType;
            switch (enumCoorSystemType){
                case VRStarCoordinateReferenceSystemType.VRStarCoordinateReferenceSystemProject:
                    return new ProjectedCoordinateReferenceSystem(pNewCoorSystem);
                case VRStarCoordinateReferenceSystemType.VRStarCoordinateReferenceSystemGeographic:
                    return new SpatialCoordinateReferenceSystem(pNewCoorSystem);
                default :
                    return new CoordinateReferenceSystem(pNewCoorSystem);
            }
        }
        else{
            return null;
        }
    };

    /**
     * �ѵ�ǰ����ϵ������WKT
     * @return {string}
     */
    this.AsWKT = function(){
        return pCoorSystem.AsWKT();
    };
}

/**
 * �ռ�����ϵ����
 * pCoorSpaSystemΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-6-24
 */
export function SpatialCoordinateReferenceSystem(pCoorSpaSystem) {
    CoordinateReferenceSystem.call(this, pCoorSpaSystem);

    this.Valid = function () {
        return pCoorSpaSystem.isvalid;
    };

    /**
     * ��ȡ������ƽ������ֱ���
     * @param {double} dXYResolution
     * @return {double}
     */
    this.getXYResolution = function () {
        return pCoorSpaSystem.XYResolution;
    };

    this.setXYResolution = function (dXYResolution) {
        pCoorSpaSystem.XYResolution = dXYResolution;
    };

    /**
     * ��ȡ������ƽ�������ݲ�
     * @param {double} dXYTolerance
     * @return {double}
     */
    this.getXYTolerance = function () {
        return pCoorSpaSystem.XYTolerance;
    };

    this.setXYTolerance = function (dXYTolerance) {
        pCoorSpaSystem.XYTolerance = dXYTolerance;
    };

    /**
     * ��ȡ�����ô�ֱ����ֱ���
     * @param {double} dZResolution
     * @return {double}
     */
    this.getZResolution = function () {
        return pCoorSpaSystem.ZResolution;
    };

    this.setZResolution = function (dZResolution) {
        pCoorSpaSystem.ZResolution = dZResolution;
    };

    /**
     * ��ȡ�����ô�ֱ�����ݲ�
     * @param {double} dZTolerance
     * @return {double}
     */
    this.getZTolerance = function () {
        return pCoorSpaSystem.ZTolerance;
    };

    this.setZTolerance = function (dZTolerance) {
        pCoorSpaSystem.ZTolerance = dZTolerance;
    };

    /**
     * ��ȡ������Mֵ�ֱ���
     * @param {double} dMResolution
     * @return {double}
     */
    this.getMResolution = function () {
        return pCoorSpaSystem.MResolution;
    };

    this.setMResolution = function (dMResolution) {
        pCoorSpaSystem.MResolution = dMResolution;
    };

    /**
     * ��ȡ������Mֵ�ݲ�
     * @param {double} dMTolerance
     * @return {double}
     */
    this.getMTolerance = function () {
        return pCoorSpaSystem.MTolerance;
    };

    this.setMTolerance = function (dMTolerance) {
        pCoorSpaSystem.MTolerance = dMTolerance;
    };

    /**
     * �жϻ����õ�ǰ����ϵ�Ƿ��Ǹ߾�ģʽ
     * @param {boolean} bHighPrecision
     * @return {boolean}
     */
    this.getHighPrecision = function () {
        return pCoorSpaSystem.HighPrecision;
    };

    this.setHighPrecision = function (bHighPrecision) {
        pCoorSpaSystem.HighPrecision = bHighPrecision;
    };

    /**
     * ��ȡ�����ú�����ֵ��Χ
     * @param {DoubleDomain} pDoubleDomain
     * @return {DoubleDomain} pDoubleDomain
     */
    this.getXDomain = function () {
        var pDoubleDomain = pCoorSpaSystem.XDomain;
        if ((pDoubleDomain != null)&&(pDoubleDomain != undefined)&&(pDoubleDomain.isvalid)) {
            return new DoubleDomain(pDoubleDomain);
        }
        else{
            return null;
        }
    };

    this.setXDomain = function (pDoubleDomain) {
        if((pDoubleDomain != null)&&(pDoubleDomain != undefined)&&(pDoubleDomain.Valid())){
            pCoorSpaSystem.XDomain = pDoubleDomain.getNpObject();
        }
        else{
            pCoorSpaSystem.XDomain = pDoubleDomain;
        }
    };

    /**
     * ��ȡ������������ֵ��Χ
     * @param {DoubleDomain} pDoubleDomain
     * @return {DoubleDomain} pDoubleDomain
     */
    this.getYDomain = function () {
        var pDoubleDomain = pCoorSpaSystem.YDomain;
        if ((pDoubleDomain != null)&&(pDoubleDomain != undefined)&&(pDoubleDomain.isvalid)) {
            return new DoubleDomain(pDoubleDomain);
        }
        else{
            return null;
        }
    };

    this.setYDomain = function (pDoubleDomain) {
        if((pDoubleDomain != null)&&(pDoubleDomain != undefined)&&(pDoubleDomain.Valid())){
            pCoorSpaSystem.YDomain = pDoubleDomain.getNpObject();
        }
        else{
            pCoorSpaSystem.YDomain = pDoubleDomain;
        }
    };

    /**
     * ��ȡ�����ô�ֱ����ֵ��
     * @param {DoubleDomain} pDoubleDomain
     * @return {DoubleDomain} pDoubleDomain
     */
    this.getZDomain = function () {
        var pDoubleDomain = pCoorSpaSystem.ZDomain;
        if ((pDoubleDomain != null)&&(pDoubleDomain != undefined)&&(pDoubleDomain.isvalid)) {
            return new DoubleDomain(pDoubleDomain);
        }
        else{
            return null;
        }
    };

    this.setZDomain = function (pDoubleDomain) {
        if((pDoubleDomain != null)&&(pDoubleDomain != undefined)&&(pDoubleDomain.Valid())){
            pCoorSpaSystem.ZDomain = pDoubleDomain.getNpObject();
        }
        else{
            pCoorSpaSystem.ZDomain = pDoubleDomain;
        }
    };

    /**
     * ��ȡ������Mֵ��
     * @param {DoubleDomain} pDoubleDomain
     * @return {DoubleDomain} pDoubleDomain
     */
    this.getMDomain = function () {
        var pDoubleDomain = pCoorSpaSystem.MDomain;
        if ((pDoubleDomain != null)&&(pDoubleDomain != undefined)&&(pDoubleDomain.isvalid)) {
            return new DoubleDomain(pDoubleDomain);
        }
        else{
            return null;
        }
    };

    this.setMDomain = function (pDoubleDomain) {
        if((pDoubleDomain != null)&&(pDoubleDomain != undefined)&&(pDoubleDomain.Valid())){
            pCoorSpaSystem.MDomain = pDoubleDomain.getNpObject();
        }
        else{
            pCoorSpaSystem.MDomain = pDoubleDomain;
        }
    };

    /**
     * ��ȡ������Xֵ�����ֵ
     * @param {double} dFalseX
     * @return {double}
     */
    this.getFalseX = function () {
        return pCoorSpaSystem.FalseX;
    };

    this.setFalseX = function (dFalseX) {
        pCoorSpaSystem.FalseX = dFalseX;
    };

    /**
     * ��ȡ������Yֵ�����ֵ
     * @param {double} dFalseY
     * @return {double}
     */
    this.getFalseY = function () {
        return pCoorSpaSystem.FalseY;
    };

    this.setFalseY = function (dFalseY) {
        pCoorSpaSystem.FalseY = dFalseY;
    };

    /**
     * ��ȡ������Zֵ�����ֵ
     * @param {double} dFalseZ
     * @return {double}
     */
    this.getFalseZ = function () {
        return pCoorSpaSystem.FalseZ;
    };

    this.setFalseZ = function (dFalseZ) {
        pCoorSpaSystem.FalseZ = dFalseZ;
    };

    /**
     * ��ȡ������Mֵ�����ֵ
     * @param {double} dFalseM
     * @return {double}
     */
    this.getFalseM = function () {
        return pCoorSpaSystem.FalseM;
    };

    this.setFalseM = function (dFalseM) {
        pCoorSpaSystem.FalseM = dFalseM;
    };

    /**
     * ��ȡ������ƽ������ֵ��߶�����
     * @param {double} dXYUnits
     * @return {double}
     */
    this.getXYUnits = function () {
        return pCoorSpaSystem.XYUnits;
    };

    this.setXYUnits = function (dXYUnits) {
        pCoorSpaSystem.XYUnits = dXYUnits;
    };

    /**
     * ��ȡ�����ô�ֱ����ֵ��߶�����
     * @param {double} dZUnits
     * @return {double}
     */
    this.getZUnits = function () {
        return pCoorSpaSystem.ZUnits;
    };

    this.setZUnits = function (dZUnits) {
        pCoorSpaSystem.ZUnits = dZUnits;
    };

    /**
     * ��ȡ������Mֵ��߶�����
     * @param {double} dMUnits
     * @return {double}
     */
    this.getMUnits = function () {
        return pCoorSpaSystem.MUnits;
    };

    this.setMUnits = function (dMUnits) {
        pCoorSpaSystem.MUnits = dMUnits;
    };

    /**
    * �ж���������ϵ�ľ����Ƿ����
     * @param {SpatialCoordinateReferenceSystem} pNewCoorSystem
     * @return {boolean}
    */
    this.IsPrecisionEqual = function (pNewCoorSystem) {
        if((pNewCoorSystem != null)&&(pNewCoorSystem != undefined)&&(pNewCoorSystem.Valid())){
            return pCoorSpaSystem.IsPrecisionEqual(pNewCoorSystem.getNpObject());
        }
        else{
            return pCoorSpaSystem.IsPrecisionEqual(pNewCoorSystem);
        }
    };

    /**
    * ������һ����ο�ϵͳ���µ�ǰ����ϵ
    */
    this.UpdateByOther = function (pSpatialCoordinateReferenceSystem) {
        return pCoorSpaSystem.UpdateByOther(pSpatialCoordinateReferenceSystem.getNpObject());
    };

    /**
    * ͨ������XYά�ȵ�ֵ��Χ������XY��ֵ�ֱ���
    */
    this.SetDefaultResolutionXY = function () {
        pCoorSpaSystem.SetDefaultResolutionXY();
    };

    /**
    * ������X��Yά�����ж������غϵ�Ĭ���ݲ�ֵ(��ǰ����ϵ��λ����1mm�ȼ۵ĳ���)
    */
    this.SetDefaultToleranceXY = function () {
        pCoorSpaSystem.SetDefaultToleranceXY();
    };

    /**
    * ����ȱʡZ����ֱ���
    */
    this.SetDefaultResolutionZ = function () {
        pCoorSpaSystem.SetDefaultResolutionZ();
    };

    /**
    * ����Zά��Ĭ���ݲ�ֵ
    */
    this.SetDefaultToleranceZ = function () {
        pCoorSpaSystem.SetDefaultToleranceZ();
    };

    /**
    * ����ȱʡM����ֱ���
    */
    this.SetDefaultResolutionM = function () {
        pCoorSpaSystem.SetDefaultResolutionM();
    };

    /**
    * ����M����ȱʡ�ݲ�
    */
    this.SetDefaultToleranceM = function () {
        pCoorSpaSystem.SetDefaultToleranceM();
    };
}

/**
 * ͶӰ����ϵ
 * pProjectedCoorSpaSystemΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-6-24
 */
export function ProjectedCoordinateReferenceSystem (pProjectedCoorSpaSystem){
    SpatialCoordinateReferenceSystem.call(this, pProjectedCoorSpaSystem);

    this.Valid = function () {
        return pProjectedCoorSpaSystem.isvalid;
    };

    /**
     * ����ī����ͶӰ
     * @param {long} lZone
     * @param {boolean} bNorth
     * @return {boolean}
     */
    this.SetUTM = function (lZone,bNorth) {
        return pProjectedCoorSpaSystem.SetUTM(lZone,bNorth);
    };

    /**
     * ���ÿռ�ο�
     * @param {string}  sProjection
     * @return {boolean}
     */
    this.SetProjection = function (sProjection) {
        return pProjectedCoorSpaSystem.SetProjection(sProjection);
    };

    /**
     * ��ȡī����ͶӰ�ֶȴ�
     * @param {long}  lNorth
     * @return {long}
     */
    this.GetUTMZone = function (lNorth) {
        return pProjectedCoorSpaSystem.GetUTMZone(lNorth);
    };

    /**
     * ���ò���ֵ
     * @param {string} sName
     * @param {double} dValue
     * @return {boolean}
     */
    this.SetParameters = function (sName,dValue) {
        return pProjectedCoorSpaSystem.SetParameters(sName,dValue);
    };

    /**
     * ��ȡ����ֵ
     * @param {string} sName
     * @param {double} dValue
     * @param {double} pValue
     * @return {boolean} pValueResult
     */
    this.GetParameters = function (sName,dValue) {
        var operateRes = pProjectedCoorSpaSystem.GetParameters(sName,dValue);
        if((operateRes != null) && (operateRes != undefined) &&(operateRes.valid)) {
            var dValueRes = operateRes.pValue;
            var bValueRes = operateRes.pValueResult;
            return new GetParametersParameter(dValueRes, bValueRes);
        }
        else{
            return operateRes;
        }
    };
    function GetParametersParameter(dValueRes, bValueRes){
        this.pValue = dValueRes;
        this.pValueResult = bValueRes;
    }

    /**
     * ���ó��ȵ�λ
     * @param {string} sUnitsName
     * @param {double}  dMeters
     * @return {boolean}
     */
    this.SetLinearUnits = function (sUnitsName,dMeters) {
        return pProjectedCoorSpaSystem.SetLinearUnits(sUnitsName,dMeters);
    };

    /**
     * ��ȡ���ȵ�λ
     * @param {string} sUnitsName
     * @param {double} dMeters
     * @param {double} pMeter
     * @return {boolean} pValueResult
     */
    this.GetLinearUnits = function (sUnitsName,dMeters) {
        var operateRes = pProjectedCoorSpaSystem.GetLinearUnits(sUnitsName,dMeters);
        if((operateRes != null) && (operateRes != undefined) &&(operateRes.valid)) {
            var dMetersRes = operateRes.pMeter;
            var bValueRes = operateRes.pValueResult;
            return new GetLinearUnitsParameter(dMetersRes, bValueRes);
        }
        else{
            return operateRes;
        }
    };
    function GetLinearUnitsParameter(dMetersRes, bValueRes){
        this.pMeter = dMetersRes;
        this.pValueResult = bValueRes;
    }
}


/**
 * ����ת���ӿ�
 * Creator   Jimmy
 * Time      2016-06-24
 */

export function CoordinateTransformer(){
    var pCoorTransformer = plugin.NewCoordinateTransformer();

    this.getNpObject = function () {
        return pCoorTransformer;
    };

    /**
     * ����Դ����ϵ��Ŀ������ϵ
     * @param {SpatialCoordinateReferenceSystem} pSourceSpaCoorSystem
     * @param {SpatialCoordinateReferenceSystem} pTargetSpaCoorSystem
     */
    this.SetCRS = function(pSourceSpaCoorSystem,pTargetSpaCoorSystem){
        var pSourceSpaCoorSystemMid = null;
        if((pSourceSpaCoorSystem != null)&&(pSourceSpaCoorSystem != undefined)&&(pSourceSpaCoorSystem.Valid())){
            pSourceSpaCoorSystemMid = pSourceSpaCoorSystem.getNpObject();
        }
        else{
            pSourceSpaCoorSystemMid = pSourceSpaCoorSystem
        }
        var pTargetSpaCoorSystemMid = null;
        if((pTargetSpaCoorSystem != null)&&(pTargetSpaCoorSystem != undefined)&&(pTargetSpaCoorSystem.Valid())){
            pTargetSpaCoorSystemMid = pTargetSpaCoorSystem.getNpObject();
        }
        else{
            pTargetSpaCoorSystemMid = pTargetSpaCoorSystem
        }
        pCoorTransformer.SetCRS(pSourceSpaCoorSystemMid, pTargetSpaCoorSystemMid);
    };

    /**
     * ִ������ת��
     * @param {double} dX
     * @param {double} dY
     * @return {double} dxRes
     * @return {double} dyRes
     * @return {boolean} bValueRes
     */
    this.TransformXY = function(dX,dY){
        var operateRes = pCoorTransformer.TransformXY(dX, dY);
        if((operateRes != null) && (operateRes != undefined) &&(operateRes.valid)) {
            var dxRes = operateRes.X;
            var dyRes = operateRes.Y;
            var bValueRes = operateRes.ResultValue;
            return new TransformXYParameter(dxRes, dyRes, bValueRes);
        }
        else{
            return operateRes;
        }
    };
    function TransformXYParameter(dxRes,dyRes,bValueRes){
        this.X = dxRes;
        this.Y = dyRes;
        this.ResultValue = bValueRes;
    }

    /**
     * ִ������ת��
     * @param {double} dX
     * @param {double} dY
     * @param {double} dZ
     * @return {boolean}
     */
    this.TransformXYZ = function(dX,dY,dZ){
        var operateRes =  pCoorTransformer.TransformXYZ(dX, dY, dZ);
        if((operateRes != null) && (operateRes != undefined) && (operateRes.valid)) {
            var dxRes = operateRes.X;
            var dyRes = operateRes.Y;
            var dzRes = operateRes.Z;
            var bValueRes = operateRes.ResultValue;
            return new TransformXYZParameter(dxRes, dyRes, dzRes, bValueRes);
        }
        else{
            return operateRes;
        }
    };
    function TransformXYZParameter(dxRes,dyRes,dzRes,bValueRes){
        this.X = dxRes;
        this.Y = dyRes;
        this.Z = dzRes;
        this.ResultValue = bValueRes;
    }
}
/**
 * ���м��ζ������͵ĳ������
 * Creator   Jimmy
 * Time      2016-06-20
 */

export function GeometryFactory() {
    var pGeoFactory = plugin.GeometryFactory;

    /**
     * ����WKB���������ζ���
     * @param {BinaryBuffer} pBinarys
     * @return {Geometry} pGeometry
     */
    this.CreateFromBinary = function (pBinarys) {
        var pBinarysMid = null;
        if((pBinarys != null)&&(pBinarys != undefined)&&(pBinarys.Valid())){
            pBinarysMid = pBinarys.getNpObject();
        }
        else{
            pBinarysMid = pBinarys;
        }
        var pGeometry = pGeoFactory.CreateFromBinary(pBinarysMid);
        if ((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.isvalid)) {
            var enumGeometryType = pGeometry.GeometryType;
            switch (enumGeometryType) {
                case VRStarGeometryType.VRStarGeometryUnknow:
                    return new Geometry(pGeometry);
                case VRStarGeometryType.VRStarGeometryPoint:
                    return new Point(pGeometry);
                case VRStarGeometryType.VRStarGeometryModelPoint:
                    return new ModelPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryArc:
                    return new CirculeArc(pGeometry);
                case VRStarGeometryType.VRStarGeometryLine:
                    return new Line(pGeometry);
                case VRStarGeometryType.VRStarGeometryCircle:
                    return new Circle(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolyline:
                    return new Polyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryRing:
                    return new Ring(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolygon:
                    return new Polygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryTriMesh:
                    return new TriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryCollection:
                    return new GeometryCollection(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPoint:
                    return new MultiPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolyline:
                    return new MultiPolyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolygon:
                    return new MultiPolygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiTrimesh:
                    return new MultiTriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryPointCloud:
                    return new PointCloud(pGeometry);
			    case VRStarGeometryType.VRStarGeometryWell:
                    return new Well(pGeometry);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    };

    /**
     * ����WKT���������϶���
     * @param {string} sWKT
     * @return {Geometry} pGeometry
     */
    this.CreateFromWKT = function (sWKT) {
        var pGeometry = pGeoFactory.CreateFromWKT(sWKT);
        if ((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.isvalid)) {
            var enumGeometryType = pGeometry.GeometryType;
            switch (enumGeometryType) {
                case VRStarGeometryType.VRStarGeometryUnknow:
                    return new Geometry(pGeometry);
                case VRStarGeometryType.VRStarGeometryPoint:
                    return new Point(pGeometry);
                case VRStarGeometryType.VRStarGeometryModelPoint:
                    return new ModelPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryArc:
                    return new CirculeArc(pGeometry);
                case VRStarGeometryType.VRStarGeometryLine:
                    return new Line(pGeometry);
                case VRStarGeometryType.VRStarGeometryCircle:
                    return new Circle(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolyline:
                    return new Polyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryRing:
                    return new Ring(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolygon:
                    return new Polygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryTriMesh:
                    return new TriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryCollection:
                    return new GeometryCollection(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPoint:
                    return new MultiPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolyline:
                    return new MultiPolyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolygon:
                    return new MultiPolygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiTrimesh:
                    return new MultiTriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryPointCloud:
                    return new PointCloud(pGeometry);
				case VRStarGeometryType.VRStarGeometryWell:
                    return new Well(pGeometry);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    };

    /**
     * �������ζ���
     * @param {VRStarGeometryType} enumGeometryType
     * @param {VertexAttributeType} enumVertexAttributeType
     * @return {Geometry} pGeometry
     */
    this.CreateGeometry = function (enumGeometryType, enumVertexAttributeType) {
        var pGeometry = pGeoFactory.CreateGeometry(enumGeometryType, enumVertexAttributeType);
        if ((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.isvalid)) {
            switch (enumGeometryType) {
                case VRStarGeometryType.VRStarGeometryUnknow:
                    return new Geometry(pGeometry);
                case VRStarGeometryType.VRStarGeometryPoint:
                    return new Point(pGeometry);
                case VRStarGeometryType.VRStarGeometryModelPoint:
                    return new ModelPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryArc:
                    return new CirculeArc(pGeometry);
                case VRStarGeometryType.VRStarGeometryLine:
                    return new Line(pGeometry);
                case VRStarGeometryType.VRStarGeometryCircle:
                    return new Circle(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolyline:
                    return new Polyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryRing:
                    return new Ring(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolygon:
                    return new Polygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryTriMesh:
                    return new TriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryCollection:
                    return new GeometryCollection(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPoint:
                    return new MultiPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolyline:
                    return new MultiPolyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolygon:
                    return new MultiPolygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiTrimesh:
                    return new MultiTriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryPointCloud:
                    return new PointCloud(pGeometry);
				case VRStarGeometryType.VRStarGeometryWell:
                    return new Well(pGeometry);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    }
}

/**
 * ���м��ζ������͵ĳ������
 * pTriMeshΪ����Ĳ���
 * Creator   Jimmy
 * Time      2017-02-10
 */
export function TriMesh(pTriMesh) {
    Surface.call(this, pTriMesh);

    this.Valid = function () {
        return pTriMesh.isvalid;
    };
    /**
     * ����һ��ƽ���ռ�ĵ�
     * @param {Point} pPoint
     * @return {TopoNode} pTopoNode
     */
    this.AddPoint = function (pPoint) {
        var pTopoNode = null;
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pTopoNode = pTriMesh.AddPoint(pPoint.getNpObject());
        }
        else{
            pTopoNode = pTriMesh.AddPoint(pPoint);
        }
        if ((pTopoNode != null)&&(pTopoNode != undefined)&&(pTopoNode.isvalid)) {
            return new TopoNode(pTopoNode);
        }
        else{
            return null;
        }
    };

    /**
     * ͨ��������������������������һ����Ƭfacet
     * @param {TopoNode} pTopoNode1
     * @param {TopoNode} pTopoNode2
     * @param {TopoNode} pTopoNode3
     * @return {TopoFacet} pTopoFacet
     */
    this.AddTriangle = function (pTopoNode1, pTopoNode2, pTopoNode3) {
        var pTopoNodeMid1 = null;
        if((pTopoNode1 != null)&&(pTopoNode1 != undefined)&&(pTopoNode1.Valid())){
            pTopoNodeMid1 = pTopoNode1.getNpObject();
        }
        else{
            pTopoNodeMid1 = pTopoNode1;
        }
        var pTopoNodeMid2 = null;
        if((pTopoNode2 != null)&&(pTopoNode2 != undefined)&&(pTopoNode2.Valid())){
            pTopoNodeMid2 = pTopoNode2.getNpObject();
        }
        else{
            pTopoNodeMid2 = pTopoNode2;
        }
        var pTopoNodeMid3 = null;
        if((pTopoNode3 != null)&&(pTopoNode3 != undefined)&&(pTopoNode3.Valid())){
            pTopoNodeMid3 = pTopoNode3.getNpObject();
        }
        else{
            pTopoNodeMid3 = pTopoNode3;
        }
        var pTopoFacet = pTriMesh.AddTriangle(pTopoNodeMid1, pTopoNodeMid2, pTopoNodeMid3);
        if ((pTopoFacet != null)&&(pTopoFacet != undefined)&&(pTopoFacet.isvalid)) {
            return new TopoFacet(pTopoFacet);
        }
        else{
            return null;
        }
    };

    /**
     *  ɾ����ָ���������ı�
     *  @param {TopoEdge} pTopoEdge
     *  @return {boolean}
     */
    this.EraseConnectedEdge = function (pTopoEdge) {
        if((pTopoEdge != null)&&(pTopoEdge != undefined)&&(pTopoEdge.Valid())){
            return pTriMesh.EraseConnectedEdge(pTopoEdge.getNpObject());
        }
        else{
            return pTriMesh.EraseConnectedEdge(pTopoEdge);
        }
    };

    /**
     *  ɾ����ָ������������
     *  @param {TopoFacet} pTopoFacet
     *  @return {boolean}
     */
    this.EraseConnectedFacet = function (pTopoFacet) {
        if((pTopoFacet != null)&&(pTopoFacet != undefined)&&(pTopoFacet.Valid())){
            return pTriMesh.EraseConnectedFacet(pTopoFacet.getNpObject());
        }
        else{
            return pTriMesh.EraseConnectedFacet(pTopoFacet);
        }
    };

    /**
     *  ɾ��facet
     *  @param {TopoFacet} pTopoFacet
     *  @return {boolean}
     */
    this.EraseFacet = function (pTopoFacet) {
        if((pTopoFacet != null)&&(pTopoFacet != undefined)&&(pTopoFacet.Valid())){
            return pTriMesh.EraseFacet(pTopoFacet.getNpObject());
        }
        else{
            return pTriMesh.EraseFacet(pTopoFacet);
        }
    };

    /**
     *  ɾ�������δ���ӵĶ���
     *  @return {boolean}
     */
    this.RemoveUnconnectedNode = function () {
        return pTriMesh.RemoveUnconnectedNode();
    };

    /**
     *   ��ȡ��λ����meshλ�ù�ϵ������mesh�ϣ���mesh�ϣ����㣬�ߣ��棩
     *   @param {Point} pPoint
     *   @return {VRStarLocateStatus} enumLocateStatus
     *   @return {long} lIndex
     *   @return {TopoFacet} pTopoFacet
     */
    this.Locate = function (pPoint) {
        var operateRes = null;
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            operateRes = pTriMesh.Locate(pPoint.getNpObject());
        }
        else{
            operateRes = pTriMesh.Locate(pPoint);
        }
        if((operateRes != null) && (operateRes != undefined) && (operateRes.valid)) {
            var enumLocateStatus = operateRes.LocateStatus;
            var lIndex = operateRes.Index;
            var pTopoFacet = operateRes.TopoFacetResult;
            var pTopoFacetMid = null;
            if ((pTopoFacet != null) && (pTopoFacet != undefined) && (pTopoFacet.isvalid)) {
                pTopoFacetMid = new TopoFacet(pTopoFacet);
            }
            else {
                pTopoFacetMid = null;
            }
            return new LocateParameter(enumLocateStatus, lIndex, pTopoFacetMid);
        }
        else{
            return operateRes;
        }
    };
    function LocateParameter(enumLocateStatus,lIndex,pTopoFacet){
        this.LocateStatus = enumLocateStatus;
        this.Index = lIndex;
        this.TopoFacetResult = pTopoFacet;
    }

    /**
     *  �߶���
     *  @param {Line} pLine
     *  @return {Vector3} pVector3
     */
    this.LineSegmentIntersect = function (pLine) {
        var pVector3 = null;
        if((pLine != null)&&(pLine != undefined)&&(pLine.Valid())){
            pVector3 = pTriMesh.LineSegmentIntersect(pLine.getNpObject());
        }
        else{
            pVector3 = pTriMesh.LineSegmentIntersect(pLine);
        }
        if ((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.isvalid)) {
            return new Vector3(pVector3);
        }
        return null;
    };

    /**
     *  ������
     *  @param {Line} pLine
     *  @param {Vector3} pVector3
     *  @return {Vector3} pVector3Res
     */
    this.RayIntersect = function (pLine, pVector3) {
        var pLineMid = null;
        if((pLine != null)&&(pLine != undefined)&&(pLine.Valid())){
            pLineMid = pLine.getNpObject();
        }
        else{
            pLineMid = pLine;
        }
        var pVector3Mid = null;
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            pVector3Mid = pVector3.getNpObject();
        }
        else{
            pVector3Mid = pVector3;
        }
        var pVector3Res = pTriMesh.RayIntersect(pLineMid, pVector3Mid);
        if ((pVector3Res != null)&&(pVector3Res != undefined)&&(pVector3Res.isvalid)) {
            return new Vector3(pVector3Res);
        }
        else {
            return null;
        }
    };

    /**
     *  �������������
     *  @return {boolean}
     */
    this.Close = function () {
        return pTriMesh.Close();
    };

    /**
     * �������㣺��ȡ��ʼ����
     * @return {TopoNode} pTopoNode
     */
    this.FirstNode = function () {
        var pTopoNode = pTriMesh.FirstNode();
        if ((pTopoNode != null)&&(pTopoNode != undefined)&&(pTopoNode.isvalid)) {
            return new TopoNode(pTopoNode);
        }
        else {
            return null;
        }
    };

    /**
     * �����������������
     * @param {DoubleCollection} pDoublesIndex
     * @return {DoubleCollection} pDoublesIndexRes
     * @param {UInt16Collection} pUInt16s
     * @return {UInt16Collection} pUInt16sRes
     * @param {FloatCollection} pFloatsU1V1
     * @return {FloatCollection} pFloatsU1V1Res
     * @param {FloatCollection} pFloatsU2V2
     * @return {FloatCollection} pFloatsU2V2Res
     * @param {DoubleCollection} pDoublesNorms
     * @return {DoubleCollection} pDoublesNormsRes
     * @return {double} bRes
     */
    this.BatchExport = function (pDoublesIndex,pUInt16s,pFloatsU1V1,pFloatsU2V2,pDoublesNorms) {
        var pDoublesIndexUse = null;
        if((pDoublesIndex != null)&&(pDoublesIndex != undefined)&&(pDoublesIndex.Valid())){
            pDoublesIndexUse = pDoublesIndex.getNpObject();
        }
        else{
            pDoublesIndexUse = pDoublesIndex;
        }
        var pUInt16sUse = null;
        if((pUInt16s != null)&&(pUInt16s != undefined)&&(pUInt16s.Valid())){
            pUInt16sUse = pUInt16s.getNpObject();
        }
        else{
            pUInt16sUse = pUInt16s;
        }
        var pFloatsU1V1Use = null;
        if((pFloatsU1V1 != null)&&(pFloatsU1V1 != undefined)&&(pFloatsU1V1.Valid())){
            pFloatsU1V1Use = pFloatsU1V1.getNpObject();
        }
        else{
            pFloatsU1V1Use = pFloatsU1V1;
        }
        var pFloatsU2V2Use = null;
        if((pFloatsU2V2 != null)&&(pFloatsU2V2 != undefined)&&(pFloatsU2V2.Valid())){
            pFloatsU2V2Use = pFloatsU2V2.getNpObject();
        }
        else{
            pFloatsU2V2Use = pFloatsU2V2;
        }
        var pDoublesNormsUse = null;
        if((pDoublesNorms != null)&&(pDoublesNorms != undefined)&&(pDoublesNorms.Valid())){
            pDoublesNormsUse = pDoublesNorms.getNpObject();
        }
        else{
            pDoublesNormsUse = pDoublesNorms;
        }
        var operateRes = pTriMesh.BatchExport(pDoublesIndexUse,pUInt16sUse,pFloatsU1V1Use,pFloatsU2V2Use,pDoublesNormsUse);
        if((operateRes != null) && (operateRes != undefined) && (operateRes.valid)) {
            var pDoublesIndexMid = operateRes.VertexArray;
            var pDoublesIndexRes = null;
            if ((pDoublesIndexMid != null) && (pDoublesIndexMid != undefined) && (pDoublesIndexMid.isvalid)) {
                pDoublesIndexRes = new DoubleCollection(pDoublesIndexMid);
            }
            else {
                return null;
            }
            var pUInt16sMid = operateRes.IndexArray;
            var pUInt16sRes = null;
            if ((pUInt16sMid != null) && (pUInt16sMid != undefined) && (pUInt16sMid.isvalid)) {
                pUInt16sRes = new UInt16Collection(pUInt16sMid);
            }
            else {
                return null;
            }
            var pFloatsU1V1Mid = operateRes.TextureU1V1Array;
            var pFloatsU1V1Res = null;
            if ((pFloatsU1V1Mid != null) && (pFloatsU1V1Mid != undefined) && (pFloatsU1V1Mid.isvalid)) {
                pFloatsU1V1Res = new FloatCollection(pFloatsU1V1Mid);
            }
            else {
                return null;
            }
            var pFloatsU2V2Mid = operateRes.TextureU2V2Array;
            var pFloatsU2V2Res = null;
            if ((pFloatsU2V2Mid != null) && (pFloatsU2V2Mid != undefined) && (pFloatsU2V2Mid.isvalid)) {
                pFloatsU2V2Res = new FloatCollection(pFloatsU2V2Mid);
            }
            else {
                return null;
            }
            var pDoublesNormsMid = operateRes.NormalArray;
            var pDoublesNormsRes = null;
            if ((pDoublesNormsMid != null) && (pDoublesNormsMid != undefined) && (pDoublesNormsMid.isvalid)) {
                pDoublesNormsRes = new DoubleCollection(pDoublesNormsMid);
            }
            else {
                return null;
            }
            var bRes = operateRes.ResultValue;
            return new BatchExportParameter(pDoublesIndexRes, pUInt16sRes, pFloatsU1V1Res, pFloatsU2V2Res, pDoublesNormsRes, bRes);
        }
        else{
            return operateRes;
        }
    };
    function BatchExportParameter(pDoublesIndexRes,pUInt16sRes,pFloatsU1V1Res,pFloatsU2V2Res,pDoublesNormsRes,bRes){
        this.VertexArray = pDoublesIndexRes;
        this.IndexArray = pUInt16sRes;
        this.TextureU1V1Array = pFloatsU1V1Res;
        this.TextureU2V2Array = pFloatsU2V2Res;
        this.NormalArray = pDoublesNormsRes;
        this.ResultValue = bRes;
    }

    /**
     * �������㣺��ȡ��ʼ����
     * @return {TopoNode} pTopoNode
     */
    this.FirstNode = function () {
        var pTopoNode = pTriMesh.FirstNode();
        if ((pTopoNode != null)&&(pTopoNode != undefined)&&(pTopoNode.isvalid)) {
            return new TopoNode(pTopoNode);
        }
        else{
            return null;
        }
    };

    /**
     * �������㣺��ȡ��ֹ����
     * @return {TopoNode} pTopoNode
     */
    this.LastNode = function () {
        var pTopoNode = pTriMesh.LastNode();
        if ((pTopoNode != null)&&(pTopoNode != undefined)&&(pTopoNode.isvalid)) {
            return new TopoNode(pTopoNode);
        }
        else{
            return null;
        }
    };

    /**
     *  ��ȡ��������
     *  @return {long}
     */
    this.NodeCount = function () {
        return pTriMesh.NodeCount;
    };

    /**
     * �����ߣ���ȡ��ʼ��
     * @return {TopoEdge} pTopoEdge
     */
    this.FirstEdge = function () {
        var pTopoEdge = pTriMesh.FirstEdge();
        if ((pTopoEdge != null)&&(pTopoEdge != undefined)&&(pTopoEdge.isvalid)) {
            return new TopoEdge(pTopoEdge);
        }
        else{
            return null;
        }
    };

    /**
     * �����ߣ���ȡ������
     * @return {TopoEdge} pTopoEdge
     */
    this.LastEdge = function () {
        var pTopoEdge = pTriMesh.LastEdge();
        if ((pTopoEdge != null)&&(pTopoEdge != undefined)&&(pTopoEdge.isvalid)) {
            return new TopoEdge(pTopoEdge);
        }
        else{
            return null;
        }
    };

    /**
     *  ��ȡ�ߵ�����
     *  @return {long}
     */
    this.EdgeCount = function () {
        return pTriMesh.EdgeCount;
    };

    /**
     * �����棺��ȡ��ʼ��
     * @return {TopoFacet} pTopoFacet
     */
    this.FirstFacet = function () {
        var pTopoFacet = pTriMesh.FirstFacet();
        if ((pTopoFacet != null)&&(pTopoFacet != undefined)&&(pTopoFacet.isvalid)) {
            return new TopoFacet(pTopoFacet);
        }
        else{
            return null;
        }
    };

    /**
     * �����棺��ȡ������
     * @return {TopoFacet} pTopoFacet
     */
    this.LastFacet = function () {
        var pTopoFacet = pTriMesh.LastFacet();
        if ((pTopoFacet != null)&&(pTopoFacet != undefined)&&(pTopoFacet.isvalid)) {
            return new TopoFacet(pTopoFacet);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�������
     * @return {long}
     */
    this.FacetCount = function () {
        return pTriMesh.FacetCount;
    };

    // /**
     // * ���α任�ӿ�
     // * @return {Transform} pTransform
     // */
    // this.getTransform = function () {
        // var pTransform = pTriMesh.Transform;
        // if ((pTransform != null)&&(pTransform != undefined)&&(pTransform.isvalid)) {
            // return new Transform(pTransform);
        // }
        // else{
            // return null;
        // }
    // };
}

/**
 * ���м��ζ������͵ĳ������
 * pGeometryΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-06-20
 */

export function Geometry(pGeometry){

    this.getNpObject = function () {
        return pGeometry;
    };

    /**
     * ��ȡ���������С��ӳ����壬��Depth>=0
     * @return {Envelope} pEnvelope
     */
    this.getEnvelope = function () {
        var pEnvelope = pGeometry.Envelope;
        if ((pEnvelope != null)&&(pEnvelope != undefined)&&(pEnvelope.isvalid)) {
            return new Envelope(pEnvelope);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�����������
     * @return {VRStarGeometryType}
     */
    this.getGeometryType = function(){
        return pGeometry.GeometryType;
    };

    /**
     * ��ȡ�����ö�����������
     * @param {VRStarVertexAttributeType} enumVertexAttributeType
     * @return {VRStarVertexAttributeType}
     */
    this.getVertexAttributeType = function(){
        return pGeometry.VertexAttribute;
    };
    this.setVertexAttributeType = function(enumVerAttrType){
        pGeometry.VertexAttribute = enumVerAttrType;
    };

    /**
     * ��ȡ�ռ�ά��
     * @return {VRStarGeometryDimension}
     */
    this.getGeometryDimension = function(){
        return pGeometry.GeometryDimension;
    };

    /**
     * ��ȡ�����ÿռ�����ο�ϵͳ
     * @param {SpatialCoordinateReferenceSystem} pSpaCoorReferSystem
     * @return {SpatialCoordinateReferenceSystem} pSpaCoorReferSystem
     */
    this.getSpatialCoordinateReferenceSystem = function () {
        var pSpaCoorReferSystem = pGeometry.SpatialCoordinateReferenceSystem;
        if ((pSpaCoorReferSystem != null)&&(pSpaCoorReferSystem != undefined)&&(pSpaCoorReferSystem.isvalid)) {
            return new SpatialCoordinateReferenceSystem(pSpaCoorReferSystem);
        }
        else{
            return null;
        }
    };
    this.setSpatialCoordinateReferenceSystem = function(pSpaCoorReferSystem){
        if((pSpaCoorReferSystem != null)&&(pSpaCoorReferSystem != undefined)&&(pSpaCoorReferSystem.Valid())){
            pGeometry.SpatialCoordinateReferenceSystem = pSpaCoorReferSystem.getNpObject();
        }
        else{
            pGeometry.SpatialCoordinateReferenceSystem = pSpaCoorReferSystem;
        }
    };

    /**
     * �Ƿ���и߶�ֵ
     * @return {boolean}
     */
    this.getHasZ = function(){
        return pGeometry.HasZ;
    };

    /**
     * �Ƿ���в���ֵ
     * @return {boolean}
     */
    this.getHasM = function(){
        return pGeometry.HasM;
    };

    /**
     * �Ƿ����"�������"
     * @return {boolean}
     */
    this.getHasId = function(){
        return pGeometry.HasId;
    };

    /**
     * ���������ÿ�
     */
    this.SetEmpty = function () {
        pGeometry.SetEmpty();
    };

    /**
     * ��ȡ���˲���
     * @return {TopologicalOperator} pTopoOperator
     */
    this.getTopologicalOperator = function () {
        var pTopoOperator = pGeometry.TopologicalOperator;
        if ((pTopoOperator != null)&&(pTopoOperator != undefined)&&(pTopoOperator.isvalid)) {
            return new TopologicalOperator(pTopoOperator);
        }
        else{
            return null;
        }
    };
	
	    /**
     * ��ȡ�жϿռ伸�ι�ϵ�Ľӿ�
     * @return {RelationalOperator} pRelaOperator
     */
    this.getRelationalOperator = function () {
        var pRelaOperator = pGeometry.RelationalOperator;
        if ((pRelaOperator != null)&&(pRelaOperator != undefined)&&(pRelaOperator.isvalid)) {
            return new RelationalOperator(pRelaOperator);
        }
        else{
            return null;
        }
    };

    /**
     * �ڽ������ӿ�
     * @return {ProximityOperator} pProOperator
     */
    this.getProximityOperator = function () {
        var pProOperator = pGeometry.ProximityOperator;
        if ((pProOperator != null)&&(pProOperator != undefined)&&(pProOperator.isvalid)) {
            return new ProximityOperator(pProOperator);
        }
        else{
            return null;
        }
    };
	
	/**
     * ���α任�ӿ�
     * @return {Transform} pTransform
     */
    this.getTransform = function () {
        var pTransform = pGeometry.Transform;
        if ((pTransform != null)&&(pTransform != undefined)&&(pTransform.isvalid)) {
            return new Transform(pTransform);
        }
        else{
            return null;
        }
    };

    /**
     * ��¡������������ԴGeometry��ͬ
     * @param {VRStarVertexAttributeType} enumVerAttrType
     * @return {Geometry} pGeometry
     */
    this.Clone = function (enumVerAttrType) {
        var pGeometryRes = pGeometry.Clone(enumVerAttrType);
        if ((pGeometryRes != null)&&(pGeometryRes != undefined)&&(pGeometryRes.isvalid)) {
            var enumGeometryType = pGeometryRes.GeometryType;
            switch (enumGeometryType) {
                case VRStarGeometryType.VRStarGeometryUnknow:
                    return new Geometry(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryPoint:
                    return new Point(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryModelPoint:
                    return new ModelPoint(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryArc:
                    return new CirculeArc(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryLine:
                    return new Line(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryCircle:
                    return new Circle(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryPolyline:
                    return new Polyline(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryRing:
                    return new Ring(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryPolygon:
                    return new Polygon(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryTriMesh:
                    return new TriMesh(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryCollection:
                    return new GeometryCollection(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryMultiPoint:
                    return new MultiPoint(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryMultiPolyline:
                    return new MultiPolyline(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryMultiPolygon:
                    return new MultiPolygon(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryMultiTrimesh:
                    return new MultiTriMesh(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryPointCloud:
                    return new PointCloud(pGeometryRes);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    };

    /**
     * ���л��ɶ���������
     * @return {BinaryBuffer} pBinarys
     */
    this.AsBinary = function () {
        var pBinarys = pGeometry.AsBinary();
        if ((pBinarys != null)&&(pBinarys != undefined)&&(pBinarys.isvalid)) {
            return new BinaryBuffer(pBinarys);
        }
        else{
            return null;
        }
    };

    /**
     * ������WKT
     * @return {string}
     */
    this.AsWKT = function () {
        return pGeometry.AsWKT();
    };

    /**
     * ��Geometry�Ķ�������ת����ָ������ϵ(SRSTarget)��
     * @param {SpatialCoordinateReferenceSystem} pSpaCoorReferSystem
     * @return {boolean}
     */
    this.Project = function (pSpaCoorReferSystem) {
        if((pSpaCoorReferSystem != null)&&(pSpaCoorReferSystem != undefined)&&(pSpaCoorReferSystem.Valid())){
            return pGeometry.Project(pSpaCoorReferSystem.getNpObject());
        }
        else{
            return pGeometry.Project(pSpaCoorReferSystem);
        }
    };
}

/**
 * ����
 * pCurveΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-06-20
 */

export function Curve(pCurve) {
    Geometry.call(this, pCurve);

    this.Valid = function () {
        return pCurve.isvalid;
    };

    /**
     * ��ȡ��������ʼ������
     * @param {Point} pPoint
     * @return {Point} pPoint
     */
    this.getStartPoint = function () {
        var pPoint = pCurve.StartPoint;
        if ((pPoint != null)&&(pPoint != undefined)&&(pPoint.isvalid)) {
            return new Point(pPoint);
        }
        else{
            return null;
        }
    };
    this.setStartPoint = function (pPoint) {
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pCurve.StartPoint = pPoint.getNpObject();
        }
        else{
            pCurve.StartPoint = pPoint;
        }
    };

    /**
     * ��ȡ�����ý���������
     * @param {Point} pPoint
     * @return {Point} pPoint
     */
    this.getEndPoint = function () {
        var pPoint = pCurve.EndPoint;
        if ((pPoint != null)&&(pPoint != undefined)&&(pPoint.isvalid)) {
            return new Point(pPoint);
        }
        else{
            return null;
        }
    };
    this.setEndPoint = function (pPoint) {
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pCurve.EndPoint = pPoint.getNpObject();
        }
        else{
            pCurve.EndPoint = pPoint;
        }
    };

    /**
     * ��ȡ����"·��(���������е�����ʵĺ�)"���е�
     * @return {Point} pPoint
     */
    this.getMiddlePoint = function () {
        var pPoint = pCurve.MiddlePoint;
        if ((pPoint != null)&&(pPoint != undefined)&&(pPoint.isvalid)) {
            return new Point(pPoint);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ���߳���
     * @return {double}
     */
    this.getLength = function () {
        return pCurve.Length;
    };

    /**
     * �ж������Ƿ��գ��������˵��Ƿ��غ�
     * @return {boolean}
     */
    this.getIsClosed = function () {
        return pCurve.IsClosed;
    };

    /**
     * �����ߵ㼯�ϵĵ�����
     */
    this.Reverse = function () {
        pCurve.Reverse();
    };
}

/**
 * Բ
 * pCircleΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-06-20
 */

export function Circle(pCircle) {
    Curve.call(this, pCircle);

    this.Valid = function () {
        return pCircle.isvalid;
    };
    /**
     * ��ȡ������Բ���ĵ�
     * @param {Point} pPoint
     * @return {Point} pPoint
     */
    this.getCenterPoint = function () {
        var pPoint = pCircle.CenterPoint;
        if ((pPoint != null)&&(pPoint != undefined)&&(pPoint.isvalid)) {
            return new Point(pPoint);
        }
        else{
            return null;
        }
    };
    this.setCenterPoint = function (pPoint) {
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pCircle.CenterPoint = pPoint.getNpObject();
        }
        else{
            pCircle.CenterPoint = pPoint;
        }
    };

    /**
     * ��ȡ�����ð뾶
     * @param {double} dRadius
     * @return {double}
     */
    this.getRadius = function () {
        return pCircle.Radius;
    };
    this.setRadius = function (dRadius) {
        pCircle.Radius = dRadius;
    };

    /**
     * ��ȡ������Բ����ʸ��
     * @param {Vector3} pVector3
     * @return {Vector3} pVector3
     */
    this.getNormal = function () {
        var pVector3 = pCircle.Normal;
        if ((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.isvalid)) {
            return new Vector3(pVector3);
        }
        else{
            return null;
        }
    };
    this.setNormal = function (pVector3) {
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            pCircle.Normal = pVector3.getNpObject();
        }
        else{
            pCircle.Normal = pVector3;
        }
    }
}

/**
 * Ƭ��
 * pGeoSegmentΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-06-20
 */

export function GeoSegment(pGeoSegment) {
    Curve.call(this, pGeoSegment);

    /**
     * ��ȡƬ��segment�Ĳ�ֵ����
     * @return {VRStarCurveInterpolationType}
     */
    this.getInterpolationType = function () {
        return pGeoSegment.InterpolationType;
    };
}

/**
 * Բ��
 * pCirculeArcΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-06-20
 */

export function CirculeArc(pCirculeArc) {

    GeoSegment.call(this, pCirculeArc);

    this.Valid = function () {
        return pCirculeArc.isvalid;
    };

    /**
     * ��ȡ������Բ�����м��ĳһ��
     * @param {Point} pPoint
     * @return {Point} pPoint
     */
    this.getArcPoint = function () {
        var pPoint = pCirculeArc.ArcPoint;
        if ((pPoint != null)&&(pPoint != undefined)&&(pPoint.isvalid)) {
            return new Point(pPoint);
        }
        else{
            return null;
        }
    };
    this.setArcPoint = function (pPoint) {
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pCirculeArc.ArcPoint = pPoint.getNpObject();
        }
        else{
            pCirculeArc.ArcPoint = pPoint;
        }
    };

    /**
     * ��ȡԲ�����ĵ�
     * @return {Point} pPoint
     */
    this.getCenterPoint = function () {
        var pPoint = pCirculeArc.CenterPoint;
        if ((pPoint != null)&&(pPoint != undefined)&&(pPoint.isvalid)) {
            return new Point(pPoint);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡԲ���뾶
     * @return {double}
     */
    this.getRadius = function () {
        return pCirculeArc.Radius;
    };

    /**
     * ��ȡԲ����Ӧ���Ž�(����)
     * @return {double}
     */
    this.getCentralAngle = function () {
        return pCirculeArc.CentralAngle;
    };

    /**
     * ��ȡԲ������
     * @return {double}
     */
    this.getChordHeight = function () {
        return pCirculeArc.ChordHeight;
    };

    /**
     * ��ȡԲ������
     * @return {double}
     */
    this.getChordLength = function () {
        return pCirculeArc.ChordLength;
    };

    // /**
     // * ���α任�ӿ�
     // * @return {Transform} pTransform
     // */
    // this.getTransform = function () {
        // var pTransform = pCirculeArc.Transform;
        // if ((pTransform != null)&&(pTransform != undefined)&&(pTransform.isvalid)) {
            // return new Transform(pTransform);
        // }
        // else{
            // return null;
        // }
    // };
}

/**
 * ֱ�߶�
 * pLineΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-06-20
 */

export function Line(pLine) {
    GeoSegment.call(this, pLine);

    this.Valid = function () {
        return pLine.isvalid;
    };
    /**
     * �ж��Ƿ��˻�Ϊ��
     * @return {boolean}
     */
    this.getIsPoint = function () {
        return pLine.IsPoint;
    };
}

/**
 * ����
 * pPolylineΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-06-20
 */

export function Polyline(pPolyline) {
    Curve.call(this, pPolyline);

    this.Valid = function () {
        return pPolyline.isvalid;
    };
    /**
     * ��ȡSegment����
     * @return {long}
     */
    this.getSegmentCount = function () {
        return pPolyline.SegmentCount;
    };

    /**
     * ��ȡ�ܵ���
     * @return {long}
     */
    this.getPointCount = function () {
        return pPolyline.PointCount;
    };


    /**
     * ��ȡָ��������Segment������
     * @param {long} lIndex
     * @return {GeoSegment} pGeoSegment
     */
    this.GetSegment = function (lIndex) {
        var pGeoSegment = pPolyline.GetSegment(lIndex);
        if ((pGeoSegment != null)&&(pGeoSegment != undefined)&&(pGeoSegment.isvalid)) {
            return new GeoSegment(pGeoSegment);
        }
        else{
            return null;
        }
    };

    /**
     * ����һ��segment
     * @param {GeoSegment} pGeoSegment
     */
    this.AddSegment = function (pGeoSegment) {
        if((pGeoSegment != null)&&(pGeoSegment != undefined)&&(pGeoSegment.Valid())){
            pPolyline.AddSegment(pGeoSegment.getNpObject());
        }
        else{
            pPolyline.AddSegment(pGeoSegment);
        }
    };

    /**
     * ��ָ������λ��ǰ����һ��Segment
     */
    this.InsertSegment = function (nBeforeIndex, pSegment) {
        pPolyline.InsertSegment(nBeforeIndex, pSegment.getNpObject());
    };

    /**
     * ɾ��ָ������λ�ÿ�ʼ��Count��Segment,����Indexλ�õ�Segment
     * @param {long} lIndex
     * @param {long} lCount
     */
    this.RemoveSegments = function (lIndex, lCount) {
        pPolyline.RemoveSegments(lIndex, lCount);
    };

    /**
     * ����ָ������λ�õ�segment
     * @param {long} lIndex
     * @param {GeoSegment} pGeoSegment
     */
    this.UpdateSegment = function (iIndex, pSegment) {
        if((pSegment != null)&&(pSegment != undefined)&&(pSegment.Valid())){
            pPolyline.UpdateSegment(iIndex, pSegment.getNpObject());
        }
        else{
            pPolyline.UpdateSegment(iIndex, pSegment);
        }
    };

    /**
     * �Ѹ����ߵ�ÿһ��Segmentת���ɱ�����(Bezier)Segment
     */
    this.Smooth = function (dMaxAllowOffset) {
        pPolyline.Smooth(dMaxAllowOffset);
    };

    /**
     * �Ѱ���ָ���������������������SegmentӦ��Smooth����ת���ɱ���������
     */
    this.SmoothLocal = function (iIndex) {
        pPolyline.SmoothLocal(iIndex);
    };

    /**
     * ��ȡָ�������ĵ�
     * @param {long} lIndex
     * @return {Point} pPoint
     */
    this.GetPoint = function (lIndex) {
        var pPoint = pPolyline.GetPoint(lIndex);
        if ((pPoint != null)&&(pPoint != undefined)&&(pPoint.isvalid)) {
            return new Point(pPoint);
        }
        else{
            return null;
        }
    };

    /**
     * ���ӵ�
     * @param {Point} pPoint
     */
    this.AddPoint = function (pPoint) {
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pPolyline.AddPoint(pPoint.getNpObject());
        }
        else{
            pPolyline.AddPoint(pPoint);
        }
    };

    /**
     * ��ָ������λ��ǰ����һ����
     */
    this.InsertPoint = function (iBeforeIndex, pPoi) {
        pPolyline.InsertPoint(iBeforeIndex, pPoi.getNpObject());
    };

    /**
     * ɾ��ָ������λ�ÿ�ʼ��Count��Point,����Indexλ�õ�Point
     * @param {long} lIndex
     * @param {long} lCount
     */
    this.RemovePoints = function (lIndex, lCount) {
        pPolyline.RemovePoints(lIndex, lCount);
    };

    /**
     * ����ָ������λ�õĵ�
     * @param {long} lIndex
     * @return {Point} pPoint
     */
    this.UpdatePoint = function (lIndex, pPoint) {
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pPolyline.UpdatePoint(lIndex, pPoint.getNpObject());
        }
        else{
            pPolyline.UpdatePoint(lIndex, pPoint);
        }
    };

    // /**
     // * ��ȡ�жϿռ伸�ι�ϵ�Ľӿ�
     // * @return {RelationalOperator} pRelaOperator
     // */
    // this.getRelationalOperator = function () {
        // var pRelaOperator = pPolyline.RelationalOperator;
        // if ((pRelaOperator != null)&&(pRelaOperator != undefined)&&(pRelaOperator.isvalid)) {
            // return new RelationalOperator(pRelaOperator);
        // }
        // else{
            // return null;
        // }
    // };

    // /**
     // * ��ȡ���˲���
     // * @return {TopologicalOperator} pTopoOperator
     // */
    // this.getTopologicalOperator = function () {
        // var pTopoOperator = pPolyline.TopologicalOperator;
        // if ((pTopoOperator != null)&&(pTopoOperator != undefined)&&(pTopoOperator.isvalid)) {
            // return new TopologicalOperator(pTopoOperator);
        // }
        // else{
            // return null;
        // }
    // };

    // /**
     // * �ڽ������ӿ�
     // * @return {ProximityOperator} pProOperator
     // */
    // this.getProximityOperator = function () {
        // var pProOperator = pPolyline.ProximityOperator;
        // if ((pProOperator != null)&&(pProOperator != undefined)&&(pProOperator.isvalid)) {
            // return new ProximityOperator(pProOperator);
        // }
        // else{
            // return null;
        // }
    // };
}

/**
 * ��
 * pRingΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-06-21
 */

export function Ring(pRing) {
    Polyline.call(this, pRing);

    this.Valid = function () {
        return pRing.isvalid;
    };
    /**
     * ��Polyline��β����׵�֮������ һ��Segmentʹ����β�����غ�
     */
    this.Close = function () {
        pRing.Close();
    };

    /**
     * �жϴ�ĳһ����������۲�Ring����ת����
     */
    this.IsCCW3D = function (pVectorNormal) {
        return ring.IsCCW3D(pVectorNormal.getNpObject());
    };
}

/**
 * ���ξۼ���GeoCollection��������������0��3ά�ļ�����ľۼ���aggregate��
 * pGeometrysΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-06-29
 */

export function GeometryCollection(pGeometrys) {
    Geometry.call(this, pGeometrys);

    this.Valid = function () {
        return GeometryCollection.isvalid;
    };

    /**
     * ��ȡ������ָ��λ�õļ��ζ���
     * @param {long} lIndex
     * @param {Geometry} pGeometry
     * @return {Geometry} pGeometry
     */
    this.GetGeometry = function (lIndex) {
        var pGeometry = pGeometrys.GetGeometry(lIndex);
        if ((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.isvalid)) {
            var enumGeometryType = pGeometry.GeometryType;
            switch (enumGeometryType) {
                case VRStarGeometryType.VRStarGeometryUnknow:
                    return new Geometry(pGeometry);
                case VRStarGeometryType.VRStarGeometryPoint:
                    return new Point(pGeometry);
                case VRStarGeometryType.VRStarGeometryModelPoint:
                    return new ModelPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryArc:
                    return new CirculeArc(pGeometry);
                case VRStarGeometryType.VRStarGeometryLine:
                    return new Line(pGeometry);
                case VRStarGeometryType.VRStarGeometryCircle:
                    return new Circle(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolyline:
                    return new Polyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryRing:
                    return new Ring(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolygon:
                    return new Polygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryTriMesh:
                    return new TriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryCollection:
                    return new GeometryCollection(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPoint:
                    return new MultiPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolyline:
                    return new MultiPolyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolygon:
                    return new MultiPolygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiTrimesh:
                    return new MultiTriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryPointCloud:
                    return new PointCloud(pGeometry);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    };
    this.SetGeometry = function (lIndex, pGeometry) {
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())){
            pGeometrys.SetGeometry(lIndex, pGeometry.getNpObject());
        }
        else{
            pGeometrys.SetGeometry(lIndex, pGeometry);
        }
    };

    /**
     * ��ȡ�ڲ�Geometry����
     * @return {long}
     */
    this.getGeometryCount = function () {
        return pGeometrys.GeometryCount;
    };

    /**
     * ����Geometry
     * @param {Geometry} pGeometry
     */
    this.AddGeometry = function (pGeometry) {
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())){
            pGeometrys.AddGeometry(pGeometry.getNpObject());
        }
        else{
            pGeometrys.AddGeometry(pGeometry);
        }
    };

    /**
     * ɾ������Geometry
     * @param {long} lIndex
     * @param {long} lCount
     */
    this.RemoveGeometry = function (lIndex, lCount) {
        pGeometrys.RemoveGeometry(lIndex, lCount);
    };

    /**
     * ���
     */
    this.ClearGeometries = function () {
        pGeometrys.ClearGeometries();
    };

    /**
     *��ȡ���뼯�ϵļ������Ƿ��ڿռ����ص�
     * @return {boolean}
     */
    this.getIsOverlap = function () {
        return pGeometrys.IsOverlap;
    };
}

/**
 * ���߼���
 * pCurvesΪ����Ĳ���
 * Creator   Jimmy
 * Time      2017-02-28
 */

export function MultiCurve(pCurves) {
    GeometryCollection.call(this, pCurves);

    this.Valid = function () {
        return pCurves.isvalid;
    };
}

/**
 * ���߼���
 * pPolylinesΪ����Ĳ���
 * Creator   Jimmy
 * Time      2017-02-28
 */

export function MultiPolyline(pPolylines) {
    MultiCurve.call(this, pPolylines);

    this.Valid = function () {
        return pPolylines.isvalid;
    };

    /**
     * ��ȡ�ܳ���
     * @return {double}
     */
    this.getLength = function () {
        return pPolylines.Length;
    };
}

/**
 * �㼯��
 * pPointsΪ����Ĳ���
 * Creator   Jimmy
 * Time      2017-02-28
 */
export function MultiPoint(pPoints) {

    GeometryCollection.call(this, pPoints);

    this.Valid = function () {
        return pPoints.isvalid;
    };
}

/**
 * ���漯��.
 * pSurfacesΪ����Ĳ���
 * Creator   Jimmy
 * Time      2017-02-28
 */
export function MultiSurface(pSurfaces) {
    GeometryCollection.call(this, pSurfaces);

    this.Valid = function () {
        return pSurfaces.isvalid;
    };
}

/**
 * ���漯��.
 * pPolygonsΪ����Ĳ���
 * Creator   Jimmy
 * Time      2017-02-28
 */
export function MultiPolygon(pPolygons) {
    MultiSurface.call(this, pPolygons);

    this.Valid = function () {
        return pPolygons.isvalid;
    };

    /**
     * ��ȡ�ܳ���
     *  @return {double}
     */
    this.getArea = function () {
        return pPolygons.Area;
    };
}

/**
 * ���������漯��
 * pTriMeshsΪ����Ĳ���
 * Creator   Jimmy
 * Time      2017-02-28
 */
export function MultiTriMesh(vGeometry) {
    MultiSurface.call(this, pTriMeshs);

    /**
     * �߶���
     * @param {Line} pLine
     * @return {Vector3} pVector3
     */
    this.LineIntersect = function (pLine) {
        var pVector3 = null;
        if((pLine != null)&&(pLine != undefined)&&(pLine.Valid())){
            pVector3 = vGeometry.LineIntersect(pLine.getNpObject());
        }
        else{
            pVector3 = vGeometry.LineIntersect(pLine);
        }
        if ((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.isvalid)) {
            return new Vector3(pVector3);
        }
        else{
            return null;
        }
    };

    /**
     * ������
     * @param {Point} pPoint
     * @param {Vector3} pVector3
     * @return {Vector3} pVector3Res
     */
    this.RayIntersect = function (pPoint,pVector3) {
        var pPointUse = null;
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pPointUse = pPoint.getNpObject();
        }
        else{
            pPointUse = pPoint;
        }
        var pVector3Use = null;
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            pVector3Use = pVector3.getNpObject();
        }
        else{
            pVector3Use = pVector3;
        }
        var pVector3Res = vGeometry.RayIntersect(pPointUse,pVector3Use);
        if ((pVector3Res != null)&&(pVector3Res != undefined)&&(pVector3Res.isvalid)) {
            return new Vector3(pVector3Res);
        }
        else{
            return null;
        }
    };
}

/**
 * ������
 * pPointΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-06-21
 */

export function Point(pPoint) {
    Geometry.call(this, pPoint);

    this.Valid = function () {
        return pPoint.isvalid;
    };

    /**
     * ��ȡ������X����
     * @param {double} dX
     * @return {double}
     */
    this.getX = function () {
        return pPoint.X;
    };
    this.setX = function (dX) {
        pPoint.X = dX;
    };

    /**
     * ��ȡ������Y����
     * @param {double} dY
     * @return {double}
     */
    this.getY = function () {
        return pPoint.Y;
    };
    this.setY = function (dY) {
        pPoint.Y = dY;
    };

    /**
     * ��ȡ������Z����
     * @param {double} dZ
     * @return {double}
     */
    this.getZ = function () {
        return pPoint.Z;

    };
    this.setZ = function (dZ) {
        pPoint.Z = dZ;
    };

    /**
     * ��ȡ�����ò���ֵ
     * @param {double} dM
     * @return {double}
     */
    this.getM = function () {
        return pPoint.M;
    };
    this.setM = function (dM) {
        pPoint.M = dM;
    };

    /**
     * ��ȡ�����ü������
     * @param {long} lID
     * @return {long}
     */
    this.getID = function () {
        return pPoint.ID;
    };
    this.setID = function (lID) {
        pPoint.ID = lID;
    };

    /**
     * ��ȡ������λ��
     * @param {Vector3} pVector3
     * @return {Vector3} pVector3
     */
    this.getPosition = function () {
        var pVector3 = pPoint.Position;
        if ((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.isvalid)) {
            return new Vector3(pVector3);
        }
        else{
            return null;
        }
    };
    this.setPosition = function (pVector3) {
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            pPoint.Position = pVector3.getNpObject();
        }
        else{
            pPoint.Position = pVector3;
        }
    };

    // /**
     // * ��ȡ�жϿռ伸�ι�ϵ�Ľӿ�
     // * @return {RelationalOperator} pRelaOperator
     // */
    // this.getRelationalOperator = function () {
        // var pRelaOperator = pPoint.RelationalOperator;
        // if ((pRelaOperator != null)&&(pRelaOperator != undefined)&&(pRelaOperator.isvalid)) {
            // return new RelationalOperator(pRelaOperator);
        // }
        // else{
            // return null;
        // }
    // };

    // /**
     // * ��ȡ���˲���
     // * @return {TopologicalOperator} pTopoOperator
     // */
    // this.getTopologicalOperator = function () {
        // var pTopoOperator = pPoint.TopologicalOperator;
        // if ((pTopoOperator != null)&&(pTopoOperator != undefined)&&(pTopoOperator.isvalid)) {
            // return new TopologicalOperator(pTopoOperator);
        // }
        // else{
            // return null;
        // }
    // };

    // /**
     // * �ڽ������ӿ�
     // * @return {ProximityOperator} pProOperator
     // */
    // this.getProximityOperator = function () {
        // var pProOperator = pPoint.ProximityOperator;
        // if ((pProOperator != null)&&(pProOperator != undefined)&&(pProOperator.isvalid)) {
            // return new ProximityOperator(pProOperator);
        // }
        // else{
            // return null;
        // }
    // };

    // /**
     // * ���α任�ӿ�
     // * @return {Transform} pTransform
     // */
    // this.getTransform = function () {
        // var pTransform = pPoint.Transform;
        // if ((pTransform != null)&&(pTransform != undefined)&&(pTransform.isvalid)) {
            // return new Transform(pTransform);
        // }
        // else{
            // return null;
        // }
    // };
}

/**
 * ģ��
 * pTransformΪ����Ĳ���
 * Creator   Jimmy
 * Time      2017-04-28
 */
export function Transform(pTransform){

    this.getNpObject = function () {
        return pTransform;
    };

    this.Valid = function () {
        return pTransform.isvalid;
    };

    /**
     * ƽ��:����λ������,�ƶ����ζ���
     * @param {double}  dX
     * @param {double}  dY
     * @param {double}  dZ
     */
    this.Move = function (dX,dY,dZ) {
        pTransform.Move(dX,dY,dZ);
    };

    /**
     * ��ƽ������ָ����ת���Ľ�����ת
     * @param {double}  dX
     * @param {double}  dY
     * @param {double}  dAngle
     */
    this.Rotate2D = function (dX,dY,dAngle) {
        pTransform.Rotate2D(dX,dY,dAngle);
    };

    /**
     * ָ���������㣬�����ζ�������ת����תָ���Ƕ�
     * @param {double}  dCenterX
     * @param {double}  dCenterY
     * @param {double}  dCenterZ
     * @param {double}  dAxisX
     * @param {double}  dAxisY
     * @param {double}  dAxisZ
     * @param {double}  dAngle
     */
    this.Rotate3D = function (dCenterX,dCenterY,dCenterZ,dAxisX,dAxisY,dAxisZ,dAngle) {
        pTransform.Rotate3D(dCenterX,dCenterY,dCenterZ,dAxisX,dAxisY,dAxisZ,dAngle);
    };

    /**
     * ���ţ����ָ���������ĵ��������
     * @param {double}  dCenterX
     * @param {double}  dCenterY
     * @param {double}  dCenterZ
     * @param {double}  dScaleX
     * @param {double}  dScaleY
     * @param {double}  dScaleZ
     */
    this.Scale = function (dCenterX,dCenterY,dCenterZ,dScaleX,dScaleY,dScaleZ) {
        pTransform.Scale(dCenterX,dCenterY,dCenterZ,dScaleX,dScaleY,dScaleZ);
    };
}
/**
 * ģ��
 * pModelPointΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-06-21
 */

export function ModelPoint(pModelPoint) {
    Point.call(this, pModelPoint);

    this.Valid = function () {
        return pModelPoint.isvalid;
    };

    /**
     * ��ȡ������ģ���ļ�·������
     * @param {string} sPathName
     * @return {string}
     */
    this.getPathName = function () {
        return pModelPoint.PathName;
    };
    this.setPathName = function (sPathName) {
        pModelPoint.PathName = sPathName;
    };

    /**
     * ��ȡ�������ڲ�3*3����
     * @param {FloatCollection} pFloats
     * @return {FloatCollection}
     */
    this.getMatrix = function () {
        var pFloats = pModelPoint.Matrix;
        if ((pFloats != null)&&(pFloats != undefined)&&(pFloats.isvalid)) {
            return new FloatCollection(pFloats);
        }
        else{
            return null;
        }
    };
    this.setMatrix = function (pFloats) {
        if((pFloats != null)&&(pFloats != undefined)&&(pFloats.Valid())){
            pModelPoint.Matrix = pFloats.getNpObject();
        }
        else{
            pModelPoint.Matrix = pFloats;
        }
    };

    /**
     * ��ȡ������ModelPoint���õ�ģ�͵İ�Χ�У�ע����ģ���Լ�������ϵ�µİ�Χ��
     * @param {Envelope} pEnvelope
     * @return {Envelope} pEnvelope
     */
    this.getModelEnvelope = function () {
        var pEnvelope = pModelPoint.ModelEnvelope;
        if ((pEnvelope != null)&&(pEnvelope != undefined)&&(pEnvelope.isvalid)) {
            return new Envelope(pEnvelope);
        }
        else{
            return null;
        }
    };
    this.setModelEnvelope = function (pEnvelope) {
        if((pEnvelope != null)&&(pEnvelope != undefined)&&(pEnvelope.Valid())){
            pModelPoint.ModelEnvelope = pEnvelope.getNpObject();
        }
        else{
            pModelPoint.ModelEnvelope = pEnvelope;
        }
    };

    // this.getTransform = function () {
        // var pTransform = pModelPoint.Transform;
        // if ((pTransform != null)&&(pTransform != undefined)&&(pTransform.isvalid)) {
            // return new Transform(pTransform);
        // }
        // else{
            // return null;
        // }
    // };

    /**
     * ���4*4����
     * @return {Matrix} pMatrix
     */
    this.AsMatrix = function () {
        var pMatrix = pModelPoint.AsMatrix();
        if ((pMatrix != null)&&(pMatrix != undefined)&&(pMatrix.isvalid)) {
            return new Matrix(pMatrix);
        }
        else{
            return null;
        }
    };

    /**
     * ��4*4������ڲ�3*3�����position��ֵ
     * @param {Matrix} pMatrix
     */
    this.FromMatrix = function (pMatrix) {
        if((pMatrix != null)&&(pMatrix != undefined)&&(pMatrix.Valid())){
            pModelPoint.FromMatrix(pMatrix.getNpObject());
        }
        else{
            pModelPoint.FromMatrix(pMatrix);
        }
    };

    /**
     * ������ģ����
     * @param {Model} pModel
     * @param {Point} pPoint
     * @param {Vector3} pVector3
     * @return {Vector3} pVector3Res
     */
    this.RayIntersect = function (pModel, pPoint, pVector3) {
        var pModelUse = null;
        if((pModel != null)&&(pModel != undefined)&&(pModel.Valid())){
            pModelUse = pModel.getNpObject();
        }
        else{
            pModelUse = pModel;
        }
        var pPointUse = null;
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pPointUse = pPoint.getNpObject();
        }
        else{
            pPointUse = pPoint;
        }
        var pVector3Use = null;
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            pVector3Use = pVector3.getNpObject();
        }
        else{
            pVector3Use = pVector3;
        }
        var pVector3Res = pModelPoint.RayIntersect(pModelUse, pPointUse, pVector3Use);
        if ((pVector3Res != null)&&(pVector3Res != undefined)&&(pVector3Res.isvalid)) {
            return new Vector3(pVector3Res);
        }
        else{
            return null;
        }
    };

    /**
     * ������ģ���󽻽ӿ�2
     * @param {Model} pModel
     * @param {Point} pPoint
     * @param {Vector3} pVector3
     * @return {FloatCollection } pFloats
     */
    this.RayIntersect2 = function (pModel, pPoint, pVector3) {
        var pModelUse = null;
        if((pModel != null)&&(pModel != undefined)&&(pModel.Valid())){
            pModelUse = pModel.getNpObject();
        }
        else{
            pModelUse = pModel;
        }
        var pPointUse = null;
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pPointUse = pPoint.getNpObject();
        }
        else{
            pPointUse = pPoint;
        }
        var pVector3Use = null;
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            pVector3Use = pVector3.getNpObject();
        }
        else{
            pVector3Use = pVector3;
        }
        var pFloatsRes = pModelPoint.RayIntersect2(pModelUse, pPointUse, pVector3Use);
        if ((pFloatsRes != null)&&(pFloatsRes != undefined)&&(pFloatsRes.isvalid)) {
            return new FloatCollection(pFloatsRes);
        }
        else{
            return null;
        }
    };

    /**
     * ����ģ����̬��������ת������
     */
    this.ResetPose = function () {
        pModelPoint.ResetPose();
    };

    /**
     * �����
     */
    this.Distance = function (pModel,pGeometry,bUse2D) {
        var pModelUse = null;
        if((pModel != null)&&(pModel != undefined)&&(pModel.Valid())){
            pModelUse = pModel.getNpObject();
        }
        else{
            pModelUse = pModel;
        }
        var pGeometryUse = null;
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())){
            pGeometryUse = pGeometry.getNpObject();
        }
        else{
            pGeometryUse = pGeometry;
        }
        return pModelPoint.Distance(pModelUse,pGeometryUse,bUse2D);
    };

    /**
     * �����
     */
    this.Distance2 = function (pModel,pModelPtOther,pModelOther,bUse2D) {
        var pModelUse = null;
        if((pModel != null)&&(pModel != undefined)&&(pModel.Valid())){
            pModelUse = pModel.getNpObject();
        }
        else{
            pModelUse = pModel;
        }
        var pModelPtOtherUse = null;
        if((pModelPtOther != null)&&(pModelPtOther != undefined)&&(pModelPtOther.Valid())){
            pModelPtOtherUse = pModelPtOther.getNpObject();
        }
        else{
            pModelPtOtherUse = pModelPtOther;
        }
        var pModelOtherUse = null;
        if((pModelOther != null)&&(pModelOther != undefined)&&(pModelOther.Valid())){
            pModelOtherUse = pModelOther.getNpObject();
        }
        else{
            pModelOtherUse = pModelOther;
        }
        return pModelPoint.Distance2(pModelUse,pModelPtOtherUse,pModelOtherUse,bUse2D);
    };

    /**
     * �����
     */
    this.DistanceEx = function (pModel,pGeometry,bUse2D) {
        var pModelUse = null;
        if((pModel != null)&&(pModel != undefined)&&(pModel.Valid())){
            pModelUse = pModel.getNpObject();
        }
        else{
            pModelUse = pModel;
        }
        var pGeometryUse = null;
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())){
            pGeometryUse = pGeometry.getNpObject();
        }
        else{
            pGeometryUse = pGeometry;
        }
        var operateRes = pModelPoint.DistanceEx(pModelUse,pGeometryUse,bUse2D);
        if(operateRes!=null){
            var pPointSrcUse = null;
            var pPointSrc = operateRes.PointSrc;
            if((pPointSrc != null)&&(pPointSrc != undefined)&&(pPointSrc.isvalid)){
                pPointSrcUse = new Point(pPointSrc);
            }
            else{
                pPointSrcUse = pPointSrc;
            }
            var pPointDstUse = null;
            var pPointDst = operateRes.PointDst;
            if((pPointDst != null)&&(pPointDst != undefined)&&(pPointDst.isvalid)){
                pPointDstUse = new Point(pPointDst);
            }
            else{
                pPointDstUse = pPointDst;
            }
            var dDistance = operateRes.Distance;
            return new DistanceExParameter(pPointSrcUse,pPointDstUse,dDistance);
        }
        else {
            return operateRes;
        }
    };
    function DistanceExParameter(pPointSrcUse,pPointDstUse,dDistance){
        this.PointSrc = pPointSrcUse;
        this.PointDst = pPointDstUse;
        this.Distance = dDistance;
    }

    /**
     * �����
     */
    this.DistanceEx2 = function (pModel,pModelPtOther,pModelOther,bUse2D) {
        var pModelUse = null;
        if((pModel != null)&&(pModel != undefined)&&(pModel.Valid())){
            pModelUse = pModel.getNpObject();
        }
        else{
            pModelUse = pModel;
        }
        var pModelPtOtherUse = null;
        if((pModelPtOther != null)&&(pModelPtOther != undefined)&&(pModelPtOther.Valid())){
            pModelPtOtherUse = pModelPtOther.getNpObject();
        }
        else{
            pModelPtOtherUse = pModelPtOther;
        }
        var pModelOtherUse = null;
        if((pModelOther != null)&&(pModelOther != undefined)&&(pModelOther.Valid())){
            pModelOtherUse = pModelOther.getNpObject();
        }
        else{
            pModelOtherUse = pModelOther;
        }
        var operateRes = pModelPoint.DistanceEx2(pModelUse,pModelPtOtherUse,pModelOtherUse,bUse2D);
        if(operateRes!=null){
            var pPointSrcUse = null;
            var pPointSrc = operateRes.PointSrc;
            if((pPointSrc != null)&&(pPointSrc != undefined)&&(pPointSrc.isvalid)){
                pPointSrcUse = new Point(pPointSrc);
            }
            else{
                pPointSrcUse = pPointSrc;
            }
            var pPointDstUse = null;
            var pPointDst = operateRes.PointDst;
            if((pPointDst != null)&&(pPointDst != undefined)&&(pPointDst.isvalid)){
                pPointDstUse = new Point(pPointDst);
            }
            else{
                pPointDstUse = pPointDst;
            }
            var dDistance = operateRes.Distance;
            return new DistanceEx2Parameter(pPointSrcUse,pPointDstUse,dDistance);
        }
        else {
            return operateRes;
        }
    };
    function DistanceEx2Parameter(pPointSrcUse,pPointDstUse,dDistance){
        this.PointSrc = pPointSrcUse;
        this.PointDst = pPointDstUse;
        this.Distance = dDistance;
    }

    /**
     * ��ģ�ͽ�����ת��������ѡ�������ת�Ƕ�
     * @param {double} dAxisX
     * @param {double} dAxisY
     * @param {double} dAxisZ
     * @param {double} dAngle
     */
    this.SelfRotate = function (dAxisX, dAxisY, dAxisZ, dAngle) {
        pModelPoint.SelfRotate(dAxisX, dAxisY, dAxisZ, dAngle);
    };

    /**
     * ��ģ�ͽ������ţ�������ѡ�������ת�Ƕ�
     * @param {double} dScacleX
     * @param {double} dScacleY
     * @param {double} dScacleZ
     */
    this.SelfScale = function (dScacleX, dScacleY, dScacleZ) {
        pModelPoint.SelfScale(dScacleX, dScacleY, dScacleZ);
    }
}

/**
 * ����
 * Creator   zzz
 * Time      2019-08-07
 */

export function WellCover(pImportWellCover) {
    var pWellCover = null;
    if (pImportWellCover == null) {
        pWellCover = plugin.NewWellCover();
    }
    else {
        pWellCover = pImportWellCover;
    }

    this.getNpObject = function () {
        return pWellCover;
    };

    this.Valid = function () {
        return pWellCover.isvalid;
    };

    /**
     * ��ȡ�����þ�����״��һ��ΪCircle��Բ�ξ��ǣ���Polygon�����ξ��ǣ����ͣ��Ҳ���Zֵ��
     * @param {Geometry} pGeometry
     * @return {Geometry} pGeometry
     */
    this.getCoverShape = function () {
        var pGeometry = pWellCover.CoverShape;
        if ((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.isvalid)) {
            return new Geometry(pGeometry);
        }
        else{
            return null;
        }
    };
    this.setCoverShape = function (pGeometry) {
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())){
            pWellCover.CoverShape = pGeometry.getNpObject();
        }
        else{
            pWellCover.CoverShape = pGeometry;
        }
    };
	
	  /**
     * ��ȡ�����þ����������ơ�
	 * @param {string} pName
     * @return {string} pName
     */
    this.getCoverImageName = function () {
        return pWellCover.CoverImageName;
    };
    this.setCoverImageName= function (pName) {
            pWellCover.CoverImageName = pName;
    };
	
	  /**
     * ���ݷ��ξ�����״���㷽�ξ�����״������ȷ�����ξ��Ƕ�һ���ԡ�
     * @param {Geometry} pWallShape
     * @param {DOUBLE} dCenterY
     * @param {DOUBLE} dWidth
	 * @param {DOUBLE} dHeight
     * @return {Geometry} pCoverShape
     */
    this.CalculateCoverRectangleByWallRectangle = function (pWallShape, dCenterY, dWidth,dHeight) {
        var pWallShapeUse = null;
        if((pWallShape != null)&&(pWallShape != undefined)&&(pWallShape.Valid())){
            pWallShapeUse = pWallShape.getNpObject();
        }
        else{
            pWallShapeUse = pWallShape;
        }
        var pCoverShape = pWellCover.CalculateCoverRectangleByWallRectangle(pWallShapeUse, dCenterY,dWidth, dHeight);
        if ((pCoverShape != null)&&(pCoverShape != undefined)&&(pCoverShape.isvalid)) {
            return new Geometry(pCoverShape);
        }
        else{
            return null;
        }
    };

}


/**
 * ����
 * Creator   zzz
 * Time      2019-08-08
 */

export function WellWall(pImportWellWall) {
    var pWellWall = null;
    if (pImportWellWall == null) {
        pWellWall = plugin.NewWellWall();
    }
    else {
        pWellWall = pImportWellWall;
    }

    this.getNpObject = function () {
        return pWellWall;
    };

    this.Valid = function () {
        return pWellWall.isvalid;
    };

    /**
     * ��ȡ�����þ�����״��һ��ΪCircle��Բ�ξ�����Polygon�����ξ������ͣ��Ҳ���Zֵ��
     * @param {Geometry} pGeometry
     * @return {Geometry} pGeometry
     */
    this.getWallShape = function () {
        var pGeometry = pWellWall.WallShape;
        if ((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.isvalid)) {
            return new Geometry(pGeometry);
        }
        else{
            return null;
        }
    };
    this.setWallShape = function (pGeometry) {
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())){
            pWellWall.WallShape = pGeometry.getNpObject();
        }
        else{
            pWellWall.WallShape = pGeometry;
        }
    };
	
	  /**
     * ��ȡ�����þ����������ơ�
	 * @param {string} pName
     * @return {string} pName
     */
    this.getWallImageName = function () {
        return pWellWall.CoverImageName;
    };
    this.setWallImageName= function (pName) {
            pWellWall.CoverImageName = pName;
    };
	
	/**
     * ��ȡ�����õ������
	 * @param {DOUBLE} pBottomAltitude
     * @return {DOUBLE} pBottomAltitude
     */
    this.getBottomAltitude = function () {
        return pWellWall.BottomAltitude;
    };
    this.setBottomAltitude= function (pBottomAltitude) {
            pWellWall.BottomAltitude = pBottomAltitude;
    };
	
	
	/**
     * ��ȡ�����ö������
	 * @param {DOUBLE} pTopAltitude
     * @return {DOUBLE} pTopAltitude
     */
    this.getTopAltitude= function () {
        return pWellWall.TopAltitude;
    };
    this.setTopAltitude= function (pTopAltitude) {
            pWellWall.TopAltitude = pTopAltitude;
    };
}


/**
 * ��ʩ���ࡣ��ʩ��Facility����һ����ά��ṹ��
 * Creator   zzz
 * Time      2019-08-08
 */

export function Facility(pFacility) {
    Geometry.call(this, pFacility);

    this.Valid = function () {
        return pFacility.isvalid;
    };
	
    /**
     * ��ȡ�߽�
     * @return {MultiCurve} pCurves
     */
    this.GetBound = function () {
        var pCurves = pFacility.GetBound();
        if ((pCurves != null)&&(pCurves != undefined)&&(pCurves.isvalid)) {
            return new MultiCurve(pCurves);
        }
        else{
            return null;
        }
    };
   
}


/**
 *���ҡ����ң�Well����һ����ά��ṹ��
 * Creator   zzz
 * Time      2019-08-08
 */

export function Well(pWell) {
    Facility.call(this, pWell);

    this.Valid = function () {
        return pWell.isvalid;
    };
	
	/**
     * ��ȡ����������
     * @return {LONG} pCoverCount
     */
    this.getWellCoverCount = function () {
        return pWell.WellCoverCount;
    };

    /**
     * �������뾮�Ƕ�������á�
     * @param {WellCover} pWellCover
     * @return 1-���ӳɹ���0-����ʧ�ܡ�
     */
    this.AddWellCover = function (pWellCover) {
        var pWellCoverUse = null;
        if((pWellCover != null)&&(pWellCover != undefined)&&(pWellCover.Valid())){
            pWellCoverUse = pWellCover.getNpObject();
        }
        else{
            pWellCoverUse = pWellCover;
        }
        return pWell.AddWellCover(pWellCoverUse);
    };
	
	  /**
     * ɾ����ָ�������ľ��Ƕ�������á�
     * @param {LONG} pIndex
     * @return 1-ɾ���ɹ���0-ɾ��ʧ�ܡ�
     */
    this.DeleteWellCover = function (pIndex) {
        return pWell.DeleteWellCover(pIndex);
    };
	
	
	/**
     * ��ȡָ�������ľ��ǵ����á�
     * @param {WellCover}pWellCover
     */
    this.GetWellCover = function (pIndex) {
      var pWellCover = pWell.GetWellCover();
        if ((pWellCover != null)&&(pWellCover != undefined)&&(pWellCover.isvalid)) {
            return new WellCover(pWellCover);
        }
        else{
            return null;
        }
    };
	
     /**
     * ����ָ�������ľ��ǡ�
     * @param {LONG} pIndex
     * @param {WellCover} pWellCover
     */
    this.SetWellCover = function (pIndex,pWellCover) {
        var pWellCoverUse = null;
        if((pWellCover != null)&&(pWellCover != undefined)&&(pWellCover.Valid())){
            pWellCoverUse = pWellCover.getNpObject();
        }
        else{
            pWellCoverUse = pWellCover;
        }
         pWell.SetWellCover(pIndex,pWellCoverUse);
    };
	
	/**
     * ��ȡ�����������
     * @return {LONG} OuterWallCount
     */
    this.getWellOuterWallCount = function () {
        return pWell.WellOuterWallCount;
    };

     /**
     * �������뾮��ڶ�������á�
     * @param {WellWall} pWellWall
     * @return 1-���ӳɹ���0-����ʧ�ܡ�
     */
    this.AddWellOuterWall = function (pWellWall) {
        var pWellWallUse = null;
        if((pWellWall != null)&&(pWellWall != undefined)&&(pWellWall.Valid())){
            pWellWallUse = pWellWall.getNpObject();
        }
        else{
            pWellWallUse = pWellWall;
        }
        return pWell.AddWellOuterWall(pWellWallUse);
    };
   	 /**
     * ɾ����ָ�������ľ���ڶ�������á�
     * @param {LONG} pIndex
     * @return 1-ɾ���ɹ���0-ɾ��ʧ�ܡ�
     */
    this.DeleteWellOuterWall = function (pIndex) {
        return pWell.DeleteWellOuterWall(pIndex);
    };
	
	/**
     * ��ȡָ�������ľ���ڵ����á�
     * @param {WellWall}pWellWall
     */
    this.GetWellOuterWall = function (pIndex) {
      var pWellOuterWall = pWell.GetWellOuterWall();
        if ((pWellOuterWall != null)&&(pWellOuterWall != undefined)&&(pWellOuterWall.isvalid)) {
            return new WellWall(pWellOuterWall);
        }
        else{
            return null;
        }
    };
	
     /**
     * ����ָ�������ľ���ڡ�
     * @param {LONG} pIndex
     * @param {WellWall} pWellWall
     */
    this.SetWellOuterWall = function (pIndex,pWellWall) {
        var pWellWallUse = null;
        if((pWellWall != null)&&(pWellWall != undefined)&&(pWellWall.Valid())){
            pWellWallUse = pWellWall.getNpObject();
        }
        else{
            pWellWallUse = pWellWall;
        }
         pWell.SetWellOuterWall(pIndex,pWellWallUse);
    };
	
	
	/**
     * ��ȡ���ڱ�������
     * @return {LONG} pInnerWallCount
     */
    this.getWellInnerWallCount = function () {
        return pWell.WellInnerWallCount;
    };

     /**
     * �������뾮�ڱڶ�������á�
     * @param {WellWall} pWellWall
     * @return 1-���ӳɹ���0-����ʧ�ܡ�
     */
    this.AddWellInnerWall = function (pWellWall) {
        var pWellWallUse = null;
        if((pWellWall != null)&&(pWellWall != undefined)&&(pWellWall.Valid())){
            pWellWallUse = pWellWall.getNpObject();
        }
        else{
            pWellWallUse = pWellWall;
        }
        return pWell.AddWellInnerWall(pWellWallUse);
    };
   	 /**
     * ɾ����ָ�������ľ��ڱڶ�������á�
     * @param {LONG} pIndex
     * @return 1-ɾ���ɹ���0-ɾ��ʧ�ܡ�
     */
    this.DeleteWellInnerWall = function (pIndex) {
        return pWell.DeleteWellInnerWall(pIndex);
    };
	
	/**
     * ��ȡָ�������ľ��ڱڵ����á�
     * @param {WellWall}pWellWall
     */
    this.GetWellInnerWall = function (pIndex) {
      var pWellInnerWall = pWell.GetWellInnerWall();
        if ((pWellInnerWall != null)&&(pWellInnerWall != undefined)&&(pWellInnerWall.isvalid)) {
            return new WellWall(pWellInnerWall);
        }
        else{
            return null;
        }
    };
	
     /**
     * ����ָ�������ľ��ڱڡ�
     * @param {LONG} pIndex
     * @param {WellWall} pWellWall
     */
    this.SetWellInnerWall = function (pIndex,pWellWall) {
        var pWellWallUse = null;
        if((pWellWall != null)&&(pWellWall != undefined)&&(pWellWall.Valid())){
            pWellWallUse = pWellWall.getNpObject();
        }
        else{
            pWellWallUse = pWellWall;
        }
         pWell.SetWellInnerWall(pIndex,pWellWallUse);
    };
}





/**
 * ����.
 * pPointCloudΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-06-28
 */

export function PointCloud(pPointCloud) {
    Geometry.call(this, pPointCloud);

    this.Valid = function () {
        return pPointCloud.isvalid;
    };

    /**
     * ��ȡ�����õ���λ������
     * @param {DoubleCollection} pDoubles
     * @return {DoubleCollection} pDoubles
     */
    this.getPositions = function () {
        var pDoubles = pPointCloud.Positions;
        if ((pDoubles != null)&&(pDoubles != undefined)&&(pDoubles.isvalid)) {
            return new DoubleCollection(pDoubles);
        }
        else{
            return null;
        }
    };
    this.setPositions = function (pDoubles) {
        if((pDoubles != null)&&(pDoubles != undefined)&&(pDoubles.Valid())){
            pPointCloud.Positions = pDoubles.getNpObject();
        }
        else{
            pPointCloud.Positions = pDoubles;
        }
    };

    /**
     * ��ȡ�����õ�����ɫ����
     * @param {UInt32Collection} pUInt32s
     * @return {UInt32Collection} pUInt32s
     */
    this.getColors = function () {
        var pUInt32s = pPointCloud.Colors;
        if ((pUInt32s != null)&&(pUInt32s != undefined)&&(pUInt32s.isvalid)) {
            return new UInt32Collection(pUInt32s);
        }
        else{
            return null;
        }
    };
    this.setColors = function (pUInt32s) {
        if((pUInt32s != null)&&(pUInt32s != undefined)&&(pUInt32s.Valid())){
            pPointCloud.Colors = pUInt32s.getNpObject();
        }
        else{
            pPointCloud.Colors = pUInt32s;
        }
    };

    /**
     * ��ȡ�����õ���ID����
     * @param {UInt32Collection} pUInt32s
     * @return {UInt32Collection} pUInt32s
     */
    this.getIds = function () {
        var pUInt32s = pPointCloud.Ids;
        if ((pUInt32s != null)&&(pUInt32s != undefined)&&(pUInt32s.Valid())) {
            return new UInt32Collection(pUInt32s);
        }
        else{
            return null;
        }
    };
    this.setIds = function (pUInt32s) {
        if((pUInt32s != null)&&(pUInt32s != undefined)&&(pUInt32s.Valid())){
            pPointCloud.Ids = pUInt32s.getNpObject();
        }
        else{
            pPointCloud.Ids = pUInt32s;
        }
    };

    /**
     * ��ȡ�����õ��Ʋ���ֵ����
     * @param {DoubleCollection} pDoubles
     * @return {DoubleCollection} pDoubles
     */
    this.getMeasurements = function () {
        var pDoubles = pPointCloud.Measurements;
        if ((pDoubles != null)&&(pDoubles != undefined)&&(pDoubles.isvalid)) {
            return new DoubleCollection(pDoubles);
        }
        else{
            return null;
        }
    };
    this.setMeasurements = function (pDoubles) {
        if((pDoubles != null)&&(pDoubles != undefined)&&(pDoubles.Valid())){
            pPointCloud.Measurements = pDoubles.getNpObject();
        }
        else{
            pPointCloud.Measurements = pDoubles;
        }
    };
}

/**
 * �����
 * pSurfaceΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-06-21
 */

export function Surface(pSurface) {
    Geometry.call(this, pSurface);

    this.Valid = function () {
        return pSurface.isvalid;
    };

    /**
     * ��ȡ���
     * @return {double}
     */
    this.GetArea = function () {
        return pSurface.GetArea();
    };

    /**
     * ��ȡ����
     * @return {Point} pPoint
     */
    this.GetCentroid = function () {
        var pPoint = pSurface.GetCentroid();
        if ((pPoint != null)&&(pPoint != undefined)&&(pPoint.isvalid)) {
            return new Point(pPoint);
        }
        else{
            return null;
        }
    };

    /**
     * �ж������Ƿ���
     * @return {boolean}
     */
    this.getIsClosed = function () {
        return pSurface.IsClosed;
    };

    /**
     * ��ȡ�߽�
     * @return {MultiCurve} pCurves
     */
    this.GetBound = function () {
        var pCurves = pSurface.GetBound();
        if ((pCurves != null)&&(pCurves != undefined)&&(pCurves.isvalid)) {
            return new MultiCurve(pCurves);
        }
        else{
            return null;
        }
    };

    /**
     * �жϸ������Ƿ�������
     * @param {Point} pPoint
     * @return {boolean}
     */
    this.IsPointOnSurface = function (pPoint) {
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            return pSurface.IsPointOnSurface(pPoint.getNpObject());
        }
        else{
            return pSurface.IsPointOnSurface(pPoint);
        }
    }
}

/**
 * ͨ��SurfacePatch��ָ���ӱ�������ͬ�����ڲ����ͣ�InterpolationType����һ��������
 * pSurfacePatchΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-06-30
 */

export function SurfacePatch(pSurfacePatch) {
    Surface.call(this, pSurfacePatch);

    this.Valid = function () {
        return pSurfacePatch.isvalid;
    };

    /**
     * ��ȡ�߽��ȡSurfacePatch�Ĳ�ֵ����
     * @return {VRStarSurfaceInterpolationType}
     */
    this.getInterpolationType = function () {
        return surface.InterpolationType;
    };

    /**
     * ���Խ�SurfacePatchֱ��ת����Trimesh,�ر�����Щ�߽綥�㲻��ƽ���SurfacePatch
     * @return {TriMesh} pTriMesh
     */
    this.Convert2Mesh = function () {
        var pTriMesh = surfacePatch.Convert2Mesh();
        if ((pTriMesh != null)&&(pTriMesh != undefined)&&(pTriMesh.isvalid)) {
            return new TriMesh(pTriMesh);
        }
        else{
            return null;
        }
    }
}

/**
 * �����
 * pPolygonΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-06-21
 */

export function Polygon(pPolygon) {
    SurfacePatch.call(this, pPolygon);

    this.Valid = function () {
        return pPolygon.isvalid;
    };
    /**
     * ��ȡ�⻷������
     * @return {Ring} pRing
     */
    this.getExteriorRing = function () {
        var pRing = pPolygon.ExteriorRing;
        if ((pRing != null)&&(pRing != undefined)&&(pRing.isvalid)) {
            return new Ring(pRing);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�ڻ�����
     * @return {long}
     */
    this.getInteriorRingCount = function () {
        return pPolygon.InteriorRingCount;
    };

    /**
     * ��ȡ������ָ���������ڻ�������
     * @param {long} lIndex
     * @return {Ring} pRing
     */
    this.GetInteriorRing = function (lIndex) {
        var pRing = pPolygon.GetInteriorRing(lIndex);
        if ((pRing != null)&&(pRing != undefined)&&(pRing.isvalid)) {
            return new Ring(pRing);
        }
        else{
            return null;
        }
    };
    this.SetInteriorRing = function (lIndex, pRing) {
        if((pRing != null)&&(pRing != undefined)&&(pRing.Valid())){
            pPolygon.SetInteriorRing(lIndex, pRing.getNpObject());
        }
        else{
            pPolygon.SetInteriorRing(lIndex, pRing);
        }
    };

    // /**
     // * ��ȡ�жϿռ伸�ι�ϵ�Ľӿ�
     // * @return {RelationalOperator} pRelaOperator
     // */
    // this.getRelationalOperator = function () {
        // var pRelaOperator = pPolygon.RelationalOperator;
        // if ((pRelaOperator != null)&&(pRelaOperator != undefined)&&(pRelaOperator.isvalid)) {
            // return new RelationalOperator(pRelaOperator);
        // }
        // else{
            // return null;
        // }
    // };

    // /**
     // * ��ȡ���˲���
     // * @return {TopologicalOperator} pTopoOperator
     // */
    // this.getTopologicalOperator = function () {
        // var pTopoOperator = pPolygon.TopologicalOperator;
        // if ((pTopoOperator != null)&&(pTopoOperator != undefined)&&(pTopoOperator.isvalid)) {
            // return new TopologicalOperator(pTopoOperator);
        // }
        // else{
            // return null;
        // }
    // };

    // /**
     // * �ڽ������ӿ�
     // * @return {ProximityOperator} pProOperator
     // */
    // this.getProximityOperator = function () {
        // var pProOperator = pPolygon.ProximityOperator;
        // if ((pProOperator != null)&&(pProOperator != undefined)&&(pProOperator.isvalid)) {
            // return new ProximityOperator(pProOperator);
        // }
        // else{
            // return null;
        // }
    // };

    /**
     * ���������ڻ����������
     * @param {Ring} pRing
     */
    this.AddInteriorRing = function (pRing) {
        if((pRing != null)&&(pRing != undefined)&&(pRing.Valid())){
            pPolygon.AddInteriorRing(pRing.getNpObject());
        }
        else{
            pPolygon.AddInteriorRing(pRing);
        }
    };

    /**
     * ɾ����ָ���������ڻ����������
     * @param {long} lIndex
     * @return {boolean}
     */
    this.DeleteInteriorRing = function (lIndex) {
        return pPolygon.DeleteInteriorRing(lIndex);
    };

    /**
     * �رջ�
     */
    this.CloseAllRing = function () {
        pPolygon.CloseAllRing();
    };

    /**
     * �ж��⻷�ڻ��Ƿ���
     * @return {boolean}
     */
    this.getIsCoplanar = function () {
        return pPolygon.IsCoplanar;
    };

    /**
     * �õ�polygon����ƽ��ķ�����
     * @return {Vector3} pVector3
     */
    this.GetNormal = function () {
        var pVector3 = pPolygon.GetNormal();
        if ((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.isvalid)) {
            return new Vector3(pVector3);
        }
        else{
            return null;
        }
    };

    // /**
     // * ���α任�ӿ�
     // * @return {Transform} pTransform
     // */
    // this.getTransform = function () {
        // var pTransform = pPolygon.Transform;
        // if ((pTransform != null)&&(pTransform != undefined)&&(pTransform.isvalid)) {
            // return new Transform(pTransform);
        // }
        // else{
            // return null;
        // }
    // };

    /**
     * �����������������
     * @param {DoubleCollection} pDoublesIndex
     * @return {DoubleCollection} pDoublesIndexRes
     * @param {UInt16Collection} pUInt16s
     * @return {UInt16Collection} pUInt16sRes
     * @param {FloatCollection} pFloatsU1V1
     * @return {FloatCollection} pFloatsU1V1Res
     * @param {FloatCollection} pFloatsU2V2
     * @return {FloatCollection} pFloatsU2V2Res
     * @param {DoubleCollection} pDoublesNorms
     * @return {DoubleCollection} pDoublesNormsRes
     * @return {double} bRes
     */
    this.BatchExport = function (pDoublesIndex,pUInt16s,pFloatsU1V1,pFloatsU2V2,pDoublesNorms) {
        var pDoublesIndexUse = null;
        if((pDoublesIndex != null)&&(pDoublesIndex != undefined)&&(pDoublesIndex.Valid())){
            pDoublesIndexUse = pDoublesIndex.getNpObject();
        }
        else{
            pDoublesIndexUse = pDoublesIndex;
        }
        var pUInt16sUse = null;
        if((pUInt16s != null)&&(pUInt16s != undefined)&&(pUInt16s.Valid())){
            pUInt16sUse = pUInt16s.getNpObject();
        }
        else{
            pUInt16sUse = pUInt16s;
        }
        var pFloatsU1V1Use = null;
        if((pFloatsU1V1 != null)&&(pFloatsU1V1 != undefined)&&(pFloatsU1V1.Valid())){
            pFloatsU1V1Use = pFloatsU1V1.getNpObject();
        }
        else{
            pFloatsU1V1Use = pFloatsU1V1;
        }
        var pFloatsU2V2Use = null;
        if((pFloatsU2V2 != null)&&(pFloatsU2V2 != undefined)&&(pFloatsU2V2.Valid())){
            pFloatsU2V2Use = pFloatsU2V2.getNpObject();
        }
        else{
            pFloatsU2V2Use = pFloatsU2V2;
        }
        var pDoublesNormsUse = null;
        if((pDoublesNorms != null)&&(pDoublesNorms != undefined)&&(pDoublesNorms.Valid())){
            pDoublesNormsUse = pDoublesNorms.getNpObject();
        }
        else{
            pDoublesNormsUse = pDoublesNorms;
        }
        var operateRes = pPolygon.BatchExport(pDoublesIndexUse,pUInt16sUse,pFloatsU1V1Use,pFloatsU2V2Use,pDoublesNormsUse);
        if((operateRes != null) && (operateRes != undefined) && (operateRes.valid)) {
            var pDoublesIndexMid = operateRes.VertexArray;
            var pDoublesIndexRes = null;
            if ((pDoublesIndexMid != null) && (pDoublesIndexMid != undefined) && (pDoublesIndexMid.isvalid)) {
                pDoublesIndexRes = new DoubleCollection(pDoublesIndexMid);
            }
            else {
                return null;
            }
            var pUInt16sMid = operateRes.IndexArray;
            var pUInt16sRes = null;
            if ((pUInt16sMid != null) && (pUInt16sMid != undefined) && (pUInt16sMid.isvalid)) {
                pUInt16sRes = new UInt16Collection(pUInt16sMid);
            }
            else {
                return null;
            }
            var pFloatsU1V1Mid = operateRes.TextureU1V1Array;
            var pFloatsU1V1Res = null;
            if ((pFloatsU1V1Mid != null) && (pFloatsU1V1Mid != undefined) && (pFloatsU1V1Mid.isvalid)) {
                pFloatsU1V1Res = new FloatCollection(pFloatsU1V1Mid);
            }
            else {
                return null;
            }
            var pFloatsU2V2Mid = operateRes.TextureU2V2Array;
            var pFloatsU2V2Res = null;
            if ((pFloatsU2V2Mid != null) && (pFloatsU2V2Mid != undefined) && (pFloatsU2V2Mid.isvalid)) {
                pFloatsU2V2Res = new FloatCollection(pFloatsU2V2Mid);
            }
            else {
                return null;
            }
            var pDoublesNormsMid = operateRes.NormalArray;
            var pDoublesNormsRes = null;
            if ((pDoublesNormsMid != null) && (pDoublesNormsMid != undefined) && (pDoublesNormsMid.isvalid)) {
                pDoublesNormsRes = new DoubleCollection(pDoublesNormsMid);
            }
            else {
                return null;
            }
            var bRes = operateRes.ResultValue;
            return new BatchExportParameter(pDoublesIndexRes, pUInt16sRes, pFloatsU1V1Res, pFloatsU2V2Res, pDoublesNormsRes, bRes);
        }
        else{
            return operateRes;
        }
    };
    function BatchExportParameter(pDoublesIndexRes,pUInt16sRes,pFloatsU1V1Res,pFloatsU2V2Res,pDoublesNormsRes,bRes){
        this.VertexArray = pDoublesIndexRes;
        this.IndexArray = pUInt16sRes;
        this.TextureU1V1Array = pFloatsU1V1Res;
        this.TextureU2V2Array = pFloatsU2V2Res;
        this.NormalArray = pDoublesNormsRes;
        this.ResultValue = bRes;
    }
}


/**
 * �ڽ������ӿ�
 * pProOperatorΪ����Ĳ���
 * Creator   Jimmy
 * Time      2017-01-06
 */

export function ProximityOperator(pProOperator) {

    this.getNpObject = function () {
        return pProOperator;
    };

    this.Valid = function () {
        return pProOperator.isvalid;
    };

    /**
     * ��ȡ����Geometry֮�����̾���
     * @param {Geometry} pGeometry
     * @param {boolean} bIs2D
     * @return {double}
     */
    this.Distance = function (pGeometry, bIs2D) {
        if((pGeometry != null)&&(pGeometry != pGeometry)&&(pGeometry.Valid())){
            return pProOperator.Distance(pGeometry.getNpObject(), bIs2D);
        }
        else{
            return pProOperator.Distance(pGeometry, bIs2D);
        }
    };

    /**
     * ��ȡ����Geometry֮�����̾��룬��������̾���������ٽ��
     * @param {Geometry} pGeometry
     * @param {boolean} bIs2D
     * @return {Point} pPointSelf
     * @return {Point} pPointOther
     * @return {double} dDistance
     */
    this.DistanceEx = function (pGeometry, bIs2D) {
        var operateRes = null;
        if((pGeometry != null)&&(pGeometry != pGeometry)&&(pGeometry.Valid())){
            operateRes = pProOperator.DistanceEx(pGeometry.getNpObject(), bIs2D);
        }
        else{
            operateRes = pProOperator.DistanceEx(pGeometry, bIs2D);
        }
        var pPointSelfRes = operateRes.SelfPoint;
        var pPointOtherRes = operateRes.OtherPoint;
        var dDistance = operateRes.Distance;
        var pPointSelfUse = null;
        if((pPointSelfRes != null)&&(pPointSelfRes != undefined)&&(pPointSelfRes.isvalid)){
            pPointSelfUse = new Point(pPointSelfRes);
        }
        else{
            pPointSelfUse = null
        }
        var pPointOtherUse = null;
        if((pPointOtherRes != null)&&(pPointOtherRes != undefined)&&(pPointOtherRes.isvalid)){
            pPointOtherUse = new Point(pPointOtherRes);
        }
        else{
            pPointOtherUse = null
        }
        return new DistanceExParameter(pPointSelfUse,pPointOtherUse,dDistance);
    };
    function DistanceExParameter(pPointSelf,pPointOther,dDistance){
        this.SelfPoint = pPointSelf;
        this.OtherPoint = pPointOther;
        this.Distance = dDistance;
    }

    /**
     * ���ٽ���
     * @param {Point} pPoint
     * @param {boolean} bIs2D
     * @return {Point} pPointRes
     */
    this.NearestPoint = function (pPoint, bIs2D) {
        var pPointRes = null;
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pPointRes = pProOperator.NearestPoint(pPoint.getNpObject(), bIs2D);
        }
        else{
            pPointRes = pProOperator.NearestPoint(pPoint, bIs2D);
        }
        if ((pPointRes != null)&&(pPointRes != undefined)&&(pPointRes.isvalid)) {
            return new Point(pPointRes);
        }
        else{
            return null;
        }
    };
}

/**
 * ���˲���
 * pTopoOperatorΪ����Ĳ���
 * Creator   Jimmy
 * Time      2017-01-06
 */

export function TopologicalOperator(pTopoOperator) {

    this.getNpObject = function () {
        return pTopoOperator;
    };

    this.Valid = function () {
        return pTopoOperator.isvalid;
    };

    /**
     * �жϻ����ü������Ƿ�ͶӰ��z=0ƽ����
     * @param {boolean} bVal
     * @return {boolean}
     */
    this.getIs2D = function () {
        return pTopoOperator.Is2D;
    };
    this.setIs2D = function (bVal) {
        pTopoOperator.Is2D = bVal;
    };

    /**
     * ��ȡ�����û������߽�����
     * @param {VRStarBufferStyle} enumBufferStyle
     * @return {VRStarBufferStyle}
     */
    this.getBufferStyle = function () {
        return pTopoOperator.BufferStyle;
    };
    this.setBufferStyle = function (enumBufferStyle) {
        pTopoOperator.BufferStyle = enumBufferStyle;
    };

    /**
     * �жϼ��ζ����Ƿ�������ȷ
     * @return {boolean}
     */
    this.getIsSimple = function () {
        return pTopoOperator.IsSimple;
    };

    /**
     * ���ɻ�����
     * @param {double} dDistance
     * @return {Geometry} pGeometry
     */
    this.Buffer = function (dDistance) {
        var pGeometry = pTopoOperator.Buffer(dDistance);
        if ((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.isvalid)) {
            var enumGeometryType = pGeometry.GeometryType;
            switch (enumGeometryType) {
                case VRStarGeometryType.VRStarGeometryUnknow:
                    return new Geometry(pGeometry);
                case VRStarGeometryType.VRStarGeometryPoint:
                    return new Point(pGeometry);
                case VRStarGeometryType.VRStarGeometryModelPoint:
                    return new ModelPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryArc:
                    return new CirculeArc(pGeometry);
                case VRStarGeometryType.VRStarGeometryLine:
                    return new Line(pGeometry);
                case VRStarGeometryType.VRStarGeometryCircle:
                    return new Circle(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolyline:
                    return new Polyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryRing:
                    return new Ring(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolygon:
                    return new Polygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryTriMesh:
                    return new TriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryCollection:
                    return new GeometryCollection(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPoint:
                    return new MultiPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolyline:
                    return new MultiPolyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolygon:
                    return new MultiPolygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiTrimesh:
                    return new MultiTriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryPointCloud:
                    return new PointCloud(pGeometry);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    };

    /**
     * ����С͹��
     * @return {Geometry} pGeometry
     */
    this.ConvexHull = function () {
        var pGeometry = pTopoOperator.ConvexHull();
        if ((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.isvalid)) {
            var enumGeometryType = pGeometry.GeometryType;
            switch (enumGeometryType) {
                case VRStarGeometryType.VRStarGeometryUnknow:
                    return new Geometry(pGeometry);
                case VRStarGeometryType.VRStarGeometryPoint:
                    return new Point(pGeometry);
                case VRStarGeometryType.VRStarGeometryModelPoint:
                    return new ModelPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryArc:
                    return new CirculeArc(pGeometry);
                case VRStarGeometryType.VRStarGeometryLine:
                    return new Line(pGeometry);
                case VRStarGeometryType.VRStarGeometryCircle:
                    return new Circle(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolyline:
                    return new Polyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryRing:
                    return new Ring(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolygon:
                    return new Polygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryTriMesh:
                    return new TriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryCollection:
                    return new GeometryCollection(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPoint:
                    return new MultiPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolyline:
                    return new MultiPolyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolygon:
                    return new MultiPolygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiTrimesh:
                    return new MultiTriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryPointCloud:
                    return new PointCloud(pGeometry);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    };

    /**
     * ���
     * @param {Geometry} pGeometryTest
     * @return {Geometry} pGeometry
     */
    this.Difference = function (pGeometryTest) {
        var pGeometry = pTopoOperator.Difference(pGeometryTest.getNpObject());
        if ((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.isvalid)) {
            var enumGeometryType = pGeometry.GeometryType;
            switch (enumGeometryType) {
                case VRStarGeometryType.VRStarGeometryUnknow:
                    return new Geometry(pGeometry);
                case VRStarGeometryType.VRStarGeometryPoint:
                    return new Point(pGeometry);
                case VRStarGeometryType.VRStarGeometryModelPoint:
                    return new ModelPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryArc:
                    return new CirculeArc(pGeometry);
                case VRStarGeometryType.VRStarGeometryLine:
                    return new Line(pGeometry);
                case VRStarGeometryType.VRStarGeometryCircle:
                    return new Circle(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolyline:
                    return new Polyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryRing:
                    return new Ring(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolygon:
                    return new Polygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryTriMesh:
                    return new TriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryCollection:
                    return new GeometryCollection(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPoint:
                    return new MultiPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolyline:
                    return new MultiPolyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolygon:
                    return new MultiPolygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiTrimesh:
                    return new MultiTriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryPointCloud:
                    return new PointCloud(pGeometry);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    };

    /**
     * ��
     * @param {Geometry} pGeometryTest
     * @return {Geometry} pGeometry
     */
    this.Intersection = function (pGeometryTest) {
        var pGeometry = pTopoOperator.Intersection(pGeometryTest.getNpObject());
        if ((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.isvalid)) {
            var enumGeometryType = pGeometry.GeometryType;
            switch (enumGeometryType) {
                case VRStarGeometryType.VRStarGeometryUnknow:
                    return new Geometry(pGeometry);
                case VRStarGeometryType.VRStarGeometryPoint:
                    return new Point(pGeometry);
                case VRStarGeometryType.VRStarGeometryModelPoint:
                    return new ModelPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryArc:
                    return new CirculeArc(pGeometry);
                case VRStarGeometryType.VRStarGeometryLine:
                    return new Line(pGeometry);
                case VRStarGeometryType.VRStarGeometryCircle:
                    return new Circle(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolyline:
                    return new Polyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryRing:
                    return new Ring(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolygon:
                    return new Polygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryTriMesh:
                    return new TriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryCollection:
                    return new GeometryCollection(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPoint:
                    return new MultiPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolyline:
                    return new MultiPolyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolygon:
                    return new MultiPolygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiTrimesh:
                    return new MultiTriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryPointCloud:
                    return new PointCloud(pGeometry);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    };

    /**
     * ��
     * @param {Geometry} pGeometryTest
     * @return {Geometry} pGeometry
     */
    this.Union = function (pGeometryTest) {
        var pGeometry = pTopoOperator.Union(pGeometryTest.getNpObject());
        if ((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.isvalid)) {
            var enumGeometryType = pGeometry.GeometryType;
            switch (enumGeometryType) {
                case VRStarGeometryType.VRStarGeometryUnknow:
                    return new Geometry(pGeometry);
                case VRStarGeometryType.VRStarGeometryPoint:
                    return new Point(pGeometry);
                case VRStarGeometryType.VRStarGeometryModelPoint:
                    return new ModelPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryArc:
                    return new CirculeArc(pGeometry);
                case VRStarGeometryType.VRStarGeometryLine:
                    return new Line(pGeometry);
                case VRStarGeometryType.VRStarGeometryCircle:
                    return new Circle(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolyline:
                    return new Polyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryRing:
                    return new Ring(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolygon:
                    return new Polygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryTriMesh:
                    return new TriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryCollection:
                    return new GeometryCollection(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPoint:
                    return new MultiPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolyline:
                    return new MultiPolyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolygon:
                    return new MultiPolygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiTrimesh:
                    return new MultiTriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryPointCloud:
                    return new PointCloud(pGeometry);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    };

    /**
     * �����˲���ȷ�ļ��ζ����������
     * @return {Geometry} pGeometry
     */
    this.Simple = function () {
        var pGeometry = pTopoOperator.Simple();
        if ((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.isvalid)) {
            var enumGeometryType = pGeometry.GeometryType;
            switch (enumGeometryType) {
                case VRStarGeometryType.VRStarGeometryUnknow:
                    return new Geometry(pGeometry);
                case VRStarGeometryType.VRStarGeometryPoint:
                    return new Point(pGeometry);
                case VRStarGeometryType.VRStarGeometryModelPoint:
                    return new ModelPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryArc:
                    return new CirculeArc(pGeometry);
                case VRStarGeometryType.VRStarGeometryLine:
                    return new Line(pGeometry);
                case VRStarGeometryType.VRStarGeometryCircle:
                    return new Circle(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolyline:
                    return new Polyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryRing:
                    return new Ring(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolygon:
                    return new Polygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryTriMesh:
                    return new TriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryCollection:
                    return new GeometryCollection(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPoint:
                    return new MultiPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolyline:
                    return new MultiPolyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolygon:
                    return new MultiPolygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiTrimesh:
                    return new MultiTriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryPointCloud:
                    return new PointCloud(pGeometry);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�������ζ�������ཻ��������Ĳ���
     * @param {Geometry} pGeometryTest
     * @return {Geometry} pGeometry
     */
    this.SymmetricDifference = function (pGeometryTest) {
        var pGeometry = pTopoOperator.SymmetricDifference(pGeometryTest.getNpObject());
        if ((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.isvalid)) {
            var enumGeometryType = pGeometry.GeometryType;
            switch (enumGeometryType) {
                case VRStarGeometryType.VRStarGeometryUnknow:
                    return new Geometry(pGeometry);
                case VRStarGeometryType.VRStarGeometryPoint:
                    return new Point(pGeometry);
                case VRStarGeometryType.VRStarGeometryModelPoint:
                    return new ModelPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryArc:
                    return new CirculeArc(pGeometry);
                case VRStarGeometryType.VRStarGeometryLine:
                    return new Line(pGeometry);
                case VRStarGeometryType.VRStarGeometryCircle:
                    return new Circle(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolyline:
                    return new Polyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryRing:
                    return new Ring(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolygon:
                    return new Polygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryTriMesh:
                    return new TriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryCollection:
                    return new GeometryCollection(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPoint:
                    return new MultiPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolyline:
                    return new MultiPolyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolygon:
                    return new MultiPolygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiTrimesh:
                    return new MultiTriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryPointCloud:
                    return new PointCloud(pGeometry);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    };
}


/**
 * �жϿռ伸�ι�ϵ�Ľӿ�
 * pRelaOperatorΪ����Ĳ���
 * Creator   Jimmy
 * Time      2017-01-06.
 */

export function RelationalOperator(pRelaOperator) {

    this.getNpObject = function () {
        return pRelaOperator;
    };

    this.Valid = function () {
        return pRelaOperator.isvalid;
    };

    /**
     * �жϻ����ü������Ƿ�ͶӰ��z=0ƽ����
     * @param {boolean} bVal
     * @return {boolean}
     */
    this.getIs2D = function () {
        return pRelaOperator.Is2D;
    };
    this.setIs2D = function (bVal) {
        pRelaOperator.Is2D = bVal;
    };

    /**
     * ����:��ǰ�����������һ�������壬��Within�෴
     * @param {Geometry} pGeometry
     * @return {boolean}
     */
    this.Contains = function (pGeometry) {
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())){
            return pRelaOperator.Contains(pGeometry.getNpObject());
        }
        else{
            return pRelaOperator.Contains(pGeometry);
        }
    };

    /**
     * ������:��ǰ��������ȫ����һ���������ڲ�����Contains�෴
     * @param {Geometry} pGeometry
     * @return {boolean}
     */
    this.Within = function (pGeometry) {
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())){
            return pRelaOperator.Within(pGeometry.getNpObject());
        }
        else{
            return pRelaOperator.Within(pGeometry);
        }
    };

    /**
     * �ཻ:��Ƚϵ������������Ƿ������ֵ�����ȫ�����ڲ��㼯���ཻ���ֵļ�����ά��С����Ƚϵ������������е�һ����������
     * @param {Geometry} pGeometry
     * @return {boolean}
     */
    this.Crosses = function (pGeometry) {
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())){
            return pRelaOperator.Crosses(pGeometry.getNpObject());
        }
        else{
            return pRelaOperator.Crosses(pGeometry);
        }
    };

    /**
     * ����:�ж���Ƚϵ����������Ƿ����룬��û�й�������
     * @param {Geometry} pGeometry
     * @return {boolean}
     */
    this.Disjoint = function (pGeometry) {
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())){
            return pRelaOperator.Disjoint(pGeometry.getNpObject());
        }
        else{
            return pRelaOperator.Disjoint(pGeometry);
        }
    };

    /**
     * ������:�ж���Ƚϵ������������Ƿ�������һ�������Ķ���
     * @param {Geometry} pGeometry
     * @return {boolean}
     */
    this.Intersects = function (pGeometry) {
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())){
            return pRelaOperator.Intersects(pGeometry.getNpObject());
        }
        else{
            return pRelaOperator.Intersects(pGeometry);
        }
    };

    /**
     * ���:�ж���Ƚϵ����������������Ƿ���ͬ�����Ҷ�������ͬ�ĵ㼯
     * @param {Geometry} pGeometry
     * @return {boolean}
     */
    this.Equals = function (pGeometry) {
        return pRelaOperator.Equals(pGeometry.getNpObject());
    };

    /**
     * ���ָ���:�ж������������Ƿ��ص�
     * @param {Geometry} pGeometry
     * @return {boolean}
     */
    this.Overlaps = function (pGeometry) {
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())){
            return pRelaOperator.Overlaps(pGeometry.getNpObject());
        }
        else{
            return pRelaOperator.Overlaps(pGeometry);
        }
    };

    /**
     * ����:��Ƚϵ������������Ƿ��ڱ߽���������һ���������㣬�����ڲ�û�й������㣬�����ڱ߽�
     * @param {Geometry} pGeometry
     * @return {boolean}
     */
    this.Touches = function (pGeometry) {
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())){
            return pRelaOperator.Touches(pGeometry.getNpObject());
        }
        else{
            return pRelaOperator.Touches(pGeometry);
        }
    };
}/**
 * ������ת���ӿ�
 * Creator   Jimmy
 * Time      2016-06-28
 */

export function GeometryConvertor(){
    var geometryConvertor = plugin.GeometryConvertor;

    /**
    * �ö����ȥ�и��
    * @param {MultiPolygon} pMultiPolygon
    * @param {Model} pModel
    * @param {ModelPoint} pModelPoint
    * @return {Model} pModel
    * @return {ModelPoint} pModelPoint
    * @return {boolean} bRes
    */
    this.CutModelPointByPolygon2D = function (pMultiPolygon, pModel, pModelPoint) {
        var pMultiPolygonUse = null;
        if ((pMultiPolygon != null) && (pMultiPolygon != undefined) && (pMultiPolygon.Valid())) {
            pMultiPolygonUse = pMultiPolygon.getNpObject();
        }
        else {
            pMultiPolygonUse = pMultiPolygon;
        }

        var pModelUse = null;
        if ((pModel != null) && (pModel != undefined) && (pModel.Valid())) {
            pModelUse = pModel.getNpObject();
        }
        else {
            pModelUse = pModel;
        }

        var pModelPointUse = null;
        if ((pModelPoint != null) && (pModelPoint != undefined) && (pModelPoint.Valid())) {
            pModelPointUse = pModelPoint.getNpObject();
        }
        else {
            pModelPointUse = pModelPoint;
        }

        var operateRes = geometryConvertor.CutModelPointByPolygon2D(pMultiPolygonUse, pModelUse, pModelPointUse);

        var pModelRes = null;
        var pModelMid = operateRes.Model;
        if ((pModelMid != null) && (pModelMid != undefined) && (pModelMid.isvalid)) {
            pModelRes = new Model(pModelMid);
        }
        else {
            pModelRes = null;
        }
        var pModelPointRes = null;
        var pModelPointMid = operateRes.ModelPoint;
        if ((pModelPointMid != null) && (pModelPointMid != undefined) && (pModelPointMid.isvalid)) {
            pModelPointRes = new ModelPoint(pModelPointMid);
        }
        else {
            pModelPointRes = null;
        }
        var bRes = operateRes.ResultValue;
        return new CutModelPointByPolygon2DParameter(pModelRes, pModelPointRes, bRes);
    };
    function CutModelPointByPolygon2DParameter(pModelRes, pModelPointRes, bRes) {
        this.Model = pModelRes;
        this.ModelPoint = pModelPointRes;
        this.ResultValue = bRes;
    }

    /**
    * �ö���δ��߶����Ƶ��и��
    * @param {MultiPolygon} pMultiPolygon
    * @param {Model} pModel
    * @param {ModelPoint} pModelPoint
    * @return {Model} pModel
    * @return {ModelPoint} pModelPoint
    * @return {boolean} bRes
    */
    this.CutModelPointByPolygon2DWithZ = function (pMultiPolygon, pModel, pModelPoint, dMinZ, dMaxZ) {
        var pMultiPolygonUse = null;
        if ((pMultiPolygon != null) && (pMultiPolygon != undefined) && (pMultiPolygon.Valid())) {
            pMultiPolygonUse = pMultiPolygon.getNpObject();
        }
        else {
            pMultiPolygonUse = pMultiPolygon;
        }

        var pModelUse = null;
        if ((pModel != null) && (pModel != undefined) && (pModel.Valid())) {
            pModelUse = pModel.getNpObject();
        }
        else {
            pModelUse = pModel;
        }

        var pModelPointUse = null;
        if ((pModelPoint != null) && (pModelPoint != undefined) && (pModelPoint.Valid())) {
            pModelPointUse = pModelPoint.getNpObject();
        }
        else {
            pModelPointUse = pModelPoint;
        }

        var operateRes = geometryConvertor.CutModelPointByPolygon2DWithZ(pMultiPolygonUse, pModelUse, pModelPointUse, dMinZ, dMaxZ);

        var pModelRes = null;
        var pModelMid = operateRes.Model;
        if ((pModelMid != null) && (pModelMid != undefined) && (pModelMid.isvalid)) {
            pModelRes = new Model(pModelMid);
        }
        else {
            pModelRes = null;
        }
        var pModelPointRes = null;
        var pModelPointMid = operateRes.ModelPoint;
        if ((pModelPointMid != null) && (pModelPointMid != undefined) && (pModelPointMid.isvalid)) {
            pModelPointRes = new ModelPoint(pModelPointMid);
        }
        else {
            pModelPointRes = null;
        }
        var bRes = operateRes.ResultValue;
        return new CutModelPointByPolygon2DWithZParameter(pModelRes, pModelPointRes, bRes);
    };
    function CutModelPointByPolygon2DWithZParameter(pModelRes, pModelPointRes, bRes) {
        this.Model = pModelRes;
        this.ModelPoint = pModelPointRes;
        this.ResultValue = bRes;
    }

     /**
      * ģ��ת��Ϊ���������漯��
      * @param {Model} pModel
      * @param {ModelPoint} pModelPoint
      * @param {boolean} bUseTexture
      * @return {MultiTriMesh} pMultiTriMesh
      */
     this.ModelPointToTriMesh = function(pModel, pModelPoint, bUseTexture){
         var pModelMid = null;
         if((pModel != null)&&(pModel != undefined)&&(pModel.Valid())){
             pModelMid = pModel.getNpObject();
         }
         else{
             pModelMid = pModel;
         }
         var pModelPointMid = null;
         if((pModelPoint != null)&&(pModelPoint != undefined)&&(pModelPoint.Valid())){
             pModelPointMid = pModelPoint.getNpObject();
         }
         else{
             pModelPointMid = pModelPoint;
         }
         var pMultiTriMesh = geometryConvertor.ModelPointToTriMesh(pModelMid, pModelPointMid, bUseTexture);
         if((pMultiTriMesh != null)&&(pMultiTriMesh != undefined)&&(pMultiTriMesh.isvalid)){
             return new MultiTriMesh(pMultiTriMesh);
         }
         else{
             return null;
         }
     };

    /**
     * ���������漯��ת��ΪModel��ModelPoint
     * @param {MultiTriMesh} pMultiTriMesh
     * @return {Model} pModel
     * @return {ModelPoint} pModelPoint
     * @return {boolean} bRes
     */
      this.TriMeshToModelPoint = function(pMultiTriMesh){
          var operateRes = null;
          if((pMultiTriMesh != null)&&(pMultiTriMesh != undefined)&&(pMultiTriMesh.Valid())){
              operateRes = geometryConvertor.TriMeshToModelPoint(pMultiTriMesh.getNpObject());
          }
          else{
              operateRes = geometryConvertor.TriMeshToModelPoint(pMultiTriMesh);
          }
          var pModelRes = null;
          var pModelMid = operateRes.Model;
          if((pModelMid != null)&&(pModelMid != undefined)&&(pModelMid.isvalid)){
              pModelRes = new Model(pModelMid);
          }
          else{
              pModelRes = null;
          }
          var pModelPointRes = null;
          var pModelPointMid = operateRes.ModelPoint;
          if((pModelPointMid != null)&&(pModelPointMid != undefined)&&(pModelPointMid.isvalid)){
              pModelPointRes = new ModelPoint(pModelPointMid);
          }
          else{
              pModelPointRes = null;
          }
          var bRes = operateRes.ResultValue;
          return new TriMeshToModelPointParameter(pModelRes,pModelPointRes,bRes);
      };
     function TriMeshToModelPointParameter(pModelRes,pModelPointRes,bRes){
         this.Model = pModelRes;
         this.ModelPoint = pModelPointRes;
         this.ResultValue = bRes;
     }

     /**
      * ������������
      * @param {Polygon} pPolygon
      * @param {double} dHeight
      * @return {TriMesh} pTriMesh
      */
     this.ExtrudePolygonToTriMesh = function(pPolygon, dHeight){
         var pTriMesh = null;
         if((pPolygon != null)&&(pPolygon != undefined)&&(pPolygon.Valid())){
             pTriMesh = geometryConvertor.ExtrudePolygonToTriMesh(pPolygon.getNpObject(), dHeight);
         }
         else{
             pTriMesh = geometryConvertor.ExtrudePolygonToTriMesh(pPolygon, dHeight);
         }
         if((pTriMesh != null)&&(pTriMesh != undefined)&&(pTriMesh.isvalid)){
             return new TriMesh(pTriMesh);
         }
         else{
             return null;
         }
     };

    /**
     * ��������ǻ�
     * @param {Polygon} pPolygon
     * @return {TriMesh} pTriMesh
     */
    this.PolygonToTriMesh = function(pPolygon){
        var pTriMesh = null;
        if((pPolygon != null)&&(pPolygon != undefined)&&(pPolygon.Valid())){
            pTriMesh = geometryConvertor.PolygonToTriMesh(pPolygon.getNpObject());
        }
        else{
            pTriMesh = geometryConvertor.PolygonToTriMesh(pPolygon);
        }
        if((pTriMesh != null)&&(pTriMesh != undefined)&&(pTriMesh.isvalid)){
            return new TriMesh(pTriMesh);
        }
        else{
            return null;
        }
    };

      /**
       * �������������漯����ָ���߶�ƽ�棨�и��棩�ϵĶ�άͶӰ
       * @param {MultiTriMesh} pMultiTriMesh
       * @param {double} dHeightSpec
       * @param {double} dTol
       * @return {MultiSurface} pMultiSurface
       */
      this.CutTriMeshToPolygon = function(pMultiTriMesh, dHeightSpec, dTol){
          var pMultiSurface = null;
          if((pMultiTriMesh != null)&&(pMultiTriMesh != undefined)&&(pMultiTriMesh.Valid())){
              pMultiSurface = geometryConvertor.CutTriMeshToPolygon(pMultiTriMesh.getNpObject(), dHeightSpec, dTol);
          }
          else{
              pMultiSurface = geometryConvertor.CutTriMeshToPolygon(pMultiTriMesh, dHeightSpec, dTol);
          }
          if((pMultiSurface != null)&&(pMultiSurface != undefined)&&(pMultiSurface.isvalid)){
              return new MultiSurface(pMultiSurface);
          }
          else{
              return null;
          }
      };

      /**
       * �������������漯����z=0ƽ���ϵĶ�άͶӰ
       * @param {MultiTriMesh} pMultiTriMesh
       * @param {double} dTol
       * @return {MultiSurface} pMultiSurface
       */
      this.ProjectTriMeshToPolygon = function(pMultiTriMesh, dTol){
          var pMultiSurface = null;
          if((pMultiTriMesh != null)&&(pMultiTriMesh != undefined)&&(pMultiTriMesh.Valid())){
              pMultiSurface = geometryConvertor.ProjectTriMeshToPolygon(pMultiTriMesh.getNpObject(), dTol);
          }
          else{
              pMultiSurface = geometryConvertor.ProjectTriMeshToPolygon(pMultiTriMesh, dTol);
          }
          if((pMultiSurface != null)&&(pMultiSurface != undefined)&&(pMultiSurface.isvalid)){
              return new MultiSurface(pMultiSurface);
          }
          else{
              return null;
          }
      };

      /**
       * ����ModelPoint��z=0ƽ���ϵĶ�άͶӰ
       * @param {Model} pModel
       * @param {ModelPoint} pModelPoint
       * @return {MultiSurface} pMultiSurface
       */
      this.ProjectModelPointToPolygon = function(pModel, pModelPoint){
          var pModelMid = null;
          if((pModel != null)&&(pModel != undefined)&&(pModel.Valid())){
              pModelMid = pModel.getNpObject();
          }
          else{
              pModelMid = pModel;
          }
          var pModelPointMid = null;
          if((pModelPoint != null)&&(pModelPoint != undefined)&&(pModelPoint.Valid())){
              pModelPointMid = pModelPoint.getNpObject();
          }
          else{
              pModelPointMid = pModelPoint;
          }
          var pMultiSurface = geometryConvertor.ProjectModelPointToPolygon(pModelMid, pModelPointMid);
          if((pMultiSurface != null)&&(pMultiSurface != undefined)&&(pMultiSurface.isvalid)){
              return new MultiSurface(pMultiSurface);
          }
          else{
              return null;
          }
    };

    /**
     * Polygonת����Model+ModelPoint
     * @param {Polygon} pPolygon
     * @return {ModelPoint} pModelPoint
     */
    this.PolygonToModelPoint = function(pPolygon){
        var pModelPoint = null;
        if((pPolygon != null)&&(pPolygon != undefined)&&(pPolygon.Valid())){
            pModelPoint = geometryConvertor.PolygonToModelPoint(pPolygon.getNpObject());
        }
        else{
            pModelPoint = geometryConvertor.PolygonToModelPoint(pPolygon);
        }
        if((pModelPoint != null)&&(pModelPoint != undefined)&&(pModelPoint.isvalid)){
            return new ModelPoint(pModelPoint);
        }
        else{
            return null;
        }
    };

    /**
     * ��������ɽ���
     * @param {Polygon} pPolygon
     * @param {long} lFloorNumber
     * @param {double} dFloorHeight
     * @param {double} dSlopeAngle
     * @param {VRStarRoofType } enumRoofType
     * @param {string} sFacadeTextureName
     * @param {string} sRoofTextureName
     * @return {Model} pModel
     * @return {ModelPoint} pModelPoint
     * @return {boolean} bRes
     */
    this.ExtrudePolygonToModel = function (pPolygon, lFloorNumber, dFloorHeight, dSlopeAngle, enumRoofType, sFacadeTextureName, sRoofTextureName) {
        var operateRes = null;
        if((pPolygon != null)&&(pPolygon != undefined)&&(pPolygon.Valid())){
            operateRes = geometryConvertor.ExtrudePolygonToModel(pPolygon.getNpObject(), lFloorNumber, dFloorHeight, dSlopeAngle, enumRoofType, sFacadeTextureName, sRoofTextureName);
        }
        else {
            operateRes = geometryConvertor.ExtrudePolygonToModel(pPolygon, lFloorNumber, dFloorHeight, dSlopeAngle, enumRoofType, sFacadeTextureName, sRoofTextureName);
        }
        var pModelRes = null;
        var pModelMid = operateRes.Model;
        if((pModelMid != null)&&(pModelMid != undefined)&&(pModelMid.isvalid)){
            pModelRes = new Model(pModelMid);
        }
        else{
            pModelRes = null;
        }
        var pModelPointRes = null;
        var pModelPointMid = operateRes.ModelPoint;
        if((pModelPointMid != null)&&(pModelPointMid != undefined)&&(pModelPointMid.isvalid)){
            pModelPointRes = new ModelPoint(pModelPointMid);
        }
        else{
            pModelPointRes = null;
        }
        var bRes = operateRes.ResultValue;
        return new ExtrudePolygonToModelParameter(pModelRes,pModelPointRes,bRes);
    };
    function ExtrudePolygonToModelParameter(pModelRes,pModelPointRes,bRes){
        this.Model = pModelRes;
        this.ModelPoint = pModelPointRes;
        this.ResultValue = bRes;
    }

    /**
     * �����������ɹ���
     * @param {Polyline} pPolyline
     * @param {string} sPipeName
     * @param {long} lPipeShapeType
     * @param {double} dPipeWidth
     * @param {double} dPipeHeight
     * @param {double} dPipeRadius
     * @param {double} dPipeThinkness
     * @param {long} lAltitudeType
     * @param {double} dStarPointAttitude
     * @param {double} dEndPointAttitude
     * @param {long} lPipeRenderType
     * @param {int} iInterColor
     * @param {int} iOuterColor
     * @param {string} sInterTextureName
     * @param {string} sOuterTextureName
     * @return {Model} pModel
     */
    this.Polyline2PipeLineModel = function (pPolyline, sPipeName, lPipeShapeType, dPipeWidth, dPipeHeight, dPipeRadius, dPipeThinkness, lAltitudeType, dStarPointAttitude, dEndPointAttitude, lPipeRenderType, iInterColor, iOuterColor, sInterTextureName, sOuterTextureName) {
        var pModel = null;
        if((pPolyline != null)&&(pPolyline != undefined)&&(pPolyline.Valid())){
            pModel = geometryConvertor.Polyline2PipeLineModel(pPolyline.getNpObject(), sPipeName, lPipeShapeType, dPipeWidth, dPipeHeight, dPipeRadius, dPipeThinkness, lAltitudeType, dStarPointAttitude, dEndPointAttitude, lPipeRenderType, iInterColor, iOuterColor, sInterTextureName, sOuterTextureName);
        }
        else {
            pModel = geometryConvertor.Polyline2PipeLineModel(pPolyline, sPipeName, lPipeShapeType, dPipeWidth, dPipeHeight, dPipeRadius, dPipeThinkness, lAltitudeType, dStarPointAttitude, dEndPointAttitude, lPipeRenderType, iInterColor, iOuterColor, sInterTextureName, sOuterTextureName);
        }
        if((pModel != null)&&(pModel != undefined)&&(pModel.isvalid)){
            return new Model(pModel);
        }
        else{
            return null;
        }
    };
	
	/**
    * �ö���ηָ��
    * @param {MultiPolygon} pMultiPolygon
    * @param {Model} pModel
    * @param {ModelPoint} pModelPoint
    * @return {Model} pModelInterior
    * @return {ModelPoint} pModelPtInterior
	* @return {Model} pModelExterior
    * @return {ModelPoint} pModelPtExterior
    * @return {boolean} bRes
    */
    this.SplitModelPointByPolygon2D = function (pMultiPolygon, pModel, pModelPoint) {
        var pMultiPolygonUse = null;
        if ((pMultiPolygon != null) && (pMultiPolygon != undefined) && (pMultiPolygon.Valid())) {
            pMultiPolygonUse = pMultiPolygon.getNpObject();
        }
        else {
            pMultiPolygonUse = pMultiPolygon;
        }

        var pModelUse = null;
        if ((pModel != null) && (pModel != undefined) && (pModel.Valid())) {
            pModelUse = pModel.getNpObject();
        }
        else {
            pModelUse = pModel;
        }

        var pModelPointUse = null;
        if ((pModelPoint != null) && (pModelPoint != undefined) && (pModelPoint.Valid())) {
            pModelPointUse = pModelPoint.getNpObject();
        }
        else {
            pModelPointUse = pModelPoint;
        }

        var operateRes = geometryConvertor.SplitModelPointByPolygon2D(pMultiPolygonUse, pModelUse, pModelPointUse);

        var pModelInteriorRes = null;
        var pModelInteriorMid = operateRes.Model;
        if ((pModelInteriorMid != null) && (pModelInteriorMid != undefined) && (pModelInteriorMid.isvalid)) {
            pModelInteriorRes = new Model(pModelInteriorMid);
        }
        else {
            pModelInteriorRes = null;
        }
        var pModelPtInteriorRes = null;
        var pModelPtInteriorMid = operateRes.ModelPoint;
        if ((pModelPtInteriorMid != null) && (pModelPtInteriorMid != undefined) && (pModelPtInteriorMid.isvalid)) {
            pModelPtInteriorRes = new ModelPoint(pModelPtInteriorMid);
        }
        else {
            pModelPtInteriorRes = null;
        }
		var pModelExteriorRes = null;
        var pModelExteriorMid = operateRes.Model2;
        if ((pModelExteriorMid != null) && (pModelExteriorMid != undefined) && (pModelExteriorMid.isvalid)) {
            pModelExteriorRes = new Model(pModelExteriorMid);
        }
        else {
            pModelExteriorRes = null;
        }
        var pModelPtExteriorRes = null;
        var pModelPtExteriorMid = operateRes.ModelPoint2;
        if ((pModelPtExteriorMid != null) && (pModelPtExteriorMid != undefined) && (pModelPtExteriorMid.isvalid)) {
            pModelPtExteriorRes = new ModelPoint(pModelPtExteriorMid);
        }
        else {
            pModelPtExteriorRes = null;
        }
        var bRes = operateRes.ResultValue;
        return new SplitModelPointByPolygon2DParameter(pModelInteriorRes, pModelPtInteriorRes, pModelExteriorRes, pModelPtExteriorRes, bRes);
    };
    function SplitModelPointByPolygon2DParameter(pModelInteriorRes, pModelPtInteriorRes, pModelExteriorRes, pModelPtExteriorRes, bRes) {
        this.Model = pModelInteriorRes;
        this.ModelPoint = pModelPtInteriorRes;
		this.Model2 = pModelExteriorRes;
        this.ModelPoint2 = pModelPtExteriorRes;
        this.ResultValue = bRes;
    }

    /**
    * �ö���δ��߶����Ƶ��и��
    * @param {MultiPolygon} pMultiPolygon
    * @param {Model} pModel
    * @param {ModelPoint} pModelPoint
	* @param {FLOAT} fMinZ
    * @param {FLOAT} fMaxZ
    * @return {Model} pModelInterior
    * @return {ModelPoint} pModelPtInterior
	* @return {Model} pModelExterior
    * @return {ModelPoint} pModelPtExterior
    * @return {boolean} bRes
    */
    this.SplitModelPointByPolygon2DWithZ = function (pMultiPolygon, pModel, pModelPoint, dMinZ, dMaxZ) {
        var pMultiPolygonUse = null;
        if ((pMultiPolygon != null) && (pMultiPolygon != undefined) && (pMultiPolygon.Valid())) {
            pMultiPolygonUse = pMultiPolygon.getNpObject();
        }
        else {
            pMultiPolygonUse = pMultiPolygon;
        }

        var pModelUse = null;
        if ((pModel != null) && (pModel != undefined) && (pModel.Valid())) {
            pModelUse = pModel.getNpObject();
        }
        else {
            pModelUse = pModel;
        }

        var pModelPointUse = null;
        if ((pModelPoint != null) && (pModelPoint != undefined) && (pModelPoint.Valid())) {
            pModelPointUse = pModelPoint.getNpObject();
        }
        else {
            pModelPointUse = pModelPoint;
        }

        var operateRes = geometryConvertor.SplitModelPointByPolygon2DWithZ(pMultiPolygonUse, pModelUse, pModelPointUse, dMinZ, dMaxZ);

        var pModelInteriorRes = null;
        var pModelInteriorMid = operateRes.Model;
        if ((pModelInteriorMid != null) && (pModelInteriorMid != undefined) && (pModelInteriorMid.isvalid)) {
            pModelInteriorRes = new Model(pModelInteriorMid);
        }
        else {
            pModelInteriorRes = null;
        }
        var pModelPtInteriorRes = null;
        var pModelPtInteriorMid = operateRes.ModelPoint;
        if ((pModelPtInteriorMid != null) && (pModelPtInteriorMid != undefined) && (pModelPtInteriorMid.isvalid)) {
            pModelPtInteriorRes = new ModelPoint(pModelPtInteriorMid);
        }
        else {
            pModelPtInteriorRes = null;
        }
		var pModelExteriorRes = null;
        var pModelExteriorMid = operateRes.Model2;
        if ((pModelExteriorMid != null) && (pModelExteriorMid != undefined) && (pModelExteriorMid.isvalid)) {
            pModelExteriorRes = new Model(pModelExteriorMid);
        }
        else {
            pModelExteriorRes = null;
        }
        var pModelPtExteriorRes = null;
        var pModelPtExteriorMid = operateRes.ModelPoint2;
        if ((pModelPtExteriorMid != null) && (pModelPtExteriorMid != undefined) && (pModelPtExteriorMid.isvalid)) {
            pModelPtExteriorRes = new ModelPoint(pModelPtExteriorMid);
        }
        else {
            pModelPtExteriorRes = null;
        }
        var bRes = operateRes.ResultValue;
        return new SplitModelPointByPolygon2DWithZParameter(pModelInteriorRes, pModelPtInteriorRes, pModelExteriorRes, pModelPtExteriorRes, bRes);
    };
    function SplitModelPointByPolygon2DWithZParameter(pModelInteriorRes, pModelPtInteriorRes, pModelExteriorRes, pModelPtExteriorRes, bRes) {
        this.Model = pModelInteriorRes;
        this.ModelPoint = pModelPtInteriorRes;
		this.Model2 = pModelExteriorRes;
        this.ModelPoint2 = pModelPtExteriorRes;
        this.ResultValue = bRes;
    }
	
	/**
    * ������ƽ���и�ģ��
    * @param {Point} poPt0,poPt1,poPt2  ���ڹ����и�ƽ��ĵ�����
    * @param {Model} pModel	        ���и��ģ��
    * @param {ModelPoint} pModelPoint	���и��ģ��ModelPoint����
    * @return {Model} poModelDst	      ����IModel����
    * @return {ModelPoint} poComModelPtDst	����FDE ModelPoint����
    * @return {boolean} bRes �Ƿ�ִ�гɹ�
    */
    this.CutModelPointByPlane = function (poPt0,poPt1,poPt2, pModel, pModelPoint) {
        var poPt0Use = null;
        if ((poPt0 != null) && (poPt0 != undefined) && (poPt0.Valid())) {
            poPt0Use = poPt0.getNpObject();
        }
        else {
            poPt0Use = poPt0;
        }
		
		var poPt1Use = null;
        if ((poPt1 != null) && (poPt1 != undefined) && (poPt1.Valid())) {
            poPt1Use = poPt1.getNpObject();
        }
        else {
            poPt1Use = poPt1;
        }
		
		var poPt2Use = null;
        if ((poPt2 != null) && (poPt2 != undefined) && (poPt2.Valid())) {
            poPt2Use = poPt2.getNpObject();
        }
        else {
            poPt2Use = poPt2;
        }

        var pModelUse = null;
        if ((pModel != null) && (pModel != undefined) && (pModel.Valid())) {
            pModelUse = pModel.getNpObject();
        }
        else {
            pModelUse = pModel;
        }

        var pModelPointUse = null;
        if ((pModelPoint != null) && (pModelPoint != undefined) && (pModelPoint.Valid())) {
            pModelPointUse = pModelPoint.getNpObject();
        }
        else {
            pModelPointUse = pModelPoint;
        }

        var operateRes = geometryConvertor.CutModelPointByPlane(poPt0Use,poPt1Use,poPt2Use, pModelUse, pModelPointUse);

        var pModelRes = null;
        var pModelMid = operateRes.Model;
        if ((pModelMid != null) && (pModelMid != undefined) && (pModelMid.isvalid)) {
            pModelRes = new Model(pModelMid);
        }
        else {
            pModelRes = null;
        }
        var pModelPtRes = null;
        var pModelPtMid = operateRes.ModelPoint;
        if ((pModelPtMid != null) && (pModelPtMid != undefined) && (pModelPtMid.isvalid)) {
            pModelPtRes = new ModelPoint(pModelPtMid);
        }
        else {
            pModelPtRes = null;
        }
		
        var bRes = operateRes.ResultValue;
        return new CutModelPointByPlaneParameter(pModelRes, pModelPtRes, bRes);
    };
    function CutModelPointByPlaneParameter(pModelRes, pModelPtRes, bRes) {
        this.Model = pModelRes;
        this.ModelPoint = pModelPtRes;
        this.ResultValue = bRes;
    }
	
	/**
    * ������ƽ��ָ�ģ��
    * @param {Point} poPt0,poPt1,poPt2  ���ڹ����и�ƽ��ĵ�����
    * @param {Model} pModel	        ���и��ģ��
    * @param {ModelPoint} pModelPoint	���и��ģ��ModelPoint����
	* @return {Model} poModelInterior			����ƽ��������IModel����
	* @return {ModelPoint} poComModelPtInterior	����ƽ��������ModelPoint����
	* @return {Model} poModelExterior			����ƽ�渺����IModel����
	* @return {ModelPoint} poComModelPtExterior	����ƽ�渺����ModelPoint����
    * @return {boolean} bRes
    */
    this.SplitModelPointByPlane = function (poPt0,poPt1,poPt2, pModel, pModelPoint) {
       var poPt0Use = null;
        if ((poPt0 != null) && (poPt0 != undefined) && (poPt0.Valid())) {
            poPt0Use = poPt0.getNpObject();
        }
        else {
            poPt0Use = poPt0;
        }
		
		var poPt1Use = null;
        if ((poPt1 != null) && (poPt1 != undefined) && (poPt1.Valid())) {
            poPt1Use = poPt1.getNpObject();
        }
        else {
            poPt1Use = poPt1;
        }
		
		var poPt2Use = null;
        if ((poPt2 != null) && (poPt2 != undefined) && (poPt2.Valid())) {
            poPt2Use = poPt2.getNpObject();
        }
        else {
            poPt2Use = poPt2;
        }

        var pModelUse = null;
        if ((pModel != null) && (pModel != undefined) && (pModel.Valid())) {
            pModelUse = pModel.getNpObject();
        }
        else {
            pModelUse = pModel;
        }

        var pModelPointUse = null;
        if ((pModelPoint != null) && (pModelPoint != undefined) && (pModelPoint.Valid())) {
            pModelPointUse = pModelPoint.getNpObject();
        }
        else {
            pModelPointUse = pModelPoint;
        }

        var operateRes = geometryConvertor.SplitModelPointByPlane(poPt0Use,poPt1Use,poPt2Use, pModelUse, pModelPointUse);

        var pModelInteriorRes = null;
        var pModelInteriorMid = operateRes.Model;
        if ((pModelInteriorMid != null) && (pModelInteriorMid != undefined) && (pModelInteriorMid.isvalid)) {
            pModelInteriorRes = new Model(pModelInteriorMid);
        }
        else {
            pModelInteriorRes = null;
        }
        var pModelPtInteriorRes = null;
        var pModelPtInteriorMid = operateRes.ModelPoint;
        if ((pModelPtInteriorMid != null) && (pModelPtInteriorMid != undefined) && (pModelPtInteriorMid.isvalid)) {
            pModelPtInteriorRes = new ModelPoint(pModelPtInteriorMid);
        }
        else {
            pModelPtInteriorRes = null;
        }
		var pModelExteriorRes = null;
        var pModelExteriorMid = operateRes.Model2;
        if ((pModelExteriorMid != null) && (pModelExteriorMid != undefined) && (pModelExteriorMid.isvalid)) {
            pModelExteriorRes = new Model(pModelExteriorMid);
        }
        else {
            pModelExteriorRes = null;
        }
        var pModelPtExteriorRes = null;
        var pModelPtExteriorMid = operateRes.ModelPoint2;
        if ((pModelPtExteriorMid != null) && (pModelPtExteriorMid != undefined) && (pModelPtExteriorMid.isvalid)) {
            pModelPtExteriorRes = new ModelPoint(pModelPtExteriorMid);
        }
        else {
            pModelPtExteriorRes = null;
        }
        var bRes = operateRes.ResultValue;
        return new SplitModelPointByPlaneParameter(pModelInteriorRes, pModelPtInteriorRes, pModelExteriorRes, pModelPtExteriorRes, bRes);
    };
    function SplitModelPointByPlaneParameter(pModelInteriorRes, pModelPtInteriorRes, pModelExteriorRes, pModelPtExteriorRes, bRes) {
        this.Model = pModelInteriorRes;
        this.ModelPoint = pModelPtInteriorRes;
		this.Model2 = pModelExteriorRes;
        this.ModelPoint2 = pModelPtExteriorRes;
        this.ResultValue = bRes;
    }
	
	/**
    * ��ƽ�����ģ������
    * @param {Point} poPt0,poPt1,poPt2  ���ڹ�������ƽ��ĵ�����
    * @param {Model} pModel	        ���и��ģ��
    * @param {ModelPoint} pModelPoint	���и��ģ��ModelPoint����
    * @return {Model} poModelDst	      ������������IModel����
    * @return {ModelPoint} poComModelPtDst	������������ModelPoint����
    * @return {boolean} bRes �Ƿ�ִ�гɹ�
    */
    this.ProfileModelPointByPlane = function (poPt0,poPt1,poPt2, pModel, pModelPoint) {
        var poPt0Use = null;
        if ((poPt0 != null) && (poPt0 != undefined) && (poPt0.Valid())) {
            poPt0Use = poPt0.getNpObject();
        }
        else {
            poPt0Use = poPt0;
        }
		
		var poPt1Use = null;
        if ((poPt1 != null) && (poPt1 != undefined) && (poPt1.Valid())) {
            poPt1Use = poPt1.getNpObject();
        }
        else {
            poPt1Use = poPt1;
        }
		
		var poPt2Use = null;
        if ((poPt2 != null) && (poPt2 != undefined) && (poPt2.Valid())) {
            poPt2Use = poPt2.getNpObject();
        }
        else {
            poPt2Use = poPt2;
        }

        var pModelUse = null;
        if ((pModel != null) && (pModel != undefined) && (pModel.Valid())) {
            pModelUse = pModel.getNpObject();
        }
        else {
            pModelUse = pModel;
        }

        var pModelPointUse = null;
        if ((pModelPoint != null) && (pModelPoint != undefined) && (pModelPoint.Valid())) {
            pModelPointUse = pModelPoint.getNpObject();
        }
        else {
            pModelPointUse = pModelPoint;
        }

        var operateRes = geometryConvertor.ProfileModelPointByPlane(poPt0Use,poPt1Use,poPt2Use, pModelUse, pModelPointUse);

        var pModelRes = null;
        var pModelMid = operateRes.Model;
        if ((pModelMid != null) && (pModelMid != undefined) && (pModelMid.isvalid)) {
            pModelRes = new Model(pModelMid);
        }
        else {
            pModelRes = null;
        }
        var pModelPtRes = null;
        var pModelPtMid = operateRes.ModelPoint;
        if ((pModelPtMid != null) && (pModelPtMid != undefined) && (pModelPtMid.isvalid)) {
            pModelPtRes = new ModelPoint(pModelPtMid);
        }
        else {
            pModelPtRes = null;
        }
		
        var bRes = operateRes.ResultValue;
        return new ProfileModelPointByPlaneParameter(pModelRes, pModelPtRes, bRes);
    };
    function ProfileModelPointByPlaneParameter(pModelRes, pModelPtRes, bRes) {
        this.Model = pModelRes;
        this.ModelPoint = pModelPtRes;
        this.ResultValue = bRes;
    }
	
	/**
    * �����߼���ģ������
    * @param {Polyline} poPolyline      ���ڹ�������ƽ�������
    * @param {Model} pModel	        ���и��ģ��
    * @param {ModelPoint} pModelPoint	���и��ģ��ModelPoint����
    * @return {Model} poModelDst	      ������������IModel����
    * @return {ModelPoint} poComModelPtDst	������������ModelPoint����
    * @return {boolean} bRes �Ƿ�ִ�гɹ�
    */
	this.ProfileModelPointByPolyline = function (poPolyline,pModel, pModelPoint) {
        var poPolylineUse = null;
        if ((poPolyline != null) && (poPolyline != undefined) && (poPolyline.Valid())) {
            poPolylineUse = poPolyline.getNpObject();
        }
        else {
            poPolylineUse = poPolyline;
        }
		
        var pModelUse = null;
        if ((pModel != null) && (pModel != undefined) && (pModel.Valid())) {
            pModelUse = pModel.getNpObject();
        }
        else {
            pModelUse = pModel;
        }

        var pModelPointUse = null;
        if ((pModelPoint != null) && (pModelPoint != undefined) && (pModelPoint.Valid())) {
            pModelPointUse = pModelPoint.getNpObject();
        }
        else {
            pModelPointUse = pModelPoint;
        }

        var operateRes = geometryConvertor.ProfileModelPointByPolyline(poPolylineUse, pModelUse, pModelPointUse);

        var pModelRes = null;
        var pModelMid = operateRes.Model;
        if ((pModelMid != null) && (pModelMid != undefined) && (pModelMid.isvalid)) {
            pModelRes = new Model(pModelMid);
        }
        else {
            pModelRes = null;
        }
        var pModelPtRes = null;
        var pModelPtMid = operateRes.ModelPoint;
        if ((pModelPtMid != null) && (pModelPtMid != undefined) && (pModelPtMid.isvalid)) {
            pModelPtRes = new ModelPoint(pModelPtMid);
        }
        else {
            pModelPtRes = null;
        }
		
        var bRes = operateRes.ResultValue;
        return new ProfileModelPointByPolylineParameter(pModelRes, pModelPtRes, bRes);
    };
    function ProfileModelPointByPolylineParameter(pModelRes, pModelPtRes, bRes) {
        this.Model = pModelRes;
        this.ModelPoint = pModelPtRes;
        this.ResultValue = bRes;
    }

    /**
    * ��������ģ�͵Ĳ��������
    * @param {Model} pModel0	        ���벼�������ģ�Ͷ���
    * @param {ModelPoint} pModelPoint0	���벼�������ģ�Ͷ����ModelPoint����
    * @param {Model} pModel1	        ���벼�������ģ�Ͷ���
    * @param {ModelPoint} pModelPoint1  ���벼�������ģ�Ͷ����ModelPoint����
    * @return {Model} pModelDst		ģ�Ͳ�������������IModel����
    * @return {ModelPoint} pModelPointDst ģ�Ͳ�������������ModelPoint����
    * @return {boolean} bRes �Ƿ�ִ�гɹ�
    */
	this.IntersectionModelPoint = function (pModel0, pModelPoint0,pModel1, pModelPoint1) {	
        var pModelUse0 = null;
        if ((pModel0 != null) && (pModel0 != undefined) && (pModel0.Valid())) {
            pModelUse0 = pModel0.getNpObject();
        }
        else {
            pModelUse0 = pModel0;
        }

        var pModelPointUse0 = null;
        if ((pModelPoint0 != null) && (pModelPoint0 != undefined) && (pModelPoint0.Valid())) {
            pModelPointUse0 = pModelPoint0.getNpObject();
        }
        else {
            pModelPointUse0 = pModelPoint0;
        }

	var pModelUse1 = null;
        if ((pModel1 != null) && (pModel1 != undefined) && (pModel1.Valid())) {
            pModelUse1 = pModel1.getNpObject();
        }
        else {
            pModelUse1 = pModel1;
        }
	
	var pModelPointUse1 = null;
        if ((pModelPoint1 != null) && (pModelPoint1 != undefined) && (pModelPoint1.Valid())) {
            pModelPointUse1 = pModelPoint1.getNpObject();
        }
        else {
            pModelPointUse1 = pModelPoint1;
        }
	
        var operateRes = geometryConvertor.IntersectionModelPoint(pModelUse0, pModelPointUse0,pModelUse1, pModelPointUse1);

        var pModelRes = null;
        var pModelMid = operateRes.Model;
        if ((pModelMid != null) && (pModelMid != undefined) && (pModelMid.isvalid)) {
            pModelRes = new Model(pModelMid);
        }
        else {
            pModelRes = null;
        }
        var pModelPtRes = null;
        var pModelPtMid = operateRes.ModelPoint;
        if ((pModelPtMid != null) && (pModelPtMid != undefined) && (pModelPtMid.isvalid)) {
            pModelPtRes = new ModelPoint(pModelPtMid);
        }
        else {
            pModelPtRes = null;
        }
		
        var bRes = operateRes.ResultValue;
        return new IntersectionModelPointParameter(pModelRes, pModelPtRes, bRes);
    };
    function IntersectionModelPointParameter(pModelRes, pModelPtRes, bRes) {
        this.Model = pModelRes;
        this.ModelPoint = pModelPtRes;
        this.ResultValue = bRes;
    }
    
     /**
    * ��������ģ�͵Ĳ�������
    * @param {Model} pModel0	        ���벼�������ģ�Ͷ���
    * @param {ModelPoint} pModelPoint0	���벼�������ģ�Ͷ����ModelPoint����
    * @param {Model} pModel1	        ���벼�������ģ�Ͷ���
    * @param {ModelPoint} pModelPoint1  ���벼�������ģ�Ͷ����ModelPoint����
    * @return {Model} pModelDst		ģ�Ͳ�������������IModel����
    * @return {ModelPoint} pModelPointDst ģ�Ͳ�������������ModelPoint����
    * @return {boolean} bRes �Ƿ�ִ�гɹ�
    */
	this.DifferenceModelPoint = function (pModel0, pModelPoint0,pModel1, pModelPoint1) {	
        var pModelUse0 = null;
        if ((pModel0 != null) && (pModel0 != undefined) && (pModel0.Valid())) {
            pModelUse0 = pModel0.getNpObject();
        }
        else {
            pModelUse0 = pModel0;
        }

        var pModelPointUse0 = null;
        if ((pModelPoint0 != null) && (pModelPoint0 != undefined) && (pModelPoint0.Valid())) {
            pModelPointUse0 = pModelPoint0.getNpObject();
        }
        else {
            pModelPointUse0 = pModelPoint0;
        }

	var pModelUse1 = null;
        if ((pModel1 != null) && (pModel1 != undefined) && (pModel1.Valid())) {
            pModelUse1 = pModel1.getNpObject();
        }
        else {
            pModelUse1 = pModel1;
        }
	
	var pModelPointUse1 = null;
        if ((pModelPoint1 != null) && (pModelPoint1 != undefined) && (pModelPoint1.Valid())) {
            pModelPointUse1 = pModelPoint1.getNpObject();
        }
        else {
            pModelPointUse1 = pModelPoint1;
        }
	
        var operateRes = geometryConvertor.DifferenceModelPoint(pModelUse0, pModelPointUse0,pModelUse1, pModelPointUse1);

        var pModelRes = null;
        var pModelMid = operateRes.Model;
        if ((pModelMid != null) && (pModelMid != undefined) && (pModelMid.isvalid)) {
            pModelRes = new Model(pModelMid);
        }
        else {
            pModelRes = null;
        }
        var pModelPtRes = null;
        var pModelPtMid = operateRes.ModelPoint;
        if ((pModelPtMid != null) && (pModelPtMid != undefined) && (pModelPtMid.isvalid)) {
            pModelPtRes = new ModelPoint(pModelPtMid);
        }
        else {
            pModelPtRes = null;
        }
		
        var bRes = operateRes.ResultValue;
        return new DifferenceModelPointParameter(pModelRes, pModelPtRes, bRes);
    };
    function DifferenceModelPointParameter(pModelRes, pModelPtRes, bRes) {
        this.Model = pModelRes;
        this.ModelPoint = pModelPtRes;
        this.ResultValue = bRes;
    }
    
     /**
    * ��������ģ�͵Ĳ��������
    * @param {Model} pModel0	        ���벼�������ģ�Ͷ���
    * @param {ModelPoint} pModelPoint0	���벼�������ģ�Ͷ����ModelPoint����
    * @param {Model} pModel1	        ���벼�������ģ�Ͷ���
    * @param {ModelPoint} pModelPoint1  ���벼�������ģ�Ͷ����ModelPoint����
    * @return {Model} pModelDst		ģ�Ͳ�������������IModel����
    * @return {ModelPoint} pModelPointDst ģ�Ͳ�������������ModelPoint����
    * @return {boolean} bRes �Ƿ�ִ�гɹ�
    */
	this.UnionModelPoint = function (pModel0, pModelPoint0,pModel1, pModelPoint1) {	
        var pModelUse0 = null;
        if ((pModel0 != null) && (pModel0 != undefined) && (pModel0.Valid())) {
            pModelUse0 = pModel0.getNpObject();
        }
        else {
            pModelUse0 = pModel0;
        }

        var pModelPointUse0 = null;
        if ((pModelPoint0 != null) && (pModelPoint0 != undefined) && (pModelPoint0.Valid())) {
            pModelPointUse0 = pModelPoint0.getNpObject();
        }
        else {
            pModelPointUse0 = pModelPoint0;
        }

	var pModelUse1 = null;
        if ((pModel1 != null) && (pModel1 != undefined) && (pModel1.Valid())) {
            pModelUse1 = pModel1.getNpObject();
        }
        else {
            pModelUse1 = pModel1;
        }
	
	var pModelPointUse1 = null;
        if ((pModelPoint1 != null) && (pModelPoint1 != undefined) && (pModelPoint1.Valid())) {
            pModelPointUse1 = pModelPoint1.getNpObject();
        }
        else {
            pModelPointUse1 = pModelPoint1;
        }
	
        var operateRes = geometryConvertor.UnionModelPoint(pModelUse0, pModelPointUse0,pModelUse1, pModelPointUse1);

        var pModelRes = null;
        var pModelMid = operateRes.Model;
        if ((pModelMid != null) && (pModelMid != undefined) && (pModelMid.isvalid)) {
            pModelRes = new Model(pModelMid);
        }
        else {
            pModelRes = null;
        }
        var pModelPtRes = null;
        var pModelPtMid = operateRes.ModelPoint;
        if ((pModelPtMid != null) && (pModelPtMid != undefined) && (pModelPtMid.isvalid)) {
            pModelPtRes = new ModelPoint(pModelPtMid);
        }
        else {
            pModelPtRes = null;
        }
		
        var bRes = operateRes.ResultValue;
        return new UnionModelPointParameter(pModelRes, pModelPtRes, bRes);
    };
    function UnionModelPointParameter(pModelRes, pModelPtRes, bRes) {
        this.Model = pModelRes;
        this.ModelPoint = pModelPtRes;
        this.ResultValue = bRes;
    }
	
}
/**
 * ���η����ӿ�
 * Creator   Jimmy
 * Time      2016-06-27
 */

export function TerrainAnalyse(){
    var pTerAnalyse = plugin.NewTerrainAnalyse();

    /**
     * ���ûص������ڶ�ȡ��������
     * @param {string} dReferenceHeight sOnProcessing
     */
    this.setOnProcessing = function (sOnProcessing) {
        pTerAnalyse.OnProcessing = sOnProcessing;
    };

    /**
     * ���ڷ�����
     * @param {Polygon} pPolygon
     * @param {double} dTolerance
     * @param {double} dReferenceHeight
     * @return {MultiPolygon} pCutPolygons
     * @return {MultiPolygon} pFillPolygons
     * @return {double} dCutVolume
     * @return {double} dFillVolume
     */
    this.CalculateCutFill  = function(pPolygon, dTolerance, dReferenceHeight){
        var operateRes = null;
        if((pPolygon != null)&&(pPolygon != undefined)&&(pPolygon.Valid())){
            operateRes = pTerAnalyse.CalculateCutFill (pPolygon.getNpObject(), dTolerance, dReferenceHeight);
        }
        else{
            operateRes = pTerAnalyse.CalculateCutFill (pPolygon, dTolerance, dReferenceHeight);
        }
        var pCutPolygonsMid = operateRes.CutPolygon;
        var pCutPolygonsRes = null;
        if((pCutPolygonsMid != null)&&(pCutPolygonsMid != undefined)&&(pCutPolygonsMid.isvalid)){
            pCutPolygonsRes = new MultiPolygon(pCutPolygonsMid);
        }
        else{
            pCutPolygonsRes = null;
        }
        var pFillPolygonsMid = operateRes.FillPolygon;
        var pFillPolygonsRes = null;
        if((pFillPolygonsMid != null)&&(pFillPolygonsMid != undefined)&&(pFillPolygonsMid.isvalid)){
            pFillPolygonsRes = new MultiPolygon(pFillPolygonsMid);
        }
        else{
            pFillPolygonsRes = null;
        }
        var dCutVolume = operateRes.CutVolume;
        var dFillVolume = operateRes.FillVolume;
        return new CalculateCutFillParameter(pCutPolygonsRes,pFillPolygonsRes,dCutVolume,dFillVolume);
    };
    function CalculateCutFillParameter(pCutPolygonsRes,pFillPolygonsRes,dCutVolume,dFillVolume){
        this.CutPolygon = pCutPolygonsRes;
        this.FillPolygon = pFillPolygonsRes;
        this.CutVolume = dCutVolume;
        this.FillVolume = dFillVolume;
    }

    /**
     * ˮ�ͷ���
     */
    this.FindWaterSinkBoundary  = function(pPolygon, dTolerance, dWaterDepth){
        if((pPolygon != null)&&(pPolygon != undefined)&&(pPolygon.Valid())) {
            pTerAnalyse.FindWaterSinkBoundary(pPolygon.getNpObject(), dTolerance, dWaterDepth);
        }
        else{
            pTerAnalyse.FindWaterSinkBoundary(pPolygon, dTolerance, dWaterDepth);
        }
    };

    /**
     * ��ر����
     * @param {Polygon} pPolygon
     * @param {double} dTolerance
     * @return {double}
     */
    this.GetSurfaceArea  = function(pPolygon, dTolerance){
        if((pPolygon != null)&&(pPolygon != undefined)&&(pPolygon.Valid())){
            pTerAnalyse.GetSurfaceArea (pPolygon.getNpObject(), dTolerance);
        }
        else{
            pTerAnalyse.GetSurfaceArea (pPolygon, dTolerance);
        }
    };

}
/**
 * �����ӿ�
 * pTopoNodeΪ����Ĳ���
 * Creator   Jimmy
 * Time      2017-02-10
*/
export function TopoNode(pTopoNode) {

    this.getNpObject = function () {
        return pTopoNode;
    };

    this.Valid = function () {
        return pTopoNode.isvalid;
    };

    /**
     * �������㣺��ȡ��ʼ����
     * @return {long}
     */
    this.getAroundNodeCount = function () {
        return pTopoNode.AroundNodeCount;
    };

    /**
     * brief ��ȡ�����ýڵ�λ��
     * @param {Point} pPoint
     * @return {Point} pPoint
     */
    this.GetLocation = function () {
        var pPoint = pTopoNode.GetLocation();
        if ((pPoint != null)&&(pPoint != undefined)&&(pPoint.isvalid)) {
            return new Point(pPoint);
        }
        else{
            return null;
        }
    };
    this.SetLocation = function (pPoint) {
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pTopoNode.SetLocation(pPoint.getNpObject());
        }
        else{
            pTopoNode.SetLocation(pPoint);
        }
    };

    /**
     * ��ȡ�й�������һ�ڵ�
     * @return {TopoNode} pNewTopoNode
     */
    this.AroundNextNode = function () {
        var pNewTopoNode = pTopoNode.AroundNextNode();
        if ((pNewTopoNode != null)&&(pNewTopoNode != undefined)&&(pNewTopoNode.isvalid)) {
            return new TopoNode(pNewTopoNode);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�������һ�ڵ�
     * @return {TopoNode} pNewTopoNode
     */
    this.NextNode = function () {
        var pNewTopoNode = pTopoNode.NextNode();
        if ((pNewTopoNode != null)&&(pNewTopoNode != undefined)&&(pNewTopoNode.isvalid)) {
            return new TopoNode(pNewTopoNode);
        }
        else{
            return null;
        }
    };

    /**
    * ��ȡ�Ӹõ�����ı�
     * @return {TopoEdge} pNewTopoEdge
    */
    this.GetEdge = function () {
        var pNewTopoEdge = pTopoNode.GetEdge();
        if ((pNewTopoEdge != null)&&(pNewTopoEdge != undefined)&&(pNewTopoEdge.isvalid)) {
            return new TopoEdge(pNewTopoEdge);
        }
        else{
            return null;
        }
    };

    /**
     * �ж��Ƿ���ָ������ͬ
     * @param {TopoNode} pNewTopoNode
     * @return {boolean}
     */
    this.Equal = function (pNewTopoNode) {
        if((pNewTopoNode != null)&&(pNewTopoNode != undefined)&&(pNewTopoNode.Valid())){
            return pTopoNode.Equal(pNewTopoNode.getNpObject());
        }
        else{
            return pTopoNode.Equal(pNewTopoNode);
        }
    };
}

/**
 * �߾���ӿ�
 * pTopoEdgeΪ����Ĳ���
 * Creator   Jimmy
 * Time      2017-02-10
 */
export function TopoEdge(pTopoEdge) {

    this.getNpObject = function () {
        return pTopoEdge;
    };

    this.Valid = function () {
        return pTopoEdge.isvalid;
    };

    /**
     * �ж��Ƿ��Ǳ߽��
     * @return {boolean}
     */
    this.getIsBorder = function () {
        return pTopoEdge.IsBorder;
    };

    /**
     * ��ȡ�ɰ�ߵ����˵㹹����߶�
     * @return {Line} pLine
     */
    this.GetLocation = function () {
        var pLine = pTopoEdge.GetLocation();
        if ((pLine != null)&&(pLine != undefined)&&(pLine.isvalid)) {
            return new Line(pLine);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ��������ĵ�
     * @return {TopoNode} pNewTopoNode
     */
    this.GetNode = function () {
        var pNewTopoNode = pTopoEdge.GetNode();
        if ((pNewTopoNode != null)&&(pNewTopoNode != undefined)&&(pNewTopoNode.isvalid)) {
            return new TopoNode(pNewTopoNode);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�����������
     * @return {TopoFacet} pNewTopoFacet
     */
    this.GetFacet = function () {
        var pNewTopoFacet = pTopoEdge.GetFacet();
        if ((pNewTopoFacet != null)&&(pNewTopoFacet != undefined)&&(pNewTopoFacet.isvalid)) {
            return new TopoFacet(pNewTopoFacet);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ��һ����
     * @return {TopoEdge} pNewTopoEdge
     */
    this.PrevEdge = function () {
        var pNewTopoEdge = pTopoEdge.PrevEdge();
        if ((pNewTopoEdge != null)&&(pNewTopoEdge != undefined)&&(pNewTopoEdge.isvalid)) {
            return new TopoEdge(pNewTopoEdge);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ��һ����
     * @return {TopoEdge} pNewTopoEdge
     */
    this.NextEdge = function () {
        var pNewTopoEdge = pTopoEdge.NextEdge();
        if ((pNewTopoEdge != null)&&(pNewTopoEdge != undefined)&&(pNewTopoEdge.isvalid)) {
            return new TopoEdge(pNewTopoEdge);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�����
     * @return {TopoEdge} pNewTopoEdge
     */
    this.OppositeEdge = function () {
        var pNewTopoEdge = pTopoEdge.OppositeEdge();
        if ((pNewTopoEdge != null)&&(pNewTopoEdge != undefined)&&(pNewTopoEdge.isvalid)) {
            return new TopoEdge(pNewTopoEdge);
        }
        else{
            return null;
        }
    };

    /**
     * �ж���ָ�����Ƿ����
     * @param {TopoEdge} pNewTopoEdge
     * @return {boolean}
     */
    this.Equal = function (pNewTopoEdge) {
        if((pNewTopoEdge != null)&&(pNewTopoEdge != undefined)&&(pNewTopoEdge.Valid())){
            return pTopoEdge.Equal(pNewTopoEdge.getNpObject());
        }
        else{
            return pTopoEdge.Equal(pNewTopoEdge);
        }
    };
}


/**
 * �����ӿ�
 * pTopoFacetΪ����Ĳ���
 * Creator   Jimmy
 * Time      2017-02-10
 */
export function TopoFacet(pTopoFacet) {

    this.getNpObject = function () {
        return pTopoFacet;
    };

    this.Valid = function () {
        return pTopoFacet.isvalid;
    };

    /**
     * ��ȡ��λ��
     * @return {Polygon} pPolygon
     */
    this.GetLocation = function () {
        var pPolygon = pTopoFacet.GetLocation();
        if ((pPolygon != null)&&(pPolygon != undefined)&&(pPolygon.isvalid)) {
            return new Polygon(pPolygon);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ��ıߵ�����
     * @return {long}
     */
    this.getDegree = function () {
        return pTopoFacet.Degree;
    };

    /**
     * ��ȡ������й�����ϵ�������
     * @return {long}
     */
    this.getAroundFacetCount = function () {
        return pTopoFacet.AroundFacetCount;
    };

    /**
     * ��ȡ�����й�����ϵ����һ����
     * @return {TopoFacet} pNewTopoFacet
     */
    this.AroundNextFacet = function () {
        var pNewTopoFacet = pTopoFacet.AroundNextFacet();
        if ((pNewTopoFacet != null)&&(pNewTopoFacet != undefined)&&(pNewTopoFacet.isvalid)) {
            return new TopoFacet(pNewTopoFacet);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ���ָ����
     * @param {int} iIndex
     * @return {TopoEdge} pNewTopoEdge
     */
    this.GetEdge = function (iIndex) {
        var pNewTopoEdge = pTopoFacet.GetEdge(iIndex);
        if ((pNewTopoEdge != null)&&(pNewTopoEdge != undefined)&&(pNewTopoEdge.isvalid)) {
            return new TopoEdge(pNewTopoEdge);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ���ָ������
     * @param {int} iIndex
     * @return {TopoNode} pNewTopoNode
     */
    this.GetNode = function (iIndex) {
        var pNewTopoNode = pTopoFacet.GetNode(iIndex);
        if ((pNewTopoNode != null)&&(pNewTopoNode != undefined)&&(pNewTopoNode.isvalid)) {
            return new TopoNode(pNewTopoNode);
        }
        else{
            return null;
        }
    };

    /**
    * ��ȡ����е���һ���棬����ʱ��
    * @return {TopoFacet} pNewTopoFacet
    */
    this.NextFacet = function () {
        var pNewTopoFacet = pTopoFacet.NextFacet();
        if ((pNewTopoFacet != null)&&(pNewTopoFacet != undefined)&&(pNewTopoFacet.isvalid)) {
            return new TopoFacet(pNewTopoFacet);
        }
        else{
            return null;
        }
    };

    /**
     * �ж�����һ�����Ƿ����
     * @param {TopoFacet} pNewTopoFacet
     * @return {boolean}
     */
    this.Equal = function (pNewTopoFacet) {
        if((pNewTopoFacet != null)&&(pNewTopoFacet != undefined)&&(pNewTopoFacet.Valid())){
            return pTopoFacet.Equal(pNewTopoFacet.getNpObject());
        }
        else{
            return pTopoFacet.Equal(pNewTopoFacet);
        }
    };
}/**
 * ��ά�ռ��м���ʵ������������С��ӳ�����
 * pImportEnvΪ����Ĳ���
 * Creator   Jimmy
 * Time      2016-06-15
 */
export function Envelope(pImportEnv) {
    var pEnvelope = null;
    if (pImportEnv == null) {
        pEnvelope = plugin.NewEnvelope();
    }
    else {
        pEnvelope = pImportEnv;
    }

    this.getNpObject = function () {
        return pEnvelope;
    };

    /**��ȡpEnvelope��X����ĳߴ�
     * @return {double}
     */
    this.getWidth = function(){
        return pEnvelope.Width;
    };

    /**��ȡpEnvelope��Y����ĳߴ�
     * @return {double}
     */
    this.getHeight = function(){
        return pEnvelope.Height;
    };

    /**��ȡpEnvelope��Z����ĳߴ�
     * @return {double}
     */
    this.getDepth = function(){
        return pEnvelope.Depth;
    };

    /**��Χ�е����ĵ�
     * @return {Vector3} pVector3
     */
    this.getCenter = function(){
        var pVector3 = pEnvelope.Center;
        if ((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.isvalid)) {
            return new Vector3(pVector3);
        }
        else{
            return null;
        }
    };

    /**��ȡ������X���ֵ
    * @param  {double} dX
    * @return {double}
    */
    this.getMaxX = function(){
        return pEnvelope.MaxX;
    };
    this.setMaxX = function (dX) {
        pEnvelope.MaxX = dX;
    };

    /**��ȡ������Y���ֵ
    * @param {double} dY
    * @return {double}
    */
    this.getMaxY = function(){
        return pEnvelope.MaxY;
    };
    this.setMaxY = function (dY) {
        pEnvelope.MaxY = dY;
    };

    /**��ȡ������Z���ֵ
    * @param {double} dZ
    * @return {double}
    */
    this.getMaxZ = function(){
        return pEnvelope.MaxZ;
    };
    this.setMaxZ = function (dZ) {
        pEnvelope.MaxZ = dZ;
    };

    /**��ȡ������X��Сֵ
    * @param {double} dMinX
    * @return {double}
    */
    this.getMinX = function(){
        return pEnvelope.MinX;
    };
    this.setMinX = function (dMinX) {
        pEnvelope.MinX = dMinX;
    };

    /**��ȡ������Y��Сֵ
    * @param {double} dMinY
    * @return {double}
    */
    this.getMinY = function(){
        return pEnvelope.MinY;
    };
    this.setMinY = function (dMinY) {
        pEnvelope.MinY = dMinY;
    };

    /**��ȡ������Z��Сֵ
    * @param {double} dMinZ
    * @return {double}
    */
    this.getMinZ = function(){
        return pEnvelope.MinZ;
    };
    this.setMinZ = function (dMinZ) {
        pEnvelope.MinZ = dMinZ;
    };

    /**
     * ��¡
     * @return {Envelope} pNewpEnvelope
     */
    this.Clone = function () {
        var pNewpEnvelope = pEnvelope.Clone();
        if ((pNewpEnvelope != null)&&(pNewpEnvelope != undefined)&&(pNewpEnvelope.isvalid)) {
            return new Envelope(pNewpEnvelope);
        }
        else{
            return null;
        }
    };

    /**
     * ����Χ���Ƿ������ǰλ��
     * @param {Vector3} pVector3
     * @return {boolean} 
     */
    this.Contain = function (pVector3) {
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            return pEnvelope.Contain(pVector3.getNpObject());
        }
        else{
            return pEnvelope.Contain(pVector3);
        }
    };

    /**
     * ͨ����һ��pEnvelope��չpEnvelope��С
     * @param {Envelope} pOtherEnvelope
     */
    this.ExpandByEnvelope = function (pOtherEnvelope) {
        if((pOtherEnvelope != null)&&(pOtherEnvelope != undefined)&&(pOtherEnvelope.Valid())){
            pEnvelope.ExpandByEnvelope(pOtherEnvelope.getNpObject());
        }
        else{
            pEnvelope.ExpandByEnvelope(pOtherEnvelope);
        }
    };

    /**
     * ͨ������չpEnvelope��С
     * @param {Vector3} pVector3
     */
    this.ExpandByVector = function (pVector3) {
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            pEnvelope.ExpandByVector(pVector3.getNpObject());
        }
        else{
            pEnvelope.ExpandByVector(pVector3);
        }
    };

    /**
     * ���㵱ǰpEnvelope����һ��pEnvelope�ཻ���
     * @param {Envelope} pNewEnvelope
     * @return {Envelope} pEnvelopeRes
     */
    this.Intersect = function (pNewEnvelope) {
        var pEnvelopeRes = null;
        if((pNewEnvelope != null)&&(pNewEnvelope != undefined)&&(pNewEnvelope.Valid())){
            pEnvelopeRes = pEnvelope.Intersect(pNewEnvelope.getNpObject());
        }
        else{
            pEnvelopeRes = pEnvelope.Intersect(pNewEnvelope);
        }
        if ((pEnvelopeRes != null)&&(pEnvelopeRes != undefined)&&(pEnvelopeRes.isvalid)) {
            return new Envelope(pEnvelopeRes);
        }
        else{
            return null;
        }
    };

    /**
     * �жϵ�ǰpEnvelope����һ��pEnvelope�Ƿ��ཻ
     * param {Envelope} pNewEnvelope
     * return {boolean}
     */
    this.IsIntersect = function (pNewEnvelope) {
        if((pNewEnvelope != null)&&(pNewEnvelope != undefined)&&(pNewEnvelope.Valid())){
            return pEnvelope.IsIntersect(pNewEnvelope.getNpObject());
        }
        else{
            return pEnvelope.IsIntersect(pNewEnvelope);
        }
    };

    /**
     * �����������Сֵ����������ʼ��һ��pEnvelope����
     * param {double}  dMinX  
     * param {double}  dMaxX  
     * param {double}  dMinY  
     * param {double}  dMaxY 
     * param {double}  dMinZ  
     * param {double}  dMaxZ  
     */
    this.Set = function (dMinX, dMaxX, dMinY, dMaxY, dMinZ, dMaxZ) {
        pEnvelope.Set(dMinX, dMaxX, dMinY, dMaxY, dMinZ, dMaxZ);
    };

    /**
     * ��ֵ
     * param {Envelope}  pNewEnvelope
     */
    this.SetByEnvelope = function (pNewEnvelope) {
        if((pNewEnvelope != null)&&(pNewEnvelope != undefined)&&(pNewEnvelope.Valid())){
            pEnvelope.SetByEnvelope(pNewEnvelope.getNpObject());
        }
        else{
            pEnvelope.SetByEnvelope(pNewEnvelope);
        }
    };

    /**
     * �ж��Ƿ���Ч
     * return {boolean}
     */
    this.Valid=function(){
        return pEnvelope.Valid();
    }
}/**
 * ŷ����
 * pImportΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-06-14
 */
export function EulerAngle(pImport) {
    var pEulerAngle = null;
    if (pImport == null) {
        pEulerAngle = plugin.NewEulerAngle();
    }
    else {
        pEulerAngle = pImport;
    }

    this.getNpObject = function () {
        return pEulerAngle;
    };

    /**��ȡ������������ת�Ƕȣ�����תͷ������λ�Ƕ�
    * @param {double} dVal
    * @return {double}
    */
    this.getHeading = function(){
        return pEulerAngle.Heading;
    };
    this.setHeading = function (dVal) {
        pEulerAngle.Heading = dVal;
    };

    /**��ȡ������������ת�Ƕȣ���λ�Ƕȣ���λ�Ƕ�
    * @param {double} dVal
    * @return {double}
    */
    this.getTilt = function(){
        return pEulerAngle.Tilt;
    };
    this.setTilt = function (dVal) {
        pEulerAngle.Tilt = dVal;
    };

    /**
     * ��ȡ������������ת�Ƕȣ�̧ͷ��ͷ������λ�Ƕ�
     * @param {double} dVal
     * @return {double}
     */
    this.getRoll = function(){
        return pEulerAngle.Roll;
    };
    this.setRoll = function (dVal) {
        pEulerAngle.Roll = dVal;
    };

    /**
     * ��ŷ���Ǹ�ֵ
     * @param {double} dhh ������ת�Ƕȣ�����תͷ������λ�Ƕ�
     * @param {double} dtt ������ת�Ƕȣ���λ�Ƕȣ���λ�Ƕ�
     * @param {double} drr ����������ת�Ƕȣ�̧ͷ��ͷ������λ�Ƕ�
     */
    this.Set = function(dhh,dtt,drr){
        pEulerAngle.Set(dhh, dtt, drr);
    };

    /**
     * ��¡
     * @return {EulerAngle} 
     */
    this.Clone = function () {
        var newAngle = pEulerAngle.Clone();
        if ((newAngle != null)&&(newAngle != undefined)&&(newAngle.isvalid)) {
            return new EulerAngle(newAngle);
        }
        else{
            return null;
        }
    };

    /**
     * ��ֵ
     * @param {EulerAngle} pNewEulerAngle
     */
    this.SetByEulerAngle = function (pNewEulerAngle) {
        if((pNewEulerAngle != null)&&(pNewEulerAngle != undefined)&&(pNewEulerAngle.Valid())){
            pEulerAngle.SetByEulerAngle(pNewEulerAngle.getNpObject());
        }
        else{
            pEulerAngle.SetByEulerAngle(pNewEulerAngle);
        }
    };

    /**
     * �ж��Ƿ���Ч
     * @return {boolean}
     */
    this.Valid=function(){
        return pEulerAngle.isvalid;
    }
}

/**
 * 4 * 4 ����
 * pImportΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-06-15
 */
export function Matrix(pImport) {
    var matrix = null;
    if (pImport == null) {
        matrix = plugin.NewMatrix();
    }
    else {
        matrix = pImport;
    }

    this.getNpObject = function () {
        return matrix;
    };

    /**
     * �þ����Ƿ��������任
     * @return {boolean}
     */
    this.getHasMirror = function(){
        return matrix.HasMirror;
    };

    /**
     * �þ����Ƿ����б�б任
     * @return {boolean}
     */
    this.getHasShear = function () {
        return matrix.HasShear;
    };

    /**
     * �þ����Ƿ����б�б任
     * @return {boolean}
     */
    this.getIsIdentity = function(){
        return matrix.IsIdentity;
    };

    /**
     * ��ȡ�����þ����1�е�1�е�ֵ
     * @param {double} d11
     * @return {double}
     */
    this.getM11 = function(){
        return matrix.M11;
    };
    this.setM11 = function (d11) {
        matrix.M11 = d11;
    };

    /**
     * ��ȡ�����þ����1�е�2�е�ֵ
     * @param {double} d12
     * @return {double}
     */
    this.getM12 = function(){
        return matrix.M12;
    };
    this.setM12 = function(d12){
        matrix.M12 = d12;
    };

    /**
     * ��ȡ�����þ����1�е�3�е�ֵ
     * @param {double} d13
     * @return {double}
     */
    this.getM13 = function(){
        return matrix.M13;
    };
    this.setM13 = function(d13){
        matrix.M13 = d13;
    };

    /**
     * ��ȡ�����þ����1�е�4�е�ֵ
     * @param {double} d14
     * @return {double}
     */
    this.getM14 = function(){
        return matrix.M14;
    };
    this.setM14 = function(d14){
        matrix.M14 = d14;
    };

    /**
     * ��ȡ�����þ����2�е�1�е�ֵ
     * @param {double} d21
     * @return {double}
     */
    this.getM21 = function(){
        return matrix.M21;
    };
    this.setM21 = function(d21){
        matrix.M21 = d21;
    };

    /**
     * ��ȡ�����þ����2�е�2�е�ֵ
     * @param {double} d22
     * @return {double}
     */
    this.getM22 = function(){
        return matrix.M22;
    };
    this.setM22 = function(d22){
        matrix.M22 = d22;
    };

    /**
     * ��ȡ�����þ����2�е�3�е�ֵ
     * @param {double} d23
     * @return {double}
     */
    this.getM23 = function(){
        return matrix.M23;
    };
    this.setM23 = function(d23){
        matrix.M23 = d23;
    };

    /**
     * ��ȡ�����þ����2�е�4�е�ֵ
     * @param {double} d24
     * @return {double}
     */
    this.getM24 = function(){
        return matrix.M24;
    };
    this.setM24 = function(d24){
        matrix.M24 = d24;
    };

    /**
     * ��ȡ�����þ����3�е�1�е�ֵ
     * @param {double} d31
     * @return {double}
     */
    this.getM31 = function(){
        return matrix.M31;
    };
    this.setM31 = function(d31){
        matrix.M31 = d31;
    };

    /**
     * ��ȡ�����þ����2�е�2�е�ֵ
     * @param {double} d32
     * @return {double}
     */
    this.getM32 = function(){
        return matrix.M32;
    };
    this.setM32 = function(d32){
        matrix.M32 = d32;
    };

    /**
     * ��ȡ�����þ����3�е�3�е�ֵ
     * @param {double} d33
     * @return {double}
     */
    this.getM33 = function(){
        return matrix.M33;
    };
    this.setM33 = function(d33){
        matrix.M33 = d33;
    };

    /**
     * ��ȡ�����þ����3�е�4�е�ֵ
     * @param {double} d34
     * @return {double}
     */
    this.getM34 = function(){
        return matrix.M34;
    };
    this.setM34 = function(d34){
        matrix.M34 = d34;
    };

    /**
     * ��ȡ�����þ����4�е�1�е�ֵ
     * @param {double} d41
     * @return {double}
     */
    this.getM41 = function(){
        return matrix.M41;
    };
    this.setM41 = function(d41){
        matrix.M41 = d41;
    };

    /**
     * ��ȡ�����þ����4�е�2�е�ֵ
     * @param {double} d42
     * @return {double}
     */
    this.getM42 = function(){
        return matrix.M42;
    };
    this.setM42 = function(d42){
        matrix.M42 = d42;
    };

    /**
     * ��ȡ�����þ����4�е�3�е�ֵ
     * @param {double} d43
     * @return {double}
     */
    this.getM43 = function(){
        return matrix.M43;
    };
    this.setM43 = function(d43){
        matrix.M43 = d43;
    };

    /**
     * ��ȡ�����þ����4�е�4�е�ֵ
     * @param {double} d44
     * @return {double}
     */
    this.getM44 = function(){
        return matrix.M44;
    };
    this.setM44 = function(d44){
        matrix.M44 = d44;
    };

    /**
     * ��¡
     * @return {Matrix} pNewMatr
     */
    this.Clone = function () {
        var pNewMatr = matrix.Clone();
        if ((pNewMatr != null)&&(pNewMatr != undefined)&&(pNewMatr.isvalid)) {
            return new Matrix(pNewMatr);
        }
        else{
            return null;
        }
    };

//    /**
//     * ����ϳ�
//     */
//    this.Compose = function(vecTrans,vecScale,eEuler){
//        return matrix.Compose(vecTrans.getNpObject(), vecScale.getNpObject(), eEuler.getNpObject());
//    };

//    /**
//     * ����ֽ�
//     */
//    this.Decompose = function(){
//        return matrix.Decompose();
//    };

    /**
     * ��ȡ����ڵ�λ�����Rotation����
     * @return {EulerAngle} pNewEulerAngle
     */
    this.GetRotation = function () {
        var pNewEulerAngle = matrix.GetRotation();
        if ((pNewEulerAngle != null)&&(pNewEulerAngle != undefined)&&(pNewEulerAngle.isvalid)) {
            return new EulerAngle(pNewEulerAngle);
        }
        else{
            return null;
        }
    };

    /**
     * ��ת
     * @param {EulerAngle} pNewEulerAngle
     */
    this.SetRotation = function(pNewEulerAngle){
        if((pNewEulerAngle != null)&&(pNewEulerAngle != undefined)&&(pNewEulerAngle.Valid())){
            matrix.SetRotation(pNewEulerAngle.getNpObject());
        }
        else{
            matrix.SetRotation(pNewEulerAngle);
        }
    };

    /**
     * ��ȡ����ڵ�λ�����Scale����
     * @return {Vector3} pNewVec
     */
    this.GetScale = function () {
        var pNewVec = matrix.GetScale();
        if ((pNewVec != null)&&(pNewVec != undefined)&&(pNewVec.isvalid)) {
            return new Vector3(pNewVec);
        }
        else{
            return null;
        }
    };


    /**
     * ��ȡ����ڵ�λ�����Translate����
     * @return {Vector3} pNewVec
     */
    this.GetTranslate = function(){
        var pNewVec = matrix.GetTranslate();
        if ((pNewVec != null)&&(pNewVec != undefined)&&(pNewVec.isvalid)) {
            return new Vector3(pNewVec);
        }
        else{
            return null;
        }
    };

    /**
     * �������
     */
    this.Inverse = function () {
        matrix.Inverse();
    };

    /**
     * ʹ����λ��
     */
    this.MakeIdentity = function(){
        matrix.MakeIdentity();
    };

    /**
     * ʸ���;������
     * @param {Vector3} pNewVec
     * @return {Vector3} pVecRes
     */
    this.MultiplyVector = function (pNewVec) {
        var pVecRes = null;
        if((pNewVec != null)&&(pNewVec != undefined)&&(pNewVec.Valid())){
            pVecRes = matrix.MultiplyVector(pNewVec.getNpObject());
        }
        else{
            pVecRes = matrix.MultiplyVector(pNewVec);
        }
        if ((pVecRes != null)&&(pVecRes != undefined)&&(pVecRes.isvalid)) {
            return new Vector3(pVecRes);
        }
        else{
            return null;
        }
    };

    /**
     * ������ֵ
     * @param {double}  dA00,  
     * @param {double}  dA01,  
     * @param {double}  dA02,  
     * @param {double}  dA03,  
     * @param {double}  dA10,  
     * @param {double}  dA11,  
     * @param {double}  dA12,  
     * @param {double}  dA13,  
     * @param {double}  dA20,  
     * @param {double}  dA21,  
     * @param {double}  dA22,  
     * @param {double}  dA23,  
     * @param {double}  dA30,  
     * @param {double}  dA31,  
     * @param {double}  dA32,  
     * @param {double}  dA33  
     */
    this.Set = function (dA00, dA01, dA02, dA03, dA10, dA11, dA12, dA13, dA20, dA21, dA22, dA23, dA30, dA31, dA32, dA33) {
        matrix.Set(dA00, dA01, dA02, dA03, dA10, dA11, dA12, dA13, dA20, dA21, dA22, dA23, dA30, dA31, dA32, dA33);
    };

    /**
     * ��ֵ
     * @param {Matrix}  pNewMatrix
     */
    this.SetByMatrix = function (pNewMatrix) {
        if((pNewMatrix != null)&&(pNewMatrix != undefined)&&(pNewMatrix.Valid())){
            matrix.SetByMatrix(pNewMatrix.getNpObject());
        }
        else{
            matrix.SetByMatrix(pNewMatrix);
        }
    };

    /**
     * ����
     * @param {Vector3}  pVector3
     */
    this.SetScale = function (pVector3) {
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            matrix.SetScale(pVector3.getNpObject());
        }
        else{
            matrix.SetScale(pVector3);
        }
    };

    /**
     * ƽ��
     * @param {Vector3}  pVector3
     */
    this.SetTranslate = function (pVector3) {
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            matrix.SetTranslate(pVector3.getNpObject());
        }
        else{
            matrix.SetTranslate(pVector3);
        }
    };

    /**
     * ��ת�þ���
     */
    this.Transpose = function () {
        matrix.Transpose();
    };

    /**
     * �Ƿ��ǺϷ�����
     */
    this.Valid = function(){
        return matrix.Valid();
    };
}/**
 * ����
 * pValΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-06-15
 */

export function Vector3(pVal) {
    var vector = null;
    if (pVal == null) {
        vector = plugin.NewVector();
    }
    else {
        vector = pVal;
    }

    this.getNpObject = function () {
        return vector;
    };

    this.Valid = function () {
        return vector.isvalid;
    };

    /**
     * ��ȡ������X����
     * @param {double} dVal
     * @return {double}
     */
    this.getX = function () {
        return vector.X;
    };

    this.setX = function (dVal) {
        vector.X = dVal;
    };

    /**
     * ��ȡ������Y����
     * @param {double} dVal
     * @return {double}
     */
    this.getY = function () {
        return vector.Y;
    };
    this.setY = function (dVal) {
        vector.Y = dVal;
    };

    /**
     * ��ȡ������Z����
     * @param {double} dVal
     * @return {double}
     */
    this.getZ = function () {
        return vector.Z;
    };
    this.setZ = function (dVal) {
        vector.Z = dVal;
    };

    /**
     * ��ȡ��������
     * @return {double}
     */
    this.getLength = function () {
        return vector.Length;
    };

    /**
     * ��¡
     * @return {Vector3}
     */
    this.Clone = function () {
        var vec = vector.Clone();
        if (vec != null) {
            return new Vector3(vec);
        }
        return null;
    };

    /**
     * ��������ֵ
     * @param {double} dX, dY, dZ
     */
    this.Set = function (dX, dY, dZ) {
        vector.Set(dX, dY, dZ);
    };

    /**
     * ��ֵ
     * @param {Vector3} pVector3
     */
    this.SetByVector = function (pVector3) {
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            vector.SetByVector(pVector3.getNpObject());
        }
        else{
            vector.SetByVector(pVector3);
        }
    };

    /**
     * �������
     * @param {Vector3} pVector3
     * @return {Vector3}
     */
    this.Add = function (pVector3) {
        var pNewVecRes = null;
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            pNewVecRes = vector.Add(pVector3.getNpObject());
        }
        else{
            pNewVecRes = vector.Add(pVector3);
        }
        if ((pNewVecRes != null)&&(pNewVecRes != undefined)&&(pNewVecRes.isvalid)) {
            return new Vector3(pNewVecRes);
        }
        else{
            return null;
        }
    };

    /**
     * �������
     * @param {Vector3} pVector3
     * @return {Vector3}
     */
    this.CrossProduct = function (pVector3) {
        var pVector3Res = null;
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            pVector3Res = vector.CrossProduct(pVector3.getNpObject());
        }
        else{
            pVector3Res = vector.CrossProduct(pVector3);
        }
        if ((pVector3Res != null)&&(pVector3Res != undefined)&&(pVector3Res.isvalid)) {
            return new Vector3(pVector3Res);
        }
        else{
            return null;
        }
    };

    /**
     * �������
     * @param {Vector3} pVector3
     * @return {double}
     */
    this.DotProduct = function (pVector3) {
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            return vector.DotProduct(pVector3.getNpObject());
        }
        else{
            return vector.DotProduct(pVector3);
        }
    };

    /**
     * ��������
     * @param {double} dVal
     */
    this.MultiplyByScalar = function (dVal) {
        vector.MultiplyByScalar(dVal);
    };

    /**
     * ��һ������,��һ���󳤶�Ϊ1
     */
    this.Normalize = function(){
        vector.Normalize();
    };
}

/*Vector3.prototype = {
    constructor : Vector3,
    set dX(name) {
        this.vector1 = name+1;
    },
    get dX() {
        this.vector1;
    }
}*/

/**
 * ����Ҫ��ͼ��ӿڡ� 
 * @author   zzz
 * @date     2019-05-21
 */

export function PipeFeatureLayer(pipeFeatureLayer) {
    FeatureLayer.call(this, pipeFeatureLayer);

    this.getNpObject = function () {
        return pipeFeatureLayer;
    };

    this.Valid = function () {
        return pipeFeatureLayer.isvalid;
    };
}/**
 * Created by zzz on 2019-05-21.
 * ���߹����ӿڡ�
 */

export function PipeManager(pVal) {
    var pipeManager = null;
    if (pVal == null) {
        pipeManager = plugin.PipeManager;
    }
    else
        pipeManager = pVal;

    this.getNpObject = function () {
        return pipeManager;
    };

    this.Valid = function () {
        return pipeManager.isvalid;
    };
	
	/**
    * ��ȡ����Ҫ��ͼ�㡣
    * @param {VRStarPipeFeatureLayerType} enumLayerType
    * @param {FeatureLayer} pFeatureLayer
    * @return {PipeFeatureLayer} pPipeFeatureLayer
    */
	
	this.GetPipeFeatureLayer=function(enumLayerType,pFeatureLayer){
       var pFeatureLayerUse = null;
        if((pFeatureLayer != null)&&(pFeatureLayer != undefined)&&(pFeatureLayer.Valid())) {
            pFeatureLayerUse = pFeatureLayer.getNpObject();
        }
        else{
           pFeatureLayerUse=pFeatureLayer;
        }
        var pPipeFeatureLayer = pipeManager.GetPipeFeatureLayer(enumLayerType,pFeatureLayerUse);
        if ((pPipeFeatureLayer != null)&&(pPipeFeatureLayer != undefined)&&(pPipeFeatureLayer.isvalid)) {
            return new PipeFeatureLayer(pPipeFeatureLayer);
        }
        else{
            return null;
        }
	}
	
	/**
    * ��ȡ����ģ�͵��ģ�͡�
    * @param {VRStarPipeFeatureLayerType} enumLayerType
    * @param {PipeFeatureClass} pPipeFeatureClass
    * @param {long} lFID
    * @return {ModelPoint} pModelPoint
    * @return {Model} pModel
    * @return {boolean} bRes
    */
	this.GetPipeModelPoint=function(enumLayerType,pPipeFeatureClass,lFID){
		var pPipeFeatureClassUse = null;
        if((pPipeFeatureClassUse != null)&&(pPipeFeatureClassUse != undefined)&&(pPipeFeatureClassUse.Valid())) {
            pPipeFeatureClassUse = pPipeFeatureClass.getNpObject();
        }
        else{
           pPipeFeatureClassUse=pPipeFeatureClass;
        }
        var getPipeModelRes = pipeManager.GetPipeModelPoint(enumLayerType, pPipeFeatureClassUse,lFID);
		var pModelPointRes = null;
        var pModelPointMid = getPipeModelRes.ModelPoint;
        if ((pModelPointMid != null) && (pModelPointMid != undefined) && (pModelPointMid.isvalid)) {
            pModelPointRes = new ModelPoint(pModelPointMid);
        }
        else {
            pModelPointRes = null;
        }
        var pModelRes = null;
        var pModelMid = getPipeModelRes.Model;
        if ((pModelMid != null) && (pModelMid != undefined) && (pModelMid.isvalid)) {
            pModelRes = new Model(pModelMid);
        }
        else {
            pModelRes = null;
        }
        var bRes = getPipeModelRes.ResultValue;
        return new GetPipeModelPointParameter(pModelPointRes, pModelRes, bRes);
    };
    function GetPipeModelPointParameter(pModelPointRes, pModelRes , bRes) {
        this.ModelPoint = pModelPointRes;
        this.Model = pModelRes;
        this.ResultValue = bRes;
    }
	
}/**
* Created by Administrator on 2016-6-22.
* ��������ӿ�
*/

export function Camera(pVal) {

    var camera = null;
    if (pVal == null) {
        camera = plugin.Camera;
    }
    else
        camera = pVal;

    this.getNpObject = function () {
        return camera;
    };

    this.Valid = function () {
        return camera.isvalid;
    };

    /**
    * ��ÿɻ��ƶ���İ�Χ�д�С����������ֻ������
    */
    this.getEnvelope = function () {
        var pEnv = camera.Envelope;
        if ((pEnv != null) && (pEnv != undefined) && (pEnv.isvalid)) {
            return new Envelope(pEnv);
        }
        else {
            return null;
        }
    };

    /**
    * �жϻ������Ƿ��Զ������Զ��
    */
    this.getAutoClipPlane = function () {
        return camera.AutoClipPlane;
    };
    this.setAutoClipPlane = function (bVal) {
        camera.AutoClipPlane = bVal;
    };

    /**
    * ��ȡ������Զ�þ���
    */
    this.getFarClipPlane = function () {
        return camera.FarClipPlane;
    };
    this.setFarClipPlane = function (fVal) {
        camera.FarClipPlane = fVal;
    };

    /**
    * ��ȡ�����ý��þ���
    */
    this.getNearClipPlane = function () {
        return camera.NearClipPlane;
    };
    this.setNearClipPlane = function (fVal) {
        camera.NearClipPlane = fVal;
    };

    /**
    * ��ȡ�����÷���ģʽ
    */
    this.getFlyMode = function () {
        return camera.FlyMode;
    };
    this.setFlyMode = function (mVal) {
        camera.FlyMode = mVal;
    };

    /**
     * ��ȡ��������ײ���ģʽ
     */
    this.getCollisionDetectionMode = function () {
        return camera.CollisionDetectionMode;
    };
    this.setCollisionDetectionMode = function (mVal) {
        camera.CollisionDetectionMode = mVal;
    };

    /**
    * ��ȡ�����÷����ٶ�
    */
    this.getFlySpeed = function () {
        return camera.FlySpeed;
    };
    this.setFlySpeed = function (fVal) {
        camera.FlySpeed = fVal;
    };

    /**
    * ��ȡ�����÷���ʱ��
    */
    this.getFlyTime = function () {
        return camera.FlyTime;
    };
    this.setFlyTime = function (dVal) {
        camera.FlyTime = dVal;
    };

    /**
    * ��ȡ��������׶�崹ֱ������ӽ�
    */
    this.getVerticalFieldOfView = function () {
        return camera.VerticalFieldOfView;
    };
    this.setVerticalFieldOfView = function (fVal) {
        camera.VerticalFieldOfView = fVal;
    };

    /**
    * ��ȡ�����ò����ٶ�
    */
    this.getWalkSpeed = function () {
        return camera.WalkSpeed;
    };
    this.setWalkSpeed = function (fVal) {
        camera.WalkSpeed = fVal;
    };

    /**
    * ��ȡ�����ò��и߶�
    */
    this.getWalkHeight = function () {
        return camera.WalkHeight;
    };
    this.setWalkHeight = function (fVal) {
        camera.WalkHeight = fVal;
    };

    /**
    * ��ȡ�������Ƿ�����������ģʽ
    */
    this.getUnderGroundMode = function () {
        return camera.UnderGroundMode;
    };
    this.setUnderGroundMode = function (bVal) {
        camera.UnderGroundMode = bVal;
    };

    /**
     * ��ȡ�������Ƶ���и߶�
     */
    this.getFlyAroundTime = function () {
        return camera.FlyAroundTime;
    };
    this.setFlyAroundTime = function (dVal) {
        camera.FlyAroundTime = dVal;
    };
	
	/**
     * ���ö�����ά����ģʽ
     */
    this.getOperatorMode = function () {
        return camera.OperatorMode;
    };
    this.setOperatorMode = function (enumOperatorMode) {
        camera.OperatorMode = enumOperatorMode;
    };

    /**
     * ��ȡ�����þ�����Ϣ
     * @return {Matrix}
     */
    this.getMatrix = function () {
        var matri = camera.Matrix;
        if ((matri != null)&&(matri != undefined)&&(matri.isvalid)) {
            return new Matrix(matri);
        }
        else{
            return null;
        }
    };
    this.setMatrix = function (mVal) {
        if((mVal != null)&&(mVal != undefined)&&(mVal.Valid())){
            camera.Matrix = mVal.getNpObject();
        }
        else{
            camera.Matrix = mVal;
        }
    };

    /**
     * ��ȡ���λ��
     * @return {Vector3}
     */
    this.getPosition = function () {
        var vec = camera.Position;
        if ((vec != null)&&(vec != undefined)&&(vec.isvalid)) {
            return new Vector3(vec);
        }
        else{
            return null;
        }
    };

    /**
     * �������λ��
     * @param {Vector3} vVal
     */
    this.setPosition = function (vVal) {
        if((vVal != null)&&(vVal != undefined)&&(vVal.Valid())){
            camera.Position = vVal.getNpObject();
        }
        else{
            camera.Position = vVal;
        }
    };

    /**
     * ��ȡ�������λ�õ�ŷ����
     * @return {EulerAngle}
     */
    this.getAngle = function () {
        var ang = camera.Angle;
        if ((ang != null)&&(ang != undefined)&&(ang.isvalid)) {
            return new EulerAngle(ang);
        }
        else{
            return null;
        }
    };

    /**
    * �����������λ�õ�ŷ����
    */
    this.setAngle = function (eVal) {
        if((eVal != null)&&(eVal != undefined)&&(eVal.Valid())){
            camera.Angle = eVal.getNpObject();
        }
        else{
            camera.Angle = eVal;
        }
    };

    /**
    * �жϻ��������λ�ú�ת�����ֵ�Ƿ��޸�Ϊ��ֵ
    */
    this.getCameraFlag = function () {
        return camera.CameraFlag;
    };
    this.setCameraFlag = function (enumSetCameraFlag) {
        camera.CameraFlag = enumSetCameraFlag;
    };

    /**
     * ��ȡ���λ��(��������ϵ)��
     * @return {Point}
     */
    this.getPosition2 = function () {
        var poi = camera.Position2;
        if ((poi != null)&&(poi != undefined)&&(poi.isvalid)) {
            return new Point(poi);
        }
        else{
            return null;
        }
    };

    /**
    * �������λ��(��������ϵ)��
    */
    this.setPosition2 = function (pVal) {
        if((pVal != null)&&(pVal != undefined)&&(pVal.Valid())){
            camera.Position2 = pVal.getNpObject();
        }
        else{
            camera.Position2 = pVal;
        }
    };

    /**
     * ��Դ�㡢ŷ���Ǻ;������Ŀ���
     * @return {Vector3}
     */
    this.GetAimingPoint = function (pVectorPosition, pEulerAngle, dDistance) {
        var pVectorPositionUse = null;
        if((pVectorPosition != null)&&(pVectorPosition != undefined)&&(pVectorPosition.Valid())){
            pVectorPositionUse = pVectorPosition.getNpObject();
        }
        else{
            pVectorPositionUse = pVectorPosition;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        var vectorPosition = camera.GetAimingPoint(pVectorPositionUse, pEulerAngleUse, dDistance);
        if (vectorPosition != null) {
            return new Vector3(vectorPosition);
        }
        else{
            return null;
        }
    };

    /**
     * ����Դ���Ŀ������ŷ����
     * @return {EulerAngle}
     */
    this.GetAimingAngles = function (pVectorPosition1, pVectorPosition2) {
        var pVectorPosition1Use = null;
        if((pVectorPosition1 != null)&&(pVectorPosition1 != undefined)&&(pVectorPosition1.Valid())){
            pVectorPosition1Use = pVectorPosition1.getNpObject();
        }
        else{
            pVectorPosition1Use = pVectorPosition1;
        }
        var pVectorPosition2Use = null;
        if((pVectorPosition2 != null)&&(pVectorPosition2 != undefined)&&(pVectorPosition2.Valid())){
            pVectorPosition2Use = pVectorPosition2.getNpObject();
        }
        else{
            pVectorPosition2Use = pVectorPosition2;
        }
        var angle = camera.GetAimingAngle(pVectorPosition1Use, pVectorPosition2Use);
        if ((angle != null)&&(angle != undefined)&&(angle.isvalid)) {
            return new EulerAngle(angle);
        }
        else{
            return null;
        }
    };

    /**
    * ͨ���۲���������
    */
    this.LookAt = function (pVectorPosition, dDistance, pEulerAngle) {
        var pVectorPositionUse = null;
        if((pVectorPosition != null)&&(pVectorPosition != undefined)&&(pVectorPosition.Valid())){
            pVectorPositionUse = pVectorPosition.getNpObject();
        }
        else{
            pVectorPositionUse = pVectorPosition;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        return camera.LookAt(pVectorPositionUse, dDistance, pEulerAngleUse);
    };

    /**
    * ʹ�����λ����Ӧ�İ�Χ�д�
    */
    this.LookAtEnvelope = function (pEnvelope) {
        if((pEnvelope != null)&&(pEnvelope != undefined)&&(pEnvelope.Valid())){
            camera.LookAtEnvelope(pEnvelope.getNpObject());
        }
        else{
            camera.LookAtEnvelope(pEnvelope);
        }
    };

    /**
    * �ɵ�ָ������
    */
    this.FlyToObject = function (guidObject, enumActionCode) {
        camera.FlyToObject(guidObject, enumActionCode);
    };

    /**
    * �����ʼλ��
    */
    this.SetHomePosition = function (vec, dDistance, angle) {
        var vecUse = null;
        if((vec != null)&&(vec != undefined)&&(vec.Valid())){
            vecUse = vec.getNpObject();
        }
        else{
            vecUse = vec;
        }
        var angleUse = null;
        if((angle != null)&&(angle != undefined)&&(angle.Valid())){
            angleUse = angle.getNpObject();
        }
        else{
            angleUse = angle;
        }
        camera.SetHomePosition(vecUse, dDistance, angleUse);
    };
	
	/**
    * �������ͼ
    */
    this.SetSingleOrthoParams = function (sPoint, ePoint, pEnvelope) {
        var sPointUse = null;
        if((sPoint != null)&&(sPoint != undefined)&&(sPoint.Valid())){
            sPointUse = sPoint.getNpObject();
        }
        else{
            sPointUse = sPoint;
        }
        var ePointUse = null;
        if((ePoint != null)&&(ePoint != undefined)&&(ePoint.Valid())){
            ePointUse = ePoint.getNpObject();
        }
        else{
            ePointUse = ePoint;
        }
		var pEnvelopeUse = null;
        if((pEnvelope != null)&&(pEnvelope != undefined)&&(pEnvelope.Valid())){
            pEnvelopeUse = pEnvelope.getNpObject();
        }
        else{
            pEnvelopeUse = pEnvelope;
        }
        camera.SetSingleOrthoParams(sPointUse, ePointUse, pEnvelopeUse);
    };

    /**
     * ��Դ�㡢ŷ���Ǻ;������Ŀ���(��������ϵ)��
     * @return {Point}
     */
    this.GetAimingPoint2 = function (pPosition, pEulerAngle, dDistance) {
        var pPositionUse = null;
        if((pPosition != null)&&(pPosition != undefined)&&(pPosition.Valid())){
            pPositionUse = pPosition.getNpObject();
        }
        else{
            pPositionUse = pPosition;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        var poi = camera.GetAimingPoint2(pPositionUse, pEulerAngleUse, dDistance);
        if ((poi != null)&&(poi != undefined)&&(poi.isvalid)) {
            return new Point(poi);
        }
        else{
            return null;
        }
    };

    /**
     * ����Դ���Ŀ������ŷ����(��������ϵ)
     * @return {EulerAngle}
     */
    this.GetAimingAngles2 = function (pPosition1, pPosition2) {
        var pPosition1Use = null;
        if((pPosition1 != null)&&(pPosition1 != undefined)&&(pPosition1.Valid())){
            pPosition1Use = pPosition1.getNpObject();
        }
        else{
            pPosition1Use = pPosition1;
        }
        var pPosition2Use = null;
        if((pPosition2 != null)&&(pPosition2 != undefined)&&(pPosition2.Valid())){
            pPosition2Use = pPosition2.getNpObject();
        }
        else{
            pPosition2Use = pPosition2;
        }
        var angle = camera.GetAimingAngle2(pPosition1Use, pPosition2Use);
        if ((angle != null)&&(angle != undefined)&&(angle.isvalid)) {
            return new EulerAngle(angle);
        }
        else{
            return null;
        }
    };

    /**
    * ͨ���۲���������(��������ϵ)
    */
    this.LookAt2 = function (pPosition, dDistance, pEulerAngle) {
        var pPositionUse = null;
        if((pPosition != null)&&(pPosition != undefined)&&(pPosition.Valid())){
            pPositionUse = pPosition.getNpObject();
        }
        else{
            pPositionUse = pPosition;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        camera.LookAt2(pPositionUse, dDistance, pEulerAngleUse);
    };

    /**
    * ʹ�����λ����Ӧ�İ�Χ�д�(��������ϵ)��
    */
    this.LookAtEnvelope2 = function (sCrsWKT, pEnvelope) {
        if((pEnvelope != null)&&(pEnvelope != undefined)&&(pEnvelope.Valid())){
            camera.LookAtEnvelope2(sCrsWKT, pEnvelope.getNpObject());
        }
        else{
            camera.LookAtEnvelope2(sCrsWKT, pEnvelope);
        }
    };
	
	/**
    * ʹ�����λ����Ӧ�İ�Χ�д�(��������ϵ)��
    */
    this.LookAtEnvelope3 = function (sCrsWKT, pEnvelope, dDistance, pEulerAngle) {
		var pEnv = null;
        if((pEnvelope != null)&&(pEnvelope != undefined)&&(pEnvelope.Valid())){
			pEnv = pEnvelope.getNpObject();
        }
		var pEuler = null;
		if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
			pEuler = pEulerAngle.getNpObject();
        }
        camera.LookAtEnvelope3(sCrsWKT, pEnv, dDistance, pEuler);
    };

    /**
    * �Ƶ����
    */
    this.LookFlyAround = function (vec) {
        if((vec != null)&&(vec != undefined)&&(vec.Valid())){
            camera.LookFlyAround(vec.getNpObject());
        }
        else{
            camera.LookFlyAround(vec);
        }
    };

    /**
    * �Ƶ����(��������ϵ)�� 
    */
    this.LookFlyAround2 = function (pPosition) {
        if((pPosition != null)&&(pPosition != undefined)&&(pPosition.Valid())){
            camera.LookFlyAround2(pPosition.getNpObject());
        }
        else{
            camera.LookFlyAround2(pPosition);
        }
    };

    /**
     * �ɵ�ָ������
     */
    this.FlyToObject2 = function (guidObject,enumActionCode,dHeight,pEulerAngle) {
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            camera.FlyToObject2(guidObject,enumActionCode,dHeight,pEulerAngle.getNpObject());
        }
        else{
            camera.FlyToObject2(guidObject,enumActionCode,dHeight,pEulerAngle);
        }
    };

    /**
    * �����ʼλ��(��������ϵ)
    */
    this.SetHomePosition2 = function (pPosition, dDistance, pEulerAngle) {
        var pPositionUse = null;
        if((pPosition != null)&&(pPosition != undefined)&&(pPosition.Valid())){
            pPositionUse = pPosition.getNpObject();
        }
        else{
            pPositionUse = pPosition;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        camera.SetHomePosition2(pPositionUse, dDistance, pEulerAngleUse)
    };

    /**
     * ��Ļ����ת��������,����ά��������ת����ǰ���Ŀռ����꣬����ת�������п���ʰȡ��ָ�������µ�����
     * @return {Point}
     * @return {PickResult}
     */
    this.ScreenToWorld = function (iWindowX, iWindowY) {
        var operateRes = camera.ScreenToWorld(iWindowX, iWindowY);
        if((operateRes != null) && (operateRes != undefined) && (operateRes.valid)) {
            var pPointRes = null;
            var pPointUse = operateRes.intersectPoint;
            if ((pPointUse != null) && (pPointUse != undefined) && (pPointUse.isvalid)) {
                pPointRes = new Point(pPointUse);
            }
            else {
                pPointRes = null;
            }
            var pPickResult = null;
            var pPick = operateRes.pickResult;
            if ((pPick != null) && (pPick != undefined) && (pPick.isvalid)) {
                var enumObjectType = PickResultUse.ObjectType;
                if (enumObjectType == VRStarObjectType.VRStarObjectFeatureLayer)
                    pPickResult = new FeatureLayerPickResult(pPick);
                else if (enumObjectType == VRStarObjectType.VRStarObjectTerrain)
                    pPickResult = new TerrainPickResult(pPick);
                else if (enumObjectType == VRStarObjectType.VRStarObject3DTileLayer)
                    pPickResult = new I3DTileLayerPickResult(pPick);
                else if (enumObjectType == VRStarObjectType.VRStarObjectLabel)
                    pPickResult = new LabelPickResult(pPick);
                else if (enumObjectType == VRStarObjectType.VRStarObjectParticleEffect)
                    pPickResult = new ParticleEffectPickResult(pPick);
                else if (enumObjectType == VRStarObjectType.VRStarObjectRenderModelPoint)
                    pPickResult = new RenderModelPointPickResult(pPick);
                else if (enumObjectType == VRStarObjectType.VRStarObjectRenderPoint)
                    pPickResult = new RenderPointPickResult(pPick);
                else if (enumObjectType == VRStarObjectType.VRStarObjectRenderPolygon)
                    pPickResult = new RenderPolygonPickResult(pPick);
                else if (enumObjectType == VRStarObjectType.VRStarObjectRenderPolyline)
                    pPickResult = new RenderPolylinePickResult(pPick);
                else if (enumObjectType == VRStarObjectType.VRStarObjectRenderTriMesh)
                    pPickResult = new RenderTriMeshPickResult(pPick);
                else if (enumObjectType == VRStarObjectType.VRStarObjectSkinnedMesh)
                    pPickResult = new SkinnedMeshPickResult(pPick);
                else if (enumObjectType == VRStarObjectType.VRStarObjectTableLabel)
                    pPickResult = new TableLabelPickResult(pPick);
                else if (enumObjectType == VRStarObjectType.VRStarObjectTerrainHole)
                    pPickResult = new TerrainHolePickResult(pPick);
                else
                    pPickResult = new PickResult(pPick);
            }
            return new ScreenToWorldParameter(pPointRes, pPickResult);
        }
        else{
            return operateRes;
        }
    };
    function ScreenToWorldParameter(pPointRes,pPickResult){
        this.intersectPoint = pPointRes;
        this.pickResult = pPickResult;
    }

    /**
     * ��������ת��Ļ���� �����������������Ӧ�ĵ����ڵ�ǰ��ά�����ڣ���õ��õ�����ά�����е���Ļ���ꡣ
     * @param {double} dWorldX
     * @param {double} dWorldY
     * @param {double} dWorldZ
     * @param {long} lMode
     * @return {double} dScreenX
     * @return {double} dScreenY
     * @return {boolean} bInScreen
     * @return {boolean} bResult
     */
    this.WorldToScreen = function (dWorldX, dWorldY, dWorldZ, lMode) {
        var operateRes = camera.WorldToScreen(dWorldX, dWorldY, dWorldZ, lMode);
        if((operateRes != null) && (operateRes != undefined) && (operateRes.valid)) {
            var dScreenX = operateRes.ScreenX;
            var dScreenY = operateRes.ScreenY;
            var bInScreen = operateRes.BoolInScreen;
            var bResult = operateRes.Result;
            return new WorldToScreenParameter(dScreenX, dScreenY, bInScreen, bResult);
        }
        else{
            return operateRes;
        }
    };
    function WorldToScreenParameter(dScreenX, dScreenY, bInScreen, bResult){
        this.ScreenX = dScreenX;
        this.ScreenY = dScreenY;
        this.BoolInScreen = bInScreen;
        this.Result = bResult;
    }
}/**
* Created by Jimmy on 2016-7-15.
* ��ʱ����ƹؼ�֡�����·��
*/

export function CameraTour(pVal) {
    RenderObject.call(this, pVal);
    var cameraTour = pVal;

    this.Valid = function () {
        return cameraTour.isvalid;
    };

    /**
    * ��ȡ�Ƿ����ڵ�����Ƶ
    */
    this.getIsExporting = function () {
        return cameraTour.IsExporting;
    };

    /**
    * ��ȡ·���ڵ����
    */
    this.getWaypointsNumber = function () {
        return cameraTour.WaypointsNumber;
    };

    /**
    * ��ȡ�������Ƿ�ѭ������
    */
    this.getAutoRepeat = function () {
        return cameraTour.AutoRepeat;
    };
    this.setAutoRepeat = function (bVal) {
        cameraTour.AutoRepeat = bVal;
    };

    /**
    * ��ȡ�����ö�����������ϵ��wkt
    */
    this.getCrsWKT = function () {
        return cameraTour.CrsWKT;
    };
    this.setCrsWKT = function (sVal) {
        cameraTour.CrsWKT = sVal;
    };

    /**
     * ��ȡ���������忪ʼ���ŵ�WayPoint����
     * @param   {long}  lVal
     * @return  {long}
     */
    this.getIndex = function () {
        return cameraTour.Index;
    };
    this.setIndex = function (lVal) {
        cameraTour.Index = lVal;
    };

    /**
     * ��ȡ���������岥��ʱ��
     * @param   {double}  dVal
     * @return  {double}
     */
    this.getTime = function () {
        return cameraTour.Time;
    };
    this.setTime = function (dVal) {
        cameraTour.Time = dVal;
    };

    /**
     * ��ȡ���������ܺ�ʱ
     * @param   {double}  dVal
     * @return  {double}
     */
    this.getTotalTime = function () {
        return cameraTour.TotalTime;
    };
    this.setTotalTime = function (dVal) {
        cameraTour.TotalTime = dVal;
    };

    /**
    * ������Ƶ/��������֡
    * bstrFilePath ����·������FilePath·������ļ���׺���;����ǵ�����Ƶ�򵼳�����֡.��׺��Ϊaviʱ���÷���������Ƶ;��׺��ΪBMP/PNG/JPGʱ���÷����������֡��  
    * nFPS ֡Ƶ����һ��ȡֵ��20~30֮�䣬����ֵ25��  
    */
    this.ExportVideo = function (bstrFilePath, nFPS) {
        return cameraTour.ExportVideo(bstrFilePath, nFPS);
    };

    /**
    * ��������ֱ�������֡  
    */
    this.ExportFrameSequence = function (bstrFilePath, nWidth, nHeight, nFPS) {
        return cameraTour.ExportFrameSequence(bstrFilePath, nWidth, nHeight, nFPS);
    };

    /**
    * ȡ��������Ƶ
    */
    this.CancelExport = function () {
        cameraTour.CancelExport();
    };

    /**
    * ��ase����
    */
    this.FromAse = function (asePath) {
        return cameraTour.FromAse(asePath);
    };

    /**
    * ����xml
    */
    this.AsXml = function () {
        return cameraTour.AsXml();
    };

    /**
    * ����ΪXml�ļ�
    */
    this.AsXmlFile = function (sXmlFile) {
        cameraTour.AsXmlFile(sXmlFile);
    };

    /**
    * ��xml����
    */
    this.FromXml = function (strXml) {
        cameraTour.FromXml(strXml);
    };

    /**
    * ��xml�ļ�����
    */
    this.FromXmlFile = function (strXml) {
        return cameraTour.FromXmlFile(strXml);
    };

    /**
    * ����
    */
    this.Play = function () {
        cameraTour.Play();
    };

    /**
    * ��ͣ
    */
    this.Pause = function () {
        cameraTour.Pause();
    };

    /**
    * ֹͣ
    */
    this.Stop = function () {
        cameraTour.Stop();
    };

    /**
    * Ϊ�������������µ�·���ڵ�
    */
    this.AddWaypoint = function (pVector, pEulerAngle , dTime, enumCameraTourMode) {
        var pVectorUse = null;
        if((pVector != null)&&(pVector != undefined)&&(pVector.Valid())){
            pVectorUse = pVector.getNpObject();
        }
        else{
            pVectorUse = pVector;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        cameraTour.AddWaypoint(pVectorUse, pEulerAngleUse, dTime, enumCameraTourMode);
    };

    /**
    * Ϊ�������������µ�·���ڵ�
    */
    this.AddWaypoint2 = function (pPoint, pEulerAngle, dTime, enumCameraTourMode) {
        var pPointUse = null;
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pPointUse = pPoint.getNpObject();
        }
        else{
            pPointUse = pPoint;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        cameraTour.AddWaypoint2(pPointUse, pEulerAngleUse, dTime, enumCameraTourMode);
    };

    /**
    * �ڶ�β����Waypoint 
    */
    this.AddWaypointByMatrix = function (pMat, dTime, enumCameraTourMode) {
        if((pMat != null)&&(pMat != undefined)&&(pMat.Valid())){
            cameraTour.AddWaypointByMatrix(pMat.getNpObject(), dTime, enumCameraTourMode);
        }
        else{
            cameraTour.AddWaypointByMatrix(pMat, dTime, enumCameraTourMode);
        }
    };

    /**
    * �������·���ڵ�
    */
    this.ClearWaypoints = function () {
        cameraTour.ClearWaypoints();
    };
	
	/**
    * ɾ��ָ��·���ڵ�
    */
    this.DeleteWaypoint = function (Index) {
        cameraTour.DeleteWaypoint(Index);
    };

    /**
    * ��ȡָ��·���ڵ�
    */
    this.GetWaypoint = function (lIndex) {
        var operateRes = cameraTour.GetWaypoint(lIndex);
        var pVector3Res = null;
        var pVector3Use = operateRes.Position;
        if ((pVector3Use != null) && (pVector3Use != undefined) && (pVector3Use.isvalid)) {
            pVector3Res = new Vector3(pVector3Use);
        }
        else {
            pVector3Res = null;
        }
        var pAngleRes = null;
        var pAngleResUse = operateRes.Angle;
        if ((pAngleResUse != null) && (pAngleResUse != undefined) && (pAngleResUse.isvalid)) {
            pAngleRes = new EulerAngle(pAngleResUse);
        }
        else {
            pAngleRes = null;
        }
        var dDurationRes = operateRes.Duration;
        var enumRes = operateRes.Mode;
        return new GetWaypointParameter(pVector3Res, pAngleRes, dDurationRes, enumRes);
    };
    function GetWaypointParameter(pVector3Res, pAngleRes, dDurationRes, enumRes) {
        this.Position = pVector3Res;
        this.Angle = pAngleRes;
        this.Duration = dDurationRes;
        this.Mode = enumRes;
    }

    /**
    * ��ȡĳ��λ�õ�Waypoint
    */
    this.GetWaypointByMatrix = function (lIndex) {
        var operateRes = cameraTour.GetWaypointByMatrix(lIndex);
        var pMatrixRes = null;
        var pMatrixUse = operateRes.Matrix;
        if ((pMatrixUse != null) && (pMatrixUse != undefined) && (pMatrixUse.isvalid)) {
            pMatrixRes = new Matrix(pMatrixUse);
        }
        else {
            pMatrixRes = null;
        }
        var dDurationRes = operateRes.Duration;
        var enumRes = operateRes.Mode;
        return new GetWaypointByMatrixParameter(pMatrixRes, dDurationRes, enumRes);
    };
    function GetWaypointByMatrixParameter(pMatrixRes, dDurationRes, enumRes) {
        this.Matrix = pMatrixRes;
        this.Duration = dDurationRes;
        this.Mode = enumRes;
    }

    /**
    * ��ָ��λ��Ϊ������������һ���µ�·���ڵ�
    */
    this.InsertWaypoint = function (lIndex, pVector3, pEulerAngle, dTime, enumCameraTourMode) {
        var pVector3Use = null;
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            pVector3Use = pVector3.getNpObject();
        }
        else{
            pVector3Use = pVector3;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        cameraTour.InsertWaypoint(lIndex, pVector3Use, pEulerAngleUse, dTime, enumCameraTourMode);
    };

    /**
    * ��ĳ��λ�ò���Waypoint 
    */
    this.InsertWaypointByMatrix = function (lIndex, pMat, dTime, enumCameraTourMode) {
        if((pMat != null)&&(pMat != undefined)&&(pMat.Valid())){
            cameraTour.InsertWaypointByMatrix(lIndex, pMat.getNpObject(), dTime, enumCameraTourMode);
        }
        else{
            cameraTour.InsertWaypointByMatrix(lIndex, pMat, dTime, enumCameraTourMode);
        }
    };

    /**
    * �޸Ķ���������·���ڵ�
    */
    this.ModifyWaypoint = function (lIndex, pVector3, pEulerAngle, dTime, enumCameraTourMode) {
        var pVector3Use = null;
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            pVector3Use = pVector3.getNpObject();
        }
        else{
            pVector3Use = pVector3;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        cameraTour.ModifyWaypoint(lIndex, pVector3Use, pEulerAngleUse, dTime, enumCameraTourMode);
    };

    /**
    * �޸�ĳ��λ�õ�Waypoint
    */
    this.ModifyWaypointByMatrix = function (lIndex, pMat, dTime, enumCameraTourMode) {
        if((pMat != null)&&(pMat != undefined)&&(pMat.Valid())){
            cameraTour.ModifyWaypointByMatrix(lIndex, pMat.getNpObject(), dTime, enumCameraTourMode);
        }
        else{
            cameraTour.ModifyWaypointByMatrix(lIndex, pMat, dTime, enumCameraTourMode);
        }
    };

    /**
    * ��ȡһ��·���ڵ��������Ϣ
    */
    this.GetWaypoint2 = function (lIndex) {
        var operateRes = cameraTour.GetWaypoint2(lIndex);
        var pVector3Res = null;
        var pVector3Use = operateRes.Position2;
        if ((pVector3Use != null) && (pVector3Use != undefined) && (pVector3Use.isvalid)) {
            pVector3Res = new Point(pVector3Use);
        }
        else {
            pVector3Res = null;
        }
        var pAngleRes = null;
        var pAngleResUse = operateRes.Angle;
        if ((pAngleResUse != null) && (pAngleResUse != undefined) && (pAngleResUse.isvalid)) {
            pAngleRes = new EulerAngle(pAngleResUse);
        }
        else {
            pAngleRes = null;
        }
        var dDurationRes = operateRes.Duration;
        var enumRes = operateRes.Mode;
        return new GetWaypoint2Parameter(pVector3Res, pAngleRes, dDurationRes, enumRes);
    };
    function GetWaypoint2Parameter(pVector3Res, pAngleRes, dDurationRes, enumRes) {
        this.Position = pVector3Res;
        this.Angle = pAngleRes;
        this.Duration = dDurationRes;
        this.Mode = enumRes;
    }

    /**
    * ��ָ��λ��Ϊ������������һ���µ�·���ڵ�
    */
    this.InsertWaypoint2 = function (lIndex, pPoint, pEulerAngle, dTime, enumCameraTourMode) {
        var pPointUse = null;
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pPointUse = pPoint.getNpObject();
        }
        else{
            pPointUse = pPoint;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        cameraTour.InsertWaypoint2(lIndex, pPointUse, pEulerAngleUse, dTime, enumCameraTourMode);
    };

    /**
    * �޸Ķ���������·���ڵ�
    */
    this.ModifyWaypoint2 = function (lIndex, pPoint, pEulerAngle, dTime, enumCameraTourMode) {
        var pPointUse = null;
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pPointUse = pPoint.getNpObject();
        }
        else{
            pPointUse = pPoint;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        cameraTour.ModifyWaypoint2(lIndex, pPointUse, pEulerAngleUse, dTime, enumCameraTourMode);
    };
}
/**
* Created by Jimmy on 2017-08-12.
* �˶�·������waypoint��ɣ��ṩ�˲��롢ɾ�����޸�waypoint�ķ���
*/
export function DynamicObject(pVal) {
    RenderObject.call(this, pVal);
    var pDynamicObject = pVal;
	
	this.getNpObject = function () {
        return pDynamicObject;
    };

    this.Valid = function () {
        return pDynamicObject.isvalid;
    };

    /**
    * ѭ������
    */
    this.getAutoRepeat = function () {
        return pDynamicObject.AutoRepeat;
    };
    this.setAutoRepeat = function (bVal) {
        pDynamicObject.AutoRepeat = bVal;
    };

    /**
    * ��ȡ����������ϵ��WKT��
    */
    this.getCrsWKT = function () {
        return pDynamicObject.CrsWKT;
    };
    this.setCrsWKT = function (sVal) {
        pDynamicObject.CrsWKT = sVal;
    };

    /**
    * ��ȡ����������ϵ��WKT��
    */
    this.getIndex = function () {
        return pDynamicObject.Index;
    };
    this.setIndex = function (lVal) {
        pDynamicObject.Index = lVal;
    };

    /**
    * �˶�ģʽ
    */
    this.getMotionStyle = function () {
        return pDynamicObject.MotionStyle;
    };
    this.setMotionStyle = function (enumDynamicMotionStyle) {
        pDynamicObject.MotionStyle = enumDynamicMotionStyle;
    };

    /**
    * ��ȡ�����ö�����ת��ʱ�Ľ��ٶȣ�Ĭ��ֵΪ50����λΪ��/�롣���������ٶȹ��Ͷ��ٶȹ���ʱ��������ܲ��ܾ�ȷ�����趨·����ʻ��������ϸ΢��ת�Ǵ�
    */
    this.getTurnSpeed = function () {
        return pDynamicObject.TurnSpeed;
    };
    this.setTurnSpeed = function (dVal) {
        pDynamicObject.TurnSpeed = dVal;
    };

    /**
    * �˶�����Ĺ۲���룬����ICamera��FlyToObjectʱ�������ɵ��������۲����
    */
    this.getViewingDistance = function () {
        return pDynamicObject.ViewingDistance;
    };
    this.setViewingDistance = function (dVal) {
        pDynamicObject.ViewingDistance = dVal;
    };

    /**
    * Waypoint������
    */
    this.getWaypointsNumber = function () {
        return pDynamicObject.WaypointsNumber;
    };

    /**
    * �ڶ�β����Waypoint
    */
    this.AddWaypoint = function (pVector3, dSpeed) {
        if ((pVector3 != null) && (pVector3 != undefined) && (pVector3.Valid())) {
            return pDynamicObject.AddWaypoint(pVector3.getNpObject(), dSpeed);
        }
        else {
            return pDynamicObject.AddWaypoint(pVector3, dSpeed);
        }
    };

    /**
    * �ڶ�β����Waypoint
    */
    this.AddWaypoint2 = function (pPoint, dSpeed) {
        if ((pPoint != null) && (pPoint != undefined) && (pPoint.Valid())) {
            return pDynamicObject.AddWaypoint2(pPoint.getNpObject(), dSpeed);
        }
        else {
            return pDynamicObject.AddWaypoint2(pPoint, dSpeed);
        }
    };

    /**
    * ����xml
    */
    this.AsXml = function () {
        return pDynamicObject.AsXml();
    };

    /**
    * �������Waypoint
    */
    this.ClearWaypoints = function () {
        pDynamicObject.ClearWaypoints();
    };

    /**
    * ɾ��indexλ���ϵ�Waypoint
    */
    this.DeleteWaypoint = function (lIndex) {
        pDynamicObject.DeleteWaypoint(lIndex);
    };

    /**
    * ��xml����
    */
    this.FromXml = function (sVal) {
        return pDynamicObject.FromXml(sVal);
    };
	
	/**
    * ����xml�ļ�
    */
    this.AsXmlFile = function (strXmlFile) {
        pDynamicObject.AsXmlFile(strXmlFile);
    };
	
	/**
    * ��xml�ļ�����
    */
    this.FromXmlFile = function (strXmlFile) {
        return pDynamicObject.FromXmlFile(strXmlFile);
    };

    /**
    * ��ȡindexλ���ϵ�Waypoint
    */
    this.GetWaypoint = function (lIndex) {
       var operateRes = pDynamicObject.GetWaypoint(lIndex);
       var pVector3Res = null;
       var pVector3Use = operateRes.Position;
       if ((pVector3Use != null) && (pVector3Use != undefined) && (pVector3Use.isvalid)) {
           pVector3Res = new Vector3(pVector3Use);
       }
       else {
           pVector3Res = null;
       }
       
       var dSpeed = operateRes.Speed;
       // var bValue = operateRes.ResultValue;
       return new DynamicObjectWaypointParameter(pVector3Res, dSpeed);
    };
	function DynamicObjectWaypointParameter(pVector3Res, dSpeed) {
        this.Position = pVector3Res;
        this.Speed = dSpeed;
    }

    /**
    * ��ȡindexλ���ϵ�Waypoint
    */
    this.GetWaypoint2 = function (lIndex) {
       var operateRes = pDynamicObject.GetWaypoint2(lIndex);
       var pVector3Res = null;
       var pVector3Use = operateRes.Position2;
       if ((pVector3Use != null) && (pVector3Use != undefined) && (pVector3Use.isvalid)) {
           pVector3Res = new Point(pVector3Use);
       }
       else {
           pVector3Res = null;
       }
       
       var dSpeed = operateRes.Speed;
       // var bValue = operateRes.ResultValue;
       return new DynamicObjectWaypoint2Parameter(pVector3Res, dSpeed);
    };
	function DynamicObjectWaypoint2Parameter(pVector3Res, dSpeed) {
        this.Position2 = pVector3Res;
        this.Speed = dSpeed;
    }
	
	/**
    * ��indexλ�ò���Waypoint
    */
    this.InsertWaypoint = function (lIndex,pVector3, dSpeed) {
        if ((pVector3 != null) && (pVector3 != undefined) && (pVector3.Valid())) {
            return pDynamicObject.InsertWaypoint(lIndex, pVector3.getNpObject(), dSpeed);
        }
        else {
            return pDynamicObject.InsertWaypoint(lIndex, pVector3, dSpeed);
        }
    };

    /**
    * ��indexλ�ò���Waypoint
    */
    this.InsertWaypoint2 = function (lIndex,pPoint, dSpeed) {
        if ((pPoint != null) && (pPoint != undefined) && (pPoint.Valid())) {
            return pDynamicObject.InsertWaypoint2(lIndex, pPoint.getNpObject(), dSpeed);
        }
        else {
            return pDynamicObject.InsertWaypoint2(lIndex, pPoint, dSpeed);
        }
    };

    /**
    * �޸�indexλ���ϵ�Waypoint
    */
    this.ModifyWaypoint = function (lIndex, pVector3, dSpeed) {
        if ((pVector3 != null) && (pVector3 != undefined) && (pVector3.Valid())) {
            return pDynamicObject.ModifyWaypoint(lIndex, pVector3.getNpObject(), dSpeed);
        }
        else {
            return pDynamicObject.ModifyWaypoint(lIndex, pVector3, dSpeed);
        }
    };
	
	/**
    * �޸�indexλ���ϵ�Waypoint
    */
    this.ModifyWaypoint2 = function (lIndex, pPoint, dSpeed) {
        if ((pPoint != null) && (pPoint != undefined) && (pPoint.Valid())) {
            return pDynamicObject.ModifyWaypoint2(lIndex, pPoint.getNpObject(), dSpeed);
        }
        else {
            return pDynamicObject.ModifyWaypoint2(lIndex, pPoint, dSpeed);
        }
    };

    /**
    * ����
    */
    this.Play = function () {
        pDynamicObject.Play();
    };

    /**
    * ��ͣ
    */
    this.Pause = function () {
        pDynamicObject.Pause();
    };

    /**
    * ֹͣ
    */
    this.Stop = function () {
        pDynamicObject.Stop();
    };
}/**
 * Created by Administrator on 2016-6-22.
 * ��ͼ��صĽӿ�
 */

export function ExportManager(pVal) {
    var exportManager = null;
    if (pVal == null) {
        exportManager = plugin.ExportManager;
    }
    else
        exportManager = pVal;

    this.getNpObject = function () {
        return exportManager;
    };

    this.Valid = function () {
        return exportManager.isvalid;
    };

    /**
     * ��ȡ��ǰ��ά���ڵĻ��沢��ָ���ߴ����ΪͼƬ
     */
    this.ExportImage = function (strFilePath, uWidth, uHeight, bHighQuality) {
        return exportManager.ExportImage(strFilePath, uWidth, uHeight, bHighQuality);
    };

    /**
     * �ڳ����н�ȡ����Ӱ��ͼ��ֻ�����IMG��ʽ���൱������ά�������ȡDEM�������IMG�ļ�
     */
    this.ExportDEM = function (strFilePath, pEnvelope, fMeterPerPixel) {
        if((pEnvelope != null)&&(pEnvelope != undefined)&&(pEnvelope.Valid())) {
            return exportManager.ExportDEM(strFilePath, pEnvelope.getNpObject(), fMeterPerPixel);
        }
        else{
            return exportManager.ExportDEM(strFilePath, pEnvelope, fMeterPerPixel);
        }
    };

    /**
     * �ڳ����н�ȡ�߳�ͼ��ֻ�����IMG��ʽ �൱������ά����������һ������Ӱ��ͼ�����IMG�ļ�
     */
    this.ExportDOM = function (strFilePath, pEnvelope, fMeterPerPixel) {
        if((pEnvelope != null)&&(pEnvelope != undefined)&&(pEnvelope.Valid())) {
            return exportManager.ExportDOM(strFilePath, pEnvelope.getNpObject(), fMeterPerPixel);
        }
        else{
            return exportManager.ExportDOM(strFilePath, pEnvelope, fMeterPerPixel);
        }
    };

    /**
     * �������ͼ
     */
    this.ExportOrthoImage = function (bstrFilePath, nWidth, pStart, pEnd, pCenter, envOrthoBox, bHighQuality, nBackgroundColor) {
        var pStartUse = null;
        if((pStart != null)&&(pStart != undefined)&&(pStart.Valid())){
            pStartUse = pStart.getNpObject();
        }
        else{
            pStartUse = pStart;
        }
        var pEndUse = null;
        if((pEnd != null)&&(pEnd != undefined)&&(pEnd.Valid())){
            pEndUse = pEnd.getNpObject();
        }
        else{
            pEndUse = pEnd;
        }
        var pCenterUse = null;
        if((pCenter != null)&&(pCenter != undefined)&&(pCenter.Valid())){
            pCenterUse = pCenter.getNpObject();
        }
        else{
            pCenterUse = pCenter;
        }
        var envOrthoBoxUse = null;
        if((envOrthoBox != null)&&(envOrthoBox != undefined)&&(envOrthoBox.Valid())){
            envOrthoBoxUse = envOrthoBox.getNpObject();
        }
        else{
            envOrthoBoxUse = envOrthoBox;
        }
        return exportManager.ExportOrthoImage(bstrFilePath, nWidth, pStartUse, pEndUse, pCenterUse, envOrthoBoxUse, bHighQuality, nBackgroundColor);
    };

    /**
     * ȡ����ͼ
     */
    this.CancelExport = function () {
        exportManager.CancelExport();
    };
}

/**
 * Ҫ������Ϣ
 * pImportFeaClassΪ����Ĳ���
 * Creator   Jimmy
 * Time     2017-10-28
*/

export function FeatureClassInfo(pImportFeaClass) {
    FeatureClass.call(this, pImportFeaClass);

    this.getNpObject = function () {
        return pImportFeaClass;
    };

    this.Valid = function () {
        return pImportFeaClass.isvalid;
    };

	/**
     * ����Դ�����ַ���
     */
    this.getDataSourceConnectionString = function () {
        return pImportFeaClass.DataSourceConnectionString;
    };
	
	/**
     * ���ݼ�����
     */
    this.getDataSetName = function () {
        return pImportFeaClass.DataSetName;
    };
	
	/**
     * Ҫ��������
     */
    this.getFeatureClassName = function () {
        return pImportFeaClass.FeatureClassName;
    };
	
	/**
     * Ҫ�����Fid�ֶ�����
     */
    this.getFidFieldName = function () {
        return pImportFeaClass.FidFieldName;
    };
}
/**
* Created by Jimmy on 2016-7-15.
* ʸ��ͼ��
*/

export function FeatureLayer(pVal) {
    Renderable.call(this, pVal);
    var featureLayer = pVal;

    this.getNpObject = function () {
        return featureLayer;
    };

    this.Valid = function () {
        return featureLayer.isvalid;
    };

    /**
    * ��ȡʸ��ͼ�㼸���ֶ�����
    */
    this.getGeometryFieldName = function () {
        return featureLayer.GeometryFieldName;
    };

    /**
    * ��ȡͼ���ӦҪ�����GUID
    */
    this.getFeatureClassID = function () {
        return featureLayer.FeatureClassID;
    };

    /**
    * �жϻ�����ʸ��ͼ���Ƿ���뱳���������޳�
    */
    this.getForceCullMode = function () {
        return featureLayer.ForceCullMode;
    };
    this.setForceCullMode = function (bVal) {
        featureLayer.ForceCullMode = bVal;
    };

    /**
    * ��ȡ������ʸ��ͼ�㱳���������޳�ģʽ
    */
    this.getCullMode = function () {
        return featureLayer.CullMode;
    };
    this.setCullMode = function (mVal) {
        featureLayer.CullMode = mVal;
    };

    /**
    * ��ȡ������ʸ��ͼ�㱳���������޳�ģʽ
    */
    this.getGeometryRender = function () {
        var pVal = featureLayer.GeometryRender;
        if ((pVal != 0)&&(pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            if (pVal.RenderType == VRStarRenderType.VRStarRenderSimple) {
                return new SimpleGeometryRender(pVal);
            }
            else if (pVal.RenderType == VRStarRenderType.VRStarRenderValueMap) {
                return new ValueMapGeometryRender(pVal);
            }
            else
                return new GeometryRender(pVal);
        }
        else{
            return null;
        }
    };
    this.setGeometryRender = function (pVal) {
        if((pVal != null)&&(pVal != undefined)&&(pVal.Valid())){
            featureLayer.GeometryRender = pVal.getNpObject();
        }
        else{
            featureLayer.GeometryRender = pVal;
        }
    };

    /**
    * ��ȡ������ʸ��ͼ�㼸����Ⱦ��
    */
    this.getTextRender = function () {
        var pVal = featureLayer.TextRender;
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            if (pVal.RenderType == VRStarRenderType.VRStarRenderSimple) {
                return new SimpleTextRender(pVal);
            }
            else if (pVal.RenderType == VRStarRenderType.VRStarRenderValueMap) {
                return new ValueMapTextRender(pVal);
            }
            else
                return new TextRender(pVal);
        }
        else{
            return pVal;
        }
    };
    this.setTextRender = function (pVal) {
        if((pVal != null)&&(pVal != undefined)&&(pVal.Valid())) {
            featureLayer.TextRender = pVal.getNpObject();
        }
        else{
            featureLayer.TextRender = pVal;
        }
    };

    /**
    * ��ȡ������FeatureLayerĳ����Ⱦ��ļ�����ɫ�Ƿ������ã�Ĭ�ϲ�����
    */
    this.GetEnableGroupColor = function (nGroupID) {
        featureLayer.GetEnableGroupColor(nGroupID);
    };
    this.SetEnableGroupColor = function (nGroupID, bVal) {
        featureLayer.SetEnableGroupColor(nGroupID, bVal);
    };

    /**
    * ��ȡ������FeatureLayerĳ����Ⱦ��ļ�����ɫ
    */
    this.GetGroupColor = function (nGroupID) {
        return featureLayer.GetGroupColor(nGroupID);
    };
    this.SetGroupColor = function (nGroupID,pVal) {
        featureLayer.SetGroupColor(nGroupID,pVal);
    };

    /**
    * ��ȡ��������Ⱦ��Ŀɼ���
    */
    this.GetGroupVisibleMask = function (nGroupID) {
        return featureLayer.GetGroupVisibleMask(nGroupID);
    };
    this.SetGroupVisibleMask = function (nGroupID,pVal) {
        featureLayer.SetGroupVisibleMask(nGroupID,pVal);
    };

    /**
    * ��ȡ�������Ƿ�����ڶ�
    */
    this.getExcavatedAvailable = function () {
        return featureLayer.ExcavatedAvailable;
    };
    this.setExcavatedAvailable = function (bVal) {
        featureLayer.ExcavatedAvailable = bVal;
    };
	
	/**
     * ����ʱ���Ƶ�����˳�򣨶���������ʱ����Խ��Խ����
     */
    this.getDrawOrder = function () {
        return featureLayer.DrawOrder;
    };
    this.setDrawOrder = function (lVal) {
        featureLayer.DrawOrder = lVal;
    };

    /**
    * ��ȡ��ǰFeatureLayer����ϵWKT
    */
    this.GetWKT = function () {
        return featureLayer.GetWKT();
    };
	
	/**
     *��ȡ��ǰFeatureLayer����Դ������Ϣ
     */
    this.getFeatureClassInfo = function () {
        var pFeatureClassInfo = featureLayer.FeatureClassInfo;
		if ((pFeatureClassInfo != null) && (pFeatureClassInfo != undefined) && (pFeatureClassInfo.isvalid)) {
            return new FeatureClassInfo(pFeatureClassInfo);
        }else{
			return null;
		}
    };
}/**
 * Created by Administrator on 2016-6-22.
 * ���ӻ�ʸ�������ӿ�
 */

export function FeatureManager(pVal) {
    var featureManager = null;
    if (pVal == null) {
        featureManager = plugin.FeatureManager;
    }
    else
        featureManager = pVal;

    this.getNpObject = function () {
        return featureManager;
    };

    this.Valid = function () {
        return featureManager.isvalid;
    };

    /**
     *��ʱ����Feature����
     */
    this.CreateFeature = function(pFeatureClass,pRow){
        var pFeatureClassUse = null;
        if ((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())) {
            pFeatureClassUse = pFeatureClass.getNpObject();
        }
        else{
            pFeatureClassUse = pFeatureClass;
        }
        var pRowUse = null;
        if ((pRow != null)&&(pRow != undefined)&&(pRow.Valid())) {
            pRowUse = pRow.getNpObject();
        }
        else{
            pRowUse = pRow
        }
        return featureManager.CreateFeature(pFeatureClassUse,pRowUse);
    };

    /**
     * ��ʱ��������Feature����
     */
    this.CreateFeatures = function(pFeatureClass,pRows){
        var pFeatureClassUse = null;
        if ((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())) {
            pFeatureClassUse = pFeatureClass.getNpObject();
        }
        else{
            pFeatureClassUse = pFeatureClass;
        }
        var pRowsUse = null;
        if ((pRows != null)&&(pRows != undefined)&&(pRows.Valid())) {
            pRowsUse = pRows.getNpObject();
        }
        else{
            pRowsUse = pRows
        }
        return featureManager.CreateFeatures(pFeatureClassUse,pRowsUse);
    };

    /**
     * ��ά��������ʱ�޸�Feature����
     */
    this.EditFeature = function(pFeatureClass,pRow){
        var pFeatureClassUse = null;
        if ((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())) {
            pFeatureClassUse = pFeatureClass.getNpObject();
        }
        else{
            pFeatureClassUse = pFeatureClass;
        }
        var pRowUse = null;
        if ((pRow != null)&&(pRow != undefined)&&(pRow.Valid())) {
            pRowUse = pRow.getNpObject();
        }
        else{
            pRowUse = pRow
        }
        return featureManager.EditFeature(pFeatureClassUse,pRowUse);
    };

    /**
     * ��ʱ�����޸�Feature����
     */
    this.EditFeatures = function(pFeatureClass,pRows){
        var pFeatureClassUse = null;
        if ((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())) {
            pFeatureClassUse = pFeatureClass.getNpObject();
        }
        else{
            pFeatureClassUse = pFeatureClass;
        }
        var pRowsUse = null;
        if ((pRows != null)&&(pRows != undefined)&&(pRows.Valid())) {
            pRowsUse = pRows.getNpObject();
        }
        else{
            pRowsUse = pRows
        }
        return featureManager.EditFeatures(pFeatureClassUse,pRowsUse);
    };

    /**
     * ��ʱɾ��Feature����
     */
    this.DeleteFeature = function(pFeatureClass, lFeatureID){
        if ((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())) {
            featureManager.DeleteFeature(pFeatureClass.getNpObject(), lFeatureID);
        }
        else{
            featureManager.DeleteFeature(pFeatureClass, lFeatureID);
        }
    };

    /**
     * ��ʱ����ɾ��Feature����
     */
    this.DeleteFeatures = function(pFeatureClass, pInt32sFeatrueID){
        var pFeatureClassUse = null;
        if ((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())) {
            pFeatureClassUse = pFeatureClass.getNpObject();
        }
        else{
            pFeatureClassUse = pFeatureClass;
        }
        var pInt32sFeatrueIDUse = null;
        if ((pInt32sFeatrueID != null)&&(pInt32sFeatrueID != undefined)&&(pInt32sFeatrueID.Valid())) {
            pInt32sFeatrueIDUse = pInt32sFeatrueID.getNpObject();
        }
        else{
            pInt32sFeatrueIDUse = pInt32sFeatrueID
        }
        return featureManager.DeleteFeatures(pFeatureClassUse,pInt32sFeatrueIDUse);
    };

    /**
     * ����ĳһָ��Ҫ��
     */
    this.HighlightFeature = function(pFeatureClass, iFeatureID, uColor){
        if((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())){
            return featureManager.HighlightFeature(pFeatureClass.getNpObject(), iFeatureID, uColor);
        }
        else{
            return featureManager.HighlightFeature(pFeatureClass, iFeatureID, uColor);
        }
    };

    /**
     * ȡ������ĳһָ��Ҫ��
     */
    this.UnhighlightFeature = function(pFeatureClass, iFeatureID){
        if((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())){
            return featureManager.UnhighlightFeature(pFeatureClass.getNpObject(), iFeatureID);
        }
        else{
            return featureManager.UnhighlightFeature(pFeatureClass, iFeatureID);
        }
    };
	
	  /**
     * ȡ���������Ҫ��
     */
    this.UnhlightFeatures = function(pFeatureClass, pInt32sFeatrueID){
         var pFeatureClassUse = null;
        if ((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())) {
            pFeatureClassUse = pFeatureClass.getNpObject();
        }
        else{
            pFeatureClassUse = pFeatureClass;
        }
        var pInt32sFeatrueIDUse = null;
        if ((pInt32sFeatrueID != null)&&(pInt32sFeatrueID != undefined)&&(pInt32sFeatrueID.Valid())) {
            pInt32sFeatrueIDUse = pInt32sFeatrueID.getNpObject();
        }
        else{
            pInt32sFeatrueIDUse = pInt32sFeatrueID
        }
	     return featureManager.UnhlightFeatures(pFeatureClassUse,pInt32sFeatrueIDUse);
    };

    /**
     * ȡ�����и���
     */
    this.UnhighlightAll = function(){
        featureManager.UnhighlightAll();
    };

    /**
     * ȡ�����ݱ�������Ҫ�صĸ���
     */
    this.UnhighlightFeatureClass = function(pFeatureClass){
        if((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())){
            return featureManager.UnhighlightFeatureClass(pFeatureClass.getNpObject());
        }
        else{
            return featureManager.UnhighlightFeatureClass(pFeatureClass);
        }
    };

    /**
     * ˢ��ĳһָ��Ҫ�����Ӧ��ʸ��ͼ�㡣������������ʱ��Feature�޸ģ��ָ�������Դ��һ��
     */
    this.RefreshFeatureClass = function (pFeatureClass) {
        if((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())) {
            featureManager.RefreshFeatureClass(pFeatureClass.getNpObject());
        }
        else{
            featureManager.RefreshFeatureClass(pFeatureClass);
        }
    };

    /**
     * ˢ������ͼ�㣬������������ʱ��Feature�޸ģ��ָ�������Դ��һ��
     */
    this.RefreshAll = function () {
        featureManager.RefreshAll();
    };

    /**
     * ����ĳһָ��Ҫ��
     */
    this.HighlightFeatures = function(pFeatureClass, arrFeatrueID, uColor){
        var pFeatureClassUse = null;
        if((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())){
            pFeatureClassUse = pFeatureClass.getNpObject();
        }
        else{
            pFeatureClassUse = pFeatureClass;
        }
        var arrFeatrueIDUse = null;
        if((arrFeatrueID != null)&&(arrFeatrueID != undefined)&&(arrFeatrueID.Valid())){
            arrFeatrueIDUse = arrFeatrueID.getNpObject();
        }
        else{
            arrFeatrueIDUse = arrFeatrueID;
        }
        return featureManager.HighlightFeatures(pFeatureClassUse, arrFeatrueIDUse, uColor);
    };

    /**
     * ͨ��FID����ĳһ��feature��visiblemask
     */
    this.SetFeatureVisibleMask = function (pFeatureClass, nFeatureID, enumViewportMask) {
        if((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())) {
            return featureManager.SetFeatureVisibleMask(pFeatureClass.getNpObject(), nFeatureID, enumViewportMask);
        }
        else{
            return featureManager.SetFeatureVisibleMask(pFeatureClass, nFeatureID, enumViewportMask);
        }
    };

    /**
     * ͨ��FID������������feature��visiblemask
     */
    this.SetFeaturesVisibleMask = function (pFeatureClass, arrFeatrueID, enumViewportMask) {
        var pFeatureClassUse = null;
        if((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())){
            pFeatureClassUse = pFeatureClass.getNpObject();
        }
        else{
            pFeatureClassUse = pFeatureClass;
        }
        var arrFeatrueIDUse = null;
        if((arrFeatrueID != null)&&(arrFeatrueID != undefined)&&(arrFeatrueID.Valid())){
            arrFeatrueIDUse = arrFeatrueID.getNpObject();
        }
        else{
            arrFeatrueIDUse = arrFeatrueID;
        }
        return featureManager.SetFeaturesVisibleMask(pFeatureClassUse, arrFeatrueIDUse, enumViewportMask);
    };

    /**
     * ȡ��ĳһfeature��visiblemask����
     */
    this.ResetFeatureVisibleMask = function (pFeatureClass, nFeatureID) {
        if((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())){
            return featureManager.ResetFeatureVisibleMask(pFeatureClass.getNpObject(), nFeatureID);
        }
        else{
            return featureManager.ResetFeatureVisibleMask(pFeatureClass, nFeatureID);
        }
    };

    /**
     * ȡ������feature��visiblemask����
     */
    this.ResetAllVisibleMask = function () {
        return featureManager.ResetAllVisibleMask();
    };
}/**
* Created by Jimmy on 2016-7-18.
* ������Ⱦ��
*/

export function GeometryRender(pVal) {
    var geometryRender = pVal;

    this.getNpObject = function () {
        return geometryRender;
    };

    this.Valid = function () {
        return geometryRender.isvalid;
    };

    /**
    * ��ȡ��Ⱦ����
    */
    this.getRenderType = function () {
        return geometryRender.RenderType;
    };

    /**
    * ��ȡ�����ø߳�ģʽ��������Polyline��Polygon������ʾ
    */
    this.getHeightStyle = function () {
        return geometryRender.HeightStyle;
    };
    this.setHeightStyle = function (vrstarHeightStyle) {
        geometryRender.HeightStyle = vrstarHeightStyle;
    };

    /**
    * ��ȡ�������߼�ͼ�����ֶ�����
    */
    this.getRenderGroupField = function () {
        return geometryRender.RenderGroupField;
    };
    this.setRenderGroupField = function (sVal) {
        geometryRender.RenderGroupField = sVal;
    };

    /**
     * �߳�ƫ��ֵ
     */
    this.getHeightOffset = function () {
        return geometryRender.HeightOffset;
    };
    this.setHeightOffset = function (dVal) {
        geometryRender.HeightOffset = dVal;
    };
}

/**
* Created by Jimmy on 2016-8-29.
* ����Ⱦ�������Σ�
*/

export function SimpleGeometryRender(pVal) {
    var simpleGeometryRender = null;
    if (pVal == null) {
        simpleGeometryRender = plugin.NewSimpleGeometryRender();
    }
    else
        simpleGeometryRender = pVal;
    GeometryRender.call(this, simpleGeometryRender);

    this.Valid = function () {
        return simpleGeometryRender.isvalid;
    };

    /**
    * ��ȡ�����ü���Ⱦ�����ţ�����FeatureLayerʹ��ͳһ��Symbol
    */
    this.getSymbol = function () {
        var sym = simpleGeometryRender.Symbol;
        if (sym != null) {
            if (sym.SymbolType == VRStarGeometrySymbolType.VRStarGeometrySymbolPoint) {
                return new SimplePointSymbol(sym);
            }
            else if (sym.SymbolType == VRStarGeometrySymbolType.VRStarGeometrySymbolModelPoint) {
                return new ModelPointSymbol(sym);
            }
            else if (sym.SymbolType == VRStarGeometrySymbolType.VRStarGeometrySymbolImagePoint) {
                return new ImagePointSymbol(sym);
            }
            else if (sym.SymbolType == VRStarGeometrySymbolType.VRStarGeometrySymbolCurve) {
                return new CurveSymbol(sym);
            }
            else if (sym.SymbolType == VRStarGeometrySymbolType.VRStarGeometrySymbolSurface) {
                return new SurfaceSymbol(sym);
            }
            else
                return new GeometrySymbol(sym);
        }
        else{
            return sym;
        }
    };
    this.setSymbol = function (geometrySymbol) {
        if((geometrySymbol != null)&&(geometrySymbol != undefined)&&(geometrySymbol.Valid())) {
            simpleGeometryRender.Symbol = geometrySymbol.getNpObject();
        }
        else{
            simpleGeometryRender.Symbol = geometrySymbol;
        }
    };
}

/**
* Created by Jimmy on 2016-8-30.
* ��ȡ������ֵ��Ⱦ�������Σ�
*/

export function ValueMapGeometryRender(pVal) {
    var valueMapGeometryRender = null;
    if (pVal == null) {
        valueMapGeometryRender = plugin.NewValueMapGeometryRender();
    }
    else
        valueMapGeometryRender = pVal;
    GeometryRender.call(this, valueMapGeometryRender);

    this.Valid = function () {
        return valueMapGeometryRender.isvalid;
    };

    /**
    * ��ȡ��������Ⱦ��������
    */
    this.getSchemeCount = function () {
        return valueMapGeometryRender.SchemeCount;
    };
    this.setSchemeCount = function (lVal) {
        valueMapGeometryRender.SchemeCount = lVal;
    };

    /**
    * ����һ����Ⱦ����
    */
    this.AddScheme = function (grScheme) {
        if((grScheme != null)&&(grScheme != undefined)&&(grScheme.Valid())) {
            valueMapGeometryRender.AddScheme(grScheme.getNpObject());
        }
        else{
            valueMapGeometryRender.AddScheme(grScheme);
        }
    };

    /**
    * ����һ����Ⱦ����
    */
    this.ClearSchemes = function () {
        valueMapGeometryRender.ClearSchemes();
    };

    /**
     * ��ȡָ����Ⱦ����
     * @return {GeometryRenderScheme}
     */
    this.GetScheme = function (lInd) {
        var grScheme = valueMapGeometryRender.GetScheme(lInd);
        if ((grScheme != null)&&(grScheme != undefined)&&(grScheme.isvalid)) {
            return new GeometryRenderScheme(grScheme);
        }
        else{
            return null;
        }
    };
}/**
* Created by Jimmy on 2016-8-29.
* ��ȡ�����ü�����Ⱦ����
*/

export function GeometryRenderScheme(grScheme) {
    var geometryRenderScheme = null;
    if (grScheme == null) {
        geometryRenderScheme = plugin.NewGeometryRenderScheme();
    }
    else
        geometryRenderScheme = grScheme;

    this.getNpObject = function () {
        return geometryRenderScheme;
    };

    this.Valid = function () {
        return geometryRenderScheme.isvalid;
    };

    /**
    * ��ȡ��������Ⱦ�����ܸ���
    */
    this.getRuleCount = function () {
        return geometryRenderScheme.RuleCount;
    };
    this.setRuleCount = function (lVal) {
        geometryRenderScheme.RuleCount = lVal;
    };

    /**
    * ��ȡ�����ü���������Ⱦ���
    */
    this.getSymbol = function () {
        var sym = geometryRenderScheme.Symbol;
        if (sym != null) {
            if (sym.SymbolType == VRStarGeometrySymbolType.VRStarGeometrySymbolPoint) {
                return new SimplePointSymbol(sym);
            }
            if (sym.SymbolType == VRStarGeometrySymbolType.VRStarGeometrySymbolModelPoint) {
                return new ModelPointSymbol(sym);
            }
            if (sym.SymbolType == VRStarGeometrySymbolType.VRStarGeometrySymbolImagePoint) {
                return new ImagePointSymbol(sym);
            }
            if (sym.SymbolType == VRStarGeometrySymbolType.VRStarGeometrySymbolCurve) {
                return new CurveSymbol(sym);
            }
            if (sym.SymbolType == VRStarGeometrySymbolType.VRStarGeometrySymbolSurface) {
                return new SurfaceSymbol(sym);
            }
            else
                return new GeometrySymbol(sym);
        }      
    };
    this.setSymbol = function (geometrySymbol) {
        if((geometrySymbol != null)&&(geometrySymbol != undefined)&&(geometrySymbol.Valid())) {
            geometryRenderScheme.Symbol = geometrySymbol.getNpObject();
        }
        else{
            geometryRenderScheme.Symbol = geometrySymbol;
        }
    };

    /**
    * ��ȡ�����ÿɼ��Ա��
    */
    this.getVisibleMask = function () {
        return geometryRenderScheme.VisibleMask;
    };
    this.setVisibleMask = function (bytVal) {
        geometryRenderScheme.VisibleMask = bytVal;
    };

    /**
    * ������Ⱦ����
    */
    this.AddRule = function (renderRule) {
        if((renderRule != null)&&(renderRule != undefined)&&(renderRule.Valid())) {
            geometryRenderScheme.AddRule(renderRule.getNpObject());
        }
        else{
            geometryRenderScheme.AddRule(renderRule);
        }
    };

    /**
    * �����Ⱦ����
    */
    this.ClearRules = function (renderRule) {
        geometryRenderScheme.ClearRules();
    };

    /**
    * ��ȡָ����Ⱦ����
    */
    this.GetRule = function (lInd) {
        var renRule = geometryRenderScheme.GetRule(lInd);
        if ((renRule != null)&&(renRule != undefined)&&(renRule.isvalid)) {
            if (renRule.RuleType == VRStarRenderRuleType.VRStarRenderRuleRange) {
                return new RangeRenderRule(renRule);
            }
            else if (renRule.RuleType == VRStarRenderRuleType.VRStarRenderRuleUniqueValues) {
                return new UniqueValuesRenderRule(renRule);
            }
            else
                return new RenderRule(renRule);
        }
        else{
            return renRule;
        }
    };
}/**
 * Created by Administrator on 2017-4-27.
 * ����ѡ��������
 */

export function HighlightHelper(highlightHelper){

    this.getNpObject = function () {
        return highlightHelper;
    };

    this.Valid = function () {
        return highlightHelper.isvalid;
    };

    /**
     * ѡ��������ɫ(RGBA)
     */
    this.getColor = function () {
        return highlightHelper.Color;
    };
    this.setColor = function (OLE_COLOR) {
        highlightHelper.Color = OLE_COLOR;
    };

    /**
     * ѡ��������z���ϵ����ֵ��Ĭ��ֵΪ-10000��ע����IClosedTriMesh��IMultiTriMesh��������������
     */
    this.getMinZ = function () {
        return highlightHelper.MinZ;
    };
    this.setMinZ = function (dValue) {
        highlightHelper.MinZ = dValue;
    };

    /**
     * ѡ��������z���ϵ����ֵ��Ĭ��ֵΪ10000��ע����IClosedTriMesh��IMultiTriMesh��������������
     */
    this.getMaxZ = function () {
        return highlightHelper.MaxZ;
    };
    this.setMaxZ = function (dValue) {
        highlightHelper.MaxZ = dValue;
    };

    /**
     * ѡ������Ŀɼ��ԡ�Ĭ��Ϊ0�����ɼ���
     */
    this.getVisibleMask = function () {
        return highlightHelper.VisibleMask;
    };
    this.setVisibleMask = function (byteValue) {
        highlightHelper.VisibleMask = byteValue;
    };

    /**
     * ��ȡѡ�������Ӧ�Ķ�άpolygon��������zֵ��\ IClosedTriMesh \ IMultiTriMesh��ÿ��ITriMesh����Closed����
     */
    this.GetRegion = function () {
        var pGeometryRes = highlightHelper.GetRegion();
        if ((pGeometryRes != null)&&(pGeometryRes != undefined)&&(pGeometryRes.isvalid)) {
            var enumGeometryType = pGeometryRes.GeometryType;
            switch (enumGeometryType) {
                case VRStarGeometryType.VRStarGeometryUnknow:
                    return new Geometry(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryPoint:
                    return new Point(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryModelPoint:
                    return new ModelPoint(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryArc:
                    return new CirculeArc(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryLine:
                    return new Line(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryCircle:
                    return new Circle(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryPolyline:
                    return new Polyline(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryRing:
                    return new Ring(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryPolygon:
                    return new Polygon(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryTriMesh:
                    return new TriMesh(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryCollection:
                    return new GeometryCollection(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryMultiPoint:
                    return new MultiPoint(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryMultiPolyline:
                    return new MultiPolyline(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryMultiPolygon:
                    return new MultiPolygon(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryMultiTrimesh:
                    return new MultiTriMesh(pGeometryRes);
                case VRStarGeometryType.VRStarGeometryPointCloud:
                    return new PointCloud(pGeometryRes);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    };

    /**
     * ��Բ��ѡ������
     */
    this.SetCircleRegion = function (pPoint, dRadius) {
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())) {
            highlightHelper.SetCircleRegion(pPoint.getNpObject(), dRadius);
        }
        else{
            highlightHelper.SetCircleRegion(pPoint, dRadius);
        }
    };

    /**
     * ����ѡ������Ŀǰ֧��IPolygon��IMultiPolygon��IClosedTrimesh����������null���൱�ڰ�region��գ����֮��ʹVisibleMask����1Ҳû���κθ�������
     */
    this.SetRegion = function (pGeometry) {
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())) {
            highlightHelper.SetRegion(pGeometry.getNpObject());
        }
        else{
            highlightHelper.SetRegion(pGeometry);
        }
    };

    /**
     * ��׶��ѡ������
     */
    this.SetSectorRegion = function (pStartPoint, pEndPoint, dHorizontalAngle) {
        var pStartPointUse = null;
        if((pStartPoint != null)&&(pStartPoint != undefined)&&(pStartPoint.Valid())) {
            pStartPointUse = pStartPoint.getNpObject();
        }
        else{
            pStartPointUse = pStartPoint;
        }
        var pEndPointUse = null;
        if((pEndPoint != null)&&(pEndPoint != undefined)&&(pEndPoint.Valid())) {
            pEndPointUse = pEndPoint.getNpObject();
        }
        else{
            pEndPointUse = pEndPoint;
        }
        highlightHelper.SetSectorRegion(pStartPointUse, pEndPointUse, dHorizontalAngle);
    };
}/**
 * Created by zzz on 2018-10-22.
 * HTML����
 */

export function HTMLWindow(pVal) {

    var htmlWindow = null;
    if (pVal == null) {
        htmlWindow = plugin.HTMLWindow;
    }
    else{
		htmlWindow = pVal;
	}

    this.getNpObject = function () {
        return htmlWindow;
    };

    this.Valid = function () {
        return htmlWindow.isvalid;
    };

    /**
     * ��������������Ҫ��ʾ�Ĵ���ĸ��ֲ�����Ϣ�Ķ��� 
     * @return {WindowParam}
     */
	this.CreateWindowParam  = function(){
        var pVal = htmlWindow.CreateWindowParam();
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new WindowParam(pVal);
        }
        else{
            return null;
        }
    };
   
    /**
     * ɾ����Сβ�͵�ҳ�洰��
     */
    this.DeletePopupWindow = function(lID){
         htmlWindow.DeletePopupWindow(lID);
    };
   
     /**
     * ��ȡ��������ָ������ĸ��ֲ�����Ϣ�Ķ���
     * @return {WindowParam}
     */
    this.GetWindowParam = function (lID) {
        var pVal = htmlWindow.GetWindowParam(lID);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new WindowParam(pVal);
        }
        else{
            return null;
        }
    };
   
     /**
     * ����ָ��ID����Ƕ���塣
     */
    this.HideWindow = function(lID,bHide){
         htmlWindow.HideWindow(lID,bHide);
    };
	
	 /**
     * �����������������Ӧ������Ƕ���ڡ� 
     * @param {WindowParam}  pNewWindowParam
     */
    this.SetWindowParam = function (pNewWindowParam) {
        if((pNewWindowParam != null)&&(pNewWindowParam != undefined)&&(pNewWindowParam.Valid())){
            htmlWindow.SetWindowParam(pNewWindowParam.getNpObject());
        }
        else{
            htmlWindow.SetWindowParam(pNewWindowParam);
        }
    };
	
	 /**
     * ������Ƕ���ڵĳߴ磬����ʾ���塣�ڴ�����ʾ��ͨ�����øú������Զ�̬��������ĳߴ硣
     * lWidth ���ڵĿ��ȣ����Ϊ-1������ԡ�  
     * lHeight ���ڵĸ߶ȣ����Ϊ-1������ԡ�   
     * lID ����ID��   
     */
    this.SetWindowSize  = function(lWidth,lHeight,lID){
         htmlWindow.SetWindowSize(lWidth,lHeight,lID);
    };
	
	 /**
     * ��ʾָ��url��ַ��ҳ�洰�ڡ� 
     * strURL ��Ƕҳ���url��  
     * lSizeX ���ڵĿ��ȡ�
     * lSizeY ���ڵĸ߶ȡ� 
     * bHasTitle �Ƿ���ʾҳ��ı������� 
	 * pPosition ���ڵ���ʾλ�ã�����:UserDefined = 0,CenterParent = 1,CenterDesktop = 2,MousePosition = 3,ParentSize = 4,ParentRightTop = 5
     * lRound �����ĸ��ǵ�Բ���ȣ�ֵԽ��ԽԲ�������ȡ-1����Ϊ��׼���Ρ�
     */
	this.ShowPopupWindow = function (strURL,lSizeX,lSizeY,bHasTitle,pPosition,lRound) {
        var pPositionUse = null;
        if((pPosition != null)&&(pPosition != undefined)&&(pPosition.Valid())){
            pPositionUse = pPosition.getNpObject();
        }
        else{
            pPositionUse = pPosition;
        }
         htmlWindow.ShowPopupWindow(strURL,lSizeX,lSizeY,bHasTitle,pPositionUse,lRound);
    };
	
	/**
     * ��ʾ��Сβ�͵�ҳ�洰�ڡ�   
	 * pPosition ��ά�����е����ꡣ
     * pWindowParam ���ڲ�����
	 * bAutoComputePos �Ƿ��Զ�����λ�á�
     */
	this.ShowPopupWindowEx = function (pPosition,pWindowParam,bAutoComputePos) {
        var pPositionUse = null;
        if((pPosition != null)&&(pPosition != undefined)&&(pPosition.Valid())){
            pPositionUse = pPosition.getNpObject();
        }
        else{
            pPositionUse = pPosition;
        }
		 var pWindowParamUse = null;
        if((pWindowParam != null)&&(pWindowParam != undefined)&&(pWindowParam.Valid())){
            pWindowParamUse = pWindowParam.getNpObject();
        }
        else{
            pWindowParamUse = pWindowParam;
        }
         htmlWindow.ShowPopupWindowEx(pPositionUse,pWindowParamUse,bAutoComputePos);
    };
    
    /**
     * ��ȡ���ʱ�Ļص�����
     */
    this.GetOnClickInvoke = function (winId) {
        return htmlWindow.GetOnClickInvoke(winId);
    };
	
    /**
     * ���õ��ʱ�Ļص�������ʹ��"onClick"����������Ϊ����
     */
    this.SetOnClickInvoke = function (winId,clickCallBack) {
        htmlWindow.SetOnClickInvoke(winId,clickCallBack);
    };
    
    /**
     * ���Ƽ���������
     */
    this.ShowActiveWindow = function (bShow) {
        htmlWindow.ShowActiveWindow(bShow);
    };
	
}
/**
* Created by Jimmy on 2016-7-15.
* ��Ƭͼ���ڶ�
*/

export function I3DTileHole(pVal) {
    Renderable.call(this, pVal);
    var i3DTileHole = pVal;

    this.Valid = function () {
        return i3DTileHole.isvalid;
    };

    /**
     * ��ȡ��������Ƭͼ���ڶ�����˳��
     */
    this.GetWKT = function () {
        return i3DTileHole.GetWKT();
    };

    /**
    * ��ȡ��������Ƭͼ���ڶ�����˳��
    */
    this.getDrawOrder = function () {
        return i3DTileHole.DrawOrder;
    };
    this.setDrawOrder = function (lVal) {
        i3DTileHole.DrawOrder = lVal;
    };

    /**
     * ��ȡ�����õ����ڶ�����η�Χ
     * @return {Polygon}
     */
    this.GetPolygon = function () {
        var poly = i3DTileHole.GetPolygon();
        if ((poly != null)&&(poly != undefined)&&(poly.isvalid)) {
            return new Polygon(poly);
        }
        else{
            return null;
        }
    };
    this.SetPolygon = function (pPolygon) {
        if((pPolygon != null)&&(pPolygon != undefined)&&(pPolygon.Valid())) {
            i3DTileHole.SetPolygon(pPolygon.getNpObject());
        }
        else{
            i3DTileHole.SetPolygon(pPolygon);
        }
    };
}
/**
* Created by Jimmy on 2016-7-15.
* ��б��Ӱģ��ͼ��
*/

export function I3DTileLayer(pVal) {
    Renderable.call(this, pVal);
    var i3DTileLayer = pVal;

    this.Valid = function () {
        return i3DTileLayer.isvalid;
    };

    /**
    * ��ȡ������Ϣ
    */
    this.getConnectionInfo = function () {
        return i3DTileLayer.ConnectionInfo;
    };

    /**
    * ��ȡWKT
    */
    this.GetWKT = function () {
        return i3DTileLayer.GetWKT();
    };
}
/**
* Created by Jimmy on 2016-7-15.
* Ӱ��ͼ��
*/

export function ImageryLayer(pVal) {
    Renderable.call(this, pVal);
    var imageryLayer = pVal;

    this.getNpObject = function () {
        return imageryLayer;
    };

    this.Valid = function () {
        return imageryLayer.isvalid;
    };

    /**
     * Ĭ������
     * @return {string}
     */
    this.getName = function () {
        return imageryLayer.Name;
    };
	
	/**
     * Ĭ������
     * @return {string}
     */
    this.getName2 = function () {
        return imageryLayer.Name2;
    };

    /**
     * ��ȡ������Ӱ��ͼ��͸����
     * @param {double} dOpacity
     * @return {double}
     */
    this.getOpacity = function () {
        return imageryLayer.Opacity;
    };
    this.setOpacity = function (dOpacity) {
        imageryLayer.Opacity = dOpacity;
    };

    /**
     * ��ȡӰ�񲨶�����
     * @return {long}
     */
    this.getBandCount = function () {
        return imageryLayer.BandCount;
    };

    /**
     * ��ȡӰ�����
     * @return {long}
     */
    this.getWidth = function () {
        return imageryLayer.Width;
    };

    /**
     * ��ȡӰ��߶�
     * @return {long}
     */
    this.getHeight = function () {
        return imageryLayer.Height;
    };

    /**
     * ��ȡ�����ַ���
     * @return {string}
     */
    this.getConnectionString = function () {
        return imageryLayer.ConnectionString;
    };

    /**
     * ��ȡ������DrawOrder
     * @param {double} dDrawOrder
     * @return {double}
     */
    this.getDrawOrder = function () {
        return imageryLayer.DrawOrder;
    };
    this.setDrawOrder = function (dDrawOrder) {
        imageryLayer.DrawOrder = dDrawOrder;
    };

    /**
     * ��ȡ������Ӱ����Ⱦ����
     * @param {RasterSymbol} pRasterSymbol
     * @return {RasterSymbol} pRasterSymbol
     */
    this.getRasterSymbol = function () {
        var pRasterSymbol = imageryLayer.RasterSymbol;
        if (pRasterSymbol != null) {
            return new RasterSymbol(pRasterSymbol);
        }
    };
    this.setRasterSymbol = function (pRasterSymbol) {
        if((pRasterSymbol != null)&&(pRasterSymbol != undefined)&&(pRasterSymbol.Valid())) {
            imageryLayer.RasterSymbol = pRasterSymbol.getNpObject();
        }
        else{
            imageryLayer.RasterSymbol = pRasterSymbol;
        }
    };

    /**
     * ��ȡ������Ӱ��ͼ��Ӱ����������ϵWKT
     * @param {string} sWKT
     * @return {string}
     */
    this.GetWKT = function () {
        return imageryLayer.GetWKT();
    };
    this.SetWKT = function (sWKT) {
        imageryLayer.SetWKT(sWKT);
    };

    /**
     * ��֤��Ч��.�鿴��ǰImageryLayer�Ƿ���Ч
     * @return {boolean}
     */
    this.Valid = function () {
        imageryLayer.Valid();
    };

    /**
     * ��ȡӰ������Դ������Χ
     * @return {double} dLeft
     * @return {double} dRight
     * @return {double} dBottom
     * @return {double} dTop
     */
    this.GetExtent = function () {
        var operateRes = imageryLayer.GetExtent();
        if((operateRes != null) && (operateRes != undefined) && (operateRes.valid)) {
            var dLeft = operateRes.Left;
            var dRight = operateRes.Right;
            var dBottom = operateRes.Bottom;
            var dTop = operateRes.Top;
            return new GetExtentParameter(dLeft, dRight, dBottom, dTop);
        }
        else{
            return operateRes;
        }
    };
    function GetExtentParameter(dLeft,dRight,dBottom,dTop){
        this.Left = dLeft;
        this.Right = dRight;
        this.Bottom = dBottom;
        this.Top = dTop;
    }

    /**
     * ��ȡӰ�����ݵ�XY�ֱ���
     * @return {double} dResolutionX
     * @return {double} dResolutionY
     */
    this.GetResolution = function () {
        var operateRes = imageryLayer.GetResolution();
        if((operateRes != null) && (operateRes != undefined) && (operateRes.valid)) {
            var dResolutionX = operateRes.ResolutionX;
            var dResolutionY = operateRes.ResolutionY;
            return new GetResolutionParameter(dResolutionX, dResolutionY);
        }
        else{
            return operateRes;
        }
    };
    function GetResolutionParameter(dResolutionX,dResolutionY){
        this.ResolutionX = dResolutionX;
        this.ResolutionY = dResolutionY;
    }

    /**
     * �����Ƿ�ʹ����Чֵ
     * @param {boolean} bUseNodata
     */
    this.SetNodataValueEnableStatus = function (bUseNodata) {
        imageryLayer.SetNodataValueEnableStatus(bUseNodata);
    };

    /**
     * ������Чֵ
     * @param {byte} bytR
     * @param {byte} bytG
     * @param {byte} bytB
     * @param {byte} bytA
     * @return {boolean}
     */
    this.SetNodataValue = function (bytR, bytG, bytB, bytA) {
        return imageryLayer.SetNodataValue(bytR, bytG, bytB, bytA);
    };

    /**
     * �����Ƿ�ʹ�ñ���ֵ
     * @param {boolean} bBackgroudEnable
     */
    this.SetBGEnableStatus = function (bBackgroudEnable) {
        imageryLayer.SetBGEnableStatus(bBackgroudEnable);
    };

    /**
     * ���ñ���ֵ
     * @param {byte} bytR
     * @param {byte} bytG
     * @param {byte} bytB
     * @param {byte} bytA
     */
    this.SetBGColor = function (bytR, bytG, bytB, bytA) {
        imageryLayer.SetBGColor(bytR, bytG, bytB, bytA);
    };
}
/**
* Created by Jimmy on 2016-7-15.
* ���ֱ�ǩ
*/

export function Label(pVal) {
    Renderable.call(this, pVal);
    var label = pVal;

    this.Valid = function () {
        return label.isvalid;
    };

    /**
    * ��ȡ���������ֱ�ǩ����
    */
    this.getText = function () {
        return label.Text;
    };
    this.setText = function (sVal) {
        label.Text = sVal;
    };

    /**
    * ��ȡ���������ֱ�ǩλ��
    */
    this.getPosition = function () {
        var poi = label.Position;
        if ((poi != null)&&(poi != undefined)&&(poi.isvalid)) {
            return new Point(poi);
        }
        else{
            return null;
        }
    };
    this.setPosition = function (point) {
        if((point != null)&&(point != undefined)&&(point.Valid())){
            label.Position = point.getNpObject();
        }
        else{
            label.Position = point;
        }
    };

    /**
    * ��ȡ���������ֱ�ǩ����
    */
    this.getTextSymbol = function () {
        var Sym = label.TextSymbol;
        if ((Sym != null)&&(Sym != undefined)&&(Sym.isvalid)) {
            return new TextSymbol(Sym);
        }
        else{
            return null;
        }
    };
    this.setTextSymbol = function (sym) {
        if((sym != null)&&(sym != undefined)&&(sym.Valid())){
            label.TextSymbol = sym.getNpObject();
        }
        else{
            label.TextSymbol = sym;
        }
    };

    /**
    * ������󶨵�ĳ���˶�·����
    */
    this.Bind = function (pMotionPath, pVec, dHeadingOffset, dPitchOffset, dRollOffset) {
        var pMotionPathUse = null;
        if((pMotionPath != null)&&(pMotionPath != undefined)&&(pMotionPath.Valid())){
            pMotionPathUse = pMotionPath.getNpObject();
        }
        else{
            pMotionPathUse = pMotionPath;
        }
        var pVecUse = null;
        if((pVec != null)&&(pVec != undefined)&&(pVec.Valid())){
            pVecUse = pVec.getNpObject();
        }
        else{
            pVecUse = pVec;
        }
        label.Bind(pMotionPathUse, pVecUse, dHeadingOffset, dPitchOffset, dRollOffset);
    };
	
	 /**
     * ������󶨵�ĳ���˶�·����
     */
    this.Bind2 = function (pDynamicObject, pVec, dHeadingOffset, dPitchOffset, dRollOffset) {
        var pDynamicObjectUse = null;
        if((pDynamicObject != null)&&(pDynamicObject != undefined)&&(pDynamicObject.Valid())){
            pDynamicObjectUse = pDynamicObject.getNpObject();
        }
        else{
            pDynamicObjectUse = pDynamicObject;
        }
        var pVecUse = null;
        if((pVec != null)&&(pVec != undefined)&&(pVec.Valid())){
            pVecUse = pVec.getNpObject();
        }
        else{
            pVecUse = pVec;
        }
        label.Bind2(pDynamicObjectUse, pVecUse, dHeadingOffset, dPitchOffset, dRollOffset);
    };
	
    /**
    * ��ȡMotionable�󶨵���MotionPath��GUID
    */
    this.GetMotionPathID = function () {
        return label.GetMotionPathID();
    };

    /**
    * ��ĳ���˶�·���Ͻ�󶨵�ǰ����
    */
    this.Unbind = function () {
        label.Unbind();
    };
}
/**
* �����˶�·��
* motionPath
* @author   Jimmy
* @date     2016-9-1
*/

export function MotionPath(motionPath) {
    RenderObject.call(this, motionPath);

    this.getNpObject = function () {
        return motionPath;
    };

    this.Valid = function () {
        return motionPath.isvalid;
    };

    /**
    * ��ȡ���������忪ʼ���ŵ�WayPoint����
    * @param   {long}  lVal
    * @return  {long}
    */
    this.getIndex = function () {
        return motionPath.Index;
    };
    this.setIndex = function (lVal) {
        motionPath.Index = lVal;
    };

    /**
    * ��ȡ���������岥��ʱ��
    * @param   {double}  dVal
    * @return  {double}
    */
    this.getTime = function () {
        return motionPath.Time;
    };
    this.setTime = function (dVal) {
        motionPath.Time = dVal;
    };

    /**
    * ��ȡ���������ܺ�ʱ
    * @param   {double}  dVal
    * @return  {double}
    */
    this.getTotalTime = function () {
        return motionPath.TotalTime;
    };
    this.setTotalTime = function (dVal) {
        motionPath.TotalTime = dVal;
    };

    /**
    * �жϻ������Ƿ�ѭ������
    * @param   {bool}  bVal 
    * @return  {bool}
    */
    this.getAutoRepeat = function () {
        return motionPath.AutoRepeat;
    };
    this.setAutoRepeat = function (bVal) {
        motionPath.AutoRepeat = bVal;
    };

    /**
    * ��ȡ����������ϵ��WKT��
    * @param   {string}  sVal 
    * @return  {string}
    */
    this.getCrsWKT = function () {
        return motionPath.CrsWKT;
    };
    this.setCrsWKT = function (sVal) {
        motionPath.CrsWKT = sVal;
    };

    /**
    * ��ȡWaypoint������
    * @param   {long}  lVal
    * @return  {long}
    */
    this.getWaypointsNumber = function () {
        return motionPath.WaypointsNumber;
    };
    this.setWaypointsNumber = function (lVal) {
        motionPath.WaypointsNumber = lVal;
    };

    /**
    * ����xml
    * @return  {string}
    */
    this.AsXml = function () {
        return motionPath.AsXml();
    };

    /**
    * ����ΪXml�ļ�
    * @param   {string}  sVal
    * @return  void
    */
    this.AsXmlFile = function (sVal) {
        motionPath.AsXmlFile(sVal);
    };

    /**
    * ��xml����
    * @param   {string}  strXml
    * @return  {bool}
    */
    this.FromXml = function (strXml) {
        return motionPath.FromXml(strXml);
    };

    /**
    * ��xml�ļ�����
    * @param   {string}  sVal
    * @return  {bool}
    */
    this.FromXmlFile = function (sVal) {
        return motionPath.FromXmlFile(sVal);
    };

    /**
    * ����
    * @return  void
    */
    this.Play = function () {
        motionPath.Play();
    };

    /**
    * ��ͣ
    * @return  void
    */
    this.Pause = function () {
        motionPath.Pause();
    };

    /**
    * ֹͣ
    * @return  void
    */
    this.Stop = function () {
        motionPath.Stop();
    };

    /**
    * �ڶ�β����Waypoint
    * @param   {Vector3}     pVectorPos
    * @param   {EulerAngle}  pEulerAngle
    * @param   {Vector3}     pVectorScale
    * @param   {double}      dTime  
    * @return  void
    */
    this.AddWaypoint = function (pVectorPos, pEulerAngle, pVectorScale, dTime) {
        var pVectorPosUse = null;
        if((pVectorPos != null)&&(pVectorPos != undefined)&&(pVectorPos.Valid())){
            pVectorPosUse = pVectorPos.getNpObject();
        }
        else{
            pVectorPosUse = pVectorPos;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        var pVectorScaleUse = null;
        if((pVectorScale != null)&&(pVectorScale != undefined)&&(pVectorScale.Valid())){
            pVectorScaleUse = pVectorScale.getNpObject();
        }
        else{
            pVectorScaleUse = pVectorScale;
        }
        motionPath.AddWaypoint(pVectorPosUse, pEulerAngleUse, pVectorScaleUse, dTime);
    };

    /**
    * �ڶ�β����Waypoint
    * @param   {Point }      pPoint
    * @param   {EulerAngle}  pEulerAngle
    * @param   {Vector3}     pVectorScale
    * @param   {double}      dTime  
    * @return  void
    */
    this.AddWaypoint2 = function (pPoint, pEulerAngle, pVectorScale, dTime) {
        var pPointUse = null;
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pPointUse = pPoint.getNpObject();
        }
        else{
            pPointUse = pPoint;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        var pVectorScaleUse = null;
        if((pVectorScale != null)&&(pVectorScale != undefined)&&(pVectorScale.Valid())){
            pVectorScaleUse = pVectorScale.getNpObject();
        }
        else{
            pVectorScaleUse = pVectorScale;
        }
        motionPath.AddWaypoint2(pPointUse, pEulerAngleUse, pVectorScaleUse, dTime);
    };

    /**
    * ͨ�������ڶ�β����Waypoint
    * @param   {Matrix}      pMatrix
    * @param   {double}      dTime  
    * @return  void
    */
    this.AddWaypointByMatrix = function (pMatrix, dTime) {
        if((pMatrix != null)&&(pMatrix != undefined)&&(pMatrix.Valid())){
            motionPath.AddWaypointByMatrix(pMatrix.getNpObject(), dTime);
        }
        else{
            motionPath.AddWaypointByMatrix(pMatrix, dTime);
        }
    };

    /**
    * �������Waypoint
    * @return  void
    */
    this.ClearWaypoints = function () {
         motionPath.ClearWaypoints();
    };

    /**
    * ɾ��indexλ���ϵ�Waypoint
    * @param   {long}       lIndex  
    * @return  void
    */
     this.DeleteWaypoint = function (lIndex) {
         motionPath.DeleteWaypoint(lIndex);
    };

    /**
    * ��ȡindexλ���ϵ�Waypoint
    * @param   {long}       lIndex  
    * @return  {Vector3}
    * @return  {EulerAngle}
    * @return  {Vector3}
    * @return  {double}
    */
     this.GetWaypoint = function (lIndex) {
         var operateRes = motionPath.GetWaypoint(lIndex);
         var pVector3Res = null;
         var pVector3Use = operateRes.Position;
         if ((pVector3Use != null) && (pVector3Use != undefined) && (pVector3Use.isvalid)) {
             pVector3Res = new Vector3(pVector3Use);
         }
         else {
             pVector3Res = null;
         }
         var pAngleRes = null;
         var pAngleResUse = operateRes.Angle;
         if ((pAngleResUse != null) && (pAngleResUse != undefined) && (pAngleResUse.isvalid)) {
             pAngleRes = new EulerAngle(pVector3Use);
         }
         else {
             pAngleRes = null;
         }
         var pVector3ReRes = null;
         var pVector3ReUse = operateRes.Scale;
         if ((pVector3ReUse != null) && (pVector3ReUse != undefined) && (pVector3ReUse.isvalid)) {
             pVector3ReRes = new Vector3(pVector3ReUse);
         }
         else {
             pVector3ReRes = null;
         }
         var dWhen = operateRes.When;
         return new GetWaypointParameter(pVector3Res, pAngleRes, pVector3ReRes, dWhen);
     };
     function GetWaypointParameter(pVector3Res, pAngleRes, pVector3ReRes, dWhen) {
         this.Position = pVector3Res;
         this.Angle = pAngleRes;
         this.Scale = pVector3ReRes;
         this.When = dWhen;
     }

    /**
    * ��ȡindexλ���ϵ�Waypoint
    */
     this.GetWaypoint2 = function (lIndex) {
         var operateRes = motionPath.GetWaypoint2(lIndex);
         var pVector3Res = null;
         var pVector3Use = operateRes.Position2;
         if ((pVector3Use != null) && (pVector3Use != undefined) && (pVector3Use.isvalid)) {
             pVector3Res = new Point(pVector3Use);
         }
         else {
             pVector3Res = null;
         }
         var pAngleRes = null;
         var pAngleResUse = operateRes.Angle;
         if ((pAngleResUse != null) && (pAngleResUse != undefined) && (pAngleResUse.isvalid)) {
             pAngleRes = new EulerAngle(pVector3Use);
         }
         else {
             pAngleRes = null;
         }
         var pVector3ReRes = null;
         var pVector3ReUse = operateRes.Scale;
         if ((pVector3ReUse != null) && (pVector3ReUse != undefined) && (pVector3ReUse.isvalid)) {
             pVector3ReRes = new Vector3(pVector3ReUse);
         }
         else {
             pVector3ReRes = null;
         }
         var dWhen = operateRes.When;
         return new GetWaypoint2Parameter(pVector3Res, pAngleRes, pVector3ReRes, dWhen);
     };
     function GetWaypoint2Parameter(pVector3Res, pAngleRes, pVector3ReRes, dWhen) {
         this.Position = pVector3Res;
         this.Angle = pAngleRes;
         this.Scale = pVector3ReRes;
         this.When = dWhen;
     }

    /**
    * ͨ�������ȡindexλ���ϵ�Waypoint
    * @param    {long}        lIndex
    * @return   {Matrix}      pIMatrix
    * @return   {double}      dTime 
    */
    this.GetWaypointByMatrix = function (lIndex) {
        var operateRes = motionPath.GetWaypointByMatrix(lIndex);
        var pMatrixRes = null;
        var pMatrixUse = operateRes.Matrix;
        if ((pMatrixUse != null) && (pMatrixUse != undefined) && (pMatrixUse.isvalid)) {
            pMatrixRes = new Matrix(pMatrixUse);
        }
        else {
            pMatrixRes = null;
        }
        var dWhen = operateRes.When;
        return new GetWaypointByMatrixParameter(pMatrixRes, dWhen);
    };
    function GetWaypointByMatrixParameter(pMatrixRes, dWhen) {
        this.Matrix = pMatrixRes;
        this.When = dWhen;
    }

    /**
    * ��indexλ�ò���Waypoint
    * @param   {long}        lIndex
    * @param   {Vector3}     pVectorPos
    * @param   {EulerAngle}  pEulerAngle
    * @param   {Vector3}     pVectorScale
    * @param   {double}      dTime 
    * @return  void
    */
    this.InsertWaypoint = function (lIndex, pVectorPos, pEulerAngle, pVectorScale, dTime) {
        var pVectorPosUse = null;
        if((pVectorPos != null)&&(pVectorPos != undefined)&&(pVectorPos.Valid())){
            pVectorPosUse = pVectorPos.getNpObject();
        }
        else{
            pVectorPosUse = pVectorPos;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        var pVectorScaleUse = null;
        if((pVectorScale != null)&&(pVectorScale != undefined)&&(pVectorScale.Valid())){
            pVectorScaleUse = pVectorScale.getNpObject();
        }
        else{
            pVectorScaleUse = pVectorScale;
        }
        motionPath.InsertWaypoint(lIndex, pVectorPosUse, pEulerAngleUse, pVectorScaleUse, dTime);
    };

    /**
    * ��indexλ�ò���Waypoint
    * @param   {long}        lIndex
    * @param   {Point}       pPoint
    * @param   {EulerAngle}  pEulerAngle
    * @param   {Vector3}     pVectorScale
    * @param   {double}      dTime 
    * @return  void
    */
    this.InsertWaypoint2 = function (lIndex, pPoint, pEulerAngle, pVectorScale, dTime) {
        var pPointUse = null;
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pPointUse = pPoint.getNpObject();
        }
        else{
            pPointUse = pPoint;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        var pVectorScaleUse = null;
        if((pVectorScale != null)&&(pVectorScale != undefined)&&(pVectorScale.Valid())){
            pVectorScaleUse = pVectorScale.getNpObject();
        }
        else{
            pVectorScaleUse = pVectorScale;
        }
        motionPath.InsertWaypoint2(lIndex, pPointUse, pEulerAngleUse, pVectorScaleUse, dTime);
    };

    /**
    * ��indexλ�ò���Waypoint
    * @param   {long}        lIndex
    * @param   {Matrix}      pMatrix
    * @param   {double}      dTime 
    * @return  void
    */
    this.InsertWaypointByMatrix = function (lIndex, pMatrix, dTime) {
        if((pMatrix != null)&&(pMatrix != undefined)&&(pMatrix.Valid())){
            motionPath.InsertWaypointByMatrix(lIndex, pMatrix.getNpObject(), dTime);
        }
        else{
            motionPath.InsertWaypointByMatrix(lIndex, pMatrix, dTime);
        }
    };

    /**
    * �޸�indexλ���ϵ�Waypoint
    * @param   {long}        lIndex
    * @param   {Vector3}     pVectorPos
    * @param   {EulerAngle}  pEulerAngle
    * @param   {Vector3}     pVectorScale
    * @param   {double}      dTime 
    * @return  void
    */
    this.ModifyWaypoint = function (lIndex, pVectorPos, pEulerAngle, pVectorScale, dTime) {
        var pVectorPosUse = null;
        if((pVectorPos != null)&&(pVectorPos != undefined)&&(pVectorPos.Valid())){
            pVectorPosUse = pVectorPos.getNpObject();
        }
        else{
            pVectorPosUse = pVectorPos;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        var pVectorScaleUse = null;
        if((pVectorScale != null)&&(pVectorScale != undefined)&&(pVectorScale.Valid())){
            pVectorScaleUse = pVectorScale.getNpObject();
        }
        else{
            pVectorScaleUse = pVectorScale;
        }
        motionPath.ModifyWaypoint(lIndex, pVectorPosUse, pEulerAngleUse, pVectorScaleUse, dTime);
    };

    /**
    * �޸�indexλ���ϵ�Waypoint
    * @param   {long}        lIndex
    * @param   {Point}       pPoint
    * @param   {EulerAngle}  pEulerAngle
    * @param   {Vector3}     pVectorScaleUse
    * @param   {double}      dTime 
    * @return  void
    */
    this.ModifyWaypoint2 = function (lIndex, pPoint, pEulerAngle, pVectorScale, dTime) {
        var pPointUse = null;
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pPointUse = pPoint.getNpObject();
        }
        else{
            pPointUse = pPoint;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        var pVectorScaleUse = null;
        if((pVectorScale != null)&&(pVectorScale != undefined)&&(pVectorScale.Valid())){
            pVectorScaleUse = pVectorScale.getNpObject();
        }
        else{
            pVectorScaleUse = pVectorScale;
        }
        motionPath.ModifyWaypoint2(lIndex, pPointUse, pEulerAngleUse, pVectorScaleUse, dTime);
    };

    /**
    * �޸�indexλ���ϵ�Waypoint
    * @param   {long}    lIndex
    * @param   {Matrix}  pMatrix
    * @param   {double}  dTime 
    * @return  void
    */
    this.ModifyWaypointByMatrix = function (lIndex, pMatrix, dTime) {
        if((pMatrix != null)&&(pMatrix != undefined)&&(pMatrix.Valid())) {
            motionPath.ModifyWaypointByMatrix(lIndex, pMatrix.getNpObject(), dTime);
        }
        else{
            motionPath.ModifyWaypointByMatrix(lIndex, pMatrix, dTime);
        }
    };
}/**
 * Created by Administrator on 2016-6-22.
 */

export function ObjectEditor(pVal) {

    var objectEditor = null;
    if (pVal == null) {
        objectEditor = plugin.ObjectEditor;
    }
    else
        objectEditor = pVal;

    this.getNpObject = function () {
        return objectEditor;
    };

    this.Valid = function () {
        return objectEditor.isvalid;
    };

    /**
    * ��ȡ�Ƿ��ڼ�������༭״̬
    */
    this.getIsEditing = function(){
        return objectEditor.IsEditing;
    };

    /**
     * ������������༭״̬
     */
    this.StartEditFeatureGeometry = function (pRow, pFeatureLayer, enumGeometryEditType) {
        var pRowUse = null;
        if((pRow != null)&&(pRow != undefined)&&(pRow.Valid())) {
            pRowUse = pRow.getNpObject();
        }
        else{
            pRowUse = pRow;
        }
        var pFeatureLayerUse = null;
        if((pFeatureLayer != null)&&(pFeatureLayer != undefined)&&(pFeatureLayer.Valid())) {
            pFeatureLayerUse = pFeatureLayer.getNpObject();
        }
        else{
            pFeatureLayerUse = pFeatureLayer;
        }
        return objectEditor.StartEditFeatureGeometry(pRowUse, pFeatureLayerUse, enumGeometryEditType);
    };

    /**
    * ����������Ⱦ����༭״̬
    */
    this.StartEditRenderGeometry = function (pRenderGeometry, enumGeometryEditType) {
        if((pRenderGeometry != null)&&(pRenderGeometry != undefined)&&(pRenderGeometry.Valid())) {
            return objectEditor.StartEditRenderGeometry(pRenderGeometry.getNpObject(), enumGeometryEditType);
        }
        else{
            return objectEditor.StartEditRenderGeometry(pRenderGeometry, enumGeometryEditType);
        }
    };

    /**
    * ȡ����������༭״̬
    */
    this.CancelEdit = function () {
        objectEditor.CancelEdit();
    };

    /**
    * ������������༭״̬
    */
    this.FinishEdit = function () {
        objectEditor.FinishEdit();
    };

    /**
    * ƽ�ơ����ڴӿ������ͨ���������ֽ��м�������༭
    */
    this.Move = function (pVec) {
        if((pVec != null)&&(pVec != undefined)&&(pVec.Valid())) {
            objectEditor.Move(pVec.getNpObject());
        }
        else{
            objectEditor.Move(pVec);
        }
    };

    /**
    * ��ת�����ڴӿ������ͨ���������ֽ��м�������༭
    */
    this.Rotate = function (pVec1, pVec2, dVal) {
        var pVec1Use = null;
        if((pVec1 != null)&&(pVec1 != undefined)&&(pVec1.Valid())){
            pVec1Use = pVec1.getNpObject();
        }
        else{
            pVec1Use = pVec1;
        }
        var pVec2Use = null;
        if((pVec2 != null)&&(pVec2 != undefined)&&(pVec2.Valid())){
            pVec2Use = pVec2.getNpObject();
        }
        else{
            pVec2Use = pVec2;
        }
        objectEditor.Rotate(pVec1Use, pVec2Use, dVal);
    };

    /**
    * ���š����ڴӿ������ͨ���������ֽ��м�������༭
    */
    this.Scale = function (pVec1, pVec2) {
        var pVec1Use = null;
        if((pVec1 != null)&&(pVec1 != undefined)&&(pVec1.Valid())){
            pVec1Use = pVec1.getNpObject();
        }
        else{
            pVec1Use = pVec1;
        }
        var pVec2Use = null;
        if((pVec2 != null)&&(pVec2 != undefined)&&(pVec2.Valid())){
            pVec2Use = pVec2.getNpObject();
        }
        else{
            pVec2Use = pVec2;
        }
        objectEditor.Scale(pVec1Use, pVec2Use);
    }
}
/**
 * Created by Jimmy on 2016-6-22.
 * ��������ӿ�
 */

export function ObjectManager(pVal) {

    var objectManager = null;
    if (pVal == null) {
        objectManager = plugin.ObjectManager;
    }
    else{
		objectManager = pVal;
	}

    this.getNpObject = function () {
        return objectManager;
    };

    this.Valid = function () {
        return objectManager.isvalid;
    };

    /**
     * ͨ��GUID��ȡRObject����
     * @return {RenderObject}
     */
    this.GetObjectById = function(gID){
        var obj = objectManager.GetObjectById(gID);
        if ((obj != null)&&(obj != undefined)&&(obj.isvalid)) {
            var objType = obj.ObjectType;
            switch(objType){
                case VRStarObjectType.VRStarObjectUnknow:
                    return new RenderObject(obj);
                case VRStarObjectType.VRStarObjectCameraTour:
                    return new CameraTour(obj);
                case VRStarObjectType.VRStarObjectMotionPath:
                    return new MotionPath(obj);
                case VRStarObjectType.VRStarObjectReferencePlane:
                    return new ReferencePlane(obj);
                case VRStarObjectType.VRStarObject3DTileHole:
                    return new I3DTileHole(obj);
                case VRStarObjectType.VRStarObject3DTileLayer:
                    return new I3DTileLayer(obj);
                case VRStarObjectType.VRStarObjectFeatureLayer:
                    return new FeatureLayer(obj);
                case VRStarObjectType.VRStarObjectImageryLayer:
                    return new ImageryLayer(obj);
                case VRStarObjectType.VRStarObjectLabel:
                    return new Label(obj);
                case VRStarObjectType.VRStarObjectParticleEffect:
                    return new ParticleEffect(obj);
                case VRStarObjectType.VRStarObjectRenderModelPoint:
                    return new RenderModelPoint(obj);
                case VRStarObjectType.VRStarObjectRenderPointCollection:
                    return new RenderPointCollection(obj);
                case VRStarObjectType.VRStarObjectRenderMultiPoint:
                    return new RenderMultiPoint(obj);
                case VRStarObjectType.VRStarObjectRenderMultiPolyline:
                    return new RenderMultiPolyline(obj);
                case VRStarObjectType.VRStarObjectRenderMultiPolygon:
                    return new RenderMultiPolygon(obj);
                case VRStarObjectType.VRStarObjectRenderPoint:
                    return new RenderPoint(obj);
                case VRStarObjectType.VRStarObjectRenderPolyline:
                    return new RenderPolyline(obj);
                case VRStarObjectType.VRStarObjectRenderPolygon:
                    return new RenderPolygon(obj);
                case VRStarObjectType.VRStarObjectRenderTriMesh:
                    return new RenderTriMesh(obj);
                case VRStarObjectType.VRStarObjectSkinnedMesh:
                    return new SkinnedMesh(obj);
                case VRStarObjectType.VRStarObjectTableLabel:
                    return new TableLabel(obj);
                case VRStarObjectType.VRStarObjectTerrainHole:
                    return new TerrainHole(obj);
                case VRStarObjectType.VRStarObjectSkyBox:
                    return new SkyBox(obj);
                case VRStarObjectType.VRStarObjectTerrain:
                    return new Terrain(obj);
                case VRStarObjectType.VRStarObjectTerrainRoute:
                    return new TerrainRoute(obj);
                default:
                    return;
            }
        }
        else{
            return null;
        }
    };

    /**
     * ͨ��GUIDɾ��RObject����
     */
    this.DeleteObject = function(gID){
        return objectManager.DeleteObject(gID);
    };

    /**
     * ��ȡ�ο�ˮƽ��
     * @return {ReferencePlane}
     */
    this.GetReferencePlane = function(){
        var pVal = objectManager.GetReferencePlane();
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new ReferencePlane(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ��պж���
     * @return {SkyBox}
     */
    this.GetSkyBox = function (iViewIndex) {
        var pVal = objectManager.GetSkyBox(iViewIndex);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new SkyBox(pVal);
        }
        else{
            return null;
        }
    };
	
	/**
     * ���ڴ���������ͼ
     * @param {string} sName
     * @return {Image}
     */
    this.AddImage = function (sName,pImage) {
        if((pImage != null)&&(pImage != undefined)&&(pImage.Valid())){
            objectManager.AddImage(sName,pImage.getNpObject());
        }
        else {
            objectManager.AddImage(sName,pImage);
        }
    };

    /**
     * ���ڴ�������ģ��
     * @param {string} sName
     * @return {Model}
     */
    this.AddModel = function (sName,pModel) {
        if((pModel != null)&&(pModel != undefined)&&(pModel.Valid())){
            objectManager.AddModel(sName,pModel.getNpObject());
        }
        else{
            objectManager.AddModel(sName,pModel);
        }
    };

    /**
     * ɾ���ڴ��е�ָ����ͼ
     * @param {string} sName
     */
    this.DeleteImage = function (sName) {
        objectManager.DeleteImage(sName);
    };

    /**
     * ɾ���ڴ��е�ָ��ģ��
     * @param {string} sName
     */
    this.DeleteModel = function (sName) {
        objectManager.DeleteModel(sName);
    };

    /**
     * ��ȡʸ��ͼ�����
     * @return {FeatureLayer}
     */
    this.GetFeatureLayer = function(gFeatureLayer){
        var pVal = objectManager.GetFeatureLayer(gFeatureLayer);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new FeatureLayer(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * ����Ҫ�����ĳһָ���ռ��д���ָ�����Ŀ��ӻ�ʸ��ͼ��
     * pFeatureClass ͼ���Ӧ��Ҫ���ࡣ  
     * strGeoName �ռ������ƣ�����FDB��FeatureClass֧�ֶ�ռ��У����Դ���FeatureLayer��ʱ�������ȷָ���ռ��С�  
     * pTextRender ������Ⱦ����  
     * pGeometryRender ������Ⱦ����
	 * groupID 
     * @return {FeatureLayer}
     */
	this.CreateFeatureLayer = function (pFeatureClass, strGeoName, pTextRender, pGeometryRender) {
        var pFeatureClassUse = null;
        if((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())){
            pFeatureClassUse = pFeatureClass.getNpObject();
        }
        else{
            pFeatureClassUse = pFeatureClass;
        }
        var pTextRenderUse = null;
        if((pTextRender != null)&&(pTextRender != undefined)&&(pTextRender.Valid())){
            pTextRenderUse = pTextRender.getNpObject();
        }
        else{
            pTextRenderUse = pTextRender;
        }
        var pGeometryRenderUse = null;
        if((pGeometryRender != null)&&(pGeometryRender != undefined)&&(pGeometryRender.Valid())){
            pGeometryRenderUse = pGeometryRender.getNpObject();
        }
        else{
            pGeometryRenderUse = pGeometryRender;
        }
        var pVal = objectManager.CreateFeatureLayer(pFeatureClassUse, strGeoName, pTextRenderUse, pGeometryRenderUse);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new FeatureLayer(pVal);
        }
        else{
            return null;
        }
    };
	
    this.CreateFeatureLayer2 = function (pFeatureClass, strGeoName, pTextRender, pGeometryRender, groupID) {
        var pFeatureClassUse = null;
        if((pFeatureClass != null)&&(pFeatureClass != undefined)&&(pFeatureClass.Valid())){
            pFeatureClassUse = pFeatureClass.getNpObject();
        }
        else{
            pFeatureClassUse = pFeatureClass;
        }
        var pTextRenderUse = null;
        if((pTextRender != null)&&(pTextRender != undefined)&&(pTextRender.Valid())){
            pTextRenderUse = pTextRender.getNpObject();
        }
        else{
            pTextRenderUse = pTextRender;
        }
        var pGeometryRenderUse = null;
        if((pGeometryRender != null)&&(pGeometryRender != undefined)&&(pGeometryRender.Valid())){
            pGeometryRenderUse = pGeometryRender.getNpObject();
        }
        else{
            pGeometryRenderUse = pGeometryRender;
        }
        var pVal = objectManager.CreateFeatureLayer2(pFeatureClassUse, strGeoName, pTextRenderUse, pGeometryRenderUse, groupID);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new FeatureLayer(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * ����Ӱ��ͼ��
	 * groupID 
     * @return {ImageryLayer}
     */
	this.CreateImageryLayer = function(strConnection){
        var pVal = objectManager.CreateImageryLayer(strConnection);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new ImageryLayer(pVal);
        }
        else{
            return null;
        }
    };
    this.CreateImageryLayer2 = function(strConnection, groupID){
        var pVal = objectManager.CreateImageryLayer2(strConnection, groupID);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new ImageryLayer(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * ����������Ⱦ����
	 * groupID ������Ⱦ����
     * @return {RenderGeometry}
     */
	this.CreateRenderGeometry = function (pGeometry, pGeometrySymbol) {
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())){
            var pGeometryUse = pGeometry.getNpObject();
            if((pGeometrySymbol != null)&&(pGeometrySymbol != undefined)&&(pGeometrySymbol.Valid())){
                var pGeometrySymbolUse = pGeometrySymbol.getNpObject();
                var pVal = objectManager.CreateRenderGeometry(pGeometryUse, pGeometrySymbolUse);
                if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
                    var enumGeometryType = pGeometry.getGeometryType();
                    switch (enumGeometryType) {
                        case VRStarGeometryType.VRStarGeometryUnknow:
                            return new RenderGeometry(pVal);
                        case VRStarGeometryType.VRStarGeometryModelPoint:
                            return new RenderModelPoint(pVal);
                        case VRStarGeometryType.VRStarGeometryPoint:
                            return new RenderPoint(pVal);
                        case VRStarGeometryType.VRStarGeometryPolyline:
                            return new RenderPolyline(pVal);
                        case VRStarGeometryType.VRStarGeometryPolygon:
                            return new RenderPolygon(pVal);
                        case VRStarGeometryType.VRStarGeometryMultiPoint:
                            return new RenderMultiPoint(pVal);
                        case VRStarGeometryType.VRStarGeometryMultiPolyline:
                            return new RenderMultiPolyline(pVal);
                        case VRStarGeometryType.VRStarGeometryMultiPolygon:
                            return new RenderMultiPolygon(pVal);
                        default:
                            return null;
                    }
                }
            }
        }
        else{
            return null;
        }
    };
	
    this.CreateRenderGeometry2 = function (pGeometry, pGeometrySymbol, groupID) {
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())){
            var pGeometryUse = pGeometry.getNpObject();
            if((pGeometrySymbol != null)&&(pGeometrySymbol != undefined)&&(pGeometrySymbol.Valid())){
                var pGeometrySymbolUse = pGeometrySymbol.getNpObject();
                var pVal = objectManager.CreateRenderGeometry2(pGeometryUse, pGeometrySymbolUse, groupID);
                if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
                    var enumGeometryType = pGeometry.getGeometryType();
                    switch (enumGeometryType) {
                        case VRStarGeometryType.VRStarGeometryUnknow:
                            return new RenderGeometry(pVal);
                        case VRStarGeometryType.VRStarGeometryModelPoint:
                            return new RenderModelPoint(pVal);
                        case VRStarGeometryType.VRStarGeometryPoint:
                            return new RenderPoint(pVal);
                        case VRStarGeometryType.VRStarGeometryPolyline:
                            return new RenderPolyline(pVal);
                        case VRStarGeometryType.VRStarGeometryPolygon:
                            return new RenderPolygon(pVal);
                        case VRStarGeometryType.VRStarGeometryMultiPoint:
                            return new RenderMultiPoint(pVal);
                        case VRStarGeometryType.VRStarGeometryMultiPolyline:
                            return new RenderMultiPolyline(pVal);
                        case VRStarGeometryType.VRStarGeometryMultiPolygon:
                            return new RenderMultiPolygon(pVal);
                        default:
                            return null;
                    }
                }
            }
        }
        else{
            return null;
        }
    };

    /**
     * ͨ���������ݴ�����������
	 * groupID
     * @return {CameraTour}
     */
	this.CreateCameraTour = function(){
        var pVal = objectManager.CreateCameraTour();
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new CameraTour(pVal);
        }
        else{
            return null;
        }
    };
    this.CreateCameraTour2 = function(groupID){
        var pVal = objectManager.CreateCameraTour2(groupID);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new CameraTour(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * ������ǩ����
	 * groupID
     * @return {Label}
     */
	this.CreateLabel = function(){
        var pVal = objectManager.CreateLabel();
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new Label(pVal);
        }
        else{
            return null;
        }
    };
    this.CreateLabel2 = function(groupID){
        var pVal = objectManager.CreateLabel2(groupID);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new Label(pVal);
        }
        else{
            return null;
        }
    };

    /**
    * �����˶�·��
	* groupID
    * @return {DynamicObject}
    */
	this.CreateDynamicObject = function () {
        var pVal = objectManager.CreateDynamicObject();
        if ((pVal != null) && (pVal != undefined) && (pVal.isvalid)) {
            return new DynamicObject(pVal);
        }
        else {
            return null;
        }
    };
    this.CreateDynamicObject2 = function (groupID) {
        var pVal = objectManager.CreateDynamicObject2(groupID);
        if ((pVal != null) && (pVal != undefined) && (pVal.isvalid)) {
            return new DynamicObject(pVal);
        }
        else {
            return null;
        }
    };

    /**
     * �����˶�·��
	 * groupID
     * @return {MotionPath}
     */
	this.CreateMotionPath = function(){
        var pVal = objectManager.CreateMotionPath();
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new MotionPath(pVal);
        }
        else{
            return null;
        }
    };
    this.CreateMotionPath2 = function(groupID){
        var pVal = objectManager.CreateMotionPath2(groupID);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new MotionPath(pVal);
        }
        else{
            return null;
        }
    };

    /**
    * ���������ǩ
	* groupID
    * @return {OverlayLabel}
    */
	this.CreateOverlayLabel = function () {
        var pVal = objectManager.CreateOverlayLabel();
        if ((pVal != null) && (pVal != undefined) && (pVal.isvalid)) {
            return new OverlayLabel(pVal);
        }
        else {
            return null;
        }
    };
    this.CreateOverlayLabel2 = function (groupID) {
        var pVal = objectManager.CreateOverlayLabel2(groupID);
        if ((pVal != null) && (pVal != undefined) && (pVal.isvalid)) {
            return new OverlayLabel(pVal);
        }
        else {
            return null;
        }
    };

    /**
     * ����������Ч
	 * groupID
     * @return {ParticleEffect}
     */
	this.CreateParticleEffect = function(){
        var pVal = objectManager.CreateParticleEffect();
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new ParticleEffect(pVal);
        }
        else{
            return null;
        }
    };
    this.CreateParticleEffect2 = function(groupID){
        var pVal = objectManager.CreateParticleEffect2(groupID);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new ParticleEffect(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * ͨ��FDB���ݴ���������Ч
	 * groupID
     * @return {ParticleEffect}
     */
	this.CreateParticleEffectFromFDB = function(pDataSet){
        var pVal = null;
        if((pDataSet != null)&&(pDataSet != undefined)&&(pDataSet.Valid())) {
            pVal = objectManager.CreateParticleEffectFromFDB(pDataSet.getNpObject());
        }
        else{
            pVal = objectManager.CreateParticleEffectFromFDB(pDataSet);
        }
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new ParticleEffect(pVal);
        }
        else{
            return null;
        }
    };
    this.CreateParticleEffectFromFDB2 = function(pDataSet, groupID){
        var pVal = null;
        if((pDataSet != null)&&(pDataSet != undefined)&&(pDataSet.Valid())) {
            pVal = objectManager.CreateParticleEffectFromFDB2(pDataSet.getNpObject(), groupID);
        }
        else{
            pVal = objectManager.CreateParticleEffectFromFDB2(pDataSet, groupID);
        }
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new ParticleEffect(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * ����������������
     * @return {SkinnedMesh}
     */
	this.CreateSkinnedMesh = function(modelPoint){
		var pModelPoint = null;
        if((modelPoint != null)&&(modelPoint != undefined)&&(modelPoint.Valid())){
            pModelPoint = modelPoint.getNpObject();
        }
        else{
            pModelPoint = modelPoint;
        }
        var pVal = objectManager.CreateSkinnedMesh(pModelPoint);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new SkinnedMesh(pVal);
        }
        else{
            return null;
        }
    };
    this.CreateSkinnedMesh2 = function(modelPoint, groupID){
		var pModelPoint = null;
        if((modelPoint != null)&&(modelPoint != undefined)&&(modelPoint.Valid())){
            pModelPoint = modelPoint.getNpObject();
        }
        else{
            pModelPoint = modelPoint;
        }
        var pVal = objectManager.CreateSkinnedMesh2(pModelPoint, groupID);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new SkinnedMesh(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * ���������ǩ����
     * @return {TableLabel}
     */
	this.CreateTableLabel = function(iRowCount, iColumnCount){
        var pVal = objectManager.CreateTableLabel(iRowCount, iColumnCount);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new TableLabel(pVal);
        }
        else{
            return null;
        }
    };
    this.CreateTableLabel2 = function(iRowCount, iColumnCount, groupID){
        var pVal = objectManager.CreateTableLabel2(iRowCount, iColumnCount, groupID);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new TableLabel(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * ���������ڶ�
     * @return {TerrainHole}
     */
	this.CreateTerrainHole = function(pPolygon){
		var pArea = null;
        if((pPolygon != null)&&(pPolygon != undefined)&&(pPolygon.Valid())){
            pArea = pPolygon.getNpObject();
        }
        else{
            pArea = pPolygon;
        }
        var pVal = objectManager.CreateTerrainHole(pArea);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new TerrainHole(pVal);
        }
        else{
            return null;
        }
    };
    this.CreateTerrainHole2 = function(pPolygon, groupID){
		var pArea = null;
        if((pPolygon != null)&&(pPolygon != undefined)&&(pPolygon.Valid())){
            pArea = pPolygon.getNpObject();
        }
        else{
            pArea = pPolygon;
        }
        var pVal = objectManager.CreateTerrainHole2(pArea, groupID);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new TerrainHole(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * ͨ���������ݴ���ģ��
     */
	this.CreateTerrainRoute = function(){
        var pVal = objectManager.CreateTerrainRoute();
        if (pVal != null) {
            return new TerrainRoute(pVal);
        }
    };
    this.CreateTerrainRoute2 = function(groupID){
        var pVal = objectManager.CreateTerrainRoute2(groupID);
        if (pVal != null) {
            return new TerrainRoute(pVal);
        }
    };

    /**
     * ������Ƭͼ��
     * @return {I3DTileLayer}
     */
	this.Create3DTileLayer = function(strConnection, strPWD){
        var pVal = objectManager.Create3DTileLayer(strConnection, strPWD);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new I3DTileLayer(pVal);
        }
        else{
            return null;
        }
    };
    this.Create3DTileLayer2 = function(strConnection, strPWD, groupID){
        var pVal = objectManager.Create3DTileLayer2(strConnection, strPWD, groupID);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new I3DTileLayer(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * ���ó�ʼ��դ������Դ�ĶԻ���
     */
    this.OpenRasterSourceDialog = function(tDataSourceType){
        return objectManager.OpenRasterSourceDialog(tDataSourceType);
    };

    /**
     * ������Ƭ�ڶ�
     * @return {I3DTileHole}
     */
	this.Create3DTileHole = function(pPolygon){
		var pArea = null;
        if((pPolygon != null)&&(pPolygon != undefined)&&(pPolygon.Valid())){
            pArea = pPolygon.getNpObject();
        }
        else{
            pArea = pPolygon;
        }
        var pVal = objectManager.Create3DTileHole(pArea);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new I3DTileHole(pVal);
        }
        else{
            return null;
        }
    };
    this.Create3DTileHole2 = function(pPolygon, groupID){
		var pArea = null;
        if((pPolygon != null)&&(pPolygon != undefined)&&(pPolygon.Valid())){
            pArea = pPolygon.getNpObject();
        }
        else{
            pArea = pPolygon;
        }
        var pVal = objectManager.Create3DTileHole2(pArea, groupID);
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new I3DTileHole(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * �ӳ�ɾ������
     * @param {GUID} gID
     * @param {int} iDelayTime
     * @return {boolean}
     */
    this.DelayDelete = function(gID, iDelayTime){
        return objectManager.DelayDelete(gID, iDelayTime);
    }
}
/**
* Created by Jimmy on 2017-08-12.
* �����ǩ
*/

export function OverlayLabel(pOverlayLabel) {
    Renderable.call(this, pOverlayLabel);

    this.getNpObject = function () {
        return pOverlayLabel;
    };
	
    this.Valid = function () {
        return pOverlayLabel.isvalid;
    };
	
	/**
    *  ��ȡ�����ý����ǩ��ʾ���ı����� 
    */
    this.getText = function () {
        return pOverlayLabel.Text;
    };
    this.setText = function (sVal) {
        pOverlayLabel.Text = sVal;
    };
	
	/**
    *  ��ȡ�����ý����ǩ�ı���������ʽ
    */
    this.getTextStyle = function () {
        var pTextAttribute = pOverlayLabel.TextStyle;
		if((pTextAttribute != null)&&(pTextAttribute != undefined)&&(pTextAttribute.isvalid)){
			return new TextAttribute(pTextAttribute);		
		}else{
			return null;
		}
    };
    this.setTextStyle = function (pTextAttribute) {
		if((pTextAttribute != null)&&(pTextAttribute != undefined)&&(pTextAttribute.Valid())){
			pOverlayLabel.TextStyle = pTextAttribute.getNpObject();		
		}else{
			pOverlayLabel.TextStyle = pTextAttribute;
		}
    };
	
	/**
    *  ��ȡ�����ý����ǩ�ı��Ķ��뷽ʽ
    */
    this.getAlignment = function () {
        return pOverlayLabel.Alignment;
    };
    this.setAlignment = function (enumPivotAlignType) {
        pOverlayLabel.Alignment = enumPivotAlignType;
    };
	
	/**
    *   ��ȡ�����ý����ǩ����ͼƬ�򱳾���Ƶ��·�� 
    */
    this.getImageName = function () {
        return pOverlayLabel.ImageName;
    };
    this.setImageName = function (sVal) {
        pOverlayLabel.ImageName = sVal;
    };
	
	/**
    *   ��ȡ�����ý����ǩ����ά�����е���ʱ����ת�Ƕȣ���λΪ�ȣ�ֵ��[0,360]��  
    */
    this.getRotation = function () {
        return pOverlayLabel.Rotation;
    };
    this.setRotation = function (fVal) {
        pOverlayLabel.Rotation = fVal;
    };
	
	/**
    *  ��ȡ�����ý����ǩ�ķ���˳��ֵС����ʾ��ǰ�棬ֵ�����ʾ�ں��档��������ǩʱ������ 
    */
    this.getDepth = function () {
        return pOverlayLabel.Depth;
    };
    this.setDepth = function (fVal) {
        pOverlayLabel.Depth = fVal;
    };
	
	/**
    *  ���ý����ǩ���ĵ��x���꣨��λ���أ�
    */
    this.SetX = function (lOffset, fWindowWidthRatio, fWindowHeightRatio) {
        pOverlayLabel.SetX(lOffset, fWindowWidthRatio, fWindowHeightRatio);
    };
	
	/**
    * ���ý����ǩ���ĵ��y���꣨��λ���أ�
    */
    this.SetY = function (lOffset, fWindowWidthRatio, fWindowHeightRatio) {
        pOverlayLabel.SetY(lOffset, fWindowWidthRatio, fWindowHeightRatio);
    };
	
	/**
    * ���ý����ǩ�Ŀ��ȣ���λ���أ��� 
    */
    this.SetWidth = function (lOffset, fWindowWidthRatio, fWindowHeightRatio) {
        pOverlayLabel.SetWidth(lOffset, fWindowWidthRatio, fWindowHeightRatio);
    };
	
	/**
    * ���ý����ǩ�ĸ߶ȣ���λ���أ��� 
    */
    this.SetHeight = function (lOffset, fWindowWidthRatio, fWindowHeightRatio) {
        pOverlayLabel.SetHeight(lOffset, fWindowWidthRatio, fWindowHeightRatio);
    };
	
	/**
    * ��ȡ�����ǩ���ĵ��x����  
    */
    this.GetX = function () {
        return pOverlayLabel.GetX();
    };
	
	/**
    * ��ȡ�����ǩ���ĵ��y���꣨��λ���أ��� 
    */
    this.GetY = function () {
        return pOverlayLabel.GetY();
    };
	
	/**
    * ��ȡ�����ǩ�Ŀ��ȣ���λ���أ��� 
    */
    this.GetWidth = function () {
        return pOverlayLabel.GetWidth();
    };
	
	/**
    *  ��ȡ�����ǩ�Ŀ��ȣ���λ���أ���   
    */
    this.GetHeight = function () {
        return pOverlayLabel.GetHeight();
    };
    
    //���ý����ǩλ��(�������ά�������Ͻ�)
    this.SetLTWH = function (left, top, width, height) {
       var w = width;
       var h = height;
       if(width<=1.0 && height<=1.0) //�ٷֱ�
        {
	    w = plugin.Width*width;
	    h = plugin.Height*height;
	}
	//�̶�����
	pOverlayLabel.SetX(left+0.5*w,0,0);
	pOverlayLabel.SetY(-(top+0.5*h),0,1);
	pOverlayLabel.SetWidth(w,0,0);
	pOverlayLabel.SetHeight(h,0,0);
    };
    
    this.SetRBWH = function (right, bottom, width, height) {
       var w = width;
       var h = height;
       if(width<=1.0 && height<=1.0) //�ٷֱ�
        {
	    w = plugin.Width*width;
	    h = plugin.Height*height;
	}
	//�̶�����
	pOverlayLabel.SetX(-0.5*w,1,0);
	pOverlayLabel.SetY(0.5*h,0,0);
	pOverlayLabel.SetWidth(w,0,0);
	pOverlayLabel.SetHeight(h,0,0);
    };
}/**
* Created by Jimmy on 2017-08-12.
* �����ǩ
*/

export function OverlayUILabel(pOverlayLabel) {
    Renderable.call(this, pOverlayLabel);

    this.getNpObject = function () {
        return pOverlayLabel;
    };
	
    this.Valid = function () {
        return pOverlayLabel.isvalid;
    };
	
	/**
    *  ��ȡ�������Ƿ����
    */
    this.getIsEnable = function () {
        return pOverlayLabel.IsEnable;
    };
    this.setIsEnable = function (bVal) {
        pOverlayLabel.IsEnable = bVal;
    };
	
	/**
    *  ��ȡ��������άλ��
    */
    this.getWorldPosition = function () {
		var pWorldPosition = pOverlayLabel.WorldPosition;
		if((pWorldPosition != null)&&(pWorldPosition != undefined)&&(pWorldPosition.isvalid)){
			return new Point(pWorldPosition);		
		}else{
			return null;
		}

    };
	 this.setWorldPosition = function (pVal) {
		var pValUse =null;
		if((pVal != null)&&(pVal != undefined)&&(pVal.Valid())){
			pValUse = pVal.getNpObject();
		}else{
			pValUse = pVal;
		}
        pOverlayLabel.WorldPosition = pValUse;
    };
	
	/**
    *  ��ȡ����
    */
	 this.GetCanvas = function () {
		var pVal = pOverlayLabel.GetCanvas();
		if((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)){
			return new UIWindow(pVal);
		}else{
			return null;
		}
    };
	/**
    *  ����ê��
    */
	this.SetAnchor = function (uiLeft,uiRight) {
		var uiLeftUse = null;
        if ((uiLeft != null)&&(uiLeft != undefined)&&(uiLeft.Valid())) {
            uiLeftUse = uiLeft.getNpObject();
        }
        else{
            uiLeftUse = uiLeft;
        }
		
		var uiRightUse = null;
        if ((uiRight != null)&&(uiRight != undefined)&&(uiRight.Valid())) {
            uiRightUse = uiRight.getNpObject();
        }
        else{
            uiRightUse = uiRight;
        }
		pOverlayLabel.SetAnchor(uiLeftUse,uiRightUse);              	
    };
}/**
* Created by Administrator on 2018-5-25.
* 
*/

export function Panorama(pVal) {
    var panorama = null;
    if (pVal == null) {
        panorama = plugin.Panorama;
    }
    else
        panorama = pVal;

    RenderObject.call(this, panorama);

    this.Valid = function () {
        return panorama.isvalid;
    };

    /**
    * ���������ȡ������ȫ���Ƿ�ɼ���Ĭ��ֵΪtrue
    */
    this.getVisibleMask = function () {
        return panorama.VisibleMask;
    };
    this.setVisibleMask = function (enumViewportMask) {
        panorama.VisibleMask = enumViewportMask;
    };

    /**
    * �ж�ȫ���Ƿ���ע��
    */
    this.getIsRegistered = function () {
        return panorama.IsRegistered;
    };


    /**
    * ��ȡ��ע��ȫ������Դ��WKT�ַ�����δע�᷵�ؿ��ַ���
    */
    this.GetWKT = function () {
        return panorama.GetWKT();
    };

	
	/**
    * ��ȡ������Ϣ
    */
    this.getConnectInfo = function () {
        return panorama.ConnectInfo();
    };


    /**
    * ע��ȫ������Դ
    */
    this.Register = function (bstrLayerInfo, strPassword) {
        return panorama.Register(bstrLayerInfo, strPassword);
    };

    /**
    * ע��ȫ������Դ
    */
    this.Unregister = function () {
        return panorama.Unregister();
    };


    /**
    * �ɵ����ȫ����
    */
    this.FlyTo = function (pPosition) {
		if((pPosition != null)&&(pPosition != undefined)&&(pPosition.Valid())) {
          return  panorama.FlyTo(pPosition.getNpObject());
		}
    };

	    /**
     * ��ȡȫ����λ��
     */
    this.getPosition = function(){
		 var pPoint  = panorama.Position;
        if ((pPoint != null)&&(pPoint != undefined)&&(pPoint.isvalid)) {
            return new Point(pPoint);
        }
        else{
            return null;
        }
      
    };
	
}

/**
* Created by Jimmy on 2016-7-15.
* ������Ч
*/

export function ParticleEffect(pVal) {
    Renderable.call(this, pVal);
    var particleEffect = pVal;

    this.Valid = function () {
        return particleEffect.isvalid;
    };

    /**
     * ��ȡ������������Ч����
     */
    this.getDamping = function(){
        return particleEffect.Damping;
    };
    this.setDamping = function(dVal){
        particleEffect.Damping = dVal;
    };

    /**
     * ��ȡ���������ӷ��䷽���ŷ����
     */
    this.getEmissionDirectionEulerAngle = function(){
        var pEulerAngle = particleEffect.Damping;
        if ((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.isvalid)) {
            return new EulerAngle(pEulerAngle);
        }
        else{
            return null;
        }
    };
    this.setEmissionDirectionEulerAngle = function(pEulerAngle){
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())) {
            particleEffect.EmissionDirectionEulerAngle = pEulerAngle.getNpObject();
        }
        else{
            particleEffect.EmissionDirectionEulerAngle = pEulerAngle
        }
    };

    /**
     * ��ȡ���������ӷ����������н�
     */
    this.getEmissionMaxAngle = function(){
        return particleEffect.EmissionMaxAngle;
    };
    this.setEmissionMaxAngle = function(dVal){
        particleEffect.EmissionMaxAngle = dVal;
    };

    /**
     * ��ȡ���������ӷ���������С�н�
     */
    this.getEmissionMinAngle = function(){
        return particleEffect.EmissionMinAngle;
    };
    this.setEmissionMinAngle = function(dVal){
        particleEffect.EmissionMinAngle = dVal;
    };

    /**
     * ��ȡ���������ӳ���ʱ�����ߴ�
     */
    this.getEmissionMaxParticleSize = function(){
        return particleEffect.EmissionMaxParticleSize;
    };
    this.setEmissionMaxParticleSize = function(dVal){
        particleEffect.EmissionMaxParticleSize = dVal;
    };

    /**
     * ��ȡ���������ӳ���ʱ����С�ߴ�
     */
    this.getEmissionMinParticleSize = function(){
        return particleEffect.EmissionMinParticleSize;
    };
    this.setEmissionMinParticleSize = function(dVal){
        particleEffect.EmissionMinParticleSize = dVal;
    };

    /**
     * ��ȡ����������·��
     */
    this.getImageName = function(){
        return particleEffect.ImageName;
    };
    this.setImageName = function(sVal){
        particleEffect.ImageName = sVal;
    };

    /**
     * ��ȡ����������Billboard�Ŀ��߱�
     */
    this.getParticleAspectRatio = function(){
        return particleEffect.ParticleAspectRatio;
    };
    this.setParticleAspectRatio = function(dVal){
        particleEffect.ParticleAspectRatio = dVal;
    };

    /**
     * ��ȡ������Billboard����
     */
    this.getParticleBillboardType = function(){
        return particleEffect.ParticleBillboardType;
    };
    this.setParticleBillboardType = function(enumParticleBillboardType){
        particleEffect.ParticleBillboardType = enumParticleBillboardType;
    };

    /**
     * ��ȡ���������ӳ�����ɫ
     */
    this.getParticleBirthColor = function(){
        return particleEffect.ParticleBirthColor;
    };
    this.setParticleBirthColor = function(color){
        particleEffect.ParticleBirthColor = color;
    };

    /**
     * ��ȡ����������������ɫ
     */
    this.getParticleDeathColor = function(){
        return particleEffect.ParticleDeathColor;
    };
    this.setParticleDeathColor = function(color){
        particleEffect.ParticleDeathColor = color;
    };

    /**
     * ��ȡ�����������������ʱ��
     */
    this.getParticleMaxLifeTime = function(){
        return particleEffect.ParticleMaxLifeTime;
    };
    this.setParticleMaxLifeTime = function(dVal){
        particleEffect.ParticleMaxLifeTime = dVal;
    };

    /**
     * ��ȡ������������С����ʱ��
     */
    this.getParticleMinLifeTime = function(){
        return particleEffect.ParticleMinLifeTime;
    };
    this.setParticleMinLifeTime = function(dVal){
        particleEffect.ParticleMinLifeTime = dVal;
    };

    /**
     * ��ȡ�����÷���Zƽ���heading�Ƕȣ���
     */
    this.getWindDirection = function(){
        return particleEffect.WindDirection;
    };
    this.setWindDirection = function(dVal){
        particleEffect.WindDirection = dVal;
    };

    /**
     * ��ȡ�����÷���
     */
    this.getWindAcceleration = function(){
        return particleEffect.WindAcceleration;
    };
    this.setWindAcceleration = function(dVal){
        particleEffect.WindAcceleration = dVal;
    };

    /**
     * ��ȡ��������������ƶ��ٶ�
     */
    this.getEmissionMaxMoveSpeed = function(){
        return particleEffect.EmissionMaxMoveSpeed;
    };
    this.setEmissionMaxMoveSpeed = function(dVal){
        particleEffect.EmissionMaxMoveSpeed = dVal;
    };

    /**
     * ��ȡ������������С�ƶ��ٶ�
     */
    this.getEmissionMinMoveSpeed = function(){
        return particleEffect.EmissionMinMoveSpeed;
    };
    this.setEmissionMinMoveSpeed = function(dVal){
        particleEffect.EmissionMinMoveSpeed = dVal;
    };

    /**
     * ��ȡ�������������������
     */
    this.getEmissionMaxRate = function(){
        return particleEffect.EmissionMaxRate;
    };
    this.setEmissionMaxRate = function(dVal){
        particleEffect.EmissionMaxRate = dVal;
    };

    /**
     * ��ȡ������������С��������
     */
    this.getEmissionMinRate = function(){
        return particleEffect.EmissionMinRate;
    };
    this.setEmissionMinRate = function(dVal){
        particleEffect.EmissionMinRate = dVal;
    };

    /**
     * ��ȡ���������ӵ������ת�ٶ�
     */
    this.getEmissionMaxRotationSpeed = function(){
        return particleEffect.EmissionMaxRotationSpeed;
    };
    this.setEmissionMaxRotationSpeed = function(dVal){
        particleEffect.EmissionMaxRotationSpeed = dVal;
    };

    /**
     * ��ȡ���������ӵ���С��ת�ٶ�
     */
    this.getEmissionMinRotationSpeed = function(){
        return particleEffect.EmissionMinRotationSpeed;
    };
    this.setEmissionMinRotationSpeed = function(dVal){
        particleEffect.EmissionMinRotationSpeed = dVal;
    };

    /**
     * ��ȡ���������ӵ���������ٶ�
     */
    this.getEmissionMaxScaleSpeed = function(){
        return particleEffect.EmissionMaxScaleSpeed;
    };
    this.setEmissionMaxScaleSpeed = function(dVal){
        particleEffect.EmissionMaxScaleSpeed = dVal;
    };

    /**
     * ��ȡ���������ӵ���С�����ٶ�
     */
    this.getEmissionMinScaleSpeed = function(){
        return particleEffect.EmissionMinScaleSpeed;
    };
    this.setEmissionMinScaleSpeed = function(dVal){
        particleEffect.EmissionMinScaleSpeed = dVal;
    };

    /**
     * ��ȡ�����ô�ֱ���ٶ�
     */
    this.getVerticalAcceleration = function(){
        return particleEffect.VerticalAcceleration;
    };
    this.setVerticalAcceleration = function(dVal){
        particleEffect.VerticalAcceleration = dVal;
    };

    /**
     * ��ȡ����ϵͳ��λ��
     */
    this.getPosition = function(){
        var pPoint  = particleEffect.Position;
        if ((pPoint != null)&&(pPoint != undefined)&&(pPoint.isvalid)) {
            return new Point(pPoint);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�з�����
     */
    this.GetBoxEmitter = function(){
        var operateRes = particleEffect.GetBoxEmitter();
        if(operateRes != null){
            var pVector3Res = null;
            var pVector3Use = operateRes.Position;
            if ((pVector3Use != null) && (pVector3Use != undefined) && (pVector3Use.isvalid)) {
                pVector3Res = new Vector3(pVector3Use);
            }
            else {
                pVector3Res = null;
            }
            var dWidthUse = operateRes.Width;
            var dHeightUse = operateRes.Height;
            var dDepthUse = operateRes.Depth;
            return new GetBoxEmitterParameter(pVector3Res, dWidthUse, dHeightUse, dDepthUse);
        }
    };
    function GetBoxEmitterParameter(pVector3Res, dWidthUse, dHeightUse, dDepthUse) {
        this.Position = pVector3Res;
        this.Width = dWidthUse;
        this.Height = dHeightUse;
        this.Depth = dDepthUse;
    }


    /**
     * ���óɺз�����
     */
    this.SetBoxEmitter = function(pVectorPosition,dWidth,dHeight,dDepth){
        if((pVectorPosition != null)&&(pVectorPosition != undefined)&&(pVectorPosition.Valid())) {
            particleEffect.SetBoxEmitter(pVectorPosition.getNpObject(),dWidth,dHeight,dDepth);
        }
        else{
            particleEffect.SetBoxEmitter(pVectorPosition,dWidth,dHeight,dDepth);
        }
    };

    /**
     * ��ȡԲ������
     */
    this.GetCircleEmitter = function(){
        var operateRes = particleEffect.GetCircleEmitter();
        if(operateRes != null){
            var pVector3Res = null;
            var pVector3Use = operateRes.Position;
            if ((pVector3Use != null) && (pVector3Use != undefined) && (pVector3Use.isvalid)) {
                pVector3Res = new Vector3(pVector3Use);
            }
            else {
                pVector3Res = null;
            }
            var dRadiusUse = operateRes.Radius;
            return new GetCircleEmitterParameter(pVector3Res, dRadiusUse);
        }
    };
    function GetCircleEmitterParameter(pVector3Res, dRadiusUse) {
        this.Position = pVector3Res;
        this.Radius = dRadiusUse;
    }

    /**
     * ���ó�Բ������
     */
    this.SetCircleEmitter = function(pVectorPosition,dRadius){
        if((pVectorPosition != null)&&(pVectorPosition != undefined)&&(pVectorPosition.Valid())) {
            particleEffect.SetCircleEmitter(pVectorPosition.getNpObject(),dRadius);
        }
        else{
            particleEffect.SetCircleEmitter(pVectorPosition,dRadius);
        }
    };

    /**
     * ��ȡ�㷢����
     */
    this.GetPointEmitter = function(){
        var operateRes = particleEffect.GetPointEmitter();
            if ((operateRes != null) && (operateRes != undefined) && (operateRes.isvalid)) {
                return new Vector3(operateRes);
            }
            else {
                return null;
            }
    };

    /**
     * ���óɵ㷢����
     * @param pVectorPosition
     * @constructor
     */
    this.SetPointEmitter = function(pVectorPosition){
        if((pVectorPosition != null)&&(pVectorPosition != undefined)&&(pVectorPosition.Valid())) {
            particleEffect.SetPointEmitter(pVectorPosition.getNpObject());
        }
        else{
            particleEffect.SetPointEmitter(pVectorPosition);
        }
    };

    /**
     * ������������
     * @param nHTile
     * @param nVTile
     * @param nStartTile
     * @param nEndTile
     * @constructor
     */
    this.SetTextureTileRange = function(nHTile,nVTile,nStartTile,nEndTile){
        particleEffect.SetTextureTileRange(nHTile,nVTile,nStartTile,nEndTile);
    };

    /**
     * ��ʼ��������
     */
    this.Start = function(dDuration){
        return particleEffect.Start(dDuration);
    };

    /**
     * ֹͣ��������
     */
    this.Stop = function(){
        return particleEffect.Stop();
    };
}/**
 * Created by Jimmy on 2016-7-15.
 * ������Ⱦ����
 * �ļ��༭�ӿ�
 * @pImport
 */
export function PathFactory(pImport) {
    /**
     * ��ȡ���·��
     */
    this.getPluginPath = function () {
        return pImport.PluginPath;
    };

    /**
     * �ж��ļ��Ƿ����
     */
    this.Exists = function (filename) {
        return pImport.Exists(filename);
    };

    /**
     * �����ļ���
     */
    this.CreateDirectory = function (path) {
        return pImport.CreateDirectory(path);
    };

    /**
     * ɾ���ļ���
     */
    this.RemoveDirectory = function (path,bVal) {
        return pImport.RemoveDirectory(path,bVal);
    }
}
/**
* Created by Jimmy on 2016-7-18.
* ���ʰȡ����Ļ���
*/

export function PickResult(wObj) {
    var pickResult = wObj;

    this.getNpObject = function () {
        return pickResult;
    };

    this.Valid = function () {
        return pickResult.isvalid;
    };

    /**
    * ��ȡʰȡ�������͡�
    */
    this.getObjectType = function () {
        return pickResult.ObjectType;
    };
}

/**
* Created by Jimmy on 2016-7-18.
* ʸ��ͼ������ʰȡ����
*/

export function FeatureLayerPickResult(pVal) {
    var featureLayerPickResult = pVal;
    PickResult.call(this, pVal);

    this.Valid = function () {
        return featureLayerPickResult.isvalid;
    };

    /**
    * ��ȡҪ��ʰȡ����Ҫ�ر��
    */
    this.getFeatureID = function () {
        return featureLayerPickResult.FeatureID;
    };

    /**
     * ��ȡҪ��ʰȡ����Ҫ�ر��
     * @return {FeatureLayer}
     */
    this.getFeatureLayer = function () {
        var fealay = featureLayerPickResult.FeatureLayer;
        if ((fealay != null)&&(fealay != undefined)&&(fealay.isvalid)) {
            return new FeatureLayer(fealay);
        }
        else{
            return null;
        }
    };
}

/**
* Created by Jimmy on 2016-7-18.
* ��Ƭͼ��ʰȡ���
*/
export function I3DTileLayerPickResult(pVal) {
    var i3DTileLayerPickResult = pVal;
    PickResult.call(this, pVal);

    this.Valid = function () {
        return i3DTileLayerPickResult.isvalid;
    };

    /**
    * ��ȡʰȡ������Ƭͼ���Fid
    */
    this.getTileId = function () {
        return i3DTileLayerPickResult.TileId;
    };

    /**
    * ��ȡҪ��ʰȡ����Ҫ�ر��
    */
    this.getTileLayer = function () {
        var i3dlay = i3DTileLayerPickResult.TileLayer;
        if ((i3dlay != null)&&(i3dlay != undefined)&&(i3dlay.isvalid)) {
            return new I3DTileLayer(i3dlay);
        }
        else{
            return null;
        }
    };
}

/**
* Created by Jimmy on 2016-7-18.
* �ı���ǩʰȡ����
*/
export function LabelPickResult(pVal) {
    var labelPickResult = pVal;
    PickResult.call(this, pVal);

    this.Valid = function () {
        return labelPickResult.isvalid;
    };

    /**
    * ��ȡ�ı���ǩʰȡ���
    */
    this.getLabel = function () {
        var lablay = labelPickResult.Label;
        if ((lablay != null)&&(lablay != undefined)&&(lablay.isvalid)) {
            return new Label(lablay);
        }
        else{
            return null;
        }
    };
}

/**
* Created by Jimmy on 2016-7-18.
* ����ϵͳʰȡ����
*/
export function ParticleEffectPickResult(pVal) {
    var particleEffectPickResult = pVal;
    PickResult.call(this, pVal);

    this.Valid = function () {
        return particleEffectPickResult.isvalid;
    };

    /**
    * ��ȡ����ϵͳʰȡ���
    */
    this.getParticleEffect = function () {
        var partlay = particleEffectPickResult.ParticleEffect;
        if ((partlay != null)&&(partlay != undefined)&&(partlay.isvalid)) {
            return new ParticleEffect(partlay);
        }
        else{
            return null;
        }
    };
}

/**
* Created by Jimmy on 2016-7-18.
* �ο�ˮƽ��ʰȡ����
*/
export function ReferencePlanePickResult(pVal) {
    var referencePlanePickResult = pVal;
    PickResult.call(this, pVal);


    this.Valid = function () {
        return referencePlanePickResult.isvalid;
    };

    /**
    * ��ȡ��׼��ʰȡ���
    */
    this.getReferencePlane = function () {
        var referlay = referencePlanePickResult.ReferencePlane;
        if ((referlay != null)&&(referlay != undefined)&&(referlay.isvalid)) {
            return new ReferencePlane(referlay);
        }
        else{
            return null;
        }
    };
}

/**
* Created by Jimmy on 2016-7-18.
* ģ��ʰȡ����
*/
export function RenderModelPointPickResult(pVal) {
    var renderModelPointPickResult = pVal;
    PickResult.call(this, pVal);

    this.Valid = function () {
        return renderModelPointPickResult.isvalid;
    };

    /**
    * ��ȡ�����ݿ�ģ�͵�ʰȡ���������ģ��������Ϣ
    */
    this.getModelPoint = function () {
        var rendMode = renderModelPointPickResult.ModelPoint;
        if ((rendMode != null)&&(rendMode != undefined)&&(rendMode.isvalid)) {
            return new RenderModelPoint(rendMode);
        }
        else{
            return null;
        }
    };

    /**
    * �����ݿ�ģ�͵�ʰȡ��������ظ�ģ�͵�
    */
    this.getDrawGroupIndex = function () {
        return renderModelPointPickResult.DrawGroupIndex;
    };

    /**
    * �����ݿ�ģ�͵�ʰȡ��������ظ�ģ�͵�primitive������
    */
    this.getPrimitiveIndex = function () {
        return renderModelPointPickResult.PrimitiveIndex;
    };
}

/**
* Created by Jimmy on 2016-7-18.
* ��ʰȡ����
*/
export function RenderPointPickResult(pVal) {
    var renderPointPickResult = pVal;
    PickResult.call(this, pVal);

    this.Valid = function () {
        return renderPointPickResult.isvalid;
    };

    /**
    * ��ȡ��ʰȡ���
    */
    this.getPoint = function () {
        var rendPoi = renderPointPickResult.Point;
        if ((rendPoi != null)&&(rendPoi != undefined)&&(rendPoi.isvalid)) {
            return new RenderPoint(rendPoi);
        }
        else{
            return null;
        }
    };
}

/**
* Created by Jimmy on 2016-7-18.
* �����ʰȡ����
*/
export function RenderPolygonPickResult(pVal) {
    var renderPolygonPickResult = pVal;
    PickResult.call(this, pVal);

    this.Valid = function () {
        return renderPolygonPickResult.isvalid;
    };

    /**
    * ��ȡ�����ʰȡ���
    */
    this.getPolygon = function () {
        var rendGon = renderPolygonPickResult.Polygon;
        if ((rendGon != null)&&(rendGon != undefined)&&(rendGon.isvalid)) {
            return new RenderPolygon(rendGon);
        }
        else{
            return null;
        }
    };
}

/**
* Created by Jimmy on 2016-7-18.
* ��ʰȡ����
*/
export function RenderPolylinePickResult(pVal) {
    var renderPolylinePickResult = pVal;
    PickResult.call(this, pVal);

    this.Valid = function () {
        return renderPolylinePickResult.isvalid;
    };

    /**
    * ��ȡ�����ʰȡ���
    */
    this.getPolyline = function () {
        var rendLine = renderPolylinePickResult.Polyline;
        if ((rendLine != null)&&(rendLine != undefined)&&(rendLine.isvalid)) {
            return new RenderPolyline(rendLine);
        }
        else{
            return null;
        }
    };
}

/**
* Created by Jimmy on 2016-7-18.
* ��������ʰȡ����
*/
export function SkinnedMeshPickResult(pVal) {
    var skinnedMeshPickResult = pVal;
    PickResult.call(this, pVal);

    this.Valid = function () {
        return skinnedMeshPickResult.isvalid;
    };

    /**
    * ��ȡ�����ʰȡ���
    */
    this.getSkinnedMesh = function () {
        var skinnedMesh = skinnedMeshPickResult.SkinnedMesh;
        if ((skinnedMesh != null)&&(skinnedMesh != undefined)&&(skinnedMesh.isvalid)) {
            return new SkinnedMesh(skinnedMesh);
        }
        else{
            return null;
        }
    };
}

/**
* Created by Jimmy on 2016-7-18.
* �����ڶ�ʰȡ���
*/
export function TerrainHolePickResult(pVal) {
    var terrainHolePickResult = pVal;
    PickResult.call(this, pVal);

    this.Valid = function () {
        return terrainHolePickResult.isvalid;
    };

    /**
    * ��ȡ�����ʰȡ���
    */
    this.getTerrainHole = function () {
        var terHole = terrainHolePickResult.TerrainHole;
        if ((terHole != null)&&(terHole != undefined)&&(terHole.isvalid)) {
            return new TerrainHole(terHole);
        }
        else{
            return null;
        }
    };
}

export function RenderTriMeshPickResult(pVal){
    PickResult.call(this, pVal);

    this.Valid = function () {
        return pVal.isvalid;
    };

    /**
     * ��ȡ����������ʰȡ���
     */
    this.getTriMesh = function () {
        var renderTriMesh = pVal.TriMesh;
        if ((renderTriMesh != null)&&(renderTriMesh != undefined)&&(renderTriMesh.isvalid)) {
            return new RenderTriMesh(renderTriMesh);
        }
        else{
            return null;
        }
    };
}

export function TableLabelPickResult(pVal){
    PickResult.call(this, pVal);

    this.Valid = function () {
        return pVal.isvalid;
    };

    /**
     * ��ȡ����������ʰȡ���
     */
    this.getTableLabel = function () {
        var tableLabel = pVal.TableLabel;
        if ((tableLabel != null)&&(tableLabel != undefined)&&(tableLabel.isvalid)) {
            return new TableLabel(tableLabel);
        }
        else{
            return null;
        }
    };
}

/**
* Created by Jimmy on 2016-7-18.
* ����ʰȡ����
*/
export function TerrainPickResult(pVal) {
    var terrainPickResult = pVal;
    PickResult.call(this, pVal);

    this.Valid = function () {
        return terrainPickResult.isvalid;
    };

    /**
    * ��ȡ�����ʰȡ���
    */
    this.getTerrain = function () {
        var ter = terrainPickResult.Terrain;
        if ((ter != null)&&(ter != undefined)&&(ter.isvalid)) {
            return new Terrain(ter);
        }
        else{
            return null;
        }
    };
}

/**
* Created by Jimmy on 2017-02-08.
* ���ʰȡ���󼯺�
*/
export function PickResultCollection(pVal) {
    var pickResultCollections = pVal;

    this.Valid = function () {
        return pickResultCollections.isvalid;
    };

    this.isvalid = function () {
        return pickResultCollections.isvalid();
    };

    /**
    * ��ȡԪ�ظ���
    */
    this.getCount = function () {
        return pickResultCollections.Count;
    };

    /**
    * ��ȡʰȡ�������ָ��Ҫ��
    */
    this.Get = function (nIndex) {
        var pNewPickResult = pickResultCollections.Get(nIndex);
        if (pNewPickResult != null) {
            var enumObjectType = pNewPickResult.ObjectType;
            switch (enumObjectType) {
                case VRStarObjectType.VRStarObjectFeatureLayer:
                    return new FeatureLayerPickResult(pNewPickResult);
                case VRStarObjectType.VRStarObjectTerrain:
                    return new TerrainPickResult(pNewPickResult);
                case VRStarObjectType.VRStarObject3DTileLayer:
                    return new I3DTileLayerPickResult(pNewPickResult);
                case VRStarObjectType.VRStarObjectLabel:
                    return new LabelPickResult(pNewPickResult);
                case VRStarObjectType.VRStarObjectParticleEffect:
                    return new ParticleEffectPickResult(pNewPickResult);
                case VRStarObjectType.VRStarObjectRenderModelPoint:
                    return new RenderModelPointPickResult(pNewPickResult);
                case VRStarObjectType.VRStarObjectRenderPoint:
                    return new RenderPointPickResult(pNewPickResult);
                case VRStarObjectType.VRStarObjectRenderPolygon:
                    return new RenderPolygonPickResult(pNewPickResult);
                case VRStarObjectType.VRStarObjectRenderPolyline:
                    return new RenderPolylinePickResult(pNewPickResult);
                case VRStarObjectType.VRStarObjectRenderTriMesh:
                    return new RenderTriMeshPickResult(pNewPickResult);
                case VRStarObjectType.VRStarObjectSkinnedMesh:
                    return new SkinnedMeshPickResult(pNewPickResult);
                case VRStarObjectType.VRStarObjectTableLabel:
                    return new TableLabelPickResult(pNewPickResult);
                case VRStarObjectType.VRStarObjectTerrainHole:
                    return new TerrainHolePickResult(pNewPickResult);
                case VRStarObjectType.VRStarObjectRenderMultiPoint:
                    return new RenderMultiPointPickResult(pNewPickResult);
                case VRStarObjectType.VRStarObjectRenderMultiPolyline:
                    return new RenderMultiPolylinePickResult(pNewPickResult);
                case VRStarObjectType.VRStarObjectRenderMultiPolygon:
                    return new RenderMultiPolygonPickResult(pNewPickResult);
				case VRStarObjectType.VRStarObjectOverlayLabel:
                    return new OverlayLabelPickResult(pNewPickResult);
                default:
                    return new PickResult(pNewPickResult);
            }
        }
    };

    /**
    * ��ȡʰȡ���󼯺�
    */
    this.getItems = function () {
        var pVal = pickResultCollections.Items;
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new PickResultCollection(pVal);
        }
        else{
            return null;
        }
    };
}

/**
 * Created by Jimmy on 2017-04-27.
 * ��ȡ���ʰȡ���
 */
export function RenderMultiPointPickResult(pVal){
    PickResult.call(this, pVal);

    this.Valid = function () {
        return pVal.isvalid;
    };

    /**
     * ��ȡ���ʰȡ���
     */
    this.getMultiPoint = function () {
        var renderPoints = pVal.MultiPoint;
        if ((renderPoints != null)&&(renderPoints != undefined)&&(renderPoints.isvalid)) {
            return new RenderMultiPoint(renderPoints);
        }
        else{
            return null;
        }
    };
}

/**
 * Created by Jimmy on 2017-04-27.
 * ��ȡ����ʰȡ���
 */
export function RenderMultiPolylinePickResult(pVal){
    PickResult.call(this, pVal);

    this.Valid = function () {
        return pVal.isvalid;
    };

    /**
     * ��ȡ����ʰȡ���
     */
    this.getMultiPolyline = function () {
        var renderPolylines = pVal.MultiPolyline;
        if ((renderPolylines != null)&&(renderPolylines != undefined)&&(renderPolylines.isvalid)) {
            return new RenderMultiPolyline(renderPolylines);
        }
        else{
            return null;
        }
    };
}

/**
 * Created by Jimmy on 2017-04-27.
 * ��ȡ����ʰȡ���
 */
export function RenderMultiPolygonPickResult(pVal){
    PickResult.call(this, pVal);

    this.Valid = function () {
        return pVal.isvalid;
    };

    /**
     * ��ȡ����ʰȡ���
     */
    this.getMultiPoint = function () {
        var renderPolygons = pVal.MultiPolygon;
        if ((renderPolygons != null)&&(renderPolygons != undefined)&&(renderPolygons.isvalid)) {
            return new RenderMultiPolygon(renderPolygons);
        }
        else{
            return null;
        }
    };
}

/**
 * Created by Jimmy on 2017-10-28.
 * ��Ļ��ǩʰȡ����
 */
export function OverlayLabelPickResult(pVal){
    PickResult.call(this, pVal);

    this.Valid = function () {
        return pVal.isvalid;
    };

    /**
     * ��ȡ����ʰȡ���
     */
    this.getOverlayLabel = function () {
        var pOverlayLabel = pVal.OverlayLabel;
        if ((pOverlayLabel != null)&&(pOverlayLabel != undefined)&&(pOverlayLabel.isvalid)) {
            return new OverlayLabel(pOverlayLabel);
        }
        else{
            return null;
        }
    };
}
/**
 * ���̣��ṩ�˴򿪡��رա����桢����ȷ��������һ����ԶԹ��̽��д��
 * pProjectΪ����Ĳ���
 * Creator   Jimmy
 * Time     2017-10-28
*/

export function Project(pProject) {

    this.getNpObject = function () {
        return pProject;
    };

    this.Valid = function () {
        return pProject.isvalid;
    };

	/**
     * ��ȡ��ǰ���صĹ����������޹��̣��򷵻ؿմ�
     */
    this.getName = function () {
        return pProject.Name;
    };
	
	/**
     * ��ȡ��ǰ�����Ƿ���Ҫ����
     */
    this.getNeedSave = function () {
        return pProject.NeedSave;
    };
	
	/**
     * �رչ���
     */
    this.Close = function () {
        return pProject.Close();
    };
	
	/**
     * ��������
     */
    this.Create = function (sCrsWKT) {
        return pProject.Create(sCrsWKT);
    };
	
	/**
     * �򿪱��ع���
     */
    this.OpenLocal = function (sFilePath, sPassword) {
        return pProject.OpenLocal(sFilePath, sPassword);
    };
	
	/**
     * �򿪹��̷���
     */
    this.OpenRest = function (sServer, nPort, sServiceName, bClearCache) {
        return pProject.OpenRest(sServer, nPort, sServiceName, bClearCache);
    };

	/**
     * ��ʼ���
     */
    this.PackResFile = function () {
        return pProject.PackResFile();
    };
	
	/**
     * ���湤�̡�
     */
    this.Save = function (bUseRelativePaths) {
        return pProject.Save(bUseRelativePaths);
    };
	
	/**
     * ���湤�̡��ᱣ�����λ��
     */
    this.SaveAs = function (sFilePath, sPassword, bUseRelativePaths) {
        return pProject.SaveAs(sFilePath, sPassword, bUseRelativePaths);
    };	
		
	/**
     * �����ⲿ�ļ�
     */
    this.AddExternalFile = function (sKey, sOriginalFilePath) {
        return pProject.AddExternalFile(sKey, sOriginalFilePath);
    };
			
	/**
     * ɾ���ⲿ�ļ�
     */
    this.DeleteExternalFile = function (sKey) {
        return pProject.DeleteExternalFile(sKey);
    };	
				
	/**
     * ��ȡ�ⲿ�ļ�
     */
    this.GetExternalFilePath = function (sKey) {
        return pProject.GetExternalFilePath(sKey);
    };
}

/**
 * ��������ͨ�������ڵ������������ҡ�ɾ�����ϵ����ͼ��
 * pProjectTreeΪ����Ĳ���
 * Creator   Jimmy
 * Time     2017-10-28
*/

export function ProjectTree(pProjectTree) {

    this.getNpObject = function () {
        return pProjectTree;
    };

    this.Valid = function () {
        return pProjectTree.isvalid;
    };

	/**
     * ��ȡ��ʱ��ID���̶�ֵ22222222-2222-2222-2222-222222222222�� ��ʱ�鲻���ڹ���������ʾ����Ĭ�ϻᱣ�浽srp�С��粻�뱣�棬������saveInSrpFileΪFALSE
     */
    this.getNotInTreeID = function () {
        return pProjectTree.NotInTreeID;
    };
	
	/**
     * ��ȡ���ڵ�ID��ֵΪ11111111-1111-1111-1111-111111111111
     */
    this.getRootID = function () {
        return pProjectTree.RootID;
    };
	
	/**
     * ��ȡ������ָ������Ԫ�ض��Իõ�Ƭģʽ��ʾ
     */
    this.getSlideRootGroup = function () {
        return pProjectTree.SlideRootGroup;
    };
	this.setSlideRootGroup = function (grupeId) {
        pProjectTree.SlideRootGroup = grupeId;
    };
	
	/**
     * ��ȡ������ָ������Ԫ�ض��Իõ�Ƭģʽ��ʾ
     */
    this.getShowSlide = function () {
        return pProjectTree.ShowSlide;
    };
	this.setShowSlide = function (bVal) {
        pProjectTree.ShowSlide = bVal;
    };
	
	/**
     * ��ͼ�����ϴ���һ����
     */
    this.CreateGroup = function (sGroupName, gParentGroupID) {
        return pProjectTree.CreateGroup(sGroupName, gParentGroupID)
    };
	
	/**
     * ��ͼ�����ϴ���һ����
     */
    this.CreateLockedGroup = function (sGroupName, gParentGroupID) {
        return pProjectTree.CreateLockedGroup(sGroupName, gParentGroupID)
    };
	
	/**
     * ɾ��ָ��ID����
     */
    this.DeleteItem = function (grupeId) {
        pProjectTree.DeleteItem(grupeId)
    };
	
	/**
     * ͨ��·��������
     */
    this.FindItem = function (sPath) {
        return pProjectTree.FindItem(sPath)
    };
	
	/**
     * ��ȡ������û��Զ����ַ�������
     */
    this.GetClientData = function (grupeId, sName) {
        return pProjectTree.GetClientData(grupeId, sName)
    };
	
	/**
     * ��ȡָ����Ļõ�Ƭ����ͼ��
     */
    this.GetGroupSlideImageName = function (grupeId) {
        return pProjectTree.GetGroupSlideImageName(grupeId)
    };
	
	/**
     * ��ȡָ��ID����ProjectTree����ʾ������
     */
    this.GetItemName = function (grupeId) {
        return pProjectTree.GetItemName(grupeId)
    };
	
	/**
     * ����ָ����ϵ���ҽڵ�
     */
    this.GetNextItem = function (grupeId, lCode) {
        return pProjectTree.GetNextItem(grupeId, lCode)
    };
	
	/**
     * ��ȡָ���ڵ�ɼ��ԡ�0���ɼ���1�ɼ���2���ֿɼ�
     */
    this.GetVisibility = function (grupeId) {
        return pProjectTree.GetVisibility(grupeId)
    };
	
	/**
     * ����ָ���������ж���
     */
    this.HighlightGroup = function (grupeId, sColorValue) {
        HighlightGroup.GetVisibility(grupeId, sColorValue)
    };
	
	/**
     * �жϽڵ��Ƿ�����
     */
    this.IsGroup = function (grupeId) {
        return pProjectTree.IsGroup(grupeId)
    };
	
	/**
     * �жϽڵ��Ƿ����۵�״̬
     */
    this.IsLocked = function (grupeId) {
        return pProjectTree.IsLocked(grupeId)
    };

	/**
     * ����ָ�����Ƿ�����
     */
    this.LockGroup = function (grupeId, bLock) {
        pProjectTree.LockGroup(grupeId, bLock)
    };
	
	/**
     * ��������
     */
    this.RenameGroup = function (grupeId, sGroupName) {
        pProjectTree.RenameGroup(grupeId, sGroupName)
    };

	/**
     * ���ö�����û��Զ����ַ������ݡ��ᱣ���ڹ�����
     */
    this.SetClientData = function (grupeId, sName, sValue) {
        pProjectTree.SetClientData(grupeId, sName, sValue)
    };
		
	/**
     * ����ָ����Ļõ�Ƭ����ͼ����ʱֻ֧��"tga jpg png"���ָ�ʽͼƬ
     */
    this.SetGroupSlideImageName = function (grupeId, sImageName) {
        pProjectTree.SetGroupSlideImageName(grupeId, sImageName)
    };
			
	/**
     * ���ø��ڵ㡣��������ͼ�����ؼ����϶�ͼ��ʱ�����ñ��϶��Ľڵ��϶���λ���ĸ��ڵ��µ�ʲôλ��
     */
    this.SetParent = function (gId, grupeId, lIndex) {
        pProjectTree.SetParent(gId, grupeId, lIndex)
    };
				
	/**
     * ���ÿɼ���
     */
    this.SetVisibility = function (gId, byteVisibleMask) {
        pProjectTree.SetVisibility(gId, byteVisibleMask)
    };
					
	/**
     * ȡ��������
     */
    this.UnhighlightGroup = function (grupeId) {
        pProjectTree.UnhighlightGroup(grupeId)
    };
}
/**
 * Created by Jimmy on 2017-2-9.
 * դ�����
 */

export function RasterSymbol(pVal) {
   var raster = null;
	if(pVal==null || pVal==undefined){
		raster = plugin.NewRasterSymbol();
	}else{
		raster = pVal;
	}

	this.getNpObject = function () {
        return raster;
    };

    this.Valid = function () {
        return raster.isvalid;
    };

    /**
     * ��ȡ������Rͨ���Ŀ���״̬
     */
    this.getRedEnabled = function () {
        return raster.RedEnabled;
    };
    this.setRedEnabled = function (bVal) {
        raster.RedEnabled = bVal;
    };

    /**
     * ��ȡ������Rͨ����Ӧ�Ĳ�������
     */
    this.getRedBand = function () {
        return raster.RedBand;
    };
    this.setRedBand = function (lVal) {
        raster.RedBand = lVal;
    };

    /**
     * ��ȡ������Gͨ���Ŀ���״̬
     */
    this.getGreenEnable = function () {
        return raster.GreenEnable;
    };
    this.setGreenEnable = function (bVal) {
        raster.GreenEnable = bVal;
    };

    /**
     * ��ȡ������Gͨ����Ӧ�Ĳ�������
     */
    this.getGreenBand = function () {
        return raster.GreenBand;
    };
    this.setGreenBand = function (lVal) {
        raster.GreenBand = lVal;
    };

    /**
     * ��ȡ������Bͨ���Ŀ���״̬
     */
    this.getBlueEnabled = function () {
        return raster.BlueEnabled;
    };
    this.setBlueEnabled = function (bVal) {
        raster.BlueEnabled = bVal;
    };

    /**
     * ��ȡ������Bͨ����Ӧ�Ĳ�������
     */
    this.getBlueBand = function () {
        return raster.BlueBand;
    };
    this.setBlueBand = function (lVal) {
        raster.BlueBand = lVal;
    };

    /**
     * ��ȡ�����ñ���ֵ����״̬
     */
    this.getBackgroundEnabled = function () {
        return raster.BackgroundEnabled;
    };
    this.setBackgroundEnabled = function (bVal) {
        raster.BackgroundEnabled = bVal;
    };

    /**
     * ��ȡ�����ñ���ֵ������ɫ
     */
    this.getBackgroundKey = function () {
        return raster.BackgroundKey;
    };
    this.setBackgroundKey = function (color) {
        raster.BackgroundKey = color;
    };

    /**
     * ��ȡ�����ñ���ֵ��ʾ��ɫ
     */
    this.getBackgroundValue = function () {
        return raster.BackgroundValue;
    };
    this.setBackgroundValue = function (color) {
        raster.BackgroundValue = color;
    };

    /**
     * ��ȡ������Aͨ���Ŀ���״̬
     */
    this.getAlphaEnabled = function () {
        return raster.AlphaEnabled;
    };
    this.setAlphaEnabled = function (bVal) {
        raster.AlphaEnabled = bVal;
    };

    /**
     * ��ȡ������Aͨ����Ӧ�Ĳ�������
     */
    this.getAlphaBand = function () {
        return raster.AlphaBand;
    };
    this.setAlphaBand = function (lVal) {
        raster.AlphaBand = lVal;
    };
	
	 /**
     * ��ȡ������͸���ȿ���״̬
     */
    this.getTransparencyEnabled = function () {
        return raster.TransparencyEnabled;
    };
    this.setTransparencyEnabled = function (bVal) {
        raster.TransparencyEnabled = bVal;
    };

    /**
     * ��ȡ������͸����ֵ
     */
    this.getTransparencyValue = function () {
        return raster.TransparencyValue;
    };
    this.setTransparencyValue = function (color) {
        raster.TransparencyValue = color;
    };
	
}

/**
* Created by Jimmy on 2016-9-1.
* �ο�ˮƽ�����
*/

export function ReferencePlane(pVal) {
    RenderObject.call(this, pVal);
    var referencePlane = pVal;

    this.Valid = function () {
        return referencePlane.isvalid;
    };

    /**
    * ��ȡ�����òο�ˮƽ��߶ȡ�Ĭ�ϸ߶�Ϊ0.0
    */
    this.getPlaneHeight = function () {
        return referencePlane.PlaneHeight;
    };
    this.setPlaneHeight = function (dVal) {
        referencePlane.PlaneHeight = dVal;
    };
}
/**
* Created by Jimmy on 2016-7-27.
* ��ά����
*/

export function RenderControl(dom) {
    var renderControl = dom;

    this.getNpObject = function () {
        return renderControl;
    };

    /**
    * ���̻�������ӿ�
    */
    this.getCacheManager = function () {
        var pVal = renderControl.CacheManager;
        if ((pVal != null)&&(pVal != undefined)) {
            return new CacheManager(pVal);
        }
        else{
            return null;
        }
    };

    /**
    * ���ӻ�Feature������
    */
    this.getFeatureManager = function () {
        var pVal = renderControl.FeatureManager;
        if ((pVal != null)&&(pVal != undefined)) {
            return new FeatureManager(pVal);
        }
        else{
            return null;
        }
    };

    /**
    * ���������
    */
    this.getObjectManager = function () {
        var pVal = renderControl.ObjectManager;
        if ((pVal != null)&&(pVal != undefined)) {
            return new ObjectManager(pVal);
        }
        else{
            return null;
        }
    };

    /**
    * ��ͼ������
    */
    this.getExportManager = function () {
        var pVal = renderControl.ExportManager;
        if ((pVal != null)&&(pVal != undefined)) {
            return new ExportManager(pVal);
        }
        else{
            return null;
        }

    };

    /**
    * ���
    */
    this.getCamera = function () {
        var pVal = renderControl.Camera;
        if ((pVal != null)&&(pVal != undefined)) {
            return new Camera(pVal);
        }
        else{
            return null;
        }
    };


    /**
    * ��Ⱦ���󽻻��༭�ĸ�������
    */
    this.getObjectEditor = function () {
        var pVal = renderControl.ObjectEditor;
        if ((pVal != null)&&(pVal != undefined)) {
            return new ObjectEditor(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ���շ����ӿ�
     */
    this.getShadowAnalysis = function () {
        var pVal = renderControl.ShadowAnalysis;
        if ((pVal != null)&&(pVal != undefined)) {
            return new ShadowAnalysis(pVal);
        }
        else{
            return null;
        }
    };

    /**
    * ͨ�ý����༭�ĸ�������
    */
    this.getTransformHelper = function () {
        var pVal = renderControl.TransformHelper;
        if ((pVal != null)&&(pVal != undefined)) {
            return new TransformHelper(pVal);
        }
        else{
            return null;
        }
    };

    /**
    * ����
    */
    this.getTerrain = function () {
        var pVal = renderControl.Terrain;
        if ((pVal != null)&&(pVal != undefined)) {
            return new Terrain(pVal);
        }
        else{
            return null;
        }
    };
	/**
    * ȫ��
    */
    this.getPanorama = function () {
        var pVal = renderControl.Panorama;
        if ((pVal != null)&&(pVal != undefined)) {
            return new Panorama(pVal);
        }
        else{
            return null;
        }
    };

    /**
    * ��ȡViewport�ӿڣ��������ö���ͼ��������ͼ����ͼ����󶨵�
    */
    this.getViewport = function () {
        var pVal = renderControl.ViewPort;
        if ((pVal != null)&&(pVal != undefined)) {
            return new Viewport(pVal);
        }
        else{
            return null;
        }
    };

    /**
     * ��ȡ�����õ�ǰ��ά�����Ƿ�ȫ����ʾ����ESC���˳�ȫ����ʾ
     */
    this.getFullScreen = function () {
        return renderControl.FullScreen;
    };
    this.setFullScreen = function (bVal) {
        renderControl.FullScreen = bVal;
    };

    /**
     * ������ȡ������ڵ�·��(����ʹ��)
     */
    this.getPluginPath = function () {
        return renderControl.PluginPath;
    };

    /**
     * �����жϵ�ǰ����ά�����Ƿ��ڽ���״̬
     */
    this.getIsFocus = function () {
        return renderControl.IsFocus;
    };
    this.setIsFocus = function (bVal) {
        renderControl.IsFocus = bVal;
    };

    /**
     * ��������ģʽ�л��ȸ�������
     */
    this.getUseEarthOrbitManipulator = function () {
        return renderControl.UseEarthOrbitManipulator;
    };
    this.setUseEarthOrbitManipulator = function (enumManipulatorMode) {
        renderControl.UseEarthOrbitManipulator = enumManipulatorMode;
    };



    /**
    * ��ȡ�����ý���ģʽ
    */
    this.getInteractMode = function () {
        return renderControl.InteractMode;
    };
    this.setInteractMode = function (pVal) {
        renderControl.InteractMode = pVal;
    };

    /**
    * ��ȡ�����ò���ģʽ
    */
    this.getMeasurementMode = function () {
        return renderControl.MeasurementMode;
    };
    this.setMeasurementMode = function (pVal) {
        renderControl.MeasurementMode = pVal;
    };

    /**
    * ��ȡ�����������
    */
    this.getMouseCursor = function () {
        return renderControl.MouseCursor;
    };
    this.setMouseCursor = function (sVal) {
        renderControl.MouseCursor = sVal;
    };

    /**
    * ���ʰȡ������ʽ��������������Щ����¼���ʱ�򴥷�ʰȡ
    */
    this.getMouseSelectMode = function () {
        return renderControl.MouseSelectMode;
    };
    this.setMouseSelectMode = function (pVal) {
        renderControl.MouseSelectMode = pVal;
    };

    /**
    * ��ȡ���������ʰȡ�������͹�����
    */
    this.getMouseSelectObjectMask = function () {
        return renderControl.MouseSelectObjectMask;
    };
    this.setMouseSelectObjectMask = function (pVal) {
        renderControl.MouseSelectObjectMask = pVal;
    };

    /**
     * ��ȡÿ֡��Ⱦʱ�Ļص�����
     */
    this.getOnFrameInvoke = function () {
        return renderControl.OnFrameInvoke;
    };
	
    /**
     * ����ÿ֡��Ⱦʱ�Ļص�����
     */
    this.setOnFrameInvoke = function (frameCallBack) {
        renderControl.OnFrameInvoke= frameCallBack;
	}
	
	 /**
     * ��ȡÿ֡��Ⱦʱ�Ļص�����
     */
    this.getOnFrameInvoke2 = function () {
        return renderControl.OnFrameInvoke2;
    };
	
    /**
     * ����ÿ֡��Ⱦʱ�Ļص�����
     */
    this.setOnFrameInvoke2 = function (frameCallBack) {
        renderControl.OnFrameInvoke2= frameCallBack;
	}
    /**
    * ��ȡ������̫�������ŷ���ǣ�ֻ��Ҫָ��Heading��Tilt����
    */
    this.getSunDirection = function () {
        var angle = renderControl.SunDirection;
        if ((angle != null)&&(angle != undefined)&&(angle.isvalid)) {
            return new EulerAngle(angle);
        }
        else{
            return angle;
        }
    };
    this.setSunDirection = function (angle) {
        if((angle != null)&&(angle != undefined)&&(angle.Valid())) {
            renderControl.SunDirection = angle.getNpObject();
        }
        else{
            renderControl.SunDirection = angle;
        }
    };

    // /**
    // * ��ȡ�������������ͣ�����������ѩЧ��
    // */
    // this.getWeather = function () {
    //     return renderControl.Weather;
    // };
    // this.setWeather = function (enumWeatherType) {
    //     renderControl.Weather = enumWeatherType;
    // };

    /**
    * ��ȡ���GviRenderControl����ӿڵ��÷��صĴ���
    */
    this.getLastError = function () {
        return renderControl.LastError;
    };

    /**
     * ��ȡ���շ���ʱ��̫������
     */
    this.getVisualAnalysis = function () {
        var visualAnalysis = renderControl.VisualAnalysis;
        if ((visualAnalysis != null)&&(visualAnalysis != undefined)&&(visualAnalysis.isvalid)) {
            return new VisualAnalysis(visualAnalysis);
        }
        else{
            return visualAnalysis;
        }
    };

    /**
     * ��ȡ����ѡ��������
     */
    this.getHighlightHelper = function () {
        var highlightHelper = renderControl.HighlightHelper;
        if ((highlightHelper != null)&&(highlightHelper != undefined)&&(highlightHelper.isvalid)) {
            return new HighlightHelper(highlightHelper);
        }
        else{
            return highlightHelper;
        }
    };

    /**
     * ��ȡ���ӷ����ӿڣ��������շ������������
     */
    this.getSunConfig = function () {
        var sunConfig = renderControl.SunConfig;
        if ((sunConfig != null)&&(sunConfig != undefined)&&(sunConfig.isvalid)) {
            return new SunConfig(sunConfig);
        }
        else{
            return sunConfig;
        }
    };
	
	/**
     * �Ƿ�ǿ��ʹ��ȫ�ֹ���
     */
    this.getForceLight = function () {
        return renderControl.ForceLight;
    };
    this.setForceLight = function (bVal) {
        renderControl.ForceLight = bVal;
    };
	
	/**
     * �Ƿ�������
     */
    this.getEnableLight = function () {
        return renderControl.EnableLight;
    };
    this.setEnableLight = function (bVal) {
        renderControl.EnableLight = bVal;
    };
	
	/**
     * ��ȡ����
     */
    this.getProject = function () {
        var pProject = renderControl.Project;
		if ((pProject != null) && (pProject != undefined) && (pProject.isvalid)) {
            return new Project(pProject);
        }
    };
	
	/**
     * ��ȡͼ����
     */
    this.getProjectTree = function () {
        var pProjectTree = renderControl.ProjectTree;
		if ((pProjectTree != null) && (pProjectTree != undefined) && (pProjectTree.isvalid)) {
            return new ProjectTree(pProjectTree);
        }
    };
	
	/**
     * �ļ��༭�ӿ�
     */
    this.getPathFactory = function () {
        var panthFac = renderControl.PathFactory;
        if ((panthFac != null)&&(panthFac != undefined)&&(panthFac.isvalid)) {
            return new PathFactory(panthFac);
        }
        else{
            return panthFac;
        }
    };

    /**
    * ��ʼ����ά����
    */
    this.Initialize = function (bPlanarTerrain, pPropertys) {
        return renderControl.Initialize(bPlanarTerrain, pPropertys);
    };

    /**
    * ��ʼ����ά����2
    */
    this.Initialize2 = function (sWKT, pPropertys) {
        return renderControl.Initialize2(sWKT, pPropertys);
    };

    /**
     * ��ͣ��ά���ڵ���Ⱦ������ͨ��ResumeRendering�ָ� ���Խ�ʡCPU��Դ����һЩ�ȽϺ�ʱ��CPU�Ĳ��������н����Ȱ���Ⱦ��ͣ
     */
    this.PauseRendering = function (bDumpMemory) {
        renderControl.PauseRendering(bDumpMemory);
    };

    /**
     * �ָ���ά���ڵ���Ⱦ
     */
    this.ResumeRendering = function () {
        renderControl.ResumeRendering();
    };

    /**
     * ������������Դ��������Դ�����쳣�������ӶϿ�ʱ��Ҫ������������Դ
     */
    this.Reconnect = function () {
        renderControl.Reconnect();
    };

    /**
     * ������ά���� ����֮ǰ�����Ķ���û�ˣ�һ�����½���򿪹��̵�ʱ��ʹ��
     */
    this.Reset = function (bVal) {
        return renderControl.Reset(bVal);
    };

    /**
     * ������ά���� ����֮ǰ�����Ķ���û�ˣ�һ�����½���򿪹��̵�ʱ��ʹ��
     */
    this.Reset2 = function (sWKT) {
        return renderControl.Reset2(sWKT);
    };

    /**
     * ˢ��ģ��
     */
    this.RefreshModel = function (pDataSet, strModelName) {
        if((pDataSet != null)&&(pDataSet != undefined)&&(pDataSet.Valid())) {
            renderControl.RefreshModel(pDataSet.getNpObject(), strModelName);
        }
        else{
            renderControl.RefreshModel(pDataSet, strModelName);
        }
    };

    /**
     * ˢ����ͼ
     */
    this.RefreshImage = function (pDataSet, strImageName) {
        if((pDataSet != null)&&(pDataSet != undefined)&&(pDataSet.Valid())) {
            renderControl.RefreshImage(pDataSet.getNpObject(), strImageName);
        }
        else{
            renderControl.RefreshImage(pDataSet, strImageName);
        }
    };

    /**
     * ��ȡ��ǰ��ά��������ϵ��wkt��
     */
    this.GetCurrentCrsWKT = function () {
        return renderControl.GetCurrentCrsWKT();
    };

    /**
     * ��ȡ��������ϵ��wkt��
     */
    this.GetTerrainCrsWKT = function (sPath, sPass) {
        return renderControl.GetTerrainCrsWKT(sPath, sPass);
    };

    /**
     * ���̰���ʱ����
     * enumModKeyMask ��ʾVRStarModKeyMask�е�ö��ֵ������VRStarModKeyCtrl��ʾCtrl�����£�VRStarModKeyShift��ʾShift�����£�VRStarModKeyDblClk��ʾ���˫����ͨ��|���������ж��Ƿ��Ƕ��ͬʱ����.
     * cValue
     */
    this.OnChar = function (fn)  {
        renderControl.OnChar = fn;
    };

    /**
     * ���̰���ʱ����
     * enumModKeyMask ��ʾVRStarModKeyMask�е�ö��ֵ������VRStarModKeyCtrl��ʾCtrl�����£�VRStarModKeyShift��ʾShift�����£�VRStarModKeyDblClk��ʾ���˫����ͨ��|���������ж��Ƿ��Ƕ��ͬʱ����.
     * cValue
     */
    this.OnKeyDown = function (fn)  {
        renderControl.onkeydown_np = fn;
    };

    /**
     * ����̧��ʱ����
     * enumModKeyMask ��ʾVRStarModKeyMask�е�ö��ֵ������VRStarModKeyCtrl��ʾCtrl�����£�VRStarModKeyShift��ʾShift�����£�VRStarModKeyDblClk��ʾ���˫����ͨ��|���������ж��Ƿ��Ƕ��ͬʱ����.
     */
    this.OnKeyUp = function (fn)  {
        renderControl.onkeyup_np = fn;
    };

    /**
     * ����������ʱ����
     * enumModKeyMask ��ʾVRStarModKeyMask�е�ö��ֵ������VRStarModKeyCtrl��ʾCtrl�����£�VRStarModKeyShift��ʾShift�����£�VRStarModKeyDblClk��ʾ���˫����ͨ��|���������ж��Ƿ��Ƕ��ͬʱ����.
     * nX ���������ڿؼ��ϵ�x����λ�á�
     * nY ���������ڿؼ��ϵ�y����λ�á�
     */
    this.OnLeftButtonDown = function (fn)  {
        renderControl.onleftbuttondown_np = fn;
    };

    /**
     * ������̧��ʱ����
     * enumModKeyMask ��ʾVRStarModKeyMask�е�ö��ֵ������VRStarModKeyCtrl��ʾCtrl�����£�VRStarModKeyShift��ʾShift�����£�VRStarModKeyDblClk��ʾ���˫����ͨ��|���������ж��Ƿ��Ƕ��ͬʱ����.
     * nX ���������ڿؼ��ϵ�x����λ�á�
     * nY ���������ڿؼ��ϵ�y����λ�á�
     */
    this.OnLeftButtonUp = function (fn)  {
        renderControl.onleftbuttonup_np = fn;
    };

    /**
     * ������˫��ʱ����
     * enumModKeyMask ��ʾVRStarModKeyMask�е�ö��ֵ������VRStarModKeyCtrl��ʾCtrl�����£�VRStarModKeyShift��ʾShift�����£�VRStarModKeyDblClk��ʾ���˫����ͨ��|���������ж��Ƿ��Ƕ��ͬʱ����.
     * nX ���������ڿؼ��ϵ�x����λ�á�
     * nY ���������ڿؼ��ϵ�y����λ�á�
     */
    this.OnLeftButtonDobuleClick = function (fn)  {
        renderControl.onleftbuttondoubleclick_np = fn;
    };

    /**
     * ����м�����ʱ����
     * enumModKeyMask ��ʾVRStarModKeyMask�е�ö��ֵ������VRStarModKeyCtrl��ʾCtrl�����£�VRStarModKeyShift��ʾShift�����£�VRStarModKeyDblClk��ʾ���˫����ͨ��|���������ж��Ƿ��Ƕ��ͬʱ����.
     * nX ����м����ڿؼ��ϵ�x����λ�á�
     * nY ����м����ڿؼ��ϵ�y����λ�á�
     */
    this.OnMiddleButtonDown = function (fn)  {
        renderControl.onmiddlebuttondown_np = fn;
    };

    /**
     * ����м�����ʱ����
     * enumModKeyMask ��ʾVRStarModKeyMask�е�ö��ֵ������VRStarModKeyCtrl��ʾCtrl�����£�VRStarModKeyShift��ʾShift�����£�VRStarModKeyDblClk��ʾ���˫����ͨ��|���������ж��Ƿ��Ƕ��ͬʱ����.
     * nX ����м����ڿؼ��ϵ�x����λ�á�
     * nY ����м����ڿؼ��ϵ�y����λ�á�
     */
    this.OnMiddleButtonUp = function (fn)  {
        renderControl.onmiddlebuttonup_np = fn;
    };

    /**
     * ����м�˫��ʱ����
     * enumModKeyMask ��ʾVRStarModKeyMask�е�ö��ֵ������VRStarModKeyCtrl��ʾCtrl�����£�VRStarModKeyShift��ʾShift�����£�VRStarModKeyDblClk��ʾ���˫����ͨ��|���������ж��Ƿ��Ƕ��ͬʱ����.
     * nX ����м����ڿؼ��ϵ�x����λ�á�
     * nY ����м����ڿؼ��ϵ�y����λ�á�
     */
    this.OnMiddleButtonDobuleClick = function (fn)  {
        renderControl.onmiddlebuttondoubleclick_np = fn;
    };

    /**
     * ����Ҽ�����ʱ����
     * enumModKeyMask ��ʾVRStarModKeyMask�е�ö��ֵ������VRStarModKeyCtrl��ʾCtrl�����£�VRStarModKeyShift��ʾShift�����£�VRStarModKeyDblClk��ʾ���˫����ͨ��|���������ж��Ƿ��Ƕ��ͬʱ����.
     * nX ����Ҽ����ڿؼ��ϵ�x����λ�á�
     * nY ����Ҽ����ڿؼ��ϵ�y����λ�á�
     */
    this.OnRightButtonDown = function (fn)  {
        renderControl.onrightbuttondown_np = fn;
    };

    /**
     * ����Ҽ�����ʱ����
     * enumModKeyMask ��ʾVRStarModKeyMask�е�ö��ֵ������VRStarModKeyCtrl��ʾCtrl�����£�VRStarModKeyShift��ʾShift�����£�VRStarModKeyDblClk��ʾ���˫����ͨ��|���������ж��Ƿ��Ƕ��ͬʱ����.
     * nX ����Ҽ����ڿؼ��ϵ�x����λ�á�
     * nY ����Ҽ����ڿؼ��ϵ�y����λ�á�
     */
    this.OnRightButtonUp = function (fn)  {
        renderControl.onrightbuttonup_np = fn;
    };

    /**
     * ����Ҽ�˫��ʱ����
     * enumModKeyMask ��ʾVRStarModKeyMask�е�ö��ֵ������VRStarModKeyCtrl��ʾCtrl�����£�VRStarModKeyShift��ʾShift�����£�VRStarModKeyDblClk��ʾ���˫����ͨ��|���������ж��Ƿ��Ƕ��ͬʱ����.
     * nX ����Ҽ����ڿؼ��ϵ�x����λ�á�
     * nY ����Ҽ����ڿؼ��ϵ�y����λ�á�
     */
    this.OnRightButtonDobuleClick = function (fn)  {
        renderControl.onrightbuttondoubleclick_np = fn;
    };

    /**
     * ������ʱ����
     * enumModKeyMask ��ʾVRStarModKeyMask�е�ö��ֵ������VRStarModKeyCtrl��ʾCtrl�����£�VRStarModKeyShift��ʾShift�����£�VRStarModKeyDblClk��ʾ���˫����ͨ��|���������ж��Ƿ��Ƕ��ͬʱ����.
     * sDelta
     * nX ����Ҽ����ڿؼ��ϵ�x����λ�á�
     * nY ����Ҽ����ڿؼ��ϵ�y����λ�á�
     */
    this.OnMouseWheel = function (fn)  {
        renderControl.OnMouseWheel = fn;
    };

    /**
     * ����ѡʱ����
     * pPick �ཻ�õ��Ķ���
     * pVectorIntersectPoint �ཻ�㣬��<Length, X, Y, Z>�ļ��ϡ�X/Y/Z�ֱ�����ཻ���ڵ�ǰ����ϵ�µ�x/y/z����ֵ��Length�����õ㵽��ǰ����ϵԭ��ľ��롣
     * enumModKeyMask ��ʾVRStarModKeyMask�е�ö��ֵ������VRStarModKeyCtrl��ʾCtrl�����£�VRStarModKeyShift��ʾShift�����£�VRStarModKeyDblClk��ʾ���˫����ͨ��|���������ж��Ƿ��Ƕ��ͬʱ���¡�
     * enumMouseSelectMode �¼������ߡ�
     */
    var listener_onmouseclickselect=null;
    this.OnMouseClickSelect = function (fn)  {
        renderControl.onmouseclickselect = listenerOnMouseClickSelect;
        listener_onmouseclickselect = fn;
    };
    function listenerOnMouseClickSelect(pPick,pPoint,enumModKeyMask,enumMouseSelectMode){
        if(listener_onmouseclickselect!=null){
            var pPickRes = null;
            var pPointRes = new Point(pPoint);
            if((pPick != null) && (pPick != undefined)){
                var enumObjectType = pPick.ObjectType;
                if(enumObjectType==VRStarObjectType.VRStarObjectFeatureLayer)
                    pPickRes = new FeatureLayerPickResult(pPick);
                else if(enumObjectType==VRStarObjectType.VRStarObjectTerrain)
                    pPickRes = new TerrainPickResult(pPick);
                else if(enumObjectType==VRStarObjectType.VRStarObject3DTileLayer)
                    pPickRes = new I3DTileLayerPickResult(pPick);
                else if(enumObjectType==VRStarObjectType.VRStarObjectLabel)
                    pPickRes = new LabelPickResult(pPick);
                else if(enumObjectType==VRStarObjectType.VRStarObjectParticleEffect)
                    pPickRes = new ParticleEffectPickResult(pPick);
                else if(enumObjectType==VRStarObjectType.VRStarObjectRenderModelPoint)
                    pPickRes = new RenderModelPointPickResult(pPick);
                else if(enumObjectType==VRStarObjectType.VRStarObjectRenderPoint)
                    pPickRes = new RenderPointPickResult(pPick);
                else if(enumObjectType==VRStarObjectType.VRStarObjectRenderPolygon)
                    pPickRes = new RenderPolygonPickResult(pPick);
                else if(enumObjectType==VRStarObjectType.VRStarObjectRenderPolyline)
                    pPickRes = new RenderPolylinePickResult(pPick);
                else if(enumObjectType==VRStarObjectType.VRStarObjectRenderTriMesh)
                    pPickRes = new RenderTriMeshPickResult(pPick);
                else if(enumObjectType==VRStarObjectType.VRStarObjectSkinnedMesh)
                    pPickRes = new SkinnedMeshPickResult(pPick);
                else if(enumObjectType==VRStarObjectType.VRStarObjectTableLabel)
                    pPickRes = new TableLabelPickResult(pPick);
                else if(enumObjectType==VRStarObjectType.VRStarObjectTerrainHole)
                    pPickRes = new TerrainHolePickResult(pPick);
                else
                    pPickRes = new PickResult(pPick);
            }
            else{
                pPickRes = null;
            }
            listener_onmouseclickselect(pPickRes,pPointRes,enumModKeyMask,enumMouseSelectMode);
        }
        else{
            return null;
        }
    }


    /**
     * ����ѡʱ����
     * pIPicks ��ѡʰȡ����
     * enumMouseSelectMode �¼�������.
     */
    var listener_onmousedragselect = null;
    this.OnMouseDragSelect = function (fn)  {
        renderControl.onmousedragselect = listenerOnMouseDragSelect;
        listener_onmousedragselect = fn
    };
    function listenerOnMouseDragSelect(pPicks,enumMouseSelectMode){
        if(listener_onmousedragselect != null){
            var pPicksRes = null;
            if((pPicks != null) && (pPicks != undefined)){
                pPicksRes = new PickResultCollection(pPicks);
            }
            else{
                pPicksRes = null;
            }
            listener_onmousedragselect(pPicksRes,enumMouseSelectMode);
        }
        else{
            return null;
        }
    }

    /**
     * ����ƶ�ʱ����
     * enumModKeyMask ��ʾVRStarModKeyMask�е�ö��ֵ������VRStarModKeyCtrl��ʾCtrl�����£�VRStarModKeyShift��ʾShift�����£�VRStarModKeyDblClk��ʾ���˫����ͨ��|���������ж��Ƿ��Ƕ��ͬʱ����.
     * nX ���������ڿؼ��ϵ�x����λ�á�
     * nY ���������ڿؼ��ϵ�y����λ�á�
     */
    this.OnMouseMove = function (fn)  {
        renderControl.onmousemove_np = fn;
    };

    /**
     * ���ͣ��ʱ����
     * enumModKeyMask ��ʾVRStarModKeyMask�е�ö��ֵ������VRStarModKeyCtrl��ʾCtrl�����£�VRStarModKeyShift��ʾShift�����£�VRStarModKeyDblClk��ʾ���˫����ͨ��|���������ж��Ƿ��Ƕ��ͬʱ����.
     * nX ���������ڿؼ��ϵ�x����λ�á�
     * nY ���������ڿؼ��ϵ�y����λ�á�
     */
    this.OnMouseHover = function (fn)  {
        renderControl.OnMouseHover = fn;
    };

    /**
     * ������н���ʱ����
     * @param {BYTE} tValue
     */
    this.OnCameraFlyFinished = function (fn)  {
        renderControl.oncameraflyfinished = fn;
    };

	/**
     * ���������ڵ�仯ʱ������
     * @param {int} dIndex
     */
    this.OnCameraTourWayPointChanged = function (fn) {
        renderControl.oncameratourwaypointchanged = fn;
    };
	
	/**
     * �˶�·���ڵ�仯ʱ������
     * @param {int} dIndex
     */
    this.OnMotionPathWayPointChanged = function (fn) {
        renderControl.onmotionpathwaypointchanged = fn;
    };
	
	  /**
     * �˶�·�����Ž���ʱ����
     * @param {BYTE} tValue
     */
    this.OnMotionPathFinished = function (fn)  {
        renderControl.onmotionpathfinished = fn;
    };
	
    /**
     * ��������༭������ʱ����
     * @param {Geometry} pGeoRes
     */
    var listener_onobjectediting=null;
    this.OnObjectEditing = function (fn)  {
        renderControl.onobjectediting = listenerOnObjectEditing;
        listener_onobjectediting = fn;
    };
    function listenerOnObjectEditing(pGeometry){
        if(listener_onobjectediting != null){
            var pGeoRes = null;
            if((pGeometry != null) && (pGeometry != undefined)){
                var enumGeometryType = pGeometry.GeometryType;
                if(enumGeometryType == VRStarGeometryType.VRStarGeometryUnknow)
                    pGeoRes = new Geometry(pGeometry);
                else if(enumGeometryType == VRStarGeometryType.VRStarGeometryPoint)
                    pGeoRes = new Point(pGeometry);
                else if(enumGeometryType == VRStarGeometryType.VRStarGeometryModelPoint)
                    pGeoRes = new ModelPoint(pGeometry);
                else if(enumGeometryType == VRStarGeometryType.VRStarGeometryArc)
                    pGeoRes = new CirculeArc(pGeometry);
                else if(enumGeometryType == VRStarGeometryType.VRStarGeometryLine)
                    pGeoRes = new Line(pGeometry);
                else if(enumGeometryType == VRStarGeometryType.VRStarGeometryCircle)
                    pGeoRes = new Circle(pGeometry);
                else if(enumGeometryType == VRStarGeometryType.VRStarGeometryPolyline)
                    pGeoRes = new Polyline(pGeometry);
                else if(enumGeometryType == VRStarGeometryType.VRStarGeometryRing)
                    pGeoRes = new Ring(pGeometry);
                else if(enumGeometryType == VRStarGeometryType.VRStarGeometryPolygon)
                    pGeoRes = new Polygon(pGeometry);
                else if(enumGeometryType == VRStarGeometryType.VRStarGeometryTriMesh)
                    pGeoRes = new TriMesh(pGeometry);
                else if(enumGeometryType == VRStarGeometryType.VRStarGeometryCollection)
                    pGeoRes = new GeometryCollection(pGeometry);
                else if(enumGeometryType == VRStarGeometryType.VRStarGeometryMultiPoint)
                    pGeoRes = new MultiPoint(pGeometry);
                else if(enumGeometryType == VRStarGeometryType.VRStarGeometryMultiPolyline)
                    pGeoRes = new MultiPolyline(pGeometry);
                else if(enumGeometryType == VRStarGeometryType.VRStarGeometryMultiPolygon)
                    pGeoRes = new MultiPolygon(pGeometry);
                else if(enumGeometryType == VRStarGeometryType.VRStarGeometryMultiTrimesh)
                    pGeoRes = new MultiTriMesh(pGeometry);
                else if(enumGeometryType == VRStarGeometryType.VRStarGeometryPointCloud)
                    pGeoRes = new PointCloud(pGeometry);
                else{
                    pGeoRes = null;
                }
            }
            else{
                return null;
            }
            listener_onobjectediting(pGeoRes);
        }
        else{
            return null;
        }
    }

    /**
     * ��������༭����ʱ����
     */
    this.OnObjectEditFinish = function (fn)  {
        renderControl.onobjecteditfinish = fn;
    };


    /**
     * ��ʼ��ͼʱ����
     * @param {long} nNumberOfWidth
     * @param {long} nNumberOfHeight
     */
    this.OnPictureExportBegin = function (fn) {
        renderControl.onpictureexportbegin = fn;
    };

    /**
     * ��ͼ��ʱ����
     * @param {long} lIndex
     * @param {float} fPercentage
     */
    this.OnPictureExporting = function (fn) {
        renderControl.onpictureexporting = fn;
    };

    /**
     * ��ͼ����ʱ����
     * @param {double} dTime
     * @param {boolean} bAborted
     */
    this.OnPictureExportEnd = function (fn) {
        renderControl.onpictureexportend = fn;
    };

    /**
     * �༭��������ܿ�ʼʱ����
     */
    this.OnTransformBegin = function (fn)  {
        renderControl.OnTransformBegin = fn;
    };

    /**
     * �༭��������ܽ���ʱ����
     */
    this.OnTransformEnd = function (fn)  {
        renderControl.OnTransformEnd = fn;
    };

    /**
     * ƽ�������ʱ����
     * @param {Vector3} pVector
     */
    var listener_ontransformMoving = null;
    this.OnTransformMoving = function (fn)  {
        renderControl.OnTransformMoving = listenerOnTransformMoving;
        listener_ontransformMoving = fn;
    };
    function listenerOnTransformMoving(pVector){
        if(listener_ontransformMoving != null){
            var pVectorRes = null;
            if((pVector != null) && (pVector != undefined)){
                pVectorRes = new Vector3(pVector);
            }
            else{
                pVectorRes = null;
            }
            listener_ontransformMoving(pVectorRes);
        }
        else{
            return null;
        }
    }

    /**
     * ��ת�����ʱ����
     * @param {Vector3} pVector
     * @param {double} dAngle
     */
    var listener_ontransformrotating = null;
    this.OnTransformRotating = function (fn)  {
        renderControl.ontransformrotating = listenerOnTransformRotating;
        listener_ontransformrotating = fn;
    };
    function listenerOnTransformRotating(pVector, dAngle){
        if(listener_ontransformrotating != null){
            var pVectorRes = null;
            if((pVector != null) && (pVector != undefined)){
                pVectorRes = new Vector3(pVector);
            }
            else{
                pVectorRes = null;
            }
            listener_ontransformrotating(pVectorRes, dAngle);
        }
        else{
            return null;
        }
    }

    /**
     * ���������ʱ����
     * @param {Vector3} pVector
     */
    var listener_ontransformscaling = null;
    this.OnTransformScaling = function (fn)  {
        renderControl.ontransformscaling = listenerOnTransformScaling;
        listener_ontransformscaling = fn;
    };
    function listenerOnTransformScaling(pVector){
        if(listener_ontransformscaling != null){
            var pVectorRes = null;
            if((pVector != null) && (pVector != undefined)){
                pVectorRes = new Vector3(pVector);
            }
            else{
                pVectorRes = null;
            }
            listener_ontransformscaling(pVectorRes);
        }
        else{
            return null;
        }
    }

    /**
     * ���������ʱ����
     * @param {Vector3} pVector
     * @param {Vector3} pVectorScale
     */
    var listener_ontransformboxscaling = null;
    this.OnTransformBoxScaling = function (fn)  {
        renderControl.ontransformboxscaling = listenerOnTransformBoxScaling;
        listener_ontransformboxscaling = fn;
    };
    function listenerOnTransformBoxScaling(pVector,pVectorScale){
        if(listener_ontransformboxscaling != null){
            var pVectorRes = null;
            if((pVector != null) && (pVector != undefined)){
                pVectorRes = new Vector3(pVector);
            }
            else{
                pVectorRes = null;
            }
            var pVectorScaleRes = null;
            if((pVectorScale != null) && (pVectorScale != undefined)){
                pVectorScaleRes = new Vector3(pVectorScale);
            }
            else{
                pVectorScaleRes = null;
            }
            listener_ontransformboxscaling(pVectorRes,pVectorScaleRes);
        }
        else{
            return null;
        }
    }

    /**
     * ��Ƶ��ʼ���ʱ����
     * @param {double} dTotalTime
     */
    this.OnVideoExportBegin = function (fn) {
        renderControl.onvideoexportbegin = fn;
    };

    /**
     * ��Ƶ�����ʱ����
     * @param {float} fPercentage
     */
    this.OnVideoExporting = function (fn) {
        renderControl.onvideoexporting = fn;
    };

    /**
     * ��Ƶ�������ʱ����
     * @param {double} dTime
     * @param {boolean} bAborted
     */
    this.OnVideoExportEnd = function (fn) {
        renderControl.onvideoexportend = fn;
    };

    /**
     * ����ӵ�λ�ñ仯ʱ����
     * @param {Vector3} pVectorRes
     */
    var listener_oncamerachange = null;
    this.OnCameraChanging = function (fn)  {
        renderControl.oncamerachanging = listenerOnCameraChanging;
        listener_oncamerachange = fn;
    };
    function listenerOnCameraChanging(pVector){
        if(listener_oncamerachange != null){
            var pVectorRes = null;
            if((pVector != null) && (pVector != undefined)){
                pVectorRes = new Vector3(pVector);
            }
            else{
                return null;
            }
            listener_oncamerachange(pVectorRes);
        }
        else{
            return null;
        }
    }
	
    /**
     * ��Դ�������ʱ���¼�
     * @param {LONG} lTotalResNo
     * @param {LONG} lCurResIndex
     */
    this.OnResPacking = function (fn) {
        renderControl.OnResPacking = fn;
    };
	/**
     * ���洰���¼�
     * @param {UIEventArgs} pUIEventArgs
     * @param {VRStarUIEventType} enumEventType
     */
	var listener_onuiwindowevent = null;
    this.OnUIWindowEvent = function (fn)  {
        renderControl.onuiwindowevent = listenerOnOnUIWindowEvent;
        listener_onuiwindowevent = fn;
    };
    function listenerOnOnUIWindowEvent(pUIEventArgs,enumEventType){
        if(listener_onuiwindowevent != null){
            var pUIEventArgsRes = null;
            if((pUIEventArgs != null) && (pUIEventArgs != undefined)){
                pUIEventArgsRes = new UIMouseEventArgs(pUIEventArgs);
            }
            else{
                return null;
            }
            listener_onuiwindowevent(pUIEventArgsRes,enumEventType);
        }
        else{
            return null;
        }
    }
	/**
    * HTML����
    */
    this.getHTMLWindow = function () {
        var pVal = renderControl.HTMLWindow;
        if ((pVal != null)&&(pVal != undefined)) {
            return new HTMLWindow(pVal);
        }
        else{
            return null;
        }
    };
	
	/**
    * ��ͣ��Ⱦ
    */
    this.PausePagers = function (enumPagerType) {
        return renderControl.PausePagers(enumPagerType);
    };
	
	/**
    * �ָ���Ⱦ
    */
    this.ResumePagers = function (enumPagerType) {
        return renderControl.ResumePagers(enumPagerType);
    };
	
	/**
    * �Ƿ�ж��Frame����¼�
    */
    this.UnLoadFrameCallback = function (bUnLoad) {
        return renderControl.UnLoadFrameCallback(bUnLoad);
    };
    
    /**
    * ɾ����
    */
    this.ClearCache = function () {
        return renderControl.ClearCache();
    };
	
	/**
    * �ز�����ӿ�
    */
    this.getStrataManager = function () {
        var pVal = renderControl.StrataManager;
        if ((pVal != null)&&(pVal != undefined)) {
            return new StrataManager(pVal);
        }
        else{
            return null;
        }
    };
	
    /**
    * ����Ȩ�޹����ӿ�
    */
    this.getLicenseServer = function () {
        var pVal = renderControl.LicenseServer;
        if ((pVal != null)&&(pVal != undefined)) {
            return new LicenseServer(pVal);
        }
        else{
            return null;
        }
    };
	
	/**
    * UI����ؼ������ӿ�
    */
    this.getUIWindowManager = function () {
        var pVal = renderControl.UIWindowManager;
        if ((pVal != null)&&(pVal != undefined)) {
            return new UIWindowManager(pVal);
        }
        else{
            return null;
        }
    };
     /**
    * ��ȡ����λ��
    */
    this.getLeft = function () {
        return renderControl.Left;
    };
    this.getTop = function () {
        return renderControl.Top;
    };
    this.getWidth = function () {
        return renderControl.Width;
    };
    this.getHeight = function () {
        return renderControl.Height;
    };
}
/**
 * Created by Jimmy on 2016-7-15.
 * ������Ⱦ����
 */

export function RenderGeometry(pVal) {
    Renderable.call(this, pVal);
    var renderGeometry = pVal;

    /**
     * �жϻ������Ƿ���뱳(��)���޳�
     */
    this.getForceCullMode = function () {
        return renderGeometry.ForceCullMode;
    };
    this.setForceCullMode = function (bVal) {
        renderGeometry.ForceCullMode = bVal;
    };

    /**
     * ��ȡ�����ñ����������޳�ģʽ
     */
    this.getCullMode = function () {
        return renderGeometry.CullMode;
    };
    this.setCullMode = function (vrstarCullFaceMode) {
        renderGeometry.CullMode = vrstarCullFaceMode;
    };

    /**
     * ��ȡ�����ü��ζ���
     */
    this.getGeometry = function () {
        var pGeometry = renderGeometry.Geometry;
        if ((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.isvalid)) {
            var enumGeometryType = pGeometry.GeometryType;
            switch (enumGeometryType) {
                case VRStarGeometryType.VRStarGeometryUnknow:
                    return new Geometry(pGeometry);
                case VRStarGeometryType.VRStarGeometryPoint:
                    return new Point(pGeometry);
                case VRStarGeometryType.VRStarGeometryModelPoint:
                    return new ModelPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryArc:
                    return new CirculeArc(pGeometry);
                case VRStarGeometryType.VRStarGeometryLine:
                    return new Line(pGeometry);
                case VRStarGeometryType.VRStarGeometryCircle:
                    return new Circle(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolyline:
                    return new Polyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryRing:
                    return new Ring(pGeometry);
                case VRStarGeometryType.VRStarGeometryPolygon:
                    return new Polygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryTriMesh:
                    return new TriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryCollection:
                    return new GeometryCollection(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPoint:
                    return new MultiPoint(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolyline:
                    return new MultiPolyline(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiPolygon:
                    return new MultiPolygon(pGeometry);
                case VRStarGeometryType.VRStarGeometryMultiTrimesh:
                    return new MultiTriMesh(pGeometry);
                case VRStarGeometryType.VRStarGeometryPointCloud:
                    return new PointCloud(pGeometry);
                default:
                    return null;
            }
        }
        else{
            return null;
        }
    };
    this.setGeometry = function (geometry) {
        if((geometry != null)&&(geometry != undefined)&&(geometry.Valid())) {
            renderGeometry.Geometry = geometry.getNpObject();
        }
        else{
            renderGeometry.Geometry = geometry;
        }
    };

    /**
     * ��ȡ�����ü��ζ������
     */
    this.getSymbol = function () {
        var sym = renderGeometry.Symbol;
        if ((sym != null)&&(sym != undefined)&&(sym.isvalid)) {
            if (sym.SymbolType == VRStarGeometrySymbolType.VRStarGeometrySymbolPoint) {
                return new SimplePointSymbol(sym);
            }
            else if (sym.SymbolType == VRStarGeometrySymbolType.VRStarGeometrySymbolModelPoint) {
                return new ModelPointSymbol(sym);
            }
            else if (sym.SymbolType == VRStarGeometrySymbolType.VRStarGeometrySymbolImagePoint) {
                return new ImagePointSymbol(sym);
            }
            else if (sym.SymbolType == VRStarGeometrySymbolType.VRStarGeometrySymbolCurve) {
                return new CurveSymbol(sym);
            }
            else if (sym.SymbolType == VRStarGeometrySymbolType.VRStarGeometrySymbolSurface) {
                return new SurfaceSymbol(sym);
            }
            else
                return new GeometrySymbol(sym);
        }
        else{
            return sym;
        }
    };
    this.setSymbol = function (symbol) {
        if((geometry != null)&&(geometry != undefined)&&(geometry.Valid())) {
            renderGeometry.Symbol = symbol.getNpObject();
        }
        else{
            renderGeometry.Symbol = symbol;
        }
    };

    /**
     * ��˸Ч��
     */
    this.Glow = function (nDuration) {
        renderGeometry.Glow(nDuration);
    };
}

/**
 * Created by Jimmy on 2016-8-30.
 * �����Ⱦ����
 */
export function RenderMultiPoint(pVal){
    var renderPoints = pVal;
    RenderGeometry.call(this, pVal);
    this.Valid = function () {
        return renderPoints.isvalid;
    };
}

/**
 * Created by Jimmy on 2016-8-30.
 * ������Ⱦ����
 */
export function RenderMultiPolyline(pVal){
    var renderPolylines = pVal;
    RenderGeometry.call(this, pVal);
    this.Valid = function () {
        return renderPolylines.isvalid;
    };

    /**
     * ��ȡ�����ö������Ⱦ����߳�ģʽ��֧��������Ⱦ��
     */
    this.getHeightStyle = function () {
        return renderPolylines.HeightStyle;
    };
    this.setHeightStyle = function (enumHeightStyle) {
        renderPolylines.HeightStyle = enumHeightStyle;
    };

    /**
     * ����ʱ���Ƶ�����˳�򣨶���������ʱ����Խ��Խ���ȡ�
     */
    this.getDrawOrder = function () {
        return renderPolylines.DrawOrder;
    };
    this.setDrawOrder = function (lVal) {
        renderPolylines.DrawOrder = lVal;
    };
}

/**
 * Created by Jimmy on 2016-8-30.
 * ������Ⱦ����
 */
export function RenderMultiPolygon(pVal){
    var renderPolygons = pVal;
    RenderGeometry.call(this, pVal);
    this.Valid = function () {
        return renderPolygons.isvalid;
    };

    /**
     * ��ȡ�����ö������Ⱦ����߳�ģʽ��֧��������Ⱦ��
     */
    this.getHeightStyle = function () {
        return renderPolygons.HeightStyle;
    };
    this.setHeightStyle = function (enumHeightStyle) {
        renderPolygons.HeightStyle = enumHeightStyle;
    };

    /**
     * ����ʱ���Ƶ�����˳�򣨶���������ʱ����Խ��Խ���ȡ�
     */
    this.getDrawOrder = function () {
        return renderPolygons.DrawOrder;
    };
    this.setDrawOrder = function (lVal) {
        renderPolygons.DrawOrder = lVal;
    };
}

/**
 * Created by Jimmy on 2016-8-30.
 * ����Ⱦ����
 */
export function RenderPoint(pVal) {
    var renderPoint = pVal;
    RenderGeometry.call(this, pVal);

    this.Valid = function () {
        return renderPoint.isvalid;
    };
	/**
     * ������󶨵�ĳ���˶�·����
     */
    this.Bind = function (pMotionPath, pVec, dHeadingOffset, dPitchOffset, dRollOffset) {
        var pMotionPathUse = null;
        if((pMotionPath != null)&&(pMotionPath != undefined)&&(pMotionPath.Valid())){
            pMotionPathUse = pMotionPath.getNpObject();
        }
        else{
            pMotionPathUse = pMotionPath;
        }
        var pVecUse = null;
        if((pVec != null)&&(pVec != undefined)&&(pVec.Valid())){
            pVecUse = pVec.getNpObject();
        }
        else{
            pVecUse = pVec;
        }
        renderPoint.Bind(pMotionPathUse, pVecUse, dHeadingOffset, dPitchOffset, dRollOffset);
    };
	
		/**
     * ������󶨵�ĳ���˶�·����
     */
    this.Bind2 = function (pDynamicObject, pVec, dHeadingOffset, dPitchOffset, dRollOffset) {
        var pDynamicObjectUse = null;
        if((pDynamicObject != null)&&(pDynamicObject != undefined)&&(pDynamicObject.Valid())){
            pDynamicObjectUse = pDynamicObject.getNpObject();
        }
        else{
            pDynamicObjectUse = pDynamicObject;
        }
        var pVecUse = null;
        if((pVec != null)&&(pVec != undefined)&&(pVec.Valid())){
            pVecUse = pVec.getNpObject();
        }
        else{
            pVecUse = pVec;
        }
        renderPoint.Bind2(pDynamicObjectUse, pVecUse, dHeadingOffset, dPitchOffset, dRollOffset);
    };

    /**
     * ��ȡMotionable�󶨵���MotionPath��GUID
     */
    this.GetMotionPathID = function () {
        return renderPoint.GetMotionPathID();
    };

    /**
     * ��ĳ���˶�·���Ͻ�󶨵�ǰ����
     */
    this.Unbind = function () {
        renderPoint.Unbind();
    };
}

/**
 * Created by Jimmy on 2016-8-30.
 * ����Ⱦ����
 */
export function RenderPolyline(pVal) {
    var renderPolyline = pVal;
    RenderGeometry.call(this, pVal);

    this.Valid = function () {
        return renderPolyline.isvalid;
    };

    /**
     * ������󶨵�ĳ���˶�·����
     */
    this.Bind = function (pMotionPath, pVec, dHeadingOffset, dPitchOffset, dRollOffset) {
        var pMotionPathUse = null;
        if((pMotionPath != null)&&(pMotionPath != undefined)&&(pMotionPath.Valid())){
            pMotionPathUse = pMotionPath.getNpObject();
        }
        else{
            pMotionPathUse = pMotionPath;
        }
        var pVecUse = null;
        if((pVec != null)&&(pVec != undefined)&&(pVec.Valid())){
            pVecUse = pVec.getNpObject();
        }
        else{
            pVecUse = pVec;
        }
        renderPolyline.Bind(pMotionPathUse, pVecUse, dHeadingOffset, dPitchOffset, dRollOffset);
    };
	
	 /**
     * ������󶨵�ĳ���˶�·����
     */
    this.Bind2 = function (pDynamicObject, pVec, dHeadingOffset, dPitchOffset, dRollOffset) {
        var pDynamicObjectUse = null;
        if((pDynamicObject != null)&&(pDynamicObject != undefined)&&(pDynamicObject.Valid())){
            pDynamicObjectUse = pDynamicObject.getNpObject();
        }
        else{
            pDynamicObjectUse = pDynamicObject;
        }
        var pVecUse = null;
        if((pVec != null)&&(pVec != undefined)&&(pVec.Valid())){
            pVecUse = pVec.getNpObject();
        }
        else{
            pVecUse = pVec;
        }
        renderPolyline.Bind2(pDynamicObjectUse, pVecUse, dHeadingOffset, dPitchOffset, dRollOffset);
    };


    /**
     * ��ȡMotionable�󶨵���MotionPath��GUID
     */
    this.GetMotionPathID = function () {
        return renderPolyline.GetMotionPathID();
    };

    /**
     * ��ĳ���˶�·���Ͻ�󶨵�ǰ����
     */
    this.Unbind = function () {
        renderPolyline.Unbind();
    };

    /**
     * ��ȡ����������Ⱦ����߳�ģʽ��֧��������Ⱦ��
     */
    this.getHeightStyle = function () {
        return renderPolyline.HeightStyle;
    };
    this.setHeightStyle = function (enumHeightStyle) {
        renderPolyline.HeightStyle = enumHeightStyle;
    };

    /**
     * ����ʱ���Ƶ�����˳�򣨶���������ʱ����Խ��Խ���ȡ�
     */
    this.getDrawOrder = function () {
        return renderPolyline.DrawOrder;
    };
    this.setDrawOrder = function (lVal) {
        renderPolyline.DrawOrder = lVal;
    };
}

/**
 * Created by Jimmy on 2016-8-30.
 * �������Ⱦ����
 */
export function RenderPolygon(pVal) {
    var renderPolygon = pVal;
    RenderGeometry.call(this, pVal);

    this.Valid = function () {
        return renderPolygon.isvalid;
    };

    /**
     * ������󶨵�ĳ���˶�·����
     */
    this.Bind = function (pMotionPath, pVec, dHeadingOffset, dPitchOffset, dRollOffset) {
        var pMotionPathUse = null;
        if((pMotionPath != null)&&(pMotionPath != undefined)&&(pMotionPath.Valid())){
            pMotionPathUse = pMotionPath.getNpObject();
        }
        else{
            pMotionPathUse = pMotionPath;
        }
        var pVecUse = null;
        if((pVec != null)&&(pVec != undefined)&&(pVec.Valid())){
            pVecUse = pVec.getNpObject();
        }
        else{
            pVecUse = pVec;
        }
        renderPolygon.Bind(pMotionPathUse, pVecUse, dHeadingOffset, dPitchOffset, dRollOffset);
    };
	
	/**
     * ������󶨵�ĳ���˶�·����
     */
    this.Bind2 = function (pDynamicObject, pVec, dHeadingOffset, dPitchOffset, dRollOffset) {
        var pDynamicObjectUse = null;
        if((pDynamicObject != null)&&(pDynamicObject != undefined)&&(pDynamicObject.Valid())){
            pDynamicObjectUse = pDynamicObject.getNpObject();
        }
        else{
            pDynamicObjectUse = pDynamicObject;
        }
        var pVecUse = null;
        if((pVec != null)&&(pVec != undefined)&&(pVec.Valid())){
            pVecUse = pVec.getNpObject();
        }
        else{
            pVecUse = pVec;
        }
        renderPolygon.Bind2(pDynamicObjectUse, pVecUse, dHeadingOffset, dPitchOffset, dRollOffset);
    };
    /**
     * ��ȡMotionable�󶨵���MotionPath��GUID
     */
    this.GetMotionPathID = function () {
        return renderPolygon.GetMotionPathID();
    };

    /**
     * ��ĳ���˶�·���Ͻ�󶨵�ǰ����
     */
    this.Unbind = function () {
        renderPolygon.Unbind();
    };

    /**
     * ��ȡ�����ö������Ⱦ����߳�ģʽ��֧��������Ⱦ��
     */
    this.getHeightStyle = function () {
        return renderPolygon.HeightStyle;
    };
    this.setHeightStyle = function (enumHeightStyle) {
        renderPolygon.HeightStyle = enumHeightStyle;
    };

    /**
     * ����ʱ���Ƶ�����˳�򣨶���������ʱ����Խ��Խ���ȡ�
     */
    this.getDrawOrder = function () {
        return renderPolygon.DrawOrder;
    };
    this.setDrawOrder = function (lVal) {
        renderPolygon.DrawOrder = lVal;
    };
}

/**
 * Created by Jimmy on 2016-8-30.
 * ģ����Ⱦ����
 */

export function RenderModelPoint(pVal) {
    var renderModelPoint = pVal;
    RenderGeometry.call(this, pVal);

    this.Valid = function () {
        return renderModelPoint.isvalid;
    };

    /**
     * ��ȡ������ģ����Ⱦ��������
     */
    this.getModelName = function () {
        return renderModelPoint.HeightStyle;
    };
    this.setModelName = function (bVal) {
        renderModelPoint.HeightStyle = bVal;
    };

    /**
     * ��ȡ������ģ����Ⱦ����λ��
     */
    this.getPosition = function () {
        var vec = renderModelPoint.Position;
        if (vec != null) {
            return new Vector3(vec);
        }
    };
    this.setPosition = function (pVec) {
        if((pVec != null)&&(pVec != undefined)&&(pVec.Valid())) {
            renderModelPoint.Position = pVec.getNpObject();
        }
        else{
            renderModelPoint.Position = pVec;
        }
    };

    /**
     * ��ȡ������ģ����Ⱦ�������
     */
    this.getMatrix = function () {
        var fcoll = renderModelPoint.Matrix;
        if ((fcoll != null)&&(fcoll != undefined)&&(fcoll.isvalid)) {
            return new FloatCollection(fcoll);
        }
        else{
            return null;
        }
    };
    this.setMatrix = function (fcoll) {
        if((fcoll != null)&&(fcoll != undefined)&&(fcoll.Valid())) {
            renderModelPoint.Matrix = fcoll.getNpObject();
        }
        else{
            renderModelPoint.Matrix = fcoll;
        }
    };

    /**
     * ������󶨵�ĳ���˶�·����
     */
    this.Bind = function (pMotionPath, pVec, dHeadingOffset, dPitchOffset, dRollOffset) {
        var pMotionPathUse = null;
        if((pMotionPath != null)&&(pMotionPath != undefined)&&(pMotionPath.Valid())){
            pMotionPathUse = pMotionPath.getNpObject();
        }
        else{
            pMotionPathUse = pMotionPath;
        }
        var pVecUse = null;
        if((pVec != null)&&(pVec != undefined)&&(pVec.Valid())){
            pVecUse = pVec.getNpObject();
        }
        else{
            pVecUse = pVec;
        }
        renderModelPoint.Bind(pMotionPathUse, pVecUse, dHeadingOffset, dPitchOffset, dRollOffset);
    };
	
		/**
     * ������󶨵�ĳ���˶�·����
     */
    this.Bind2 = function (pDynamicObject, pVec, dHeadingOffset, dPitchOffset, dRollOffset) {
        var pDynamicObjectUse = null;
        if((pDynamicObject != null)&&(pDynamicObject != undefined)&&(pDynamicObject.Valid())){
            pDynamicObjectUse = pDynamicObject.getNpObject();
        }
        else{
            pDynamicObjectUse = pDynamicObject;
        }
        var pVecUse = null;
        if((pVec != null)&&(pVec != undefined)&&(pVec.Valid())){
            pVecUse = pVec.getNpObject();
        }
        else{
            pVecUse = pVec;
        }
        renderModelPoint.Bind2(pDynamicObjectUse, pVecUse, dHeadingOffset, dPitchOffset, dRollOffset);
    };

    /**
     * ��ȡMotionable�󶨵���MotionPath��GUID
     */
    this.GetMotionPathID = function () {
        return renderModelPoint.GetMotionPathID();
    };

    /**
     * ��ĳ���˶�·���Ͻ�󶨵�ǰ����
     */
    this.Unbind = function () {
        renderModelPoint.Unbind();
    };
}

/**
 * Created by Jimmy on 2017-4-27.
 * ����������Ⱦ����
 */
export function RenderTriMesh(pVal) {

    RenderGeometry.call(this, pVal);

    this.Valid = function () {
        return pVal.isvalid;
    };
}
/**
* Created by Jimmy on 2016-6-22.
* ������ά�����У�
*/
export function RenderObject(obj) {
    var renderObject = obj;

    this.getNpObject = function () {
        return renderObject;
    };

    /**
     * ��ȡ�����ʶ
     */
    this.getGuid = function(){
        return renderObject.Guid;
    };

    /**
     * �����Ƿ������ײ���
     */
    this.getAttributeMask = function(){
        return renderObject.AttributeMask;
    };
    this.setAttributeMask = function(enumAttributeMask){
        renderObject.AttributeMask = enumAttributeMask;
    };

    /**
     * ��ȡ��������
     */
    this.getObjectType = function(){
        return renderObject.ObjectType;
    };


    this.getModelGUID = function () {
        return renderObject.ModelGUID;
    };
	
	/**
     * ��ȡ�����ö�������
     */
    this.getName = function(){
        return renderObject.Name;
    };
    this.setName = function(sName){
        renderObject.Name = sName;
    };
	
	/**
     * ��ȡ�������Ƿ񱣴��srp�����ļ�
     */
    this.getSaveInWorkspace = function(){
        return renderObject.SaveInWorkspace;
    };
    this.setSaveInWorkspace = function(bVal){
        renderObject.SaveInWorkspace = bVal;
    };
	
	/**
     * ��ȡ������û��Զ����ַ�������
     */
    this.GetClientData = function(sName){
        return renderObject.GetClientData(sName);
    };
	
	/**
     * ���ö�����û��Զ����ַ������ݡ��ᱣ���ڹ�����
     */
    this.SetClientData = function(sName, sNewpVal){
        renderObject.SetClientData(sName, sNewpVal);
    };
}

/**
* Created by Jimmy on 2016-7-18.
* ��Ⱦ����
*/
export function Renderable(pVal) {
    RenderObject.call(this, pVal);
    var renderable = pVal;

    /**
    * ��ÿɻ��ƶ���İ�Χ�д�С����������ֻ������
    */
    this.getEnvelope = function () {
        var env = renderable.Envelope;
        if ((env != null)&&(env != undefined)&&(env.isvalid)) {
            return new Envelope(env);
        }
        else{
            return null;
        }
    };

    /**
    * ��ȡ�����û��ƶ���ͶӰ����Ļ�ϵ���С������
    */
    this.getMinVisiblePixels = function () {
        return renderable.MinVisiblePixels;
    };
    this.setMinVisiblePixels = function (fVal) {
        renderable.MinVisiblePixels = fVal;
    };

    /**
    * ��ȡ���������ɼ����룬��λΪ��
    */
    this.getMaxVisibleDistance = function () {
        return renderable.MaxVisibleDistance;
    };
    this.setMaxVisibleDistance = function (dVal) {
        renderable.MaxVisibleDistance = dVal;
    };

    /**
    * ��ȡ�����û��ƶ���Ĺ۲����
    */
    this.getViewingDistance = function () {
        return renderable.ViewingDistance;
    };
    this.setViewingDistance = function (dVal) {
        renderable.ViewingDistance = dVal;
    };

    /**
    * �жϻ�������Ⱦ�����Ƿ�������ʰȡ������
    */
    this.getMouseSelectMask = function () {
        return renderable.MouseSelectMask;
    };
    this.setMouseSelectMask = function (bVal) {
        renderable.MouseSelectMask = bVal;
    };

    /**
    * �жϻ�������Ⱦ���������Ƿ�ɼ�
    */
    this.getVisibleMask = function () {
        return renderable.VisibleMask;
    };
    this.setVisibleMask = function (bVal) {
        renderable.VisibleMask = bVal;
    };

    /**
    * ��ȡ��������Ⱦ������С�ɼ�����
    */
    this.getMinVisibleDistance = function () {
        return renderable.MinVisibleDistance;
    };
    this.setMinVisibleDistance = function (dVal) {
        renderable.MinVisibleDistance = dVal;
    };

    /**
    * ��ȡ��������Ⱦ�������߳̿ɼ�����
    */
    this.getMaxAltitudeVisibleDistance = function () {
        return renderable.MaxAltitudeVisibleDistance;
    };
    this.setMaxAltitudeVisibleDistance = function (dVal) {
        renderable.MaxAltitudeVisibleDistance = dVal;
    };

    /**
    * ��ȡ��������Ⱦ������С�߳̿ɼ�����
    */
    this.getMinAltitudeVisibleDistance = function () {
        return renderable.MinAltitudeVisibleDistance;
    };
    this.setMinAltitudeVisibleDistance = function (dVal) {
        renderable.MinAltitudeVisibleDistance = dVal;
    };
	
	 /**
    * ��ȡ��������Ⱦ������ȼ�鷽ʽ
    */
    this.getDepthTestMode = function () {
        return renderable.DepthTestMode;
    };
    this.setDepthTestMode = function (dVal) {
        renderable.DepthTestMode = dVal;
    };

    /**
    * ����
    */
    this.Highlight = function (nColor) {
        renderable.Highlight(nColor);
    };

    /**
    * ȡ������
    */
    this.Unhighlight = function (nColor) {
        renderable.Unhighlight();
    };
}
/**
* Created by Jimmy on 2016-8-29.
* ��Ⱦ����
*/

export function RenderRule(pVal) {
    var renderRule = pVal;

    this.getNpObject = function () {
        return renderRule;
    };

    this.Valid = function () {
        return renderRule.isvalid;
    };

    /**
    * ��ȡ��Ⱦ��������
    */
    this.getRuleType = function () {
        return renderRule.RuleType;
    };

    /**
    * �жϻ�������Ⱦ�����Ƿ��������ģʽ
    */
    this.getOtherwise = function () {
        return renderRule.Otherwise;
    };
    this.setOtherwise = function (bVal) {
        renderRule.Otherwise = bVal;
    };

    /**
    * ��ȡ��������Ⱦ�����ֶ�
    */
    this.getLookUpField = function () {
        return renderRule.LookUpField;
    };
    this.setLookUpField = function (sVal) {
        renderRule.LookUpField = sVal;
    };
}

/**
* Created by Jimmy on 2016-8-29.
* ��Χ���򣬿��Ը�һ�����ֵ����Сֵ����ȷ���ǿ����仹�Ǳ�����
*/

export function RangeRenderRule(pVal) {
    var rangRenderRule = null;
    if (pVal == null) {
        rangRenderRule = plugin.NewRangeRenderRule();
    }
    else
        rangRenderRule = pVal;
    RenderRule.call(this, rangRenderRule);

    /**
    * ��ȡ�����÷�Χ������Сֵ
    */
    this.getMinValue = function () {
        return rangRenderRule.MinValue;
    };
    this.setMinValue = function (dVal) {
        rangRenderRule.MinValue = dVal;
    };

    /**
    * �жϻ����÷�Χ�����Ƿ������Сֵ��Ĭ��Ϊtrue��
    */
    this.getIncludeMin = function () {
        return rangRenderRule.IncludeMin;
    };
    this.setIncludeMin = function (bVal) {
        rangRenderRule.IncludeMin = bVal;
    };

    /**
    * ��ȡ�����÷�Χ�������ֵ
    */
    this.getMaxValue = function () {
        return rangRenderRule.MaxValue;
    };
    this.setMaxValue = function (dVal) {
        rangRenderRule.MaxValue = dVal;
    };

    /**
    * �жϻ����÷�Χ�����Ƿ�������ֵ
    */
    this.getIncludeMax = function () {
        return rangRenderRule.IncludeMax;
    };
    this.setIncludeMax = function (bVal) {
        rangRenderRule.IncludeMax = bVal;
    };
}

/**
* Created by Jimmy on 2016-8-29.
* Ψһֵ��Ⱦ����
*/

export function UniqueValuesRenderRule(pVal) {
    var uniqueValuesRenderRule = null;
    if (pVal == null) {
        uniqueValuesRenderRule = plugin.NewUniqueValuesRenderRule();
    }
    else
        uniqueValuesRenderRule = pVal;
    RenderRule.call(this, uniqueValuesRenderRule);

    /**
    * ��ȡ�����÷�Χ������Сֵ
    */
    this.getValues = function () {
        var strColl = uniqueValuesRenderRule.Values;
        if ((strColl != null)&&(strColl != undefined)&&(strColl.isvalid)) {
            return new StringCollection(strColl);
        }
        else{
            return null;
        }
    };
    this.setValues = function (strColl) {
        if((strColl != null)&&(strColl != undefined)&&(strColl.Valid())) {
            uniqueValuesRenderRule.Values = strColl.getNpObject();
        }
        else{
            uniqueValuesRenderRule.Values = strColl;
        }
    };

    /**
    * ���Ψһֵ
    */
    this.ClearValues = function () {
        uniqueValuesRenderRule.ClearValues();
    };

    /**
    * ��ȡΨһֵ�ܸ���
    */
    this.getValuesCount = function () {
        return uniqueValuesRenderRule.ValuesCount;
    };

    /**
    * ��ȡָ��Ψһֵ
    */
    this.GetUniqueValue = function (lInd) {
        return uniqueValuesRenderRule.GetUniqueValue(lInd);
    };

    /**
    * ����Ψһֵ
    */
    this.AddValue = function (sVal) {
        uniqueValuesRenderRule.AddValue(sVal);
    };
}
/**
* Created by Jimmy on 2016-8-29.
* ���շ���
*/

export function ShadowAnalysis(pVal) {

    var shadowAnalysis = null;
    if (pVal == null) {
        shadowAnalysis = plugin.ShadowAnalysis;
    }
    else
        shadowAnalysis = pVal;

    this.getNpObject = function () {
        return shadowAnalysis;
    };

    this.Valid = function () {
        return shadowAnalysis.isvalid;
    };

    /**
    * ��ȡ���������շ�����Ӱ��ɫ
    */
    this.getShadowColor = function () {
        return shadowAnalysis.ShadowColor;
    };
    this.setShadowColor = function (colorVal) {
        shadowAnalysis.ShadowColor = colorVal;
    };

    /**
    * ���ȫ�������ڵ���
    */
    this.ClearOccluder = function () {
        shadowAnalysis.ClearOccluder();
    };

    /**
    * ���ȫ�������ڵ���
    */
    this.AddOccluder = function (triMesh) {
        if((triMesh != null)&&(triMesh != undefined)&&(triMesh.Valid())) {
            shadowAnalysis.AddOccluder(triMesh.getNpObject());
        }
        else{
            shadowAnalysis.AddOccluder(triMesh);
        }
    };

    /**
    * �������շ���
    */
    this.StartAnalyse = function () {
        shadowAnalysis.StartAnalyse();
    };

    /**
    * ֹͣ���շ�����ֹͣ����Զ�����ڵ���
    */
    this.StopAnalyse = function () {
        shadowAnalysis.StopAnalyse();
    };
}
/**
* ��������
* pSkinnedMeshΪ����Ĳ���
* @author   Jimmy
* @date     2016-07-15
*/

export function SkinnedMesh(pSkinnedMesh) {

    Renderable.call(this, pSkinnedMesh);

    this.Valid = function () {
        return pSkinnedMesh.isvalid;
    };

    /**
    * ��ȡ�����ò��ų���ʱ��
    * @param   {double}  dVal
    * @return  {double}
    */
    this.getDuration = function () {
        return pSkinnedMesh.Duration;
    };
    this.setDuration = function (dVal) {
        pSkinnedMesh.Duration = dVal;
    };

    /**
    * �жϻ����ù��������Ƿ�ѭ������
    * @param   {bool}  bVal 
    * @return  {bool}
    */
    this.getLoop = function () {
        return pSkinnedMesh.Loop;
    };
    this.setLoop = function (bVal) {
        pSkinnedMesh.Loop = bVal;
    };

    /**
    * ��ȡ�����Ķ����ܸ���
    * @return  {double}
    */
    this.getAnimationCount = function () {
        return pSkinnedMesh.AnimationCount;
    };

    /**
    * ��ȡ�����õ�ǰ�Ķ�����ȡֵ��Χ[0, AnimationCount-1]
    * @param   {double}  dVal
    * @return  {double}  ��ǰ�Ķ���
    */
    this.getAnimationIndex = function () {
        return pSkinnedMesh.AnimationIndex;
    };
    this.setAnimationIndex = function (dVal) {
        pSkinnedMesh.AnimationIndex = dVal;
    };

    /**
    * ��ȡ�����ù���������Ӧ��ģ��
    * @param   {ModelPoint}  pIModelPoint
    * @return  {ModelPoint}
    */
    this.getModelPoint = function () {
        var pIModelPoint = pSkinnedMesh.ModelPoint;
        if ((pIModelPoint != null)&&(pIModelPoint != undefined)&&(pIModelPoint.isvalid)) {
            return new ModelPoint(pIModelPoint);
        }
        else{
            return null;
        }
    };
    this.setModelPoint = function (pIModelPoint) {
        if((pIModelPoint != null)&&(pIModelPoint != undefined)&&(pIModelPoint.Valid())) {
            pSkinnedMesh.ModelPoint = pIModelPoint.getNpObject();
        }
        else{
            pSkinnedMesh.ModelPoint = pIModelPoint;
        }
    };

    /**
    * ����
    * @return  void
    */
    this.Play = function () {
        pSkinnedMesh.Play();
    };

    /**
    * ��ͣ
    * @return  void
    */
    this.Pause = function () {
        pSkinnedMesh.Pause();
    };

    /**
    * ֹͣ
    * @return  void
    */
    this.Stop = function () {
        pSkinnedMesh.Stop();
    };

    /**
    * A-B���䲥�Ź��ܣ�ֱ�������������Χ��[0, 1]��������Χ���Զ��ָ���[0, 1]
    * @param   {double}  dStartPercentage
    * @param   {double}  dEndPercentage
    * @return  {bool}
    */
    this.ClampAnimation = function (dStartPercentage, dEndPercentage) {
        return pSkinnedMesh.ClampAnimation(dStartPercentage, dEndPercentage);
    };

    /**
    * ������󶨵�ĳ���˶�·����
    * @param   {MotionPath}  pMotionPath
    * @param   {Vector3}     pVec
    * @param   {double}  dHeadingOffset
    * @param   {double}  dPitchOffset
    * @param   {double}  dRollOffset
    * @return  void
    */
    this.Bind = function (pMotionPath, pVec, dHeadingOffset, dPitchOffset, dRollOffset) {
        var pMotionPathUse = null;
        if((pMotionPath != null)&&(pMotionPath != undefined)&&(pMotionPath.Valid())){
            pMotionPathUse = pMotionPath.getNpObject();
        }
        else{
            pMotionPathUse = pMotionPath;
        }
        var pVecUse = null;
        if((pVec != null)&&(pVec != undefined)&&(pVec.Valid())){
            pVecUse = pVec.getNpObject();
        }
        else{
            pVecUse = pVec;
        }
        pSkinnedMesh.Bind(pMotionPathUse, pVecUse, dHeadingOffset, dPitchOffset, dRollOffset);
    };

		 /**
     * ������󶨵�ĳ���˶�·����
     */
    this.Bind2 = function (pDynamicObject, pVec, dHeadingOffset, dPitchOffset, dRollOffset) {
        var pDynamicObjectUse = null;
        if((pDynamicObject != null)&&(pDynamicObject != undefined)&&(pDynamicObject.Valid())){
            pDynamicObjectUse = pDynamicObject.getNpObject();
        }
        else{
            pDynamicObjectUse = pDynamicObject;
        }
        var pVecUse = null;
        if((pVec != null)&&(pVec != undefined)&&(pVec.Valid())){
            pVecUse = pVec.getNpObject();
        }
        else{
            pVecUse = pVec;
        }
        pSkinnedMesh.Bind2(pDynamicObjectUse, pVecUse, dHeadingOffset, dPitchOffset, dRollOffset);
    };
	
    /**
    * ��ȡMotionable�󶨵���MotionPath��GUID
    * @return  {GUID}
    */
    this.GetMotionPathID = function () {
        return pSkinnedMesh.GetMotionPathID();
    };

    /**
    * ��ĳ���˶�·���Ͻ�󶨵�ǰ����
    * @return  void
    */
    this.Unbind = function () {
        pSkinnedMesh.Unbind();
    };
}
/**
* Created by Jimmy on 2016-7-15.
* ��պ�
*/
export function SkyBox(pVal) {
    RenderObject.call(this, pVal);
    var skyBox = pVal;

    this.Valid = function () {
        return skyBox.isvalid;
    };

    /**
    * ���������ȡ��������պж�������ɫ
    */
    this.getBackgroundColor = function () {
        return skyBox.BackgroundColor;
    };
    this.setBackgroundColor = function (color) {
        skyBox.BackgroundColor = color;
    };

    /**
    * ���������ȡ��������պеķ�λ��
    */
    this.getHeading = function () {
        return skyBox.Heading;
    };
    this.setHeading = function (dVal) {
        skyBox.Heading = dVal;
    };

    /**
    * ��ȡ��������պ���Чģʽ
    */
    this.getFogMode = function () {
        return skyBox.FogMode;
    };
    this.setFogMode = function (enumFogMode) {
        skyBox.FogMode = enumFogMode;
    };

    /**
    * ��ȡ����������ʼ���ֵľ��룬ֻ�е�FogModeΪVRStarFogLinearʱ��������
    */
    this.getFogStartDistance = function () {
        return skyBox.FogStartDistance;
    };
    this.setFogStartDistance = function (dVal) {
        skyBox.FogStartDistance = dVal;
    };

    /**
    * ��ȡ����������ʼ��ʧ�ľ��룬ֻ�е�FogModeΪVRStarFogLinearʱ��������
    */
    this.getFogEndDistance = function () {
        return skyBox.FogEndDistance;
    };
    this.setFogEndDistance = function (dVal) {
        skyBox.FogEndDistance = dVal;
    };

    /**
    * ��ȡ��������պ���ʹ�õ�ͼƬ���ļ�·��
    */
    this.getImagePath = function (enumSkyboxImageIndex) {
        return skyBox.GetImagePath(enumSkyboxImageIndex);
    };
    this.setImagePath = function (enumSkyboxImageIndex, sPath) {
        skyBox.SetImagePath(enumSkyboxImageIndex, sPath);
    };

    /**
     * �������ͣ�����������ѩЧ��
     */
    this.getWeather = function () {
        return skyBox.Weather;
    };
    this.setWeather= function (enumWeatherType) {
        skyBox.Weather = enumWeatherType;
    };

    /**
     * ������ɫ
     */
    this.getFogColor = function () {
        return skyBox.FogColor;
    };
    this.setFogColor= function (color) {
        skyBox.FogColor = color;
    };
}
/**
* Created by Jimmy on 2017-2-9.
* ���ֱ�ǩ
*/

export function SunConfig(sunConfig) {

    this.getNpObject = function () {
        return sunConfig;
    };

    this.Valid = function () {
        return sunConfig.isvalid;
    };

    /**
    * ��ȡ���������շ�����Ӱ��ɫ
    */
    this.getShadowColor = function () {
        return sunConfig.ShadowColor;
    };
    this.setShadowColor = function (color) {
        sunConfig.ShadowColor = color;
    };

    /**
    * ��ȡ������̫����λ�ļ���ģʽ
    */
    this.getSunCalculateMode = function () {
        return sunConfig.SunCalculateMode;
    };
    this.setSunCalculateMode = function (vrstarSunCalculateMode) {
        sunConfig.SunCalculateMode = vrstarSunCalculateMode;
    };

    /**
    * ����/�ر� IDΪnViewID���ӿڵ���Ӱ���ýӿ��ǲ���ShadowMap����ʵ�ֵ����շ�����֧��ƽ����Ƭ
    */
    this.EnableShadow = function (lViewID, bEnable) {
        sunConfig.EnableShadow(lViewID, bEnable);
    };

    /**
    * ��ȡָ���㴦��̫������ŷ����
    */
    this.GetSunEuler = function (pPosition) {
        var pVal = null;
        if((pPosition != null)&&(pPosition != undefined)&&(pPosition.Valid())) {
            pVal = sunConfig.GetSunEuler(pPosition.getNpObject());
        }
        else{
            pVal = sunConfig.GetSunEuler(pPosition);
        }
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new EulerAngle(pVal);
        }
        else{
            return null;
        }
    };

    /**
    * ��ѯIDΪnViewID���ӿ��Ƿ�������Ӱ
    */
    this.IsShadowEnabled = function (lViewID) {
        return sunConfig.IsShadowEnabled(lViewID);
    };

    /**
    * ����ʱ��
    */
    this.SetGMT = function (time) {
        sunConfig.SetGMT(time);
    };

    /**
    * ָ��̫�������ŷ���ǣ�ֻ��Ҫָ��Heading��Tilt���ɡ�TiltΪ��̫���������ĽǶȣ���ֵֵԽ����ӰԽ�̣���ֵ����Ӱ
    */
    this.SetSunEuler = function (pIEulerAngle) {
        if((pIEulerAngle != null)&&(pIEulerAngle != undefined)&&(pIEulerAngle.Valid())) {
            sunConfig.SetSunEuler(pIEulerAngle.getNpObject());
        }
        else{
            sunConfig.SetSunEuler(pIEulerAngle);
        }
    };
}
/**
* Created by Jimmy on 2016-7-15.
* ����
*/

export function Symbol(sym) {
    var symbol = sym;

    this.getNpObject = function () {
        return symbol;
    };

    /**
    * ��ȡ��������
    */
    this.getSymbolType = function () {
        return symbol.SymbolType;
    };
}

/**
* Created by Jimmy on 2016-7-15.
* ����ʵ�����
*/

export function GeometrySymbol(sym) {
    var geometrySymbol = sym;
    Symbol.call(this, geometrySymbol);

    this.Valid = function () {
        return geometrySymbol.isvalid;
    };

    /**
    * ��ȡ��������Դ�������ݼ�
    */
    this.getResourceDataSet = function () {
        var dSet = geometrySymbol.ResourceDataSet;
        if (dSet != null) {
            return new DataSet(dSet);
        }
    };
    this.setResourceDataSet = function (dSet) {
        if((dSet != null)&&(dSet != undefined)&&(dSet.Valid())) {
            geometrySymbol.ResourceDataSet = dSet.getNpObject();
        }
        else{
            geometrySymbol.ResourceDataSet = dSet;
        }
    };
	
	 /**
    * ��ȡ�����ü����������Ⱦ���ű���֧��lua�ű����� 
    */
    this.getScript = function () {
        return geometrySymbol.Script;
    };
    this.setScript = function (sVal) {
        geometrySymbol.Script = sVal;
    };
}

/**
* Created by Jimmy on 2016-8-9.
* �߷���
*/

export function CurveSymbol(pVal) {
    var curveSymbol = null;
    if (pVal == null) {
        curveSymbol = plugin.NewCurveSymbol();
    }
    else
        curveSymbol = pVal;

    GeometrySymbol.call(this, curveSymbol);

    this.Valid = function () {
        return curveSymbol.isvalid;
    };

    /**
    * ��ȡ������������ɫ����
    */
    this.getColor = function () {
        return curveSymbol.Color;
    };
    this.setColor = function (color) {
        curveSymbol.Color = color;
    };

    /**
    * ��ȡ�����������߿�
    */
    this.getLineWidth = function () {
        return curveSymbol.LineWidth;
    };
    this.setLineWidth = function (dVal) {
        curveSymbol.LineWidth = dVal;
    };
	
	/**
    * ������ߵ�ͼƬ·���� 
    */
    this.getImageName = function () {
        return curveSymbol.ImageName;
    };
    this.setImageName = function (dVal) {
        curveSymbol.ImageName = dVal;
    };
	
	/**
    * ���ߵ���ʽ��ǰ�᣺�߿�>0�������ء�
    */
    this.getPattern = function () {
        return curveSymbol.Pattern;
    };
    this.setPattern = function (dVal) {
        curveSymbol.Pattern = dVal;
    };
	
	/**
    * �������ʱÿ��ָ�������ظ�ͼƬ����λ�ף�Ĭ��1��
    */
    this.getRepeatLength = function () {
        return curveSymbol.RepeatLength;
    };
    this.setRepeatLength = function (dVal) {
        curveSymbol.RepeatLength = dVal;
    };
}

/**
* Created by Jimmy on 2016-8-30.
* ģ�ͷ���
*/

export function ModelPointSymbol(pVal) {
	var modelPointSymbol = null;
    if (pVal == null) {
        modelPointSymbol = plugin.NewModelPointSymbol();
    }
    else
        modelPointSymbol = pVal;
    GeometrySymbol.call(this, modelPointSymbol);

    this.Valid = function () {
        return modelPointSymbol.isvalid;
    };
    /**
    * ��ȡ��������ɫ�����ԡ�Ĭ��ֵΪfalse��
    */
    this.getEnableColor = function () {
        return modelPointSymbol.EnableColor;
    };
    this.setEnableColor = function (bVal) {
        modelPointSymbol.EnableColor = bVal;
    };

    /**
    * ��ȡ���������������ԡ�Ĭ��ֵΪtrue��
    */
    this.getEnableTexture = function () {
        return modelPointSymbol.EnableTexture;
    };
    this.setEnableTexture = function (bVal) {
        modelPointSymbol.EnableTexture = bVal;
    };

    /**
    * ��ȡ������ģ����ɫ���ԡ�
    */
    this.getColor = function () {
        return modelPointSymbol.Color;
    };
    this.setColor = function (color) {
        modelPointSymbol.Color = color;
    };
}

/**
* Created by Jimmy on 2016-8-9.
* �����
*/

export function PointSymbol(npObj) {
    var pointSymbol = npObj;
    GeometrySymbol.call(this, pointSymbol);

    this.Valid = function () {
        return pointSymbol.isvalid;
    };

    /**
    * ��ȡ�����ò��ַ�ʽ
    */
    this.getAlignment = function () {
        return pointSymbol.Alignment;
    };
    this.setAlignment = function (tVal) {
        pointSymbol.Alignment = tVal;
    };

    /**
    * ��ȡ�����õ������ɫ
    */
    this.getColor = function () {
        return pointSymbol.Color;
    };
    this.setColor = function (color) {
        pointSymbol.Color = color;
    };

    /**
    * ��ȡ�����õ������ɫ
    */
    this.getSize = function () {
        return pointSymbol.Size;
    };
    this.setSize = function (lVal) {
        pointSymbol.Size = lVal;
    };
}

/**
* Created by Jimmy on 2016-8-9.
* ͼƬ��
*/

export function ImagePointSymbol(npObj) {
	var imagePointSymbol = null;
	if(npObj==null || npObj==undefined){
		imagePointSymbol = plugin.NewImagePointSymbol();
	}else{
		imagePointSymbol = npObj;
	}
    PointSymbol.call(this, imagePointSymbol);

    this.Valid = function () {
        return imagePointSymbol.isvalid;
    };
    /**
    * ��ȡ������ͼƬ�����ͼƬ·��
    */
    this.getImageName = function () {
        return imagePointSymbol.ImageName;
    };
    this.setImageName = function (sVal) {
        imagePointSymbol.ImageName = sVal;
    };
}

/**
* Created by Jimmy on 2016-8-9.
* �򵥵����
*/

export function SimplePointSymbol(npObj) {
	var simplePointSymbol = null;
	if(npObj==null || npObj==undefined){
		simplePointSymbol = plugin.NewSimplePointSymbol();
	}else{
		simplePointSymbol = npObj;
	}
    PointSymbol.call(this, simplePointSymbol);

    this.Valid = function () {
        return simplePointSymbol.isvalid;
    };
    /**
    * ��ȡ�����ü򵥵�������ɫ
    */
    this.getFillColor = function () {
        return simplePointSymbol.FillColor;
    };
    this.setFillColor = function (color) {
        simplePointSymbol.FillColor = color;
    };

    /**
    * ��ȡ�����ü򵥵������������ɫ
    */
    this.getOutlineColor = function () {
        return simplePointSymbol.OutlineColor;
    };
    this.setOutlineColor = function (color) {
        simplePointSymbol.OutlineColor = color;
    };

    /**
    * ��ȡ�����ü򵥵������������ɫ
    */
    this.getStyle = function () {
        return simplePointSymbol.Style;
    };
    this.setStyle = function (enumSimplePointStyle) {
        simplePointSymbol.Style = enumSimplePointStyle;
    };
}

/**
* Created by Jimmy on 2016-8-9.
* �����
*/

export function SurfaceSymbol(npObj) {
	var surfaceSymbol = null;
	if(npObj==null || npObj==undefined){
		surfaceSymbol = plugin.NewSurfaceSymbol();
	}else{
		surfaceSymbol = npObj;
	}

    GeometrySymbol.call(this, surfaceSymbol);

    this.Valid = function () {
        return surfaceSymbol.isvalid;
    };
    /**
    * ��ȡ������������ɫ
    */
    this.getColor = function () {
        return surfaceSymbol.Color;
    };
    this.setColor = function (color) {
        surfaceSymbol.Color = color;
    };

    /**
    * ��ȡ����������߽����
    */
    this.getBoundarySymbol = function () {
        var curSym = surfaceSymbol.BoundarySymbol;
        if ((curSym != null)&&(curSym != undefined)&&(curSym.isvalid)) {
            return new CurveSymbol(curSym);
        }
        else{
            return null;
        }
    };
    this.setBoundarySymbol = function (curSymbol) {
        if((curSymbol != null)&&(curSymbol != undefined)&&(curSymbol.Valid())) {
            surfaceSymbol.BoundarySymbol = curSymbol.getNpObject();
        }
        else{
            surfaceSymbol.BoundarySymbol = curSymbol;
        }
    };
	
    /**
    * �ж��Ƿ�������
    */
    this.getEnableLight = function () {
        return surfaceSymbol.EnableLight;
    };
    this.setEnableLight = function (bVal) {
        surfaceSymbol.EnableLight = bVal;
    };



    /**
    * ��������ͼƬ·����
    */
    this.getImageName = function () {
        return surfaceSymbol.ImageName;
    };
    this.setImageName = function (bVal) {
        surfaceSymbol.ImageName = bVal;
    };
	
	/**
    * �������ʱˮƽ������ÿ��ָ�������ظ�ͼƬ����λ�ף�Ĭ��1��֧��ʹ��lua�﷨�Ľű���
    */
    this.getRepeatLengthU = function () {
        return surfaceSymbol.RepeatLengthU;
    };
    this.setRepeatLengthU = function (bVal) {
        surfaceSymbol.RepeatLengthU = bVal;
    };
	
    /**
    * �������ʱ��ֱ������ÿ��ָ�������ظ�ͼƬ����λ�ף�Ĭ��1��֧��ʹ��lua�﷨�Ľű���
    */
    this.getRepeatLengthV = function () {
        return surfaceSymbol.RepeatLengthV;
    };
    this.setRepeatLengthV = function (bVal) {
        surfaceSymbol.RepeatLengthV = bVal;
    };
	
	/**
    * �������ʱͼƬ����ת�Ƕȡ���λ�ȣ�Ĭ��0��֧��ʹ��lua�﷨�Ľű��� 
    */
    this.getRotation = function () {
        return surfaceSymbol.Rotation;
    };
    this.setRotation = function (bVal) {
        surfaceSymbol.Rotation = bVal;
    };
}

/**
* Created by zzz on 2019-7-26.
* ��ά�������
*/

export function Polygon3DSymbol(npObj) {
	var polygon3DSymbol = null;
	if(npObj==null || npObj==undefined){
		polygon3DSymbol = plugin.NewPolygon3DSymbol();
	}else{
		polygon3DSymbol = npObj;
	}
    SurfaceSymbol.call(this, polygon3DSymbol);

    this.Valid = function () {
        return polygon3DSymbol.isvalid;
    };
    /**
    * ��ȡ������Polygon����Ⱦ�߶ȡ�֧��ʹ��lua�﷨�Ľű��� 
    */
    this.getHeight = function () {
        return polygon3DSymbol.Height;
    };
    this.setHeight = function (dHeight) {
        polygon3DSymbol.Height = dHeight;
    };
	
	/**
    * �жϻ�����Polygon�Ƿ���뱳���������޳���
    */
    this.getCullFaceBack = function () {
        return polygon3DSymbol.CullFaceBack;
    };
    this.setForceCullMode = function (bVal) {
        polygon3DSymbol.CullFaceBack = bVal;
    };
	
	/**
    * �жϻ������Ƿ�ʹ����ʼ�߳̽�����Ⱦ��Ĭ��Ϊfalse������Zֵ������Ⱦ����Ϊtrue�������BottomAltitudeֵ������Ⱦ��
    */
    this.getUseBottomAltitude = function () {
        return polygon3DSymbol.UseBottomAltitude;
    };
    this.setUseBottomAltitude = function (bVal) {
        polygon3DSymbol.UseBottomAltitude = bVal;
    };
	
    /**
    * ��ȡ��������ʼ�̡߳�֧��ʹ��lua�﷨�Ľű���
    */
    this.getBottomAltitude = function () {
        return polygon3DSymbol.BottomAltitude;
    };
    this.setBottomAltitude = function (bVal) {
        polygon3DSymbol.BottomAltitude = bVal;
    };
}


/**
* Created by Jimmy on 2016-7-15.
* ���ֵ���Ⱦ���
*/

export function TextSymbol(pVal) {
    var textSymbol = null;
    if (pVal == null) {
        textSymbol = plugin.NewTextSymbol();
    }
    else {
        textSymbol = pVal;
    }

    Symbol.call(this, textSymbol);

    this.Valid = function () {
        return textSymbol.isvalid;
    };

    /**
    * ��ȡ��������������
    */
    this.getTextAttribute = function () {
        var TextAttr = textSymbol.TextAttribute;
        if ((TextAttr != null)&&(TextAttr != undefined)&&(TextAttr.isvalid)) {
            return new TextAttribute(TextAttr);
        }
    };
    this.setTextAttribute = function (TextAttr) {
        if((TextAttr != null)&&(TextAttr != undefined)&&(TextAttr.Valid())) {
            textSymbol.TextAttribute = TextAttr.getNpObject();
        }
        else{
            textSymbol.TextAttribute = TextAttr
        }
    };

    /**
    * ��ȡ�������ı��������(�������Ǹ���)�Ķ��뷽ʽ
    */
    this.getPivotAlignment = function () {
        return textSymbol.PivotAlignment;
    };
    this.setPivotAlignment = function (enumPivotAlignType) {
        textSymbol.PivotAlignment = enumPivotAlignType;
    };

    /**
    * ��ȡ���������ָ߶�ƫ��
    */
    this.getVerticalOffset = function () {
        return textSymbol.VerticalOffset;
    };
    this.setVerticalOffset = function (dVal) {
        textSymbol.VerticalOffset = dVal;
    };

    /**
    * �жϻ����������Ƿ���Ʋο���
    */
    this.getDrawLine = function () {
        return textSymbol.DrawLine;
    };
    this.setDrawLine = function (bVal) {
        textSymbol.DrawLine = bVal;
    };

    /**
    * ��ȡ���������ֲο��ߵ���ɫ
    */
    this.getLineColor = function () {
        return textSymbol.LineColor;
    };
    this.setLineColor = function (color) {
        textSymbol.LineColor = color;
    };

    /**
    * ��ȡ������������С�ɼ�����
    */
    this.getMinVisualDistance = function () {
        return textSymbol.MinVisualDistance;
    };
    this.setMinVisualDistance = function (dVal) {
        textSymbol.MinVisualDistance = dVal;
    };

    /**
    * ��ȡ�������������ɼ�����
    */
    this.getMaxVisualDistance = function () {
        return textSymbol.MaxVisualDistance;
    };
    this.setMaxVisualDistance = function (dVal) {
        textSymbol.MaxVisualDistance = dVal;
    };

    /**
    * ��ȡ���������ȼ����û������������ȼ���LOD��������ʾ�����ֱ�ע��
    */
    this.getPriority = function () {
        return textSymbol.Priority;
    };
    this.setPriority = function (lVal) {
        textSymbol.Priority = lVal;
    };

    /**
    * ��ȡ�������������ɼ��߶�
    */
    this.getMaxAltitudeVisibleDistance = function () {
        return textSymbol.MaxAltitudeVisibleDistance;
    };
    this.setMaxAltitudeVisibleDistance = function (dVal) {
        textSymbol.MaxAltitudeVisibleDistance = dVal;
    };

    /**
    * ��ȡ������������С�ɼ��߶�
    */
    this.getMinAltitudeVisibleDistance = function () {
        return textSymbol.MinAltitudeVisibleDistance;
    };
    this.setMinAltitudeVisibleDistance = function (dVal) {
        textSymbol.MinAltitudeVisibleDistance = dVal;
    };
	
    /**
     * ��ȡ���������ֵ�����ģʽ
     */
    this.getLockMode=function () {
        return textSymbol.LockMode;
    };
    this.setLockMode=function (enumLockMode) {
        textSymbol.LockMode=enumLockMode;
    }
	
	 /**
    * ��ȡ���������ֵ����ű���
    */
    this.getTextScaleSize = function () {
        return textSymbol.TextScaleSize;
    };
    this.setTextScaleSize = function (dVal) {
        textSymbol.TextScaleSize = dVal;
    };
}

export function SolidSymbol() {
    var soiSys = plugin.NewSolidSymbol();

    GeometrySymbol.call(this, textSymbol);

    this.Valid = function () {
        return soiSys.isvalid;
    };

    /**
     * ��ȡ������ʵ����ɫ
     */
    this.getColor = function () {
        return soiSys.Color;
    };
    this.setColor = function (colorVal) {
        soiSys.Color = colorVal ;
    };

    /**
     * ��ȡ������ʵ��߽����
     */
    this.getBoundarySymbol = function () {
        var curveSym = soiSys.BoundarySymbol;
        if ((curveSym != null)&&(curveSym != undefined)&&(curveSym.isvalid)) {
            return new CurveSymbol(curveSym);
        }
    };
    this.setBoundarySymbol = function (curveSym) {
        if((curveSym != null)&&(curveSym != undefined)&&(curveSym.Valid())) {
            soiSys.BoundarySymbol = curveSym.getNpObject();
        }
        else{
            soiSys.BoundarySymbol = curveSym
        }
    };
}
/**
* Created by Jimmy on 2016-7-15.
* ����ǩ
*/

export function TableLabel(pVal) {
    var tableLabel = pVal;
    Renderable.call(this, pVal);

    this.Valid = function () {
        return tableLabel.isvalid;
    };

    /**
    * ��ȡ�����ñ���ǩλ��
    */
    this.getPosition = function () {
        var pVal = tableLabel.Position;
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new Point(pVal);
        }
        else{
            return null;
        }
    };
    this.setPosition = function (pointee) {
        if((pointee != null)&&(pointee != undefined)&&(pointee.Valid())) {
            tableLabel.Position = pointee.getNpObject();
        }
        else{
            tableLabel.Position = pointee;
        }
    };

    /**
    * ��ȡ����ǩ����
    */
    this.getRowCount = function () {
        return tableLabel.RowCount;
    };

    /**
    * ��ȡ����ǩ����
    */
    this.getColumnCount = function () {
        return tableLabel.ColumnCount;
    };

    /**
    * ��ȡ�����ñ���ǩ��������
    */
    this.getTitleText = function () {
        return tableLabel.TitleText;
    };
    this.setTitleText = function (sVal) {
        tableLabel.TitleText = sVal;
    };

    /**
    * ��ȡ�����ñ���ǩ���ⱳ��ɫ
    */
    this.getTitleBackgroundColor = function () {
        return tableLabel.TitleBackgroundColor;
    };
    this.setTitleBackgroundColor = function (color) {
        tableLabel.TitleBackgroundColor = color;
    };

    /**
    * ��ȡ�����ñ���ǩ����������ʽ
    */
    this.getTitleTextAttribute = function () {
        var txtAttr = tableLabel.TitleTextAttribute;
        if ((txtAttr != null)&&(txtAttr != undefined)&&(txtAttr.isvalid)) {
            return new TextAttribute(txtAttr);
        }
        else{
            return null;
        }
    };
    this.setTitleTextAttribute = function (txtAttr) {
        if((txtAttr != null)&&(txtAttr != undefined)&&(txtAttr.Valid())) {
            tableLabel.TitleTextAttribute = txtAttr.getNpObject();
        }
        else{
            tableLabel.TitleTextAttribute = txtAttr;
        }
    };

    /**
    * ��ȡ�����ñ���ǩ������߿�Ŀ���
    */
    this.getBorderWidth = function () {
        return tableLabel.BorderWidth;
    };
    this.setBorderWidth = function (fVal) {
        tableLabel.BorderWidth = fVal;
    };

    /**
    * ��ȡ�����ñ���ǩ������߿���ɫ
    */
    this.getBorderColor = function () {
        return tableLabel.BorderColor;
    };
    this.setBorderColor = function (color) {
        tableLabel.BorderColor = color;
    };

    /**
    * ��ȡ�����ñ���ǩ���񱳾�ɫ
    */
    this.getTableBackgroundColor = function () {
        return tableLabel.TableBackgroundColor;
    };
    this.setTableBackgroundColor = function (color) {
        tableLabel.TableBackgroundColor = color;
    };

    /**
    * ��ȡ�����ñ���ǩָ�����п�
    */
    this.GetColumnWidth = function (lInd) {
        return tableLabel.GetColumnWidth(lInd);
    };
    this.SetColumnWidth = function (lInd, lVal) {
        tableLabel.SetColumnWidth(lInd, lVal);
    };

    /**
    * ��ȡ�����ñ���ǩָ���е�������ʽ
    */
    this.GetColumnTextAttribute = function (lInd) {
        var txtAttr = tableLabel.GetColumnTextAttribute(lInd);
        if ((txtAttr != null)&&(txtAttr != undefined)&&(txtAttr.Valid())) {
            return new TextAttribute(txtAttr);
        }
        else{
            return null;
        }
    };
    this.SetColumnTextAttribute = function (lInd, txtAttr) {
        if((txtAttr != null)&&(txtAttr != undefined)&&(txtAttr.Valid())) {
            tableLabel.SetColumnTextAttribute(lInd, txtAttr.getNpObject());
        }
        else{
            tableLabel.SetColumnTextAttribute(lInd, txtAttr);
        }
    };

    /**
    * ��ȡ�����ñ���ǩ��������
    */
    this.GetRecord = function (nRow, nCol) {
        return tableLabel.GetRecord (nRow, nCol);
    };
    this.SetRecord = function (nRow, nCol, sVal) {
        tableLabel.SetRecord (nRow, nCol, sVal);
    };

	/**
    * ��ȡ�����ñ���ͼƬ�ļ���֧������·���� 
    */
    this.getBackgroundImageName = function () {
        return tableLabel.BackgroundImageName;
    };
    this.setBackgroundImageName = function (sVal) {
        tableLabel.BackgroundImageName = sVal;
    };
	
    /**
     * ������󶨵�ĳ���˶�·����
     * @param   {MotionPath}  pMotionPath
     * @param   {Vector3}     pVec
     * @param   {double}  dHeadingOffset
     * @param   {double}  dPitchOffset
     * @param   {double}  dRollOffset
     * @return  void
     */
    this.Bind = function (pMotionPath, pVec, dHeadingOffset, dPitchOffset, dRollOffset) {
        var pMotionPathUse = null;
        if((pMotionPath != null)&&(pMotionPath != undefined)&&(pMotionPath.Valid())){
            pMotionPathUse = pMotionPath.getNpObject();
        }
        else{
            pMotionPathUse = pMotionPath;
        }
        var pVecUse = null;
        if((pVec != null)&&(pVec != undefined)&&(pVec.Valid())){
            pVecUse = pVec.getNpObject();
        }
        else{
            pVecUse = pVec;
        }
        tableLabel.Bind(pMotionPathUse, pVecUse, dHeadingOffset, dPitchOffset, dRollOffset);
    };
	
	/**
     * ������󶨵�ĳ���˶�·����
     */
    this.Bind2 = function (pDynamicObject, pVec, dHeadingOffset, dPitchOffset, dRollOffset) {
        var pDynamicObjectUse = null;
        if((pDynamicObject != null)&&(pDynamicObject != undefined)&&(pDynamicObject.Valid())){
            pDynamicObjectUse = pDynamicObject.getNpObject();
        }
        else{
            pDynamicObjectUse = pDynamicObject;
        }
        var pVecUse = null;
        if((pVec != null)&&(pVec != undefined)&&(pVec.Valid())){
            pVecUse = pVec.getNpObject();
        }
        else{
            pVecUse = pVec;
        }
        tableLabel.Bind2(pDynamicObjectUse, pVecUse, dHeadingOffset, dPitchOffset, dRollOffset);
    };

    /**
     * ��ȡMotionable�󶨵���MotionPath��GUID
     * @return  {GUID}
     */
    this.GetMotionPathID = function () {
        return tableLabel.GetMotionPathID();
    };

    /**
     * ��ĳ���˶�·���Ͻ�󶨵�ǰ����
     * @return  void
     */
    this.Unbind = function () {
        tableLabel.Unbind();
    };
	
	
}
/**
* Created by Administrator on 2016-9-1.
* ����
*/

export function Terrain(pVal) {
    var terrain = null;
    if (pVal == null) {
        terrain = plugin.Terrain;
    }
    else
        terrain = pVal;

    RenderObject.call(this, terrain);

    this.Valid = function () {
        return terrain.isvalid;
    };

    /**
    * ���������ȡ�����õ����Ƿ�ɼ���Ĭ��ֵΪtrue
    */
    this.getVisibleMask = function () {
        return terrain.VisibleMask;
    };
    this.setVisibleMask = function (enumViewportMask) {
        terrain.VisibleMask = enumViewportMask;
    };

    /**
    * ��ȡ�����õ���͸�������ԣ�0-1֮�䣬0Ϊ��ȫ͸����1Ϊ��ȫ��͸����
    */
    this.getOpacity = function () {
        return terrain.Opacity;
    };
    this.setOpacity = function (dVal) {
        terrain.Opacity = dVal;
    };

    /**
    * �жϵ����Ƿ���ע��
    */
    this.getIsRegistered = function () {
        return terrain.IsRegistered;
    };

    /**
    * ��ȡ�Ƿ���ƽ����Σ�Ĭ��ֵΪtrue��������ֻ��
    */
    this.getIsPlanarTerrain = function () {
        return terrain.IsPlanarTerrain;
    };

    /**
    * ���������ȡ������DEM�Ƿ���ã�Ĭ��ֵΪtrue
    */
    this.getDemAvailable = function () {
        return terrain.DemAvailable;
    };
    this.setDemAvailable = function (bVal) {
        terrain.DemAvailable = bVal;
    };

    /**
    * ��ȡ��ע���������Դ��WKT�ַ�����δע�᷵�ؿ��ַ���
    */
    this.GetWKT = function () {
        return terrain.GetWKT();
    };

    /**
    * ��ȡ���л���ǰ����Ӱ��
    */
    this.getDomLayer = function () {
        return terrain.DomLayer;
    };
    this.setDomLayer = function (bytVal) {
        terrain.DomLayer = bytVal;
    };
	
	/**
    * ��ȡ������Ϣ
    */
    this.getConnectInfo = function () {
        return terrain.ConnectInfo;
    };

    /**
    * ��ȡָ��λ�ø߳�
    */
    this.GetElevation = function (dLonOrX, dLatOrX, vrstarGetElevationType, nViewID) {
        return terrain.GetElevation(dLonOrX, dLatOrX, vrstarGetElevationType, nViewID);
    };

    /**
    * ע���������Դ
    */
    this.Register = function (strLayerPath, strPassword, strCurrentWorkspaceWKT) {
        return terrain.Register(strLayerPath, strPassword, strCurrentWorkspaceWKT);
    };

    /**
    * ע����������Դ
    */
    this.Unregister = function () {
        return terrain.Unregister();
    };

    /**
    * ��ȡ��ǰ����Ӱ�����
    */
    this.GetDomLayerCount = function () {
        return terrain.GetDomLayerCount();
    };

    /**
    * �ɵ���ص��δ�
    */
    this.FlyTo = function () {
        return terrain.FlyTo();
    };

    this.ShowTerrainHole = function (pGeometry,dDepth,sSide,sBottom,bDisperse,dMit,dPitch) {
        if((pGeometry != null)&&(pGeometry != undefined)&&(pGeometry.Valid())){
            return terrain.ShowTerrainHole(pGeometry.getNpObject(),dDepth,sSide,sBottom,bDisperse,dMit,dPitch);
        }
        else{
            return terrain.ShowTerrainHole(pGeometry,dDepth,sSide,sBottom,bDisperse,dMit,dPitch);
        }
    };

    this.getHoleGUID = function () {
        return terrain.HoleGUID;
    };
}
/**
* Created by Jimmy on 2016-7-15.
* �����ڶ�
*/

export function TerrainHole(pVal) {
    Renderable.call(this, pVal);
    var terrainHole = pVal;

    this.Valid = function () {
        return terrainHole.isvalid;
    };

    /**
    * ��ȡ�����õ����ڶ�����˳��
    */
    this.getDrawOrder = function () {
        return terrainHole.DrawOrder;
    };
    this.setDrawOrder = function (lVal) {
        terrainHole.DrawOrder = lVal;
    };

    /**
    * ��ȡ�����õ����ڶ�����η�Χ
    */
    this.getPolygon = function () {
        var pVal = terrainHole.Polygon;
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new Polygon(pVal);
        }
        else{
            return null;
        }
    };
    this.setPolygon = function (pPolygon) {
        if((pPolygon != null)&&(pPolygon != undefined)&&(pPolygon.Valid())) {
            terrainHole.Polygon = pPolygon.getNpObject();
        }
        else{
            terrainHole.Polygon = pPolygon
        }
    };
}
/**
* Created by Jimmy on 2016-7-15.
* ��������
*/

export function TerrainRoute(pVal) {
    RenderObject.call(this, pVal);
    var terrainRoute = pVal;

    this.Valid = function () {
        return terrainRoute.isvalid;
    };

    /**
    * ��ȡ�Ƿ����ڵ�����Ƶ
    */
    this.getIsExporting = function () {
        return terrainRoute.IsExporting;
    };

    /**
    * ��ȡ����������Ƿ��Զ�ѭ������
    */
    this.getAutoRepeat = function () {
        return terrainRoute.AutoRepeat;
    };
    this.setAutoRepeat = function (bVal) {
        terrainRoute.AutoRepeat = bVal;
    };
	
	/**
    * ��ȡ�����ö�����������ϵ��wkt
    */
    this.getCrsWKT = function () {
        return terrainRoute.CrsWKT;
    };
    this.setCrsWKT = function (sCrsWKT) {
        terrainRoute.CrsWKT = sCrsWKT;
    };
	
	/**
    * ��ȡ�����ö�����������ͼ����ʱֻ֧��"tga jpg png"���ָ�ʽͼƬ
    */
    this.getSlideImageName = function () {
        return terrainRoute.SlideImageName;
    };
    this.setSlideImageName = function (sSlideImageName) {
        terrainRoute.SlideImageName = sSlideImageName;
    };
	
	/**
    * ��ȡ·���ڵ����
    */
    this.getWaypointsNumber = function () {
        return terrainRoute.WaypointsNumber;
    };
	
	/**
    * Ϊ�������������µ�·���ڵ�
    */
    this.AddWaypoint = function (pVector, pEulerAngle , dSpeed) {
        var pVectorUse = null;
        if((pVector != null)&&(pVector != undefined)&&(pVector.Valid())){
            pVectorUse = pVector.getNpObject();
        }
        else{
            pVectorUse = pVector;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        terrainRoute.AddWaypoint(pVectorUse, pEulerAngleUse, dSpeed);
    };
	
	/**
    * Ϊ�������������µ�·���ڵ�
    */
    this.AddWaypoint2 = function (pPoint, pEulerAngle , dSpeed) {
        var pPointUse = null;
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pPointUse = pPoint.getNpObject();
        }
        else{
            pPointUse = pPoint;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        terrainRoute.AddWaypoint2(pPointUse, pEulerAngleUse, dSpeed);
    };
	
	/**
    * ͨ������������Ϣ���Ӷ��������Ľڵ�
    */
    this.AddWaypointByMatrix = function (pMat, dSpeed) {
        if((pMat != null)&&(pMat != undefined)&&(pMat.Valid())){
            terrainRoute.AddWaypointByMatrix(pMat.getNpObject(), dSpeed);
        }
        else{
            terrainRoute.AddWaypointByMatrix(pMat, dSpeed);
        }
    };
	
	/**
    * ����ΪXml�ַ���
    */
    this.AsXml = function () {
        return terrainRoute.AsXml();
    };
	
	/**
    * ����ΪXml�ļ�
    */
    this.AsXmlFile = function (strXmlFile) {
        return terrainRoute.AsXmlFile(strXmlFile);
    };

    /**
    * ��ȡ����������Ƿ��Զ�ѭ������
    */
    this.ExportVideo = function (strFilePath, nFPS) {
        return terrainRoute.ExportVideo(strFilePath, nFPS);
    };

    /**
    * ȡ��������Ƶ
    */
    this.CancelExport = function () {
        terrainRoute.CancelExport();
    };
	
	/**
    * ɾ��ָ��·���ڵ�
    */
    this.DeleteWaypoint = function (index) {
        terrainRoute.DeleteWaypoint(index);
    };
	
	/**
    * ��xml����
    */
    this.FromXml = function (strXml) {
        return terrainRoute.FromXml(strXml);
    };
	
	/**
    * ��ȡһ��·���ڵ��������Ϣ
    */
    this.GetWaypoint = function (lIndex) {
        var operateRes = terrainRoute.GetWaypoint(lIndex);
        var pVector3Res = null;
        var pVector3Use = operateRes.Position;
        if ((pVector3Use != null) && (pVector3Use != undefined) && (pVector3Use.isvalid)) {
            pVector3Res = new Vector3(pVector3Use);
        }
        else {
            pVector3Res = null;
        }
        var pAngleRes = null;
        var pAngleResUse = operateRes.Angle;
        if ((pAngleResUse != null) && (pAngleResUse != undefined) && (pAngleResUse.isvalid)) {
            pAngleRes = new EulerAngle(pAngleResUse);
        }
        else {
            pAngleRes = null;
        }
        var dSpeed = operateRes.Speed;
        var bResultValue = operateRes.ResultValue;
        return new GetWaypointTerParameter(pVector3Res, pAngleRes, dSpeed, bResultValue);
    };
    function GetWaypointTerParameter(pVector3Res, pAngleRes, dSpeed, bResultValue) {
        this.Position = pVector3Res;
        this.Angle = pAngleRes;
        this.Speed = dSpeed;
        this.ResultValue = bResultValue;
    }
	
	/**
    * ��ȡһ��·���ڵ��������Ϣ
    */
    this.GetWaypoint2 = function (lIndex) {
        var operateRes = terrainRoute.GetWaypoint2(lIndex);
        var pVector3Res = null;
        var pVector3Use = operateRes.Position2;
        if ((pVector3Use != null) && (pVector3Use != undefined) && (pVector3Use.isvalid)) {
            pVector3Res = new Point(pVector3Use);
        }
        else {
            pVector3Res = null;
        }
        var pAngleRes = null;
        var pAngleResUse = operateRes.Angle;
        if ((pAngleResUse != null) && (pAngleResUse != undefined) && (pAngleResUse.isvalid)) {
            pAngleRes = new EulerAngle(pAngleResUse);
        }
        else {
            pAngleRes = null;
        }
        var dSpeed = operateRes.Speed;
        var bResultValue = operateRes.ResultValue;
        return new GetWaypointTer2Parameter(pVector3Res, pAngleRes, dSpeed, bResultValue);
    };
    function GetWaypointTer2Parameter(pVector3Res, pAngleRes, dSpeed, bResultValue) {
        this.Position = pVector3Res;
        this.Angle = pAngleRes;
        this.Speed = dSpeed;
        this.ResultValue = bResultValue;
    }
	
	/**
    * ��ȡĳ��λ�õ�Waypoint
    */
    this.GetWaypointByMatrix = function (lIndex) {
        var operateRes = terrainRoute.GetWaypointByMatrix(lIndex);
        var pMatrixRes = null;
        var pMatrixUse = operateRes.Matrix;
        if ((pMatrixUse != null) && (pMatrixUse != undefined) && (pMatrixUse.isvalid)) {
            pMatrixRes = new Matrix(pMatrixUse);
        }
        else {
            pMatrixRes = null;
        }
        var dSpeed = operateRes.Speed;
        var bResultValue = operateRes.ResultValue;
        return new GetWaypointTerByMatrix(pMatrixRes, dSpeed, bResultValue);
    };
    function GetWaypointTerByMatrix(pMatrixRes, dSpeed, bResultValue) {
        this.Matrix = pMatrixRes;
        this.Speed = dSpeed;
        this.ResultValue = bResultValue;
    }
	
	/**
    * ��ָ��λ��Ϊ������������һ���µ�·���ڵ�
    */
    this.InsertWaypoint = function (lIndex, pVector3, pEulerAngle, dSpeed) {
        var pVector3Use = null;
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            pVector3Use = pVector3.getNpObject();
        }
        else{
            pVector3Use = pVector3;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        return terrainRoute.InsertWaypoint(lIndex, pVector3Use, pEulerAngleUse, dSpeed);
    };
	
	/**
    * ��ָ��λ��Ϊ������������һ���µ�·���ڵ�
    */
    this.InsertWaypoint2 = function (lIndex, pPoint , pEulerAngle, dSpeed) {
        var pPointUse = null;
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pPointUse = pPoint.getNpObject();
        }
        else{
            pPointUse = pPoint;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        return terrainRoute.InsertWaypoint2(lIndex, pPointUse, pEulerAngleUse, dSpeed);
    };
	
	/**
    * ��ĳ��λ�ò���Waypoint 
    */
    this.InsertWaypointByMatrix = function (lIndex, pMatrix, dSpeed) {
        var pMatrixUse = null;
        if((pMatrix != null)&&(pMatrix != undefined)&&(pMatrix.Valid())){
            pMatrixUse = pMatrix.getNpObject();
        }
        else{
            pMatrixUse = pMatrix;
        }
        return terrainRoute.InsertWaypointByMatrix(lIndex, pMatrixUse, dSpeed);
    };
	
	/**
    * �޸Ķ���������·���ڵ�
    */
    this.ModifyWaypoint = function (lIndex, pVector3, pEulerAngle, dSpeed) {
        var pVector3Use = null;
        if((pVector3 != null)&&(pVector3 != undefined)&&(pVector3.Valid())){
            pVector3Use = pVector3.getNpObject();
        }
        else{
            pVector3Use = pVector3;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        return terrainRoute.ModifyWaypoint(lIndex, pVector3Use, pEulerAngleUse, dSpeed);
    };
	
	/**
    * ��ָ��λ��Ϊ������������һ���µ�·���ڵ�
    */
    this.ModifyWaypoint2 = function (lIndex, pPoint , pEulerAngle, dSpeed) {
        var pPointUse = null;
        if((pPoint != null)&&(pPoint != undefined)&&(pPoint.Valid())){
            pPointUse = pPoint.getNpObject();
        }
        else{
            pPointUse = pPoint;
        }
        var pEulerAngleUse = null;
        if((pEulerAngle != null)&&(pEulerAngle != undefined)&&(pEulerAngle.Valid())){
            pEulerAngleUse = pEulerAngle.getNpObject();
        }
        else{
            pEulerAngleUse = pEulerAngle;
        }
        return terrainRoute.ModifyWaypoint2(lIndex, pPointUse, pEulerAngleUse, dSpeed);
    };
	
	/**
    * �޸�ĳ��λ�õ�Waypoint
    */
    this.ModifyWaypointByMatrix = function (lIndex, pMatrix, dSpeed) {
        var pMatrixUse = null;
        if((pMatrix != null)&&(pMatrix != undefined)&&(pMatrix.Valid())){
            pMatrixUse = pMatrix.getNpObject();
        }
        else{
            pMatrixUse = pMatrix;
        }
        return terrainRoute.ModifyWaypointByMatrix(lIndex, pMatrixUse, dSpeed);
    };

    /**
    * ����
    */
    this.Play = function () {
        return terrainRoute.Play();
    };

    /**
    * ��ͣ
    */
    this.Pause = function () {
        return terrainRoute.Pause();
    };

    /**
    * ֹͣ
    */
    this.Stop = function () {
        return terrainRoute.Stop();
    };
}

/**
* Created by Jimmy on 2016-8-9.
* �ı�����
*/

export function TextAttribute(pVal) {
    var textAttribute = null;
    if (pVal == null) {
        textAttribute = plugin.NewTextAttribute();
    }
    else
        textAttribute = pVal;

    this.getNpObject = function () {
        return textAttribute;
    };

    this.Valid = function () {
        return textAttribute.isvalid;
    };
    /**
    * ��ȡ��������������
    */
    this.getFont = function () {
        return textAttribute.Font;
    };
    this.setFont = function (sVal) {
        textAttribute.Font = sVal;
    };

    /**
    * ��ȡ���������ִ�С
    */
    this.getTextSize = function () {
        return textAttribute.TextSize;
    };
    this.setTextSize = function (lVal) {
        textAttribute.TextSize = lVal;
    };

    /**
    * ��ȡ������������ɫ
    */
    this.getColor = function () {
        return textAttribute.Color;
    };
    this.setColor = function (color) {
        textAttribute.Color = color;
    };

    /**
    * �жϻ����������Ƿ��ô���
    */
    this.getBold = function () {
        return textAttribute.Bold;
    };
    this.setBold = function (bVal) {
        textAttribute.Bold = bVal;
    };

    /**
    * �жϻ����������Ƿ�ʹ��б��
    */
    this.getItalic = function () {
        return textAttribute.Italic;
    };
    this.setItalic = function (bVal) {
        textAttribute.Italic = bVal;
    };

    /**
    * �жϻ����������Ƿ�ʹ���»���
    */
    this.getUnderline = function () {
        return textAttribute.Underline;
    };
    this.setUnderline = function (bVal) {
        textAttribute.Underline = bVal;
    };

    /**
    * ��ȡ�������ı����ж��뷽ʽ
    */
    this.getMultilineJustification = function () {
        return textAttribute.MultilineJustification;
    };
    this.setMultilineJustification = function (sVal) {
        textAttribute.MultilineJustification = sVal;
    };

    /**
    * ��ȡ�������������ֱ���ɫ
    */
    this.getBackgroundColor = function () {
        return textAttribute.BackgroundColor;
    };
    this.setBackgroundColor = function (color) {
        textAttribute.BackgroundColor = color;
    };

    /**
    * ��ȡ������������������ɫ
    */
    this.getOutlineColor = function () {
        return textAttribute.OutlineColor;
    };
    this.setOutlineColor = function (color) {
        textAttribute.OutlineColor = color;
    };
}
/**
* Created by Jimmy on 2016-7-18.
* �ı���Ⱦ��
*/

export function TextRender(pVal) {
    var textRender = pVal;

    this.getNpObject = function () {
        return textRender;
    };

    this.Valid = function () {
        return textRender.isvalid;
    };

    /**
    * ��ȡ�ı���Ⱦ����Ⱦ����
    */
    this.getRenderType = function () {
        return textRender.RenderType;
    };
    this.setRenderType = function (enumRenderType) {
        textRender.RenderType = enumRenderType;
    };

    /**
    * ��ȡ�������ı���Ⱦ���������ݱ���ʽ
    */
    this.getExpression = function () {
        return textRender.Expression;
    };
    this.setExpression = function (bVal) {
        textRender.Expression = bVal;
    };
}

/**
* Created by Jimmy on 2016-8-30.
* �ı���Ⱦ��
*/
export function SimpleTextRender(pVal) {
    var simpleTextRender = null;
    if (pVal == null) {
        simpleTextRender = plugin.NewSimpleTextRender();
    }
    else
        simpleTextRender = pVal;
    TextRender.call(this, simpleTextRender);

    this.Valid = function () {
        return simpleTextRender.isvalid;
    };

    /**
    * ��ȡ������������ʾ���
    */
    this.getSymbol = function () {
        var pVal = simpleTextRender.Symbol;
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new TextSymbol(pVal);
        }
        else{
            return null;
        }
    };
    this.setSymbol = function (textSymbol) {
        if((textSymbol != null)&&(textSymbol != undefined)&&(textSymbol.Valid())) {
            simpleTextRender.Symbol = textSymbol.getNpObject();
        }
        else{
            simpleTextRender.Symbol = textSymbol
        }
    };
}

/**
* Created by Jimmy on 2016-8-30.
* ��ר���������Ⱦ��
*/
export function ValueMapTextRender(pVal) {
    var valueMapTextRender = null;
    if (pVal == null) {
        valueMapTextRender = plugin.NewValueMapTextRender();
    }
    else
        valueMapTextRender = pVal;
    TextRender.call(this, valueMapTextRender);

    this.Valid = function () {
        return valueMapTextRender.isvalid;
    };

    /**
    * ��ȡ��������Ⱦ��������
    */
    this.getSchemeCount = function () {
        return valueMapTextRender.SchemeCount;
    };
    this.setSchemeCount = function (lVal) {
        valueMapTextRender.SchemeCount = lVal;
    };

    /**
    * ����һ����Ⱦ����
    */
    this.AddScheme = function (txtrRenSch) {
        if((txtrRenSch != null)&&(txtrRenSch != undefined)&&(txtrRenSch.Valid())) {
            valueMapTextRender.AddScheme(txtrRenSch.getNpObject());
        }
        else{
            valueMapTextRender.AddScheme(txtrRenSch);
        }
    };

    /**
    * ���������Ⱦ����
    */
    this.ClearSchemes = function () {
        valueMapTextRender.ClearSchemes();
    };

    /**
    * ��ȡָ����Ⱦ����
    */
    this.GetScheme = function (lInd) {
        var txtrRenSch = valueMapTextRender.GetScheme(lInd);
        if ((txtrRenSch != null)&&(txtrRenSch != undefined)&&(txtrRenSch.isvalid)) {
            return new TextRenderScheme(txtrRenSch);
        }
        else{
            return null;
        }
    };
}
/**
* Created by Jimmy on 2016-8-30.
* �ı���Ⱦ����
*/

export function TextRenderScheme(pVal) {
    var textRenderScheme = null;
    if (pVal == null) {
        textRenderScheme = plugin.NewTextRenderScheme();
    }
    else
        textRenderScheme = pVal;

    this.getNpObject = function () {
        return textRenderScheme;
    };

    this.Valid = function () {
        return textRenderScheme.isvalid;
    };

    /**
    * ��ȡ��������Ⱦ��������
    */
    this.getRuleCount = function () {
        return textRenderScheme.RuleCount;
    };
    this.setRuleCount = function (lVal) {
        textRenderScheme.RuleCount = lVal;
    };

    /**
    * ��ȡ������������ʽ
    */
    this.getSymbol = function () {
        var pVal = textRenderScheme.Symbol;
        if ((pVal != null)&&(pVal != undefined)&&(pVal.isvalid)) {
            return new TextSymbol(pVal);
        }
        else{
            return null;
        }
    };
    this.setSymbol = function (textSymbol) {
        if((textSymbol != null)&&(textSymbol != undefined)&&(textSymbol.Valid())) {
            textRenderScheme.Symbol = textSymbol.getNpObject();
        }
        else{
            textRenderScheme.Symbol = textSymbol
        }
    };

    /**
    * ����������Ⱦ����
    */
    this.AddRule = function (renderRule) {
        if((renderRule != null)&&(renderRule != undefined)&&(renderRule.Valid())) {
            return textRenderScheme.AddRule(renderRule.getNpObject());
        }
        else{
            return textRenderScheme.AddRule(renderRule);
        }
    };

    /**
    * ����������Ⱦ����
    */
    this.ClearRules = function () {
        return textRenderScheme.ClearRules();
    };

    /**
    * ��ȡָ����Ⱦ����
    */
    this.GetRule = function (lInd) {
        var renRule = textRenderScheme.GetRule(lInd);
        if (renRule != null) {
            if (renRule.RuleType == VRStarRenderRuleType.VRStarRenderRuleRange) {
                return new RangeRenderRule(renRule);
            }
            else if (renRule.RuleType == VRStarRenderRuleType.VRStarRenderRuleUniqueValues) {
                return new UniqueValuesRenderRule(renRule);
            }
            else
                return new RenderRule(renRule);
        }
        else{
            return renRule;
        }
    };
}
/**
* Created by Jimmy on 2017-2-7.
* ��������ýӿ�
*/

export function TransformHelper(pVal) {
    var tranformHelp = null;
    if (pVal == null) {
        tranformHelp = plugin.TransformHelper;
    }
    else
        tranformHelp = pVal;

    this.getNpObject = function () {
        return tranformHelp;
    };

    this.Valid = function () {
        return tranformHelp.isvalid;
    };

    /**
    * ��������ܵ�λ��
    */
    this.setPosition = function (sVal) {
        var vec = tranformHelp.Position;
        if ((vec != null)&&(vec != undefined)&&(vec.isvalid)) {
            return new Vector3(vec);
        }
        else{
            return null;
        }
    };

    /**
    * ��ȡ�����ö���༭��ʽ
    */
    this.getEditorType = function () {
        return tranformHelp.EditorType;
    };
    this.setEditorType = function (vrstarEditorType) {
        tranformHelp.CrsWKT = vrstarEditorType;
    };
}
/**
 * �����ά��
 * @author   ch
 * @date     2019-4-28
 */
export function UIDim(npVal) {
   var uiDim = null;
	if(npVal==null || npVal==undefined){
		uiDim = plugin.NewUIDim();
	}else{
		uiDim = npVal;
	}

	this.getNpObject = function () {
        return uiDim;
    };

    this.Valid = function () {
        return uiDim.isvalid;
    };

    /**
     * ��ȡ�����þ�������ƫ��ֵ
     */
    this.getOffset = function () {
        return uiDim.Offset;
    };
    this.setOffset = function (dVal) {
        uiDim.Offset = dVal;
    };
	
	/**
     * ��ȡ�����������ά�����ֵ
     */
    this.getScale = function () {
        return uiDim.Scale;
    };
    this.setScale = function (dVal) {
        uiDim.Scale = dVal;
    };
	
	/**
     * ��ʼ��
     */
	this.Init = function (dScale,sOffset) {
        return uiDim.Init(dScale,sOffset);
    };
}
/**
 * ����λ��
 * @author   ch
 * @date     2019-4-28
 */
export function UIRect(npVal) {
   var uiRect = null;
	if(npVal==null || npVal==undefined){
		uiRect = plugin.NewUIRect();
	}else{
		uiRect = npVal;
	}

	this.getNpObject = function () {
        return uiRect;
    };

    this.Valid = function () {
        return uiRect.isvalid;
    };

    /**
     * ��ȡ���������±�λ��
     */
    this.getBottom = function () {
		var pos = uiRect.Bottom;
		if((pos != null) && (pos != undefined) && (pos.isvalid)) {
            return new UIDim(pos);
        }
        else{
            return null;
        }
    };
    this.setBottom = function (uiVal) {
		if((uiVal != null) && (uiVal != undefined) && (uiVal.Valid())) {
            uiRect.Bottom = uiVal.getNpObject();
        }
        else{
            uiRect.Bottom = uiVal;
        }
    };
	
	/**
     * ��ȡ�����þ��θ߶�
     */
    this.getHeight = function () {
		var pos = uiRect.Height;
		if((pos != null) && (pos != undefined) && (pos.isvalid)) {
            return new UIDim(pos);
        }
        else{
            return null;
        }
    };
    this.setHeight = function (uiVal) {
        if((uiVal != null) && (uiVal != undefined) && (uiVal.Valid())) {
            uiRect.Height = uiVal.getNpObject();
        }
        else{
            uiRect.Height = uiVal;
        }
    };
	
	/**
     * ��ȡ�����������λ��
     */
    this.getLeft = function () {
        var pos = uiRect.Left;
		if((pos != null) && (pos != undefined) && (pos.isvalid)) {
            return new UIDim(pos);
        }
        else{
            return null;
        }
    };
    this.setLeft = function (uiVal) {
        if((uiVal != null) && (uiVal != undefined) && (uiVal.Valid())) {
            uiRect.Left = uiVal.getNpObject();
        }
        else{
            uiRect.Left = uiVal;
        }
    };
	
	/**
     * ��ȡ���������ұ�λ��
     */
    this.getRight = function () {
        var pos = uiRect.Right;
		if((pos != null) && (pos != undefined) && (pos.isvalid)) {
            return new UIDim(pos);
        }
        else{
            return null;
        }
    };
    this.setRight = function (uiVal) {
         if((uiVal != null) && (uiVal != undefined) && (uiVal.Valid())) {
            uiRect.Right = uiVal.getNpObject();
        }
        else{
            uiRect.Right = uiVal;
        }
    };
	
	/**
     * ��ȡ���������ϱ�λ��
     */
    this.getTop = function () {
        var pos = uiRect.Top;
		if((pos != null) && (pos != undefined) && (pos.isvalid)) {
            return new UIDim(pos);
        }
        else{
            return null;
        }
    };
    this.setTop = function (dVal) {
         if((uiVal != null) && (uiVal != undefined) && (uiVal.Valid())) {
            uiRect.Top = uiVal.getNpObject();
        }
        else{
            uiRect.Top = uiVal;
        }
    };
	
	/**
     * ��ȡ�����þ��ο���
     */
    this.getWidth = function () {
         var pos = uiRect.Width;
		if((pos != null) && (pos != undefined) && (pos.isvalid)) {
            return new UIDim(pos);
        }
        else{
            return null;
        }
    };
    this.setWidth = function (dVal) {
         if((uiVal != null) && (uiVal != undefined) && (uiVal.Valid())) {
            uiRect.Width = uiVal.getNpObject();
        }
        else{
            uiRect.Width = uiVal;
        }
    };
	
	/**
     * ��ȡλ��
     */
	this.GetPosition = function () {
        var pos = uiRect.GetPosition();
		if((pos != null) && (pos != undefined) && (pos.isvalid)) {
            var X = pos.X;
            var Y = pos.Y;
            return new UIPosition(X, Y);
        }
        else{
            return null;
        }
    };
	function UIPosition(dX, dY){
        this.X = dX;
        this.Y = dY;
    }
	
	/**
     * ��ȡ����
     */
	this.GetSize = function () {
		var size = uiRect.GetSize();
		if((size != null) && (size != undefined) && (size.isvalid)) {
            var w = size.Width;
            var h = size.Height;
            return new UISize(w, h);
        }
        else{
            return null;
        }
    };
	function UISize(dWidth, dHeight){
        this.Width = dWidth;
        this.Height = dHeight;
    }
	
	/**
     * ��ʼ��
     */
	this.Init = function (dLeft,dTop,dWidth,dHeight) {
		var dLeftUse = null;
		if((dLeft != null) && (dLeft != undefined) && (dLeft.Valid())) {
            dLeftUse = dLeft.getNpObject();
        }
        else{
            dLeftUse = dLeft;
        }
		
		var dTopUse = null;
		if((dTop != null) && (dTop != undefined) && (dTop.Valid())) {
            dTopUse = dTop.getNpObject();
        }
        else{
            dTopUse = dTop;
        }
		
		var dWidthUse = null;
		if((dWidth != null) && (dWidth != undefined) && (dWidth.Valid())) {
            dWidthUse = dWidth.getNpObject();
        }
        else{
            dWidthUse = dWidth;
        }
		
		var dHeightUse = null;
		if((dHeight != null) && (dHeight != undefined) && (dHeight.Valid())) {
            dHeightUse = dHeight.getNpObject();
        }
        else{
            dHeightUse = dHeight;
        }
		
        return uiRect.Init(dLeftUse,dTopUse,dWidthUse,dHeightUse);
    };
	
	/**
     * ����λ��
     */
	this.SetPosition = function (dLeft,dTop) {
		var dLeftUse = null;
		if((dLeft != null) && (dLeft != undefined) && (dLeft.Valid())) {
            dLeftUse = dLeft.getNpObject();
        }
        else{
            dLeftUse = dLeft;
        }
		
		var dTopUse = null;
		if((dTop != null) && (dTop != undefined) && (dTop.Valid())) {
            dTopUse = dTop.getNpObject();
        }
        else{
            dTopUse = dTop;
        }
        return uiRect.SetPosition(dLeftUse,dTopUse);
    };
	
	/**
     * ���ÿ���
     */
	this.SetSize = function (dWidth,dHeight) {
		var dWidthUse = null;
		if((dWidth != null) && (dWidth != undefined) && (dWidth.Valid())) {
            dWidthUse = dWidth.getNpObject();
        }
        else{
            dWidthUse = dWidth;
        }
		
		var dHeightUse = null;
		if((dHeight != null) && (dHeight != undefined) && (dHeight.Valid())) {
            dHeightUse = dHeight.getNpObject();
        }
        else{
            dHeightUse = dHeight;
        }
        return uiRect.SetSize(dWidthUse,dHeightUse);
    };
}
/**
 * ���洰��
 * @author   ch
 * @date     2019-4-28
 */
export function UIWindow(npUIwindow) {
   this.getNpObject = function () {
        return npUIwindow;
    };

    this.Valid = function () {
        return npUIwindow.isvalid;
    };

    /**
     * ��ȡ�������Ƿ����
     */
    this.getIsDisabled = function () {
        return npUIwindow.IsDisabled;
    };
    this.setIsDisabled = function (bVal) {
        npUIwindow.IsDisabled = bVal;
    };
	
	 /**
     * ��ȡ�������Ƿ���Ӧ����¼�.��ΪTRUE������Ӧ����¼�����������ӦUI�¼�������Ĭ��ΪFLASE
     */
    this.getIsMousePassThroughEnabled = function () {
        return npUIwindow.IsMousePassThroughEnabled;
    };
    this.setIsMousePassThroughEnabled = function (bVal) {
        npUIwindow.IsMousePassThroughEnabled = bVal;
    };
	
	 /**
     * ��ȡ�������Ƿ�ɼ�
     */
    this.getIsVisible = function () {
        return npUIwindow.IsVisible;
    };
    this.setIsVisible = function (bVal) {
        npUIwindow.IsVisible = bVal;
    };
	
	 /**
     * ��ȡ�������Ƿ���ʾ�����Ϸ���ͨ����ΪFALSE�������������ά����ƵĲ㼶����
     */
    this.getIsZOrderingEnabled = function () {
        return npUIwindow.IsZOrderingEnabled;
    };
    this.setIsZOrderingEnabled = function (bVal) {
        npUIwindow.IsZOrderingEnabled = bVal;
    };
	
	 /**
     * ��ȡ�����ô������֣�������ͬ����Ψһ��־��
     */
    this.getName = function () {
        return npUIwindow.Name;
    };
    this.setName = function (strVal) {
        npUIwindow.Name = strVal;
    };
	
	/**
     * ��ȡ�����ô�������ʾ�����֡�
     */
    this.getText = function () {
        return npUIwindow.Text;
    };
    this.setText = function (strVal) {
        npUIwindow.Text = strVal;
    };
	
	/**
     * ��ȡ�����������ڴ�������ʾ����ʾ���֡�
     */
    this.getToolTipText = function () {
        return npUIwindow.ToolTipText;
    };
    this.setToolTipText = function (strVal) {
        npUIwindow.ToolTipText = strVal;
    };
	
	/**
     * ��ȡ�������͡�
     */
    this.getType = function () {
        return npUIwindow.Type;
    };
	
	/**
     * �����Ӵ���
     */
	this.AddChild = function (pWindow) {
        var pWindowUse=null;
		if((pWindow != null)&&(pWindow != undefined)&&(pWindow.Valid())){
            pWindowUse = pWindow.getNpObject();
        }
        else{
            pWindowUse = pWindow;
        }
		npUIwindow.AddChild(pWindowUse);
    };
	
	/**
     * ��ȡ�����С
     */
	this.GetArea = function () {
		var uiRect = npUIwindow.GetArea();
		if ((uiRect != null)&&(uiRect != undefined)&&(uiRect.isvalid)) {
            return new UIRect(uiRect);
        }
        else{
            return null;
        }
    };
	
	/**
     * ��ȡ���ڳߴ��С
     */
	this.GetPixelSize = function () {
		var size = npUIwindow.GetPixelSize();
		if((size != null) && (size != undefined) && (size.isvalid)) {
            var w = size.WidthPixel;
            var h = size.HeightPixel;
            return new UIPixelSize(w, h);
        }
        else{
            return null;
        }
    };
	function UIPixelSize(dWidthPixel, dHeightPixel){
        this.WidthPixel = dWidthPixel;
        this.HeightPixel = dHeightPixel;
    }
	
	/**
     * ��ȡ�û��Զ�������
     */
	this.GetUserString = function (strName) {
		var strValue = npUIwindow.GetUserString(strName);
		return strValue;
    };
	
	/**
     * �Ƴ��Ӵ���
     */
	this.RemoveChild = function (strName) {
		npUIwindow.RemoveChild(strName);
    };
	
	/**
     * ���������С
     */
	this.SetArea = function (pUIRect) {
		var pUIRectUse=null;
		if((pUIRect != null)&&(pUIRect != undefined)&&(pUIRect.Valid())){
            pUIRectUse = pUIRect.getNpObject();
        }
        else{
            pUIRectUse = pUIRect;
        }
		npUIwindow.SetArea(pUIRectUse);
    };
	
	/**
     * �����û��Զ�������
     */
	this.SetUserString = function (strName,strValue) {
		npUIwindow.SetUserString(strName,strValue);
    };
	
	/**
     * ע���¼�
     */
	this.SubscribeEvent = function (enumEventType) {
		npUIwindow.SubscribeEvent(enumEventType);
    };
	
	/**
     * ע���¼�
     */
	this.UnsubscribeEvent = function (enumEventType) {
		npUIwindow.UnsubscribeEvent(enumEventType);
    };
}

/**
 * ���ֱ�ǩ
 * @author   ch
 * @date     2019-4-28
 */
export function UIStaticLabel(npWindow) {
	 UIWindow.call(this, npWindow);
	
    /**
    * ��ȡ�����ò�����ʱ������ɫ
    */
    this.getDisabledTextColour = function () {
        return npWindow.DisabledTextColour;
    };
    this.setDisabledTextColour = function (strVal) {
        npWindow.DisabledTextColour = strVal;
    };
	
	  /**
    * ��ȡ������ˮƽ���뷽ʽ
    */
    this.getHorzFormatting = function () {
        return npWindow.HorzFormatting;
    };
    this.setHorzFormatting = function (strVal) {
        npWindow.HorzFormatting = strVal;
    };
	
	  /**
    * ��ȡ����������״̬ʱ������ɫ
    */
    this.getNormalTextColour = function () {
        return npWindow.NormalTextColour;
    };
    this.setNormalTextColour = function (strVal) {
        npWindow.NormalTextColour = strVal;
    };
	
	  /**
    * ��ȡ�����ô�ֱ���뷽ʽ
    */
    this.getVertFormatting = function () {
        return npWindow.VertFormatting;
    };
    this.setVertFormatting = function (strVal) {
        npWindow.VertFormatting = strVal;
    };
	
	/**
     * ��ȡ���ֳߴ��С
     */
	this.GetTextSize = function () {
		var size = npWindow.GetTextSize();
		if((size != null) && (size != undefined) && (size.isvalid)) {
            var w = size.Width;
            var h = size.Height;
            return new UITextSize(w, h);
        }
        else{
            return null;
        }
    };
	function UITextSize(dWidth, dHeight){
        this.Width = dWidth;
        this.Height = dHeight;
    }
}

/**
 * ͼƬ��ǩ
 * @author   ch
 * @date     2019-4-28
 */
export function UIStaticImage(npWindow) {
	 UIWindow.call(this, npWindow);

	  /**
    * ����ͼƬ
    */
    this.SetImage = function (strImageGuid) {
        npWindow.SetImage(strImageGuid);
    };
}

/**
 * ͼƬ��ť
 * @author   ch
 * @date     2019-4-28
 */
export function UIImageButton(npWindow) {
	 UIWindow.call(this, npWindow);
	 
	  /**
    * ��ȡ�����ò�����ʱ��ʾ��ͼƬ
    */
    this.getDisabledImage = function () {
        return npWindow.DisabledImage;
    };
    this.setDisabledImage = function (strVal) {
        npWindow.DisabledImage = strVal;
    };
	
	  /**
    * ��ȡ�����������ͣʱ��ʾ��ͼƬ
    */
    this.getHoverImage = function () {
        return npWindow.HoverImage;
    };
    this.setHoverImage = function (strVal) {
        npWindow.HoverImage = strVal;
    };
	
	  /**
    * ��ȡ����������״̬ʱ��ʾ��ͼƬ
    */
    this.getNormalImage = function () {
        return npWindow.NormalImage;
    };
    this.setNormalImage = function (strVal) {
        npWindow.NormalImage = strVal;
    };
	
	  /**
    * ��ȡ�����ð���ʱ��ʾ��ͼƬ
    */
    this.getPushedImage = function () {
        return npWindow.PushedImage;
    };
    this.setPushedImage = function (strVal) {
        npWindow.PushedImage = strVal;
    };
}

/**
 * ���ְ�ť
 * @author   ch
 * @date     2019-4-28
 */
export function UITextButton(npWindow) {
	 UIWindow.call(this, npWindow);
}


/**
 * UI����ؼ������ӿ�
 * @author   Jimmy
 * @date     2016-7-6
 */
 function UIWindowManager(npUIWindowManager){
	this.getNpObject = function () {
        return npUIWindowManager;
    };

    this.Valid = function () {
        return npUIWindowManager.isvalid;
    };
	
	  /**
    * ������
    */
    this.getUIRootWindow = function () {
        var uiWindow = npUIWindowManager.UIRootWindow;
		if((uiWindow != null) && (uiWindow != undefined) && (uiWindow.isvalid)) {
            return new UIWindow(uiWindow);
        }
        else{
            return null;
        }
    };
	
	  /**
    * ����ͼƬ��ť
    */
    this.CreateImageButton = function () {
        var uiWindow = npUIWindowManager.CreateImageButton();
		if((uiWindow != null) && (uiWindow != undefined) && (uiWindow.isvalid)) {
            return new UIImageButton(uiWindow);
        }
        else{
            return null;
        }
    };
	
	  /**
    * ���ļ�·������ͼƬ��Դ
    */
    this.CreateImageFromFile = function (strImageFileName) {
        var strValue = npUIWindowManager.CreateImageFromFile(strImageFileName);
		return strValue;
    };
	
	  /**
    * ���ڴ��д���ͼƬ��Դ
    */
    this.CreateImageFromMemory = function (pBinaryBuffer,dImageWidth,dImageHeight) {
		var pBinaryBufferUse = null;
        if ((pBinaryBuffer != null)&&(pBinaryBuffer != undefined)&&(pBinaryBuffer.Valid())) {
            pBinaryBufferUse = pBinaryBuffer.getNpObject();
        }
        else{
            pBinaryBufferUse = pBinaryBuffer;
        }
        var strValue = npUIWindowManager.CreateImageFromMemory(pBinaryBufferUse,dImageWidth,dImageHeight);
		return strValue;
    };
	
	  /**
    * ����ͼƬ��ǩ
    */
    this.CreateStaticImage = function () {
        var uiWindow = npUIWindowManager.CreateStaticImage();
		if((uiWindow != null) && (uiWindow != undefined) && (uiWindow.isvalid)) {
            return new UIStaticImage(uiWindow);
        }
        else{
            return null;
        }
    };
	
	  /**
    * �������ֱ�ǩ
    */
    this.CreateStaticLabel = function () {
        var uiWindow = npUIWindowManager.CreateStaticLabel();
		if((uiWindow != null) && (uiWindow != undefined) && (uiWindow.isvalid)) {
            return new UIStaticLabel(uiWindow);
        }
        else{
            return null;
        }
    };
	
	 /**
    * �������ְ�ť
    */
    this.CreateTextButton = function () {
        var uiWindow = npUIWindowManager.CreateTextButton();
		if((uiWindow != null) && (uiWindow != undefined) && (uiWindow.isvalid)) {
            return new UITextButton(uiWindow);
        }
        else{
            return null;
        }
    };
	
	  /**
    * ����������Դ
    */
    this.CreateUIFont = function (dFontSize,strFontFilePath) {
        var strValue = npUIWindowManager.CreateUIFont(dFontSize,strFontFilePath);
		return strValue;
    };
	
	 /**
    * ��������
    */
    this.CreateUIWindow = function () {
        var uiWindow = npUIWindowManager.CreateUIWindow();
		if((uiWindow != null) && (uiWindow != undefined) && (uiWindow.isvalid)) {
            return new UIWindow(uiWindow);
        }
        else{
            return null;
        }
    };
	
	 /**
    * ɾ��ͼƬ��Դ
    */
    this.DeleteImage = function (strImageGuid) {
        npUIWindowManager.DeleteImage(strImageGuid);
    };
	
	 /**
    * ɾ��������Դ
    */
    this.DeleteUIFont = function (strUIFontGuid) {
        npUIWindowManager.DeleteUIFont(strImageGuid);
    };
	
	 /**
    * �������д���
    */
    this.DestroyAllWindows = function () {
        npUIWindowManager.DestroyAllWindows();
    };
	
	 /**
    * ����ָ������
    */
    this.DestroyWindow = function (pWindowToDel) {
	var pWindowToDelUse = null;
        if ((pWindowToDel != null)&&(pWindowToDel != undefined)&&(pWindowToDel.Valid())) {
            pWindowToDelUse = pWindowToDel.getNpObject();
        }
        else{
            pWindowToDelUse = pWindowToDel;
        }
        npUIWindowManager.DestroyWindow(pWindowToDelUse);
    };
}

/**
 * UI�¼�
 * @author   Jimmy
 * @date     2016-7-6
 */
 function UIEventArgs(npUIEventArgs){
	this.getNpObject = function () {
        return npUIEventArgs;
    };

    this.Valid = function () {
        return npUIEventArgs.isvalid;
    };
}

/**
 * UI�����¼�
 * @author   Jimmy
 * @date     2016-7-6
 */
 function IUIWindowEventArgs(npUIEventArgs){
	 UIEventArgs.call(this, npUIEventArgs);

   /**
    * ��ȡ�����¼��Ĵ��ڶ���
    */
    this.getUIEventWindow = function () {
	    var pWindow = npUIEventArgs.UIEventWindow;
        if ((pWindow != null)&&(pWindow != undefined)&&(pWindow.isvalid)) {
            return new UIWindow(pWindow);
        }
        else{
            return null
        }
        
    };
}

/**
 * UI���ڵ�����¼�
 * @author   Jimmy
 * @date     2016-7-6
 */
 function UIMouseEventArgs(npUIEventArgs){
	 IUIWindowEventArgs.call(this, npUIEventArgs);

	 /**
    * ��ȡ��갴�µļ�����
    */
    this.getButtonType = function () {
	    var enumValue = npUIEventArgs.ButtonType;
        return enumValue;
    };
	
	/**
    * ��ȡ���������
    */
    this.getClickCount = function () {
	    var nValue = npUIEventArgs.ClickCount;
        return nValue;
    };
	
	/**
    * ��ȡ���λ���ƶ���ֵ
    */
    this.getMoveDelta = function () {
	    var arrayValue = npUIEventArgs.MoveDelta;
        return arrayValue;
    };
	
	/**
    * ��ȡ���λ��
    */
    this.getPosition = function () {
	    var arrayValue = npUIEventArgs.Position;
        return arrayValue;
    };
	
	/**
    * ��ȡ�����ͬʱ���µļ��̰���
    */
    this.getSysKeys = function () {
	    var nValue = npUIEventArgs.SysKeys;
        return nValue;
    };
	
	/**
    * ��ȡ�����ֲ�ֵ
    */
    this.getWheelChange = function () {
	    var nValue = npUIEventArgs.WheelChange;
        return nValue;
    };
}/**
* Created by Jimmy on 2016-9-1.
* �ӿ�
*/

export function Viewport(pVal) {
    var viewport = null;
    if (pVal == null) {
        viewport = plugin.ViewPort;
    }
    else{
		viewport = pVal;
	}   

    this.getNpObject = function () {
        return viewport;
    };

    this.Valid = function () {
        return viewport.isvalid;
    };

    /**
    * ��ȡ������Logo�Ŀɼ�������
    */
    this.getLogoVisible = function () {
        return viewport.LogoVisible;
    };
    this.setLogoVisible = function (bVal) {
        viewport.LogoVisible = bVal;
    };

    /**
    * ��ȡ��������ͼģʽ
    */
    this.getViewportMode = function () {
        return viewport.ViewportMode;
    };
    this.setViewportMode = function (enumViewportMode) {
        viewport.ViewportMode = enumViewportMode;
    };

    /**
    * ��ȡ����������󶨱��
    */
    this.getCameraViewBindMask = function () {
        return viewport.CameraViewBindMask;
    };
    this.setCameraViewBindMask = function (enumViewportMask) {
        viewport.CameraViewBindMask = enumViewportMask;
    };

    /**
    * ��ȡ�����û��ͼ
    */
    this.getActiveView = function () {
        return viewport.ActiveView;
    };
    this.setActiveView = function (lVal) {
        viewport.ActiveView = lVal;
    };
	
	/**
    * �ӿڱ߿��Ƿ���ʾ
    */
    this.getShowBorderLine = function () {
        return viewport.ShowBorderLine;
    };
    this.setShowBorderLine = function (bVal) {
        viewport.ShowBorderLine = bVal;
    };
}
/**
* Created by Jimmy on 2017-2-6.
* ���ӻ�������֧�ֶ��ӿ�
*/

export function VisualAnalysis(visAna) {

    this.getNpObject = function () {
        return visAna;
    };

    this.Valid = function () {
        return visAna.isvalid;
    };

    /**
    * ��������ڵ���
    */
    this.ClearOccluder = function () {
        visAna.ClearOccluder();
    };

    /**
    * �����ڵ��Ŀǰֻ֧��modelpoint
    */
    this.AddOccluder = function (FeaLayer, pGeo) {
        var FeaLayerUse = null;
        if((FeaLayer != null)&&(FeaLayer != undefined)&&(FeaLayer.Valid())){
            FeaLayerUse = FeaLayer.getNpObject();
        }
        else{
            FeaLayerUse = FeaLayer;
        }
        var pGeoUse = null;
        if((pGeo != null)&&(pGeo != undefined)&&(pGeo.Valid())){
            pGeoUse = pGeo.getNpObject();
        }
        else{
            pGeoUse = pGeo;
        }
        visAna.AddOccluder(FeaLayerUse, pGeoUse);
    };

    /**
    * �������շ������Ƽ�ʹ��ISunConfig::EnableShadow����ʵʱ��Ӱ
    */
    this.StartShadowAnalyse = function () {
        visAna.StartShadowAnalyse();
    };

    /**
    * ��������������Ƽ�ʹ��ITerrainVideoʵ��������ʵʱ���������
    */
    this.StartViewshedAnalyse = function (point1, point2, HorizontalAngle) {
        var point1Use = null;
        if((point1 != null)&&(point1 != undefined)&&(point1.Valid())){
            point1Use = point1.getNpObject();
        }
        else{
            point1Use = point1;
        }
        var point2Use = null;
        if((point2 != null)&&(point2 != undefined)&&(point2.Valid())){
            point2Use = point2.getNpObject();
        }
        else{
            point2Use = point2;
        }
        visAna.StartViewshedAnalyse(point1Use, point2Use, HorizontalAngle);
    };

    /**
    * ֹͣ����������Ӧ��������occluder
    */
    this.StopAnalyse = function () {
        visAna.StopAnalyse();
    };

    /**
    * �����ڵ��Ŀǰֻ֧��modelpoint
    */
    this.AddOccluder2 = function (Geo) {
        visAna.AddOccluder2(Geo.getNpObject());
    };

    /**
    *  �����������ͼ�� 
    */
    this.AddFlowLayer = function (FeaLayer, sFlowField, Image) {
        var FeaLayerUse = null;
        if((FeaLayer != null)&&(FeaLayer != undefined)&&(FeaLayer.Valid())){
            FeaLayerUse = FeaLayer.getNpObject();
        }
        else{
            FeaLayerUse = FeaLayer;
        }
        var ImageUse = null;
        if((Image != null)&&(Image != undefined)&&(Image.Valid())){
            ImageUse = Image.getNpObject();
        }
        else{
            ImageUse = Image;
        }
        visAna.AddFlowLayer(FeaLayerUse, sFlowField, ImageUse);
    };

    /**
    * �Ƴ��������ͼ��
    */
    this.RemoveFlowLayer = function (FeaLayer) {
        if((FeaLayer != null)&&(FeaLayer != undefined)&&(FeaLayer.Valid())) {
            visAna.RemoveFlowLayer(FeaLayer.getNpObject());
        }
        else{
            visAna.RemoveFlowLayer(FeaLayer);
        }
    };

    /**
    * ����������ͼ��
    */
    this.ClearFlowLayers = function () {
        visAna.ClearFlowLayers();
    };

    /**
    * �����������
    */
    this.StartFlowAnalyse = function () {
        visAna.StartFlowAnalyse();
    };
}
/**
 * Created by zzz on 2018-10-22.
 * �������������������ά��������Ƕҳ�洰�����в����Ķ���
 */

export function WindowParam(obj) {

    var windowParam = obj;

    this.getNpObject = function () {
        return windowParam;
    };

    this.Valid = function () {
        return windowParam.isvalid;
    };

     /**
     * ��ȡ�����õ������ڹرհ�ť�Ƿ���á�����ȡֵΪfalseʱ���رհ�ť�ûҡ���MinButtonVisibleͬʱ��Ϊfalseʱ��ͬʱ������󻯡���С�����رհ�ť��ֻ������������ 
     */
    this.getCloseButtonEnabled = function () {
            return windowParam.CloseButtonEnabled;
    };
    this.setCloseButtonEnabled = function (bButtonEnabled) {
            windowParam.CloseButtonEnabled= bButtonEnabled;
    };
	
	 /**
     * ��ȡ�����ô���Ҫ��ʾ����ҳ�ĵ�ַ��
     */
    this.getFilePath = function () {
            return windowParam.FilePath;
    };
    this.setFilePath = function (strFilePath) {
            windowParam.FilePath= strFilePath;
    };
	
	 /**
     * ���������Ƿ���ʾ��������
     */
    this.getHastitle = function () {
            return windowParam.Hastitle;
    };
    this.setHastitle = function (bHastitle) {
            windowParam.Hastitle= bHastitle;
    };
	
	 /**
     * �����������ʱ�Ƿ��Զ����ش��ڣ�Ҫ��WinId���ܵ���0���� 
     */
    this.getHideOnClick = function () {
            return windowParam.HideOnClick;
    };
    this.setHideOnClick = function (bHideOnClick) {
            windowParam.HideOnClick = bHideOnClick;
    };
	
	/**
     * ��ȡ�������Ƿ�������ҳ��ĵ������ڡ�Ĭ��Ϊtrue������������������ҳ��ģ����洰���ƶ������ᱻ�±�ǩҳ�ڵ��� 
     */
    this.getIsPopupWindow = function () {
            return windowParam.IsPopupWindow;
    };
    this.setIsPopupWindow = function (bIsPopupWindow) {
            windowParam.IsPopupWindow = bIsPopupWindow;
    };
	
	/**
     *��ȡ�����õ���������С����ť�Ƿ�ɼ�������ȡֵΪfalseʱ��ͬʱ������󻯡���С����ť��ֻ�����رհ�ť����CloseButtonEnabledͬʱ��Ϊfalseʱ��ͬʱ������󻯡���С�����رհ�ť��ֻ������������ 
     */
    this.getMinButtonVisible = function () {
            return windowParam.MinButtonVisible;
    };
    this.setMinButtonVisible = function (bMinButtonVisible) {
            windowParam.MinButtonVisible = bMinButtonVisible;
    };
	
	/**
     *��ȡ�����ô�������Ļ�е���߾ࣨ�����ά�������Ͻǣ���  
     */
    this.getOffsetX = function () {
            return windowParam.OffsetX;
    };
    this.setOffsetX = function (lOffsetX) {
            windowParam.OffsetX = lOffsetX;
    };
	
	/**
     *��ȡ�����ô�������Ļ�е��ϱ߾ࣨ�����ά�������Ͻǣ���   
     */
    this.getOffsetY = function () {
            return windowParam.OffsetY;
    };
    this.setOffsetY = function (lOffsetY) {
            windowParam.OffsetY = lOffsetY;
    };
	
	/**
     *��ȡ�����ô�����ʾ��λ�á�   
     */
    this.getPosition = function () {
            return windowParam.Position;
    };
    this.setPosition = function (bVal) {
            windowParam.Position = bVal;
    };
	
	/**
     *�ڴ�������ʱ������ResetOnHideȡֵ������ִ����Ӧ������  
     */
    this.getResetOnHide = function () {
            return windowParam.ResetOnHide;
    };
    this.setResetOnHide = function (strResetOnHide) {
            windowParam.ResetOnHide = strResetOnHide;
    };
	
	/**
     *��ȡ�������Ƿ�֧����ק�߸ı��С��Ĭ��Ϊtrue�� 
     */
    this.getResizable = function () {
            return windowParam.Resizable;
    };
    this.setResizable = function (bResizable) {
            windowParam.Resizable = bResizable;
    };
	
	/**
     *��ȡ������λͼ��ַ�������Ǳ����ļ����߷������ļ��������Ը����ṩ��λͼ�����ò�����Ĵ��塣
     */
    this.getRgnTemplateFile = function () {
            return windowParam.RgnTemplateFile ;
    };
    this.setRgnTemplateFile = function (strRgnTemplateFile) {
            windowParam.RgnTemplateFile = strRgnTemplateFile;
    };
	
	/**
     *��rgnTemplateFile���Խ��ʹ�ã�������ȡ������Ҫ͸�����ֵ���ɫֵ,��ʽ0x000000(RGB)��Ĭ��ȡֵ0�� 
     */
    this.getRgnTransparentColor = function () {
            return windowParam.RgnTransparentColor;
    };
    this.setRgnTransparentColor = function (uRgnTransparentColor) {
            windowParam.RgnTransparentColor = uRgnTransparentColor;
    };
	
	/**
     *��ȡ�����ô����ĸ��ǵ�Բ���ȣ�ֵԽ��ԽԲ�������Ϊ-1�����Ǳ�׼���Ρ� 
     */
    this.getRound = function () {
            return windowParam.Round;
    };
    this.setRound = function (lRound) {
            windowParam.Round = lRound;
    };
	
	/**
     *���������Ƿ���ʾ�� 
     */
    this.getShowWindow = function () {
            return windowParam.ShowWindow;
    };
    this.setShowWindow = function (bShowWindow) {
            windowParam.ShowWindow = bShowWindow;
    };
	
	/**
     *��ȡ�����ô��ڵĿ��ȡ�  
     */
    this.getSizeX = function () {
            return windowParam.SizeX;
    };
    this.setSizeX = function (lSizeX) {
            windowParam.SizeX = lSizeX;
    };
	
	/**
     *��ȡ�����ô��ڵĸ߶ȡ�  
     */
    this.getSizeY = function () {
            return windowParam.SizeY;
    };
    this.setSizeY= function (lSizeY) {
            windowParam.SizeY = lSizeY;
    };
    
     /**
     *���������Ƿ���ǰ��Ĭ��Ϊtrue��ֻ����isPopupWindow��Ϊtrue������²���Ч�� 
     */
    this.getTopMost = function () {
            return windowParam.TopMost;
    };
    this.setTopMost = function (bTopMost) {
            windowParam.TopMost = bTopMost;
    };
	
	/**
     *��ȡ�����ô���͸���ȡ�ֵ��0~255��0��ȫ͸����255��ȫ��͸����   
     */
    this.getTransparence = function () {
            return windowParam.Transparence;
    };
    this.setTransparence= function (btTransparence) {
            windowParam.Transparence = btTransparence;
    };
	
	/**
     *��ȡ������Ϊ�ô�������ID��  
     */
    this.getWinId = function () {
            return windowParam.WinId;
    };
    this.setWinId= function (lWinId) {
            windowParam.WinId = lWinId;
    };
}/**
 * ��ͼ�飨������ͼ��Ԫ���ϣ�
 * pValΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-06-16
 */

export function Group(pVal){
    var group = null;
    if (pVal == null) {
        group = plugin.NewGroup();
    }
    else
        group = pVal;

    this.getNpObject = function () {
        return group;
    };

    this.Valid = function () {
        return group.isvalid;
    };

    /**
     * ��ȡPrimitive����
     * @return {long}
     */
    this.getPrimitiveCount = function(){
        return group.PrimitiveCount;
    };

    /**
     * �ж��Ƿ�Ϊ����
     * @return {boolean}
     */
    this.getIsEmpty = function(){
          return group.IsEmpty;
    };

    /**
    * ��ȡ������Primitive����
    * @param {long} lVal
    * @return {long}
    */
    this.getCompleteMapFactor = function(){
        return group.CompleteMapFactor;
    };
    this.setCompleteMapFactor = function(lVal){
        group.CompleteMapFactor = lVal;
    };

    /**
    * ��ȡ������CompleteMap��ͼ��
    * @param {string} sVal
    * @return {string}
    */
    this.getCompleteMapTextureName = function(){
        return group.CompleteMapTextureName;
    };
    this.setCompleteMapTextureName = function (sVal) {
        group.CompleteMapTextureName = sVal;
    };

    /**
    * ��ȡ�����ú決��ͼ��
    * @param {string} sVal
    * @return {string}
    */
    this.getLightMapTextureName = function(){
        return group.LightMapTextureName;
    };
    this.setLightMapTextureName = function (sVal) {
        group.LightMapTextureName = sVal;
    };

    /**��ȡָ��λ�õĻ�ͼ��Ԫ��Ԫ��ֵ
    * @param  ����λ��{int} nIndex
    * @param {Primitive} pPrimitive
    * @return {Primitive}
    */
    this.GetPrimitive = function (lIndex) {
        var pPrimitive = group.GetPrimitive(lIndex);
        if ((pPrimitive != null)&&(pPrimitive != undefined)&&(pPrimitive.isvalid)) {
            return new Primitive(pPrimitive);
        }
        else{
            return null;
        }
    };
    this.SetPrimitive = function (nIndex, pPrimitive) {
        if((pPrimitive != null)&&(pPrimitive != undefined)&&(pPrimitive.Valid())){
            group.SetPrimitive(nIndex, pPrimitive.getNpObject());
        }
        else{
            group.SetPrimitive(nIndex, pPrimitive);
        }
    };

    /**
     * �����м�����Ƶ�Ԫ
     * @param {Primitive} pPrimitive
     * @return {boolean}
     */
    this.AddPrimitive = function (pPrimitive) {
        if((pPrimitive != null)&&(pPrimitive != undefined)&&(pPrimitive.Valid())){
            return group.AddPrimitive(pPrimitive.getNpObject());
        }
        else{
            return group.AddPrimitive(pPrimitive);
        }
    };

    /**
     * ��ָ������λ�ú����Primitive
     * @param  ����λ��{int} iIndex
     * @param {Primitive} pPrimitive
     * @return {boolean}
     */
    this.InsertPrimitive = function (iIndex, pPrimitive) {
        if((pPrimitive != null)&&(pPrimitive != undefined)&&(pPrimitive.Valid())){
            return group.InsertPrimitive(iIndex, pPrimitive.getNpObject());
        }
        else{
            return group.InsertPrimitive(iIndex, pPrimitive);
        }
    };

    /**
     * ɾ��ָ������λ�ÿ�ʼ(����)��iCount�����Ƶ�Ԫ
     * @param ����λ��{int} iIndex
	 * @param ����{int}     iCount
     * @return {boolean}
     */
    this.RemovePrimitive = function (iIndex, iCount) {
        return group.RemovePrimitive(iIndex, iCount);
    };

    /**
     * ���
     */
    this.ClearPrimitives = function () {
        group.ClearPrimitives();
    };

    /**
     * ���¼��㷨���������淨�߼��㣬�����Ҫ���ƹ������ֹ⻬�Ķ��㷨��ֻ���Լ�����
     */
    this.ComputeNormal = function () {
        group.ComputeNormal();
    }
}
/**
* ͼ��
* pValΪ����Ĳ���
* @author   Jimmy
* @date     2016-06-17
*/

export function Image(image) {
    this.getNpObject = function () {
        return image;
    };

    this.Valid = function () {
        return image.isvalid;
    };

    /**
    * ͼ��Ŀ�����λ���أ�������2����
    * @return {long}
    */
    this.getWidth = function () {
        return image.Width;
    };

    /**
    * ͼ��ĸߣ���λ���أ�������2����
    * @return {long}
    */
    this.getHeight = function () {
        return image.Height;
    };

    /**
    * �洢��ʽ
    * @return {VRStarImageFormat}
    */
    this.getFormat = function () {
        return image.Format;
    };

    /**
    * ͼ������
    * @return {VRStarImageType}
    */
    this.getImageType = function () {
        return image.ImageType;
    };

    /**
    * ����֡�ĸ���
    * @return {long}
    */
    this.getFrameNumber = function () {
        return image.FrameNumber;
    };

    /**
    * ��ȡ����������֡���ż��
    * @param {long} lVal
    * @return {long}
    */
    this.getFrameInterval = function () {
        return image.FrameInterval;
    };
    this.setFrameInterval = function (lVal) {
        image.FrameInterval = lVal;
    };

    /**
    * �Ƿ����͸��ͨ��
    * @return {boolean}
    */
    this.getHasAlpha = function () {
        return image.HasAlpha;
    };

    /**
    * д���ļ�
    * @param {string} sFileName
    * @return {boolean}
    */
    this.WriteFile = function (sFileName) {
        return image.WriteFile(sFileName);
    };

    /**
    * ת��ͼƬ��ʽ
    * @param {VRStarImageFormat} enumVal
    */
    this.ConvertFormat = function (enumVal) {
        image.ConvertFormat(enumVal);
    };

    /**
    * ���л��ɶ���������
    * @return {BinaryBuffer} pBinarysResult
    */
    this.AsBinary = function () {
        var pBinarysResult = image.AsBinary();
        if ((pBinarysResult != null)&&(pBinarysResult != undefined)&&(pBinarysResult.isvalid)) {
            return new BinaryBuffer(pBinarysResult);
        }
        else{
            return null;
        }
    };
	
	    /**
    * ���л��ɶ���������
    * @return {BinaryBuffer} pBinarysResult
    */
    this.AsBinary2 = function () {
        var pBinarysResult = image.AsBinary2();
        if ((pBinarysResult != null)&&(pBinarysResult != undefined)&&(pBinarysResult.isvalid)) {
            return new BinaryBuffer(pBinarysResult);
        }
        else{
            return null;
        }
    };

    /**
    * ��ֱ��ת
    */
    this.Flip = function () {
        image.Flip();
    };

    /**
    * ���߸���Сһ�������4*4���� 
    */
    this.DownSize = function () {
        image.DownSize();
    };

    /**
     * ͼ������
     */
    this.ReSize = function (iWidth,iHeight,enumFilter,enumCodec) {
        image.ReSize(iWidth,iHeight,enumFilter,enumCodec);
    };
}/**
 * ����
 * pValΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-06-16
 */

export function Material(pVal){
    var material = null;
    if (pVal == null) {
        material = plugin.NewMaterial();
    }
    else
        material = pVal;

    this.getNpObject = function () {
        return material;
    };

    this.Valid = function(){
        return material.isvalid;
    };

    /**
     * ��ȡ�����ñ����޳�ģʽ
     * @param {VRStarCullMode} emunVal
     * @return {VRStarCullMode}
     */
    this.getCullFaceMode = function(){
        return material.CullFaceMode;
    };
    this.setCullFaceMode = function (emunVal) {
        material.CullFaceMode = emunVal;
    };

    /**
     * ��ȡ��������������ɫ
     * @param {long} colorlVal
     * @return {long}
     */
    this.getDiffuseColor = function(){
        return material.DiffuseColor;
    };
    this.setDiffuseColor = function(colorlVal){
        material.DiffuseColor = colorlVal;
    };

    /**
     * ��ȡ�������Ƿ�ʹ�û�ϲ���
     * @param {boolean} bVal
     * @return {boolean}
     */
    this.getEnableBlend = function(){
        return material.EnableBlend;
    };
    this.setEnableBlend = function(bVal){
        material.EnableBlend = bVal;
    };

    /**
     * ��ȡ�������Ƿ�ʹ�ù���
     * @param {boolean} bVal
     * @return {boolean}
     */
    this.getEnableLight = function(){
        return material.EnableLight;
    };
    this.setEnableLight = function (bVal) {
        material.EnableLight = bVal;
    };

    /**
     * ��ȡ�����þ��淴�����ɫ
     * @param {long} colorlVal
     * @return {long}
     */
    this.getSpecularColor = function(){
        return material.SpecularColor;
    };
    this.setSpecularColor = function (colorlVal) {
        material.SpecularColor = colorlVal;
    };

    /**
     * ��ȡ��������������
     * @param {string} sVal
     * @return {string}
     */
    this.getTextureName = function(){
        return material.TextureName;
    };
    this.setTextureName = function(sVal){
        material.TextureName = sVal;
    };

    /**
     * ��ȡ����S����ģʽ
     * @param {VRStarTextureWrapMode} enumVal
     * @return {VRStarTextureWrapMode}
     */
    this.getSTextureWrapMode = function(){
        return material.STextureWrapMode;
    };
    this.setSTextureWrapMode = function (enumVal) {
        material.STextureWrapMode = enumVal;
    };

    /**
     * ��ȡ����T����ģʽ
     * @param {VRStarTextureWrapMode} enumVal
     * @return {VRStarTextureWrapMode}
     */
    this.getTTextureWrapMode = function(){
        return material.TTextureWrapMode;
    };
    this.setTTextureWrapMode = function (enumVal) {
        material.TTextureWrapMode = enumVal;
    };
}
/**
* ��άģ�ͣ����Ա�ModelPoint����
* modelΪ����Ĳ���
* @author   Jimmy
* @date     2016-06-17
*/

export function Model(model) {

    this.getNpObject = function () {
        return model;
    };

    this.Valid = function () {
        return model.isvalid;
    };

    /**
    * ��ȡģ�͵������
    * @return {Envelope} pEnvelopeRes
    */
    this.getEnvelope = function () {
        var pEnvelopeRes = model.Envelope;
        if ((pEnvelopeRes != null)&&(pEnvelopeRes != undefined)&&(pEnvelopeRes.isvalid)) {
            return new Envelope(pEnvelopeRes);
        }
        else{
            return null;
        }
    };

    /**
    * ��ȡ��άģ�͵Ļ��������
    * @return {long}
    */
    this.getGroupCount = function () {
        return model.GroupCount;
    };

    /**
    * �ж���άģ�͵Ļ������Ƿ�Ϊ����
    * @return {boolean}
    */
    this.getIsEmpty = function () {
        return model.IsEmpty;
    };

    /**
     * ��ȡ������ָ����ͼ��
     * @param  ����λ��{int} nIndex
     * @param {Group} pGroup
     * @return {Group} pGroupRes
     */
    this.GetGroup = function (nIndex) {
        var pGroupRes = model.GetGroup(nIndex);
        if ((pGroupRes != null)&&(pGroupRes != undefined)&&(pGroupRes.isvalid)) {
            return new Group(pGroupRes);
        }
        else{
            return null;
        }
    };
    this.SetGroup = function (nIndex, pGroup) {
        if((pGroup != null)&&(pGroup != undefined)&&(pGroup.Valid())){
            model.SetGroup(nIndex, pGroup.getNpObject());
        }
        else{
            model.SetGroup(nIndex, pGroup);
        }
    };

    /**
    * ��ȡģ�����õ���ͼ��
    * @return {SAFEARRAY}
    */
    this.getImageNames = function () {
        return model.ImageNames;
    };

    /**
     * ��ȡ������ת��������
     * @param {long} lVal
     * @return {long}
     */
    this.getSwitchSize = function () {
        return model.SwitchSize;
    };
    this.setSwitchSize = function (lVal) {
        model.SwitchSize = lVal;
    };

    /**
     * ���ӻ�ͼ��
     * @param {Group} pGroup
     * @return {long}
     */
    this.AddGroup = function (pGroup) {
        if((pGroup != null)&&(pGroup != undefined)&&(pGroup.Valid())){
            return model.AddGroup(pGroup.getNpObject());
        }
        else{
            return model.AddGroup(pGroup);
        }
    };

    /**
     * ��ָ����������������
     * @param  ����λ��{int} iIndex
     * @param {Group} pGroup
     * @return {boolean}
     */
    this.InsertGroup = function (iIndex, pGroup) {
        if((pGroup != null)&&(pGroup != undefined)&&(pGroup.Valid())){
            return model.InsertGroup(iIndex, pGroup.getNpObject());
        }
        else{
            return model.InsertGroup(iIndex, pGroup);
        }
    };

    /**
     * �Ƴ�ָ�����������nCount��������
     * @param ����λ��{int}  iIndex
	 * @param ����{int}     iCount
     * @return {boolean}
     */
    this.RemoveGroup = function (iIndex, iCount) {
        return model.RemoveGroup(iIndex, iCount);
    };

    /**
     * ��ջ�ͼ�鼯��
     */
    this.ClearGroups = function () {
        model.ClearGroups();
    };

    /**
    * ���л��ɶ���������
    * @return {BinaryBuffer}
    */
    this.AsBinary = function () {
        var pBinary = model.AsBinary();
        if ((pBinary != null)&&(pBinary != undefined)&&(pBinary.isvalid)) {
            return new BinaryBuffer(pBinary);
        }
        else{
            return null;
        }
    };

    /**
    * д���ļ�
    * @param {string} sFileName
    * @param {PropertyCollection } pPropertys
    */
    this.WriteFile = function (sFileName, pPropertys) {
        if((pPropertys != null)&&(pPropertys != undefined)&&(pPropertys.Valid())){
            model.WriteFile(sFileName, pPropertys.getNpObject());
        }
        else{
            model.WriteFile(sFileName, pPropertys);
        }
    };
}/**
 * ��ͼ��Ԫ
 * pValΪ����Ĳ���
 * @author   Jimmy
 * @date     2016-06-17
 */

export function Primitive(pVal) {
    var primitive = null;
    if (pVal == null) {
        primitive = plugin.NewPrimitive();
    }
    else
        primitive = pVal;

    this.getNpObject = function () {
        return primitive;
    };

    this.Valid = function () {
        return primitive.isvalid;
    };

    /**
     * ��ȡ�����ú決�������꼯��
     * @param  {FloatCollection} pFloats
     * @return {FloatCollection}
     */
    this.getBakedTexcoordArray = function () {
        var pFloats = primitive.BakedTexcoordArray;
        if ((pFloats != null)&&(pFloats != undefined)&&(pFloats.isvalid)) {
            return new FloatCollection(pFloats);
        }
        else{
            return null;
        }
    };
    this.setBakedTexcoordArray = function (pFloats) {
        if((pFloats!=null)&&(pFloats!=undefined)&&(pFloats.Valid())){
            primitive.BakedTexcoordArray = pFloats.getNpObject();
        }
        else{
            primitive.BakedTexcoordArray = pFloats;
        }
    };

    /**
     * ��ȡ��������ɫ����
     * @param  {UInt32Collection} pUInt32s
     * @return {UInt32Collection}
     */
    this.getColorArray = function () {
        var pUInt32s = primitive.ColorArray;
        if ((pUInt32s != null)&&(pUInt32s != undefined)&&(pUInt32s.isvalid)) {
            return new UInt32Collection(pUInt32s);
        }
        else{
            return null;
        }
    };
    this.setColorArray = function (pUInt32s) {
        if((pUInt32s!=null)&&(pUInt32s!=undefined)&&(pUInt32s.Valid())){
            primitive.ColorArray = pUInt32s.getNpObject();
        }
        else{
            primitive.ColorArray = pUInt32s;
        }
    };

    /**
     * ��ȡ��������������
     * @param  {UInt16Collection} pUInt16s
     * @return {UInt16Collection}
     */
    this.getIndexArray = function () {
        var pUInt16s = primitive.IndexArray;
        if ((pUInt16s != null)&&(pUInt16s != undefined)&&(pUInt16s.isvalid)) {
            return new UInt16Collection(pUInt16s);
        }
        else{
            return null;
        }
    };
    this.setIndexArray = function (pUInt16s) {
        if((pUInt16s!=null)&&(pUInt16s!=undefined)&&(pUInt16s.Valid())){
            primitive.IndexArray = pUInt16s.getNpObject();
        }
        else{
            primitive.IndexArray = pUInt16s;
        }
    };

    /**
    * ��ȡ�����ò���
    * @param  {Material} pMaterial
    * @return {Material}
    */
    this.getMaterial = function () {
        var pMaterial = primitive.Material;
        if ((pMaterial != null)&&(pMaterial != undefined)&&(pMaterial.isvalid)) {
            return new Material(pMaterial);
        }
        else{
            return null;
        }
    };
    this.setMaterial = function (pMaterial) {
        if((pMaterial!=null)&&(pMaterial!=undefined)&&(pMaterial.Valid())){
            primitive.Material = pMaterial.getNpObject();
        }
        else{
            primitive.Material = pMaterial;
        }
    };

    /**
     * ��ȡ�����÷��߼���
     * @param  {FloatCollection} pFloats
     * @return {FloatCollection}
     */
    this.getNormalArray = function () {
        var pFloats = primitive.NormalArray;
        if ((pFloats != null)&&(pFloats != undefined)&&(pFloats.isvalid)) {
            return new FloatCollection(pFloats);
        }
        else{
            return null;
        }
    };
    this.setNormalArray = function (pFloats) {
        if((pFloats!=null)&&(pFloats!=undefined)&&(pFloats.Valid())){
            primitive.NormalArray = pFloats.getNpObject();
        }
        else{
            primitive.NormalArray = pFloats;
        }
    };

    /**
     * ��ȡ�������������꼯��
     * @param  {FloatCollection} pFloats
     * @return {FloatCollection}
     */
    this.getTexcoordArray = function(){
        var pFloats = primitive.TexcoordArray;
        if ((pFloats != null)&&(pFloats != undefined)&&(pFloats.isvalid)) {
            return new FloatCollection(pFloats);
        }
        else{
            return null;
        }
    };
    this.setTexcoordArray = function (pFloats) {
        if((pFloats!=null)&&(pFloats!=undefined)&&(pFloats.Valid())){
            primitive.TexcoordArray = pFloats.getNpObject();
        }
        else{
            primitive.TexcoordArray = pFloats;
        }
    };

    /**
     * ��ȡ�����ö��㼯��
     * @param  {FloatCollection} pFloats
     * @return {FloatCollection}
     */
    this.getVertexArray = function(){
        var pFloats = primitive.VertexArray;
        if ((pFloats != null)&&(pFloats != undefined)&&(pFloats.isvalid)) {
            return new FloatCollection(pFloats);
        }
        else{
            return null;
        }
    };
    this.setVertexArray = function (pFloats) {
        if((pFloats!=null)&&(pFloats!=undefined)&&(pFloats.Valid())){
            primitive.VertexArray = pFloats.getNpObject();
        }
        else{
            primitive.VertexArray = pFloats;
        }
    };

    /**
     * ��ȡ�����û���ģʽ�������������桢�ߡ�������ģʽ��
     * @param  {VRStarPrimitiveMode} emunPrimitiveMode
     * @return {VRStarPrimitiveMode}
     */
    this.getMode = function(){
        return primitive.Mode;
    };
    this.setMode = function (emunPrimitiveMode) {
        primitive.Mode = emunPrimitiveMode;
    };

    /**
     * ��ȡ�����û�ͼ��Ԫ����
     * @param  {VRStarPrimitiveType} emunPrimitiveType
     * @return {VRStarPrimitiveType}
     */
    this.getPrimitiveType = function(){
        return primitive.PrimitiveType;
    };
    this.setPrimitiveType = function (emunPrimitiveType) {
        primitive.PrimitiveType = emunPrimitiveType;
    }
}
/**
* ��Դ����
* @author   Jimmy
* @date     2016-06-17
*/

export function ResourceFactory() {
    var resourceFactory = plugin.ResourceFactory;

    /**
    * ���ļ�����ͼ�񣨲�֧��HTTP����·�� ��
    * @param  {string} sPathName
    * @return {Image} pImage
    */
    this.CreateImageFromFile = function (sPathName) {
        var pImage = resourceFactory.CreateImageFromFile(sPathName);
        if ((pImage != null)&&(pImage != undefined)&&(pImage.isvalid)) {
            return new Image(pImage);
        }
        else{
            return null;
        }
    };

    /**
    * ����һ����ģ��
    * @return {Model} pModel
    */
    this.CreateModel = function () {
        var pModel = resourceFactory.CreateModel();
        if ((pModel != null)&&(pModel != undefined)&&(pModel.isvalid)) {
            return new Model(pModel);
        }
        else{
            return null;
        }
    };

    /**
    * ���ļ�����ģ�ͣ�ͬʱ����Model����ص�Image����
    * @param  {string} sModelFilePathName
    * @return {PropertyCollection} pPropertysMid
    * @return {Model} pModelMid
    * @return {Matrix} pMatrixMid
    */
    this.CreateModelAndImageFromFile = function (sModelFilePathName) {
        var operateRes = resourceFactory.CreateModelAndImageFromFile(sModelFilePathName);
        if((operateRes != null)&&(operateRes != undefined)) {
            var pPropertysMid = operateRes.ImagePropertyArray;
            var pPropertyRes = null;
            if ((pPropertysMid != null) && (pPropertysMid != undefined) && (pPropertysMid.isvalid)) {
                pPropertyRes = new PropertyCollection(pPropertysMid);
            }
            else {
                return null;
            }
            var pModelMid = operateRes.Model;
            var pModelRes = null;
            if ((pModelMid != null) && (pModelMid != undefined) && (pModelMid.isvalid)) {
                pModelRes = new Model(pModelMid);
            }
            else {
                return null;
            }
            var pMatrixMid = operateRes.Matrix;
            var pMatrixRes = null;
            if ((pMatrixMid != null) && (pMatrixMid != undefined) && (pMatrixMid.isvalid)) {
                pMatrixRes = new Matrix(pMatrixMid);
            }
            else {
                return null;
            }
            return new CreateModelAndImageFromsFileParameter(pPropertyRes, pModelRes, pMatrixRes);
        }
        else {
            return null
        }
    };
    function CreateModelAndImageFromsFileParameter(pPropertyRes,pModelRes,pMatrixRes){
        this.ImagePropertyArray = pPropertyRes;
        this.Model = pModelRes;
        this.Matrix = pMatrixRes;
    }

    /**
     * ����CreateModelAndImageFromFile��ͬʱ�Զ����ɼ�ģ
     * @param  {string} sModelFilePathName
     * @return {PropertyCollection} pPropertysMid
     * @return {Model} pModelMid
     * @return {Model} pSimplifiedModelMid
     * @return {Matrix} pMatrixMid
     */
    this.CreateModelAndImageFromFileEx = function (sModelFilePathName) {
        var operateRes = resourceFactory.CreateModelAndImageFromFileEx(sModelFilePathName);
        if((operateRes != null)&&(operateRes != undefined)) {
            var pPropertysMid = operateRes.ImagePropertyArray;
            var pPropertyRes = null;
            if ((pPropertysMid != null) && (pPropertysMid != undefined) && (pPropertysMid.isvalid)) {
                pPropertyRes = new PropertyCollection(pPropertysMid);
            }
            else {
                return null;
            }
            var pModelMid = operateRes.Model;
            var pModelRes = null;
            if ((pModelMid != null) && (pModelMid != undefined) && (pModelMid.isvalid)) {
                pModelRes = new Model(pModelMid);
            }
            else {
                return null;
            }
            var pSimplifiedModelMid = operateRes.SimplifiedModel;
            var pSimplifiedModelRes = null;
            if ((pSimplifiedModelMid != null) && (pSimplifiedModelMid != undefined) && (pSimplifiedModelMid.isvalid)) {
                pSimplifiedModelRes = new Model(pSimplifiedModelMid);
            }
            else {
                return null;
            }
            var pMatrixMid = operateRes.Matrix;
            var pMatrixRes = null;
            if ((pMatrixMid != null) && (pMatrixMid != undefined) && (pMatrixMid.isvalid)) {
                pMatrixRes = new Matrix(pMatrixMid);
            }
            else {
                return null;
            }
            return new CreateModelAndImageFromFileExParameter(pPropertyRes, pModelRes, pSimplifiedModelRes, pMatrixRes);
        }
        else {
            return null
        }
    };
    function CreateModelAndImageFromFileExParameter(pPropertyRes,pModelRes,pSimplifiedModelRes,pMatrixRes){
        this.ImagePropertyArray = pPropertyRes;
        this.Model = pModelRes;
        this.SimplifiedModel = pSimplifiedModelRes;
        this.Matrix = pMatrixRes;
    }

    /**
    * ���ݶ��������ݴ���ͼ��
    * @param  {BinaryBuffer} pBinaryBuffer 
    * @return {Image} pImage
    */
    this.CreateImageFromBinary = function (pBinaryBuffer) {
        var pImage = null;
        if((pBinaryBuffer != null)&&(pBinaryBuffer != undefined)&&(pBinaryBuffer.Valid())){
            pImage = resourceFactory.CreateImageFromBinary(pBinaryBuffer.getNpObject());
        }
        else{
            pImage = resourceFactory.CreateImageFromBinary(pBinaryBuffer);
        }
        if ((pImage != null)&&(pImage != undefined)&&(pImage.isvalid)) {
            return new Image(pImage);
        }
        else{
            return null;
        }
    };

    /**
    * ���ݶ��������ݴ���ģ��
    * @param  {BinaryBuffer} pBinaryBuffer 
    * @return {Model} pModel
    */
    this.CreateModelFromBinary = function (pBinaryBuffer) {
        var pModel = null;
        if((pBinaryBuffer != null)&&(pBinaryBuffer != undefined)&&(pBinaryBuffer.Valid())){
            pModel = resourceFactory.CreateModelFromBinary(pBinaryBuffer.getNpObject());
        }
        else{
            pModel = resourceFactory.CreateModelFromBinary(pBinaryBuffer);
        }
        if ((pModel != null)&&(pModel != undefined)&&(pModel.isvalid)) {
            return new Model(pModel);
        }
        else{
            return null;
        }
    };

    /**
    * �ֿ�ͼ��ϲ������ڸ����ͼ
    * @param  {string} sFilesPath
    * @param  {string} sSaveFilefullPath
    * @return {boolean}
    */
    this.CombineImages = function (sFilesPath, sSaveFilefullPath) {
        return resourceFactory.CombineImages(sFilesPath, sSaveFilefullPath);
    };

    /**
    * ���ûص������ڻ�ȡͼ��ϲ���չ��������߷ֿ��������ǰ�����Ŀ��������� 
    * @param  {string} sOnCombineProcessing
    */
    this.setOnCombineProcessing = function (sOnCombineProcessing) {
        resourceFactory.OnCombineProcessing = sOnCombineProcessing;
    };
	 /**
    * ���ûص������ڻ�ȡͼ��ϲ���չ��������߷ֿ��������ǰ�����Ŀ��������� 
    * @param  sOnCombineProcessing
    */
    this.setOnCombineProcessing2 = function (OnCombineProcessing) {
        resourceFactory.OnCombineProcessing2 = OnCombineProcessing;
    };
}