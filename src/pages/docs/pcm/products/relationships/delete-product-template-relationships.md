---
id: delete-product-template-relationships
title: Delete Product-template Relationships
sidebar_label: Delete Product-Template Relationships
---

## `DELETE` Delete Product-template Relationships

```http
https://api.moltin.com/pcm/products/:productId/relationships/templates
```
<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/pcm/products/14e055d0-eebb-4090-8594-a0a7aeea2151/relationships/templates \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": [
            {
            "type": "template",
            "id": "string"
            }
        ]
     }'
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `productId` | Required | `string` | The unique identifier of the product. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

**Body**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | The type of the resource object. You must use `template`. |
| `id` | Required | `string` | The unique identifier of the template. |

<!--END_DOCUSAURUS_CODE_TABS-->

This request deletes relationships between the specified product and the templates.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Response -PCM -->

`204 No Content`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->
